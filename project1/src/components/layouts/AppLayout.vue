<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
const defaultLayout = "AppLayoutDefault";

export default {
  name: "AppLayout",
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      // @ is an alias to /src
      return () => import(`@/components/layouts/${layout}.vue`);
    },
  },
};
</script>
