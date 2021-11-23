<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="menu">
          <div class="Avatar">
            <Avatar :url="selfImg" />
          </div>
          <h1 class="myName">Grover</h1>
          <div class="nav">
            <ul>
              <router-link :to="{ name: 'Home' }"
                ><li>
                  <h2 class="btn"><Icon type="home" />&nbsp;Home</h2>
                </li>
              </router-link>
              <router-link :to="{ name: 'Project' }"
                ><li>
                  <h2 class="btn"><Icon type="code" />&nbsp;Project</h2>
                </li>
              </router-link>
              <router-link :to="{ name: 'About' }"
                ><li>
                  <h2 class="btn"><Icon type="info" />&nbsp;About</h2>
                </li></router-link
              >
            </ul>
          </div>
          <div class="self-msg">
            <ul>
              <li>
                <h2 class="btn"><Icon type="qq" />&nbsp;1614483498</h2>
              </li>
              <li>
                <h2 class="btn"><Icon type="chat" />&nbsp;groverstudent</h2>
                <div class="pop">
                  <img :src="idcodeImg" alt="" />
                </div>
              </li>
              <li>
                <a href="https://beian.miit.gov.cn/">辽ICP备2021005260号</a>
              </li>
            </ul>
          </div>
        </div>
      </template>
      <template>
        <div class="content">
          <router-view />
        </div>
      </template>
      <template #right>
        <div class="theme">
          <img
            v-if="theme === 'light'"
            @click="changeTheme"
            :src="greyImg"
            alt=""
          />
          <img
            v-if="theme === 'dark'"
            @click="changeTheme"
            :src="greenImg"
            alt=""
          />
        </div>
      </template>
    </Layout>
  </div>
</template>
<script>
import Avatar from "@/components/Avatar";
import Layout from "@/components/Layout";
import selfImg from "@/assets/img/self.jpg";
import greyImg from "@/assets/img/grey.png";
import greenImg from "@/assets/img/green.png";
import idcodeImg from "@/assets/img/idcode.jpg";
import Icon from "@/components/Icon";

export default {
  data() {
    return { selfImg, greyImg, greenImg, idcodeImg };
  },
  methods: {
    changeTheme() {
      let bg = document.querySelector("body");
      if (this.theme === "dark") {
        bg.style.backgroundColor = "#008C8C";
        this.$store.commit("changeTheme", "light");
      } else if (this.theme === "light") {
        bg.style.backgroundColor = "";
        this.$store.commit("changeTheme", "dark");
      }
    },
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
  },
  components: {
    Avatar,
    Layout,
    Icon,
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
#app {
  min-width: 1200px;
}
.Avatar {
  display: flex;
  justify-content: center;
}
.myName {
  text-align: center;
  padding: 15px;
}
.menu {
  float: right;
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}
.content {
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

.nav {
  padding: 10px;
}
.nav ul li {
  margin: 5px 0;
  padding: 5px 10px;
  text-align: left;
  border-radius: 10px;
  padding-left: 15px;
}
.router-link-exact-active li {
  background-color: rgb(238, 238, 238);
}
.theme {
  float: left;
  margin: 10px;
  padding: 20px;
}
.theme img {
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.self-msg {
  padding: 10px;
}

.self-msg ul li {
  margin: 5px 0;
  padding: 5px 10px;
  padding-left: 15px;
  text-align: left;
  border-radius: 10px;
  font-size: 8px;
  position: relative;
  .pop {
    background-color: #f40;
    width: 120px;
    height: 120px;
    z-index: 100;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 20px;
    transform: scaleY(0);
    transition: 0.3s;
    transform-origin: bottom;
    img {
      width: 120px;
      height: 120px;
    }
  }
  &:hover {
    .pop {
      transform: scaleY(1);
    }
  }
}
</style>
