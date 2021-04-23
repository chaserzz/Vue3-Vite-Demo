import { reactive, ref , nextTick } from 'vue'

//渲染列表以及删除某一个list
function UseStateFunction (){
  //利用reactive进行绑定
  const state = reactive({
    data:[
      {title: 'English', time:"2021-03-20"},
      {title: 'Math', time: "2021-03-22"},
      {title: 'Chinese', time: "2021-03-30"}
    ]
  })
  function removeClass(index){
    state.data.splice(index,1)
    nextTick(()=>{
      console.log("nextTick触发");
    })
    console.log("removeClass函数");
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

export {
  UseStateFunction,
  useAddPlan
}