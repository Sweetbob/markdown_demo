<template>
<div class="container">
  <div class="row">
    <div class="col-md-3">
      <!--my notes list-->
      <VnoteShow></VnoteShow>
    </div>
    <div class="col-md-9">
      <!--markdown editor-->
      <VmarkEditor></VmarkEditor>
    </div>
  </div>
</div>
</template>

<script>
  import VnoteShow from './VnoteShow'
  import VmarkEditor from './VmarkEditor'
  export default {
    name: "Vnote",
    data() {
      return {}
    },
    components:{
      VnoteShow,
      VmarkEditor
    }

  }
</script>

<style scoped>

</style>
