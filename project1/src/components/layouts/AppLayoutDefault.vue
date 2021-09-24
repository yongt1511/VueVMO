<template>
<div>
  <ngoy-header></ngoy-header>
<homepage-carousel></homepage-carousel>
  <slot/>
  <ngoy-footer></ngoy-footer>
</div>
</template>

<script>
import NgoyFooter from "@/components/Footer/NgoyFooter";
import NgoyHeader from "@/components/Header/NgoyHeader";
import HomepageCarousel from "@/components/Carousel/HomepageCarousel";
export default {
  name: "AppLayoutDefault",
  components: {HomepageCarousel, NgoyHeader, NgoyFooter}
}
</script>

<style scoped>

</style>