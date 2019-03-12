<template>
<li>
  <h5>{{list.title}}</h5>
  <p>{{list.content}}</p>
</li>
</template>

<script>
    export default {
        name: "VnoteItem",
      data(){
          return {}
      },
      props:{
        list:Object
      }

    }
</script>

<style scoped>

</style>
