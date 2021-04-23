<template>
  <div>
    <el-upload class="upload-demo"
               ref="upload"
               action="https://jsonplaceholder.typicode.com/posts/"
               :on-change="handleChange"
               :auto-upload="false"
               
>
  <el-button size="small" type="primary">点击上传</el-button>
  <template #tip>
    <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
  </template>
</el-upload>
    <p>
      <el-button ref="button">button</el-button>
    </p>
    <p>
      <button @click="submit">上传</button>
    </p>
    <p>
      <button @click="clearUpload">清空</button>
    </p>
  </div>
</template>

<script setup>
import { reactive , ref, onMounted , useContext} from "vue"
let fileList = reactive([])
const that = useContext()
let upload = ref(null)
let button = ref(null)
function handleChange(file,files){
  console.log("Change");
}

function submit(){
  upload.value.submit()
}
function clearUpload(){
  upload.value.clearFiles()
}
onMounted(() => {
  console.log(button);
})
</script>

<style scoped>

</style>