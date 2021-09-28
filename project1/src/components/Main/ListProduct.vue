<template>
    <AppLayout>
        <div class="container ">
            <div class="album py-5 bg-light">

                <div class="hotproduct">
                    <div class="col-md-12 col-sm-12 col-xs-12 bg-white border-radius shadow-sm">
                        <div class="col-md-12 col-sm-12 col-xs-12 box-title__title">
                            <div class="row">
                                <div class="text-reset text-decoration-none">
                                    <h2><strong>Sản phẩm nổi bật nhất</strong></h2>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light filter">
                            <a href="/"
                               class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                                <span class="fs-4">THƯƠNG HIỆU</span>
                            </a>
                            <hr>
                            <ul class="nav nav-pills flex-column mb-auto" v-for="(brand) in dataBrand" :key="brand.id">
                                <li class="nav-item" >
                                    <a href="#" class="nav-link  link-dark" aria-current="page">
                                        {{brand.name}}
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div class="col-md-9 col-sm-9 col-xs-9 product ">
                            <nav class="col-md-4 col-sm-4 col-xs-4"
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
                                                    <button type="button"
                                                            class="btn btn-sm btn-outline-secondary addcart">
                                                        Thêm vào giỏ hàng
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </nav>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12 pagination">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
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
        name: "ListProduct",
        components: {AppLayout},
        props: {
            listproduct: {
                type: Array,
            }
        },
        data() {

            return {
                dataBrand: [],
                dataProduct: [],
                id: this.$route.params.id,
            }
        },
        methods: {
            productOnclick: function (id) {
                this.$router.push({path: `/product/${id}`, params: {id: id}});

            },
            GetBrand: function () {
                return new Promise((resolve, reject) => {
                    axios.get(' http://localhost:3000/brand', {})
                        .then(({data}) => {
                            this.dataBrand  = data;
                            resolve();
                        }).catch(error => reject(error))
                })

            },

            GetProduct: function () {
                return new Promise((resolve, reject) => {
                    axios.get(' http://localhost:3000/product', {})
                        .then(({data}) => {
                            // console.log(data)
                            this.dataProduct = data;
                            // console.log(this.dataProduct)
                            resolve();
                        }).catch(error => reject(error))
                })
            }
        },
        created() {
            this.GetProduct();
            this.GetBrand();
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