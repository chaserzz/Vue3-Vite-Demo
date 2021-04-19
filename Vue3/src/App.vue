<template>
  <section>
    <router-link class="routerLink" to="/base">基础使用</router-link>
    <router-link class="routerLink" to="/vuex">VueX</router-link>
    <router-link class="routerLink" to="/axios">axios发送网络请求</router-link>
    <router-link class="routerLink" to="/eventbus">事件BUS</router-link>
  </section>
  <hr />
  <router-view style="margin-top: 20px;" />
</template>

<script setup>

</script>

<style scoped>
  .routerLink{
    margin-left: 8px;
    text-decoration: none;
  }
</style>