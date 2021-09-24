<template>
  <app-layout>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 detailproductall ">
        <div class="col-md-5 col-sm-5 col-xs-5 detailproduct">
          <div class="card shadow-sm shadow-product">
            <img src="https://lh3.googleusercontent.com/ABPyKXlxSkXT1-OrrTMME-4d-HqJzgpXw0w-LjjLInCS_wiuu8sE5HrCfSD_Q_bkxzl1sOthDQlAXqiE5tY"
                    alt="">
          </div>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-7 detailproduct">
          <div class="card shadow-sm shadow-product">
            <div class="card-body  information-detail">
              <p class="card-text">Thịt đùi heo Meat Deli 400g</p>
              <p class="card-price">40.000đ</p>
              <p class="detailtext">Thịt đùi heo Meat Deli được sản xuất và đóng gói bởi thương hiệu Meat Deli – là một
                thương hiệu của Tập
                đoàn Masan chuyên về sản xuất, chế biến và đóng gói các mặt hàng, sản phẩm thịt tươi, thịt mát sạch, cao
                cấp, đảm bảo vệ sinh an toàn thực phẩm. Thương hiệu được giới thiệu tới thị trường Việt Nam vào ngày
                23/12/2018, đến nay dòng sản phẩm thịt mát của Meat Deli vẫn đang được rất nhiều người dùng Việt Nam ưa
                chuộng.<br>
                Thịt đùi heo là phần thịt lóc ra từ phần đùi của con heo, đây là nguyên liệu làm món thịt nguội, Giăm
                bông
                hay còn gọi là thịt nguội là một món ăn làm từ đùi heo có nguồn gốc từ các nước châu Âu. <br>
                Thịt đùi heo Meat Deli được chọn lọc kỹ càng, đảm bảo vệ sinh an toàn thực phẩm. Hơn nữa, các sản phẩm
                thịt của Meat Deli được đóng gói ở nhiệt độ từ 0 đến 4 độ C cùng với công nghệ Oxy Fresh 9 giúp ngăn
                chặn
                vi khuẩn, làm thịt có thể tươi ngon suốt 9 ngày (Chỉ áp dụng cho thịt ba rọi, với các sản phẩm khác
                người
                dùng nên kiểm tra lại trên bao bì). <br>
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
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "@/components/layouts/AppLayout";

export default {
  name: "DetailProduct",
  components: {AppLayout},
  data() {

    return {
      id: this.$route.params.id,
      Product: []
    }
  },
  methods: {},
  watch: {
    '$route'(to) {
      this.id = to.params.id
    }
  },
}
</script>

<style scoped>

</style>