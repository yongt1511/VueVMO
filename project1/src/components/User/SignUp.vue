<template>

    <div class=" position-static d-block bg-secondary py-5 background" tabindex="-1" role="dialog"
         id="modalSignin">
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal=false"></div>
        </transition>
        <transition name="slide" appear>
            <div class="modal1" v-if="showModal">
                <div class="swal2-icon swal2-success swal2-animate-success-icon" style="display: flex;">
                    <div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                    <span class="swal2-success-line-tip"></span>
                    <span class="swal2-success-line-long"></span>
                    <div class="swal2-success-ring"></div>
                    <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                    <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                </div>
                <p class="succesTittle">Tạo tài khoản thành công</p>
            </div>
        </transition>
        <transition name="fade2" appear>
            <div class="modal-overlay" v-if="showModal2" @click="showModal2=false"></div>
        </transition>
        <transition name="slide2" appear>
            <div class="modal1" v-if="showModal2">
                <div class="swal2-icon swal2-error swal2-animate-error-icon" style="display: flex;"><span
                        class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span
                        class="swal2-x-mark-line-right"></span></span></div>
                <p class="errorTittle">Tài khoản đã tồn tại</p>
            </div>
        </transition>

        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-5 shadow">
                <div class="logo">
                    <router-link
                            to="/"
                            tag="li"
                            class="nav-item"
                            active-class="active"
                            exact
                    ><img src="../../assets/images/logo1.png" alt=""></router-link>
                </div>
                <div class="modal-header p-5 pb-4 border-bottom-0">

                    <br>
                    <!-- <h5 class="modal-title">Modal title</h5> -->
                    <h2 class="fw-bold mb-0">Tạo Tài Khoản</h2>
                </div>

                <div class="modal-body p-5 pt-0">
                    <form class="form" id="form">
                        <div class="form-floating mb-3 ">
                            <input type="text" class="form-control rounded-4" id="username"
                                   placeholder="name@example.com" v-model="user.name">
                            <label for="username">Email, Tên đăng nhập</label>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                            <i class="fa fa-exclamation-circle"></i>
                            <small>Error Massage</small>
                        </div>
                        <div class="form-floating mb-3 ">
                            <input type="password" class="form-control rounded-4" id="password"
                                   placeholder="Password" v-model="user.password">
                            <label for="password">Mật khẩu</label>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                            <i class="fa fa-exclamation-circle"></i>
                            <small>Error Massage</small>
                        </div>
                        <div class="form-floating mb-3 ">
                            <input type="password" class="form-control rounded-4" id="re-password"
                                   placeholder="Password">
                            <label for="password">Nhập lại mật khẩu</label>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                            <i class="fa fa-exclamation-circle"></i>
                            <small>Error Massage</small>
                        </div>
                        <div class="form-floating mb-3 ">
                            <input type="number" class="form-control rounded-4" id="phone-number"
                                   placeholder="So dien thoai" v-model="user.phonenumber">
                            <label for="phone-number">Số điện thoại</label>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                            <i class="fa fa-exclamation-circle"></i>
                            <small>Error Massage</small>
                        </div>
                        <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit"
                                v-on:click="btnSignUp()">Tạo Tài Khoản
                        </button>
                        <small class="forget">
                            <router-link
                                    to="/login"
                                    tag="li"
                                    class="nav-item"
                                    active-class="active"
                                    exact><a href="">Đăng nhập</a></router-link>

                        </small>
                        <hr class="my-4">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
    import axios from "axios";

    import ('./validation')
    export default {
        name: "SignUp",
        data() {
            return {
                a: {},
                dataUser: {},
                user: {
                    name: "",
                    password: "",
                    phonenumber: "",
                },
                showModal: '',
                showModal2: '',

            }
        },
        methods: {
            btnSignUp: function () {
                if (this.user.name === "") {
                    this.showModal = false;
                } else if (this.user.name != "") {
                    return new Promise((resolve, reject) => {
                        axios.get(' http://localhost:3000/user',)
                            .then((data) => {
                                for (let item of data.data) {
                                    if (
                                        item.name == this.user.name
                                    ) {
                                        this.showModal2 = true;
                                    } else {
                                        this.showModal = true;
                                        return new Promise((resolve, reject) => {
                                            axios.post(' http://localhost:3000/user', this.user)
                                                .then(() => {
                                                    resolve();
                                                }).catch(error => reject(error))
                                        })
                                    }
                                }
                                resolve();
                            }).catch(error => reject(error))
                    })
                }
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 98;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 2s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .modal1 {
        position: fixed;
        top: 20%;
        left: 40%;
        transform: translate (-50%, -50%);
        z-index: 99;
        width: 100%;
        max-width: 400px;
        background-color: white;
        border-radius: 16px;

    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: transform .5s;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translatey(-50%) translatex(100vw);
    }

    .slide2-enter-active,
    .slide2-leave-active {
        transition: transform .5s;
    }

    .slide2-enter,
    .slide2-leave-to {
        transform: translatey(50%) translatex(-100vw);
    }

    .succesTittle {
        text-align: center;
        font-size: 20px;
        color: Green;
    }

    .errorTittle {
        text-align: center;
        font-size: 20px;
        color: Red;
    }

    @import url("User.css");
    @import url("animation.css");

</style>