<template>
  <div id="header">
  <div class="left" style="padding-left: 10px">
    <span style="font-size: 20px">文章管理</span>
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
      测试用户<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a"><el-icon><User /></el-icon>个人信息</el-dropdown-item>
            <el-dropdown-item command="b"><el-icon><EditPen /></el-icon>修改密码</el-dropdown-item>
            <el-dropdown-item command="c"><el-icon><CircleCloseFilled /></el-icon>退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Header",
  setup(){
    const handleCommand = (command: string | number | object) => {
      console.log(`click on item ${command}`)
    }
    return{
      handleCommand
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
#header{
  padding: 0 20px;
  margin-left: 220px;
  height: 50px;
  background: #ffffff;
  border-bottom: 1px #e9e9e9 solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.right{
  height: 20px;
  width: 150px;
  margin-right: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  div{
    flex: 1;
    text-align: center;
    &:not{
      border-right: 1px solid var(--el-border-color);
    }
  }
}
</style>
