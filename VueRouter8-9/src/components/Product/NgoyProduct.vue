<template>
  <div class="product">
    <p>product</p>
    <hr>
    <button class="btn btn-danger" @click="viewListProduct">Xem thêm product</button>
    <button class="btn btn-warning" @click="viewDetailProduct"> Xem chi tiết sản phẩm</button>
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

</style>