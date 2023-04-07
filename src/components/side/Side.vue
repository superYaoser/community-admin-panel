<template>
  <div id="Side">
    <div class="head">
      <div class="head__text">
        <span>Hello! User</span>
      </div>
    </div>
    <div class="nav">
      <el-row class="tac">
        <el-col>
          <el-menu
              active-text-color="#ffd04b"
              background-color="rgba(34, 40, 50, 0.80)"
              class="el-menu-vertical-demo"
              default-active="1"
              text-color="#fff"
              @open="handleOpen"
              @close="handleClose"
          >

            <el-menu-item index="1">
              <el-icon>
                <HomeFilled/>
              </el-icon>
              <span>主页</span>
            </el-menu-item>

            <el-sub-menu index="2">
              <template #title>
                <el-icon>
                  <List/>
                </el-icon>
                <span>文章</span>
              </template>
              <el-menu-item index="2-1">
                <el-icon>
                  <Document/>
                </el-icon>
                <span>全部文章</span></el-menu-item>
              <el-menu-item index="2-2">
                <el-icon>
                  <EditPen/>
                </el-icon>
                <span>写文章</span></el-menu-item>
              <el-menu-item index="2-3">
                <el-icon>
                  <SetUp/>
                </el-icon>
                <span>类别管理</span></el-menu-item>
              <!--              <el-sub-menu index="2-4">-->
              <!--                <template #title>item four</template>-->
              <!--                <el-menu-item index="1-4-1">item one</el-menu-item>-->
              <!--              </el-sub-menu>-->
            </el-sub-menu>

            <el-menu-item index="3">
              <el-icon>
                <ChatDotRound/>
              </el-icon>
              <span>评论</span>
            </el-menu-item>

            <el-sub-menu index="4">
              <template #title>
                <el-icon>
                  <Avatar/>
                </el-icon>
                <span>用户</span>
              </template>
              <el-menu-item index="4-1">
                <el-icon>
                  <UserFilled/>
                </el-icon>
                <span>全部用户</span></el-menu-item>
              <el-menu-item index="4-2">
                <el-icon>
                  <Plus/>
                </el-icon>
                <span>添加用户</span></el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="5">
              <template #title>
                <el-icon>
                  <Setting/>
                </el-icon>
                <span>设置</span>
              </template>
              <!--              <el-menu-item-group title="Group One">-->
              <!--                <el-menu-item index="1-1">item one</el-menu-item>-->
              <!--                <el-menu-item index="1-2">item two</el-menu-item>-->
              <!--              </el-menu-item-group>-->
              <!--              <el-menu-item-group title="Group Two">-->
              <!--                <el-menu-item index="1-3">item three</el-menu-item>-->
              <!--              </el-menu-item-group>-->
              <!--              <el-sub-menu index="1-4">-->
              <!--                <template #title>item four</template>-->
              <!--                <el-menu-item index="1-4-1">item one</el-menu-item>-->
              <!--              </el-sub-menu>-->
            </el-sub-menu>


          </el-menu>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "Side",
  setup() {
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    return {
      handleOpen, handleClose
    }
  }
}
</script>

<style lang="less" scoped>
#Side {
  z-index: 999;
  width: 220px;
  height: 100%;
  background: rgba(34, 40, 50, 0.80);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
}

.head {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 1px white solid;

  &__text {
    font-size: 20px;
    color: #fff;
  }
}
</style>
