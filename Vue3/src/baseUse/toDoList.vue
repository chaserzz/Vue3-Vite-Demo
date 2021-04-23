<template>
  <div>
    <form ref="form"> <!--form表单的Dom获取方式-->
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

<script setup>
import { onBeforeMount, ref } from 'vue'
import { UseStateFunction, useAddPlan } from "./toDoList.js"  //可以通过导入JS的方式导入相关的事件以及data

//ToDoList相关逻辑
let { state , removeClass } = UseStateFunction()
let { plan , addToState } = useAddPlan(state)

let form = ref(null)  //获得form表单的Dom对象

onBeforeMount(() => {
  console.log(form);
})
</script>
