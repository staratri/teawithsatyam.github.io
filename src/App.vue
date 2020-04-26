<template>
  <div id="app">
    <LeftNav :navItems="navItems" />
    <Content />
  </div>
</template>

<script>
import LeftNav from "@/components/LeftNav.vue";
import Content from "@/components/Content.vue";

import { navItems } from "@/constants";

export default {
  name: "App",
  components: {
    LeftNav,
    Content
  },
  data() {
    return {
      navItems
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
$red: #e84118;
$break--tab: 47.9375rem; // Triggers at 767px

@mixin under-break($viewportWidth) {
  @media only screen and (max-width: ($viewportWidth - 0.0625rem)) {
    @content;
  }
}

html {
  scroll-behavior: smooth;
}

.button-wrapper {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.25px;
  border-radius: 0px 0px 0px 0px;
}

#app {
  display: flex;
  font-family: "Roboto", sans-serif;
  max-height: 100vh;
}

.button-wrapper {
  // Borrowed from https://gist.github.com/MoOx/9137295
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  overflow: visible;
  color: inherit;
  font: inherit;
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable `input` types in iOS */
  -webkit-appearance: none;
}

.divider {
  margin: 20px 0;
  border-width: 2px;
  border: 1px solid #e71d36;
  width: 50px;
}

h1,
h2,
h4,
p,
ul {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

body {
  margin: 0;
}
</style>
