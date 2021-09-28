<template>
  <app-layout>
    <div class="container" >
      <nav class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 detailproductall ">

        <div class="col-md-5 col-sm-5 col-xs-5 detailproduct" >
          <div class="card shadow-sm shadow-product">
            <img :src="detailProduct.image"
                    alt="">
          </div>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-7 detailproduct"   >
          <div class="card shadow-sm shadow-product"  >
            <div class="card-body  information-detail" >
              <p class="card-text">{{detailProduct.name}}</p>
              <p class="card-price">{{detailProduct.price}}đ</p>
              <p class="detailtext">{{detailProduct.detail}}<br>
                <span class="note-detail"> Lưu ý: <br>
              - Hạn sử dụng thực tế quý khách vui lòng xem trên bao bì. <br>
              - Hình sản phẩm chỉ mang tính chất minh họa, hình bao bì của sản phẩm tùy thời điểm sẽ khác so với thực
              tế.</span>
              </p>
              <div class=" ">
                <div class="btn-group btn-detail">
                  <input class="select-quantity" type="number" id="quantity" name="quantity" value="1">
                  <button type="button" class="btn btn-sm btn-outline-secondary addcartdetail">Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "@/components/layouts/AppLayout";
import axios from "axios";

export default {
  name: "DetailProduct",
  components: {AppLayout},
  data() {

    return {
      detailProduct:{},
      id: this.$route.params.id,
    }
  },
  methods: {
    GetDetailProduct:function(){
      return new Promise((resolve,reject ) =>{
        axios.get(`http://localhost:3000/product/${this.id}`)
                .then(({data}) => {
                  console.log(data)
                  this.detailProduct = data;
                  console.log(this.detailProduct)
                  resolve();
                }).catch(error => reject(error))
      })
    },
  },
  created() {
    this.GetDetailProduct();
  },
  watch: {
    '$route'(to) {
      this.id = to.params.id
    }
  },
}
</script>

<style scoped>

</style>