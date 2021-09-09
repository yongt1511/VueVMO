<template>
  <div class="product">
   <h1>Product</h1>
    <hr>
    <div class="prop">
      <router-view></router-view>

    </div>
  </div>


</template>

<script>
export default {
  name: "NgoyProduct",
  data ( ){
    return{

    }
    },
  methods:{
    viewListProduct(){
      this.$router.push('/ListProduct')
    },
    viewDetailProduct(){
      this.$router.push('/Product/1')
    }
  }
}
</script>

<style scoped>
.prop {
  text-align: left;
}

</style>