<template>
  <div id="app">
    <Vheader></Vheader>

    <!--可以根据router跳转页面的标签-->
    <router-view/>
  </div>
</template>

<script>
  import Vheader from './components/VHeader'
  import Vhome from './components/Vhome'
  import Vnote from './components/Vnote'
  import $ from 'jquery'

  export default {
    name: 'App',
    components: {
      Vheader,
      Vhome,
      Vnote
    },
    created(){
      // run when page starts  loading
    },
    mounted:function () {
      // run when page has loaded
      this.$store.commit("getNoteList")
    }

  }
</script>

<style>

</style>
