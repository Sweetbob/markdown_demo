<template>
    <ul>
      <VnoteItem v-for="(item,index) in getNoteList" :list="item"></VnoteItem>
    </ul>
</template>

<script>
  import VnoteItem from './VnoteItem'
    export default {
        name: "VnoteList",
      data(){
          return {}
      },
      components:{
        VnoteItem
      },
      computed:{
          getNoteList(){
            return this.$store.state.noteList
          }
      }
    }
</script>

<style scoped>

</style>
