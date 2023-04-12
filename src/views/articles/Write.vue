<template>
  <div id="Write">
    <div class="write__title">
      <input type="text" placeholder="输入标题">
    </div>
    <div class="write__edit">
      <div style="border: 1px solid #ccc;height: 100%;display: flex;flex-direction: column;">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            :mode="mode"
        />
        <Editor
            style="overflow-y: hidden;"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="handleCreated"
        />
      </div>
    </div>
    <div class="write__upload">
      <button @click="uploadArticle">上传文章</button>
    </div>
  </div>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import {onBeforeUnmount, ref, shallowRef, onMounted} from 'vue'
import {Editor, Toolbar} from '@wangeditor/editor-for-vue'
import {setArticle} from '@/api/articles'
import {IEditorConfig} from '@wangeditor/editor'
export default {
  components: {Editor, Toolbar},
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref('<p>hello</p>')

    // 初始化 MENU_CONF 属性
    const editorConfig = {                       // JS 语法
      MENU_CONF: {},
      placeholder: '请输入内容...'
      // 其他属性...
    }
    // 修改 uploadImage 菜单配置
    editorConfig.MENU_CONF['uploadImage'] = {
      server: 'http://localhost:3000/api/upload/image',
      fieldName: 'image',
      headers: {
        "authorization": localStorage.getItem('token')
      },

      customInsert: function (result,insertFn ) {
        const url = result.imageUrl
        insertFn(url)
      },
      maxFileSize: 10 * 1024 * 1024, // 10M
      timeout: 30 * 1000, // 30 秒
      // 继续写其他配置...

      //【注意】不需要修改的不用写，wangEditor 会去 merge 当前其他配置
    }


    onMounted(() => {

    })

    const toolbarConfig = {
    }
    //排除项
    toolbarConfig.excludeKeys = [
      'emotion',
      'group-video'
    ]

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return
      editor.destroy()
    })

    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    /**上传文章
     *
     */
    const uploadArticle = () => {
      let title = document.querySelector('.write__title input').value.toString();
      const content = valueHtml.value
      const category = 1
      setArticle(title, content, category).then(res => {
        console.log(res)
      }).catch(err => {
        console.log("文章上传失败")
        console.log(err)
        alert("文章上传失败"+err)
      })
    }

    return {
      editorRef,
      valueHtml,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
      uploadArticle
    };
  }
}
</script>

<style scoped lang="less">
#Write {
  width: 100%;
  height: 100%;
}

.write {
  &__title, &__upload {
    margin: 10px auto
  }

  &__edit {
    height: 70%;
    margin: 0 auto
  }

  &__title, &__edit, &__upload {
    width: 90%;
  }
}
</style>
