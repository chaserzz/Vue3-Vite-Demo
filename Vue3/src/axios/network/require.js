import axios from "axios"

const service = axios.create({
  baseURL:"../../../public",  //本地json需要放置到public文件夹中才可以读取到
  headers:{
    
  }
})

export default service