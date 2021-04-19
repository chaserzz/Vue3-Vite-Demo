<template>
  <div>
    <form>
      <input type="text"  v-model="plan.title"/>
      <input type="text" v-model="plan.time" />
      <input type="submit" @click.prevent="addToState" />
    </form>
    <ul>
      <li v-for="(item ,index) in state.data" 
          :key="index"
          @click="removeClass(index)">
        {{item.title}} —— {{item.time}}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'toDolist',
  setup() {
    let { state , removeClass } = UseStateFunction()
    let { plan , addToState } = useAddPlan(state)
    return {
      state,
      removeClass,
      plan,
      addToState
    }
  },
}
//渲染列表以及删除某一个list
function UseStateFunction (){
  const state = reactive({
    data:[
      {title: 'English', time:"2021-03-20"},
      {title: 'Math', time: "2021-03-22"},
      {title: 'Chinese', time: "2021-03-30"}
    ]
  })
  function removeClass(index){
    state.data.splice(index,1)
  }
  return { state , removeClass}
}

//渲染form标签以及上传某一计划
function useAddPlan(state){
  const plan = reactive({
    title:'',
    time: ''
  })
  
  function addToState () {
    //如果不经过Object.assgn会出现添加到State之后，数据依旧与plan为绑定状态。
    let item = Object.assign({},plan)
    state.data.push(item)
    plan.title = ""
    plan.time = ""
  }

  return {
    plan,
    addToState
  }
}
</script>
