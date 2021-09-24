<template>
  <div class="">
    <div class="modal modal-signin position-static d-block bg-secondary py-5 background" tabindex="-1" role="dialog"
         id="modalSignin">
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
                <input type="email" class="form-control rounded-4" id="username" placeholder="name@example.com">
                <label for="username">Email, Tên đăng nhập</label>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <i class="fa fa-exclamation-circle"></i>
                <small>Error Massage</small>
              </div>
              <div class="form-floating mb-3 ">
                <input type="password" class="form-control rounded-4" id="password" placeholder="Password">
                <label for="password">Mật khẩu</label>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <i class="fa fa-exclamation-circle"></i>
                <small>Error Massage</small>
              </div>
              <div class="form-floating mb-3 ">
                <input type="password" class="form-control rounded-4" id="re-password" placeholder="Password">
                <label for="password">Nhập lại mật khẩu</label>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <i class="fa fa-exclamation-circle"></i>
                <small>Error Massage</small>
              </div>
              <div class="form-floating mb-3 ">
                <input type="number" class="form-control rounded-4" id="phone-number" placeholder="So dien thoai">
                <label for="phone-number">Số điện thoại</label>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <i class="fa fa-exclamation-circle"></i>
                <small>Error Massage</small>
              </div>
              <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Tạo Tài Khoản</button>
              <small class="forget">
                <router-link
                        to="/login"
                        tag="li"
                        class="nav-item"
                        active-class="active"
                        exact><a href="">Đăng nhập</a>  </router-link>

              </small>
              <hr class="my-4">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp"
}
</script>

<style scoped>

@import url("User.css");

</style>