<template>
<div class="container">
  <div class="detail-product">
    <p1>Detail- Product</p1>
    <p>ID Product: {{id}}</p>
    <router-link
        tag="button"
        class="btn btn-block btn-warning"
        :to="{ name: 'productedit', params: {id: $route.params.id} }">Edit Product</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "NgoyProductDetail",

  data(){

    return{
      id : this.$route.params.id,
      Product: [


      ]
    }
  },
  watch: {
    '$route'(to){
      this.id = to.params.id
    }
  }
}
</script>

<style scoped>

</style>