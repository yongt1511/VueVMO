<template>
<div class="container">
  <div class="detail-product">
    <p1>Detail- Product</p1>
    <p>Product Name : {{ name }}</p>
    <p>ID Product: {{id}}</p>
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