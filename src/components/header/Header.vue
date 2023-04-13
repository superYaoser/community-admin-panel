<template>
  <div id="header">
    <div class="left" style="padding-left: 30px;  margin-left: 220px;">
      <span style="font-size: 20px">{{ title }}</span>
    </div>
    <div class="right">
      <div>
        <el-avatar
            size="default"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      {{ user.u_name }}<el-icon class="el-icon--right"><arrow-down/></el-icon>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">
              <el-icon>
                <User/>
              </el-icon>
              个人信息
            </el-dropdown-item>
            <el-dropdown-item command="b">
              <el-icon>
                <EditPen/>
              </el-icon>
              修改密码
            </el-dropdown-item>
            <el-dropdown-item command="c">
              <el-icon>
                <CircleCloseFilled/>
              </el-icon>
              退出系统
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from "vue";
import {adminLogin} from '@/api/admin'
import {useStore} from 'vuex';
import {IUser} from '@/utils/Interface/vuex/user';
import {useRouter} from 'vue-router'


export default {
  name: "Header",
  props: ['title'],
  setup() {
    //使用store
    const store = useStore();
    // 导入路由
    const router = useRouter()

// 通过 Vue 3 中的 onMounted 钩子，在组件挂载后执行登录操作
    onMounted(() => {
// 调用 adminLogin 方法进行登录
      adminLogin().then(res => {
        if (res.status == 200) {
// 如果登录成功，则获取当前用户
          const currentUser = res.data.data;
// 利用 Vuex 的 dispatch 方法将用户信息存储到全局状态中
          store.dispatch('addUser', currentUser);
        }
      }).catch(err => {
        router.push('/login') // 跳转到指定路由
      })
    });

// 使用 Vue 3 中的 computed 函数，通过 store 的 getter 获取全局状态中的用户信息
    const user = computed<IUser>(() => {
      return store.getters.getUser;
    });

    const handleCommand = (command: string | number | object) => {
      console.log(`click on item ${command}`)
    }
    return {
      handleCommand, user
    }
  }
}
</script>

<style scoped lang="less">
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

#header {
  height: 50px;
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px #e9e9e9 solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}

.right {
  padding-right: 20px;
  height: 20px;
  width: 150px;
  margin-right: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;

  div {
    flex: 1;
    text-align: center;

    &:not {
      border-right: 1px solid var(--el-border-color);
    }
  }
}
</style>
