<template>
  <div id="app">
   <div class="container">
     <div class="row">
       <div>
         <ngoy-header></ngoy-header>
         <router-view></router-view>
       </div>
     </div>
   </div>
  </div>
</template>

<script>

import NgoyHeader from "@/components/NgoyHeader";
export default {
  name: 'App',
  data(){
    return{
    }
  },
  components: {
    NgoyHeader

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
