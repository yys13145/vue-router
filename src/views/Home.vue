<template>
  <div class="home">
    <router-view/>
    <el-button @click="gotoNews">新闻</el-button>
    <el-button @click="gotoMe">我的</el-button>
    <el-button @click="go">go</el-button>
    <el-button @click="back">back</el-button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    gotoNews(){
      this.$router.push({
          path: 'news'
      })
    },
    gotoMe(){
      this.$router.push({
          name: 'me'
      })
    },
    go(){
      this.$router.go(1);
    },
    back(){
       this.$router.go(-1);
    }
  }
}
</script>
