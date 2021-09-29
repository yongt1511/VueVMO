<template>
    <div class="">
        <div class="modal modal-signin position-static d-block bg-secondary py-5 background" tabindex="-1" role="dialog"
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
                    <p class="succesTittle">Đăng nhập  thành công</p>
                </div>
            </transition>
            <transition name="fade2" appear>
                <div class="modal-overlay" v-if="showModal2" @click="showModal2=false"></div>
            </transition>
            <transition name="slide2" appear>
                <div class="modal1" v-if="showModal2">
                    <div class="swal2-icon swal2-error swal2-animate-error-icon" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div>
                    <p class="errorTittle">Tài khoản hoặc mật khẩu không đúng</p>
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
                        ><a href=""> <img src="../../assets/images/logo1.png" alt=""></a></router-link>

                    </div>
                    <div class="modal-header p-5 pb-4 border-bottom-0">
                        <br>
                        <h2 class="fw-bold mb-0">Đăng Nhập</h2>
                    </div>
                    <div class="modal-body p-5 pt-0">
                        <form class="form" id="form">
                            <div class="form-floating mb-3 ">
                                <input type="text" class="form-control rounded-4" id="username"
                                       placeholder="name@example.com" v-model="user.name" >
                                <label for="username">Email, Tên đăng nhập</label>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <i class="fa fa-exclamation-circle"></i>
                                <small>Error Massage</small>
                            </div>
                            <div class="form-floating mb-3 ">
                                <input type="password" class="form-control rounded-4" id="password"
                                       placeholder="Password" v-model="user.password" >
                                <label for="password">Mật khẩu</label>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <i class="fa fa-exclamation-circle"></i>
                                <small>Error Massage</small>
                            </div>
                            <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit" v-on:click="btnLogin()">Đăng Nhập</button>
                            <small class="forget"><a href="">Quên mật khẩu?</a> </small>
                            <hr class="my-4">
                            <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
                                <img src="../../assets/images/image 19.svg" alt="">
                                Đăng nhập bằng Intargram
                            </button>
                            <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                                <svg width="25" height="20" viewBox="0 0 59 65" fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="58.4058" height="65" rx="10" fill="url(#pattern0)"/>
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                 height="1">
                                            <use xlink:href="#image0"
                                                 transform="translate(-0.0564516) scale(0.00741935 0.00666667)"/>
                                        </pattern>
                                        <image id="image0" width="150" height="150"
                                               xlink:href="data:image/png;base64,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"/>
                                    </defs>
                                </svg>
                                Đăng nhập bằng Facebook

                            </button>
                            <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" type="submit">
                                <img src="../../assets/images/image 20.svg" alt="">
                                Đăng nhập bằng số điện thoại
                            </button>
                            <hr>
                            <div class="creat-account">
                                <router-link
                                        to="/signup"
                                        tag="li"
                                        class="nav-item"
                                        active-class="active"
                                        exact
                                >
                                    <a href="">Tạo tài khoản </a>
                                </router-link>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    import ('./validationLogin')
    export default {
        name: "SignIn",
        data() {
            return {
                dataUser: {
                    name:"",
                    password:"",
                },
                user: {
                    name: "",
                    password: ""
                },
                showModal:'',
                showModal2:'',
            }
        },
        methods: {
            btnLogin:function () {
                if (this.user.name === "") {
                    this.showModal = false;
                } else if (this.user.name != "") {
                    return new Promise((resolve, reject) => {
                        axios.get(' http://localhost:3000/user',)
                            .then((data) => {
                               for(let item of data.data){
                                  if(
                                      item.name == this.user.name && item.password == this.user.password
                                  ){
                                      this.showModal= true;
                                      this.$router.push("/");
                                  }else{
                                      this.showModal2 = true;
                                  }
                               }
                                console.log(this.dataUser)
                                resolve();
                            }).catch(error => reject(error))
                    })
                }
            },

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
    .errorTittle{
        text-align: center;
        font-size: 20px;
        color: Red;
    }

    @import url("animation.css");
    @import url("User.css");
</style>