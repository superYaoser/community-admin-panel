<template>
  <div id="All">
    <div class="all__content">
      <div class="content__search" style="width: 100%;display: flex;justify-content: flex-end;">
        <div class="content__search--flex" style="width: 300px;margin-right: 5px;">
          <el-input
              v-model="input1"
              class="w-50 m-2"
              size="default"
              placeholder="请输入文章标题"
              :suffix-icon="Search"
              style="margin: 0;"
          />
        </div>
      </div>
      <div class="content__form" style="margin-top: 20px;width: 100%;">
        <el-table :data="tableData" style="width: 90%;border-radius: 6px;margin: 0 auto">
          <el-table-column label="标题" prop="article_title"/>
          <el-table-column label="作者id" prop="article_user_id"/>
          <el-table-column label="类别id" prop="article_class_id"/>
          <el-table-column label="创建时间" prop="article_create_time" width="180px"/>
          <el-table-column label="审核状态" prop="article_across"/>
          <el-table-column label="逻辑删除" prop="article_logic_del"/>
          <el-table-column label="物理删除" prop="article_real_del"/>

          <el-table-column label="操作" align="center" width="150px">
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >Edit
              </el-button
              >
              <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
              >Delete
              </el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="content__page" style="width: 100%;margin-top: 20px">
        <el-pagination background layout="prev, pager, next" style="width: 100%; justify-content: center;"
                       :total="totalSize"
                       @prev-click="usePage(++sizeNum)"
                       @next-click="usePage(--sizeNum)"
                       @current-change="usePage"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Side from '@/components/side/Side.vue';
import Header from '@/components/header/Header.vue';
import MainContainer from '@/components/MainContainer/MainContainer.vue';
import {Search} from '@element-plus/icons-vue'
import {computed, onMounted, ref} from 'vue'
import {getPage}from '@/api/articles'
import {Article}from'@/utils/views/article/article'

export default {
  name: "All",
  components: {
    MainContainer,
    Side,
    Header,
  },
  setup() {
    onMounted(()=>{
      usePage(sizeNum.value)
    })

    //用作分页总大小
    let totalSize=ref<number>();
    //用作当前页码数 默认1
    let sizeNum = ref<number>(1)

    //发起获取分页请求
    function usePage(page_number:number){
      getPage(page_number,9).then(res=>{
        if (res.status==200){
          tableData.value =filterArray(res.data.data)
          totalSize.value = res.data.allSize
        }
      })
    }

    /*
    * 格式化数组*/
    function filterArray(arr: Article[]): Article[] {
      const formattedArr = arr.map((item) => {
        if (item.article_create_time.endsWith('Z')) {
          const date = new Date(item.article_create_time);
          item.article_create_time = date.toISOString().replace('T', '-').replace('.000Z', '');
        }
        return item;
      });
      return formattedArr;
    }

    //点击编辑
    const handleEdit = (index: number, row: Article) => {
      console.log(index, row)
    }
    //点击删除
    const handleDelete = (index: number, row: Article) => {
      console.log(index, row)
    }

    let tableData= ref<Article[]>([])
    return {
      handleEdit, handleDelete, tableData, Search,totalSize,usePage,sizeNum
    }
  }
}
</script>

<style scoped lang="less">
#All {
  width: 100%;
  height: 100%;

  .all__content {
    width: 100%;
    height: 100%;
  }
}
</style>
