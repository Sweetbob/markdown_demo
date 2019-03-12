<template>
  <div class="main">


      <b-card header="My Notes" class="text-center">
        <b-card-text>
          <VnoteList></VnoteList>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>

</template>

<script>
  import VnoteList from './VnoteList'
    export default {
        name: "VnoteShow",
      data(){
          return{}
      },
      components:{
          VnoteList
      }
    }
</script>

<style scoped>
  .main{
    margin-top: 30px;
    margin-left: -30px;
  }
</style>
