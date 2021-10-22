<template>
    <AppLayout>
        <div class="album py-5 bg-light">
            <div class="container ">
                <div class="hotproduct">c
                    <div class="col-md-12 col-sm-12 col-xs-12 bg-white border-radius shadow-sm">
                        <div class="col-md-12 col-sm-12 col-xs-12 box-title__title">
                            <div class="row">
                                <div class="text-reset text-decoration-none">
                                    <h2><strong>Sản phẩm nổi bật nhất</strong></h2>

                                    <div class="extra"><a href="" class="dangger">Xem Thêm</a></div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        <nav class="col-md-3 col-sm-3 col-xs-3"
                             v-for="(product) in dataProduct"
                             :key="product.id"
                             :id="product.id"
                             @click="productOnclick(product.id)">
                            <a class="col-md-3 col-sm-3 col-xs-3">
                                <div class="card shadow-sm">
                                    <img :src="product.image" alt="">
                                    <div class="card-body">
                                        <p class="card-text">{{product.name}}</p>
                                        <p class="card-price">{{product.price}} đ</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary addcart">
                                                    Thêm vào giỏ hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </nav>
                    </div>
                </div>

            </div>
        </div>
    </AppLayout>
</template>

<script>
    import AppLayout from "@/components/layouts/AppLayout";
    import axios from "axios";

    export default {
        name: "Homepage",
        components: {AppLayout},
        data() {

            return {
                dataProduct: [],
            }
        },
        methods: {
            productOnclick: function (id) {
                this.$router.push({path: `/product/${id}`, params: {id: id}});

            },

            GetProduct: function () {
                return new Promise((resolve, reject) => {
                    axios.get(' http://localhost:3000/product', {})
                        .then(({data}) => {
                            console.log(data)
                            this.dataProduct = data;
                            console.log(this.dataProduct)
                            resolve();
                        }).catch(error => reject(error))
                })
            }
        },
        created() {
            this.GetProduct();
        }
    }
</script>

<style scoped>
    nav li:hover,
    nav li:active {
        text-decoration: none;
        transition: box-shadow .3s;
        box-shadow: 0 0 11px rgba(33, 33, 33, .2);
        color: white;
    }

    li.nav-item::marker {
        list-style-type: none !important;
        color: white;
    }
</style>
