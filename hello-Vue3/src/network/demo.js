import request from "@/utils/request.js"
import { customRef } from "vue"

const demoApi = {
  getData(){
    return customRef((track,trigger) => {
      let data = {}
      request({
        url:'xxx'
      }).then(res => {
        data = res
        trigger()
      })
      return {
        get(){
          track()
          return data
        },
        set(){

        }
      }
    })
  }
}