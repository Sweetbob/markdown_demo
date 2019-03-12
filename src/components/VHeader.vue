<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

          <li v-for="(item,index) in header_content" class="nav-item" :class="{active: index==currentindex}" @click="alterIndex(index)">
            <!--使用router-link代替a标签-->
            <router-link class="nav-link" :to="item.url">{{item.tag}}</router-link>
          </li>



        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>

</template>

<script>
  export default {
    name: "Vheader",
    data() {
      return {
        header_content:[
          {tag: "Home", url:"/"},
          {tag: "Note", url:"/note"}
        ],
        currentindex:0
      }
    },
    methods:{
      alterIndex(index){
        this.currentindex = index

      }
    },
    created(){
      // 这个方法，页面刚开始加载的时候就会调用，
      // 解决刷新后标签和路径不匹配的情况
      for (let i=0; i<this.header_content.length; i++){
        if(this.header_content[i].url == this.$route.path){
          this.currentindex = i
        }
      }
    }
  }
</script>

<style scoped>

</style>
