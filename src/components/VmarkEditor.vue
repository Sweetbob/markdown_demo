<template>

  <div class="main container-fluid">
    <div class="row">
      <input type="text" class="form-control col-md-6" v-model="title" placeholder="Input Note Title">&nbsp;&nbsp;
      <button class="btn btn-success col-md-2 offset-3" @click="completeEditing">Complete</button>
    </div>
    <br>
      <div class="col-md-6">
        <br>
    <b-form-textarea
      id="textarea1"
      v-model="text"
      placeholder="Enter something"
      rows="3"
      max-rows="6"
    />
      </div>
      <div class="col-md-6 ">
        <br>
        <!--直接取markedText-->
        <!--v-html：把原生的html进行解析显示-->
    <pre class="mt-3"><span v-html="markedText" ref="content"></span></pre>
      </div>
  </div>
  </div>
</template>
</template>

<script>
  import Marked from 'marked'

    export default {
        name: "VmarkEditor",
      data(){
          return {
            text:'',
            title:''
          }
      },
      methods:{
        completeEditing(){
          var json_data = {
            title:this.title,
            content:this.$refs.content.innerText,
            markdown:this.text
          };
          // 提交事件
          // this.$store.commit("createNewNote", json_data)
          // 这里提交action来代替
          this.$store.dispatch("createNewNote_action", json_data)
        }
      },
      computed:{
          // 监听text，如果text改变了，就用Marked()来转换成markdown的格式,默认是get方法
        markedText(){
            return Marked(this.text)
          }
      }
    }
</script>

<style scoped>
  .main{
    margin-top: 30px;
  }
</style>
