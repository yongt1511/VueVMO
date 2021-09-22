<template>
  <nav class="p-3 mb-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap"/>
          </svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 link-dark"><img src="../../assets/images/cooltext393548465063270.png"
                                                               alt=""></a></li>
          <div class="dropdown">
            <a href="#"
               class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle"
               id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="../../assets/images/menu.svg" alt="">


            </a>
            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownNavLink">
              <li><a class="dropdown-item " href="#" aria-current="page">Thịt - Thủy Sản - Trứng</a></li>
              <li><a class="dropdown-item" href="#">Trứng - Rau củ</a></li>
              <li><a class="dropdown-item" href="#">Đồ uống - Giải khát</a></li>
              <li><a class="dropdown-item" href="#">Chăm sóc cá nhân</a></li>
            </ul>
          </div>
          <a href="#"></a>
          <p class="category"> Danh sách <br>sản phẩm</p>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1"
             data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1  ">
            <li><a class="dropdown-item" href="#">Thông tin cá nhân</a></li>
            <li><a class="dropdown-item" href="#">Kiểm tra đơn hàng </a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
          </ul>

        </div>
        <div><a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="" data-bs-toggle="dropdown"
                aria-expanded="false">
          <p class="user" id="user">Tài Khoản</p>

        </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1  ">
            <li><a class="dropdown-item" href="#">Thông tin cá nhân</a></li>
            <li><a class="dropdown-item" href="#">Kiểm tra đơn hàng </a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
          </ul>
        </div>


        <a href="" class="cart">
          <img src="../../assets/images/cart.svg" alt="">
          <p class="text-cart"> Giỏ Hàng</p>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "NgoyHeader"
}
</script>

<style scoped>

</style>