<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/"
                         tag="li"
                         class="nav-item"
                         active-class="active"
                         exact
            ><a class="nav-link">Home</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Product"
                         tag="li"
                         class="nav-item"
                         active-class="active"
            ><a class="nav-link">Product</a>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link to="/Product/1"
                               tag="li"
                               class="nav-item"
                               active-class="active"
              ><a class="nav-link">Product</a>
              </router-link></li>
              <li><router-link to="/Product/2"
                               tag="li"
                               class="nav-item"
                               active-class="active"
              ><a class="nav-link">Product</a>
              </router-link></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
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