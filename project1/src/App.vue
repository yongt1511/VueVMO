<template>
  <div id="app">
    <ngoy-header></ngoy-header>
    <homepage-carousel></homepage-carousel>
    <homepage></homepage>
    <ngoy-footer></ngoy-footer>
    <ngoy-footer-detail></ngoy-footer-detail>
  </div>
</template>

<script>


import NgoyHeader from "@/components/Header/NgoyHeader";
import NgoyFooter from "@/components/Footer/NgoyFooter";
import NgoyFooterDetail from "@/components/Footer/NgoyFooterDetail";
import Homepage from "@/components/Main/Homepage";
import HomepageCarousel from "@/components/Carousel/HomepageCarousel";
export default {
  name: 'App',
  components: {
    HomepageCarousel,
    Homepage,
    NgoyFooterDetail,
    NgoyFooter,
    NgoyHeader

  }
}
</script>

<style>
</style>
