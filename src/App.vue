<template>
  <div class="wrapper">
    <hero-view />
    <footer-component />
  </div>
</template>

<script>
import HeroView from "@/views/HeroViews.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { HeroView, FooterComponent },
};
</script>

<style></style>
