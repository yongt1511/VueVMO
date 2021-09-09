<template>
  <div class="product">
    <h1>list-product</h1>
    <ul>
      <router-link
          tag="li"
          to="product/1"
          class="list-group-item"
          style="cursor:pointer;"
      >Product 1</router-link>
      <router-link
          tag="li"
          to="product/2"
          class="list-group-item"
          style="cursor:pointer;"
      >Product 2</router-link>
      <router-link
          tag="li"
          to="product/3"
          class="list-group-item"
          style="cursor:pointer;"
      >Product 3</router-link>

    </ul>
  </div>

</template>

<script>


export default {
  name: "NgoyListProduct",
  props: {
    listproduct: {
      type: Array,
    }
  },
}
</script>

<style scoped>

</style>