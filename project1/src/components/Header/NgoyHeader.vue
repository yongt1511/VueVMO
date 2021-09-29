<template>
    <nav class="p-3 mb-3 border-bottom">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                </a>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <router-link
                            to="/"
                            tag="li"
                            class="nav-item"
                            active-class="active"
                            exact>
                        <a href="#" class="nav-link px-2 link-dark">
                            <img src="../../assets/images/cooltext393548465063270.png" alt=""></a></router-link>
                    <div class="dropdown">
                        <a href="#"
                           class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle"
                           id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../../assets/images/menu.svg" alt="">
                        </a>
                        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownNavLink">
                            <li>
                                <router-link
                                        to="/AllProduct"
                                        tag="li"
                                        class="nav-item"
                                        active-class="active"
                                        exact>
                                    <a class="dropdown-item " href="#" aria-current="page">Tất cả Sản phẩm</a>
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                        to="/MeatProduct"
                                        tag="li"
                                        class="nav-item"
                                        active-class="active"
                                        exact>
                                    <a class="dropdown-item" href="#">Thịt - Thủy Sản - Trứng</a>
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                        to="/FruidProduct"
                                        tag="li"
                                        class="nav-item"
                                        active-class="active"
                                        exact>
                                    <a class="dropdown-item" href="#">Hoa quả nhiệt đới</a>
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                        to="/DrinkProduct"
                                        tag="li"
                                        class="nav-item"
                                        active-class="active"
                                        exact>
                                    <a class="dropdown-item" href="#">Đồ uống - Giải khát</a>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <a href="#"></a>
                    <p class="category"> Danh sách <br>sản phẩm</p>
                </ul>
                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
                </form>
                <div class="dropdown text-end ">
                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle login" id="dropdownUser1"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        <svg width="49" height="39" viewBox="0 0 49 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                    d="M47.4541 19.2214C47.4541 29.0891 37.3753 37.4429 24.4541 37.4429C11.5329 37.4429 1.4541 29.0891 1.4541 19.2214C1.4541 9.3538 11.5329 1 24.4541 1C37.3753 1 47.4541 9.3538 47.4541 19.2214Z"
                                    fill="#CE2222" stroke="#FFFBFB" stroke-width="2"/>
                            <path
                                    d="M24.1818 4.24805C20.2343 4.24805 17.0227 7.4243 17.0227 11.3284C17.0227 15.2325 20.2343 18.4088 24.1818 18.4088C28.1293 18.4088 31.3409 15.2325 31.3409 11.3284C31.3409 7.4243 28.1293 4.24805 24.1818 4.24805ZM24.1818 15.5766C21.8135 15.5766 19.8863 13.6706 19.8863 11.3284C19.8863 8.98622 21.8135 7.08019 24.1818 7.08019C26.55 7.08019 28.4772 8.98622 28.4772 11.3284C28.4772 13.6706 26.55 15.5766 24.1818 15.5766ZM37.0681 31.1534V29.7373C37.0681 24.2727 32.5708 19.8248 27.0454 19.8248H21.3181C15.7913 19.8248 11.2954 24.2727 11.2954 29.7373V31.1534H14.159V29.7373C14.159 25.8332 17.3706 22.657 21.3181 22.657H27.0454C30.9929 22.657 34.2045 25.8332 34.2045 29.7373V31.1534H37.0681Z"
                                    fill="white"/>
                        </svg>
                        <p class="user" id="user">Tài Khoản</p>
                    </a>
                    <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1  ">
                        <router-link
                                to="/login"
                                tag="li"
                                class="nav-item"
                                active-class="active"
                                exact>
                            <a class="dropdown-item" href="#">Đăng nhập</a>
                        </router-link>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <router-link
                                to="/signup"
                                tag="li"
                                class="nav-item"
                                active-class="active"
                                exact>
                            <a class="dropdown-item" href="#">Tạo tài khoản </a>
                        </router-link>
                    </ul>
                </div>
                <a href="" class="cart">
                    <img src="../../assets/images/cart.svg" alt="">
                    <p class="text-cart"> Giỏ Hàng</p>
                </a>
                <transition name="fade" appear>
                    <div class="modal-overplay" v-if="login" @click="login =false"></div>
                </transition>
            </div>
        </div>
    </nav>
</template>

<script>

    export default {
        name: "NgoyHeader",
        data() {
            return {
                login: true
            }
        }
    }
</script>

<style scoped>

</style>