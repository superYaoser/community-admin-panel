<template>
  <div id="all">
    <Side :active="'2-1'"></Side>
    <Header :title="'全部文章'"></Header>
    <MainContainer>
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
            <el-table-column label="Date" prop="date"/>
            <el-table-column label="Name" prop="name"/>
            <el-table-column label="操作" align="center">
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
                         :total="100"
                         @prev-click=""
                         @next-click=""/>
        </div>
      </div>
    </MainContainer>
  </div>
</template>

<script lang="ts">
import Side from '@/components/side/Side.vue';
import Header from '@/components/header/Header.vue';
import MainContainer from '@/components/MainContainer/MainContainer.vue';
import { Search } from '@element-plus/icons-vue'
import {computed, ref} from 'vue'

export default {
  name: "All",
  components: {
    MainContainer,
    Side,
    Header,
  },
  setup() {

    interface User {
      date: string
      name: string
      address: string
    }

    const handleEdit = (index: number, row: User) => {
      console.log(index, row)
    }
    const handleDelete = (index: number, row: User) => {
      console.log(index, row)
    }

    const tableData: User[] = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'John',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Morgan',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'John',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Morgan',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'John',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]
    return {
      handleEdit, handleDelete, tableData,Search
    }
  }
}
</script>

<style scoped lang="less">
#all {
  width: 100%;
  height: 100%;

  .all__content {
    width: 100%;
    height: 100%;
  }
}
</style>
