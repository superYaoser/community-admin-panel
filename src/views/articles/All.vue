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
        <el-table :data="tableData" style="width: 90%;border-radius: 6px;margin: 0 auto;" :header-cell-style="{ backgroundColor: '#f1f1f1',color: '#929292' }">
          <el-table-column label="标题" prop="article_title" width="180px" />
          <el-table-column label="作者名" prop="article_user_name" width="180px"/>
          <el-table-column label="类别id" prop="article_class_id"/>
          <el-table-column label="创建时间" prop="article_create_time" width="180px"/>
          <el-table-column label="审核状态" prop="article_across">
            <template #default="scope">
              <el-button size="small" :type="scope.row.article_across==0? 'success':'danger'" @click="handleEdit(scope.$index, scope.row)"
              >{{scope.row.article_across==0?"已通过":"未通过"}}
              </el-button
              >
            </template>
          </el-table-column>
          <el-table-column label="逻辑删除" prop="article_logic_del">
            <template #default="scope">
              <el-button size="small" :type="scope.row.article_logic_del==0? 'success':'danger'" @click="handleEdit(scope.$index, scope.row)"
              >{{scope.row.article_logic_del==0?"未删除":"已经删除"}}
              </el-button
              >
            </template>
          </el-table-column>

          <el-table-column label="物理删除"  prop="article_real_del">
            <template #default="scope">
              <el-button size="small" :type="scope.row.article_real_del==0? 'success':'danger'" @click="handleEdit(scope.$index, scope.row)"
              >{{scope.row.article_real_del==0?"未删除":"已经删除"}}
              </el-button
              >
            </template>
          </el-table-column>

          <el-table-column label="操作" align="center" width="150px">
            <template #default="scope">
              <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)"
              >查看
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
import {getPage} from '@/api/articles'
import {getAUserById} from '@/api/user'
import {Article} from '@/utils/Interface/article/article'

export default {
  name: "All",
  components: {
    MainContainer,
    Side,
    Header,
  },
  setup() {
    onMounted(() => {
      usePage(sizeNum.value)
    })

    //用作分页总大小
    let totalSize = ref<number>();
    //用作当前页码数 默认1
    let sizeNum = ref<number>(1)

    //发起获取分页请求
    function usePage(page_number: number) {
      getPage(page_number, 9).then(async res => {
        if (res.status == 200) {
          tableData.value = await filterArray(res.data.data)
          totalSize.value = res.data.allSize
        }
      })
    }

    /*
    * 格式化数组*/
    async function filterArray(arr: Article[]): Promise<Article[]> {
      const newArr = [];
      //添加用户名
      for (const obj of arr) {
        const user = await getAUserById(obj.article_user_id);
        let username = user.data.data
        console.log(username)
        if (username.length == 0) {
          username = "注销用户id：" + obj.article_user_id
        }else {
          username = user.data.data[0].u_name;
        }
        newArr.push({...obj, article_user_name: username});
      }

      //格式化日期
      const formattedArr = newArr.map((item) => {
        if (item.article_create_time.endsWith('Z')) {
          const date = new Date(item.article_create_time);
          item.article_create_time = date.toISOString().replace('T', '-').replace('.000Z', '');
        }
        return item;
      });

      //最后返回格式化完毕后的数组
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

    let tableData = ref<Article[]>([])
    return {
      handleEdit, handleDelete, tableData, Search, totalSize, usePage, sizeNum
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
