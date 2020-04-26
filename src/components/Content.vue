<template>
  <main class="content">
    <template v-for="item in contentItems">
      <component :is="item.name" :key="item.name" :data="item.props" />
    </template>
  </main>
</template>

<script>
import { modules } from "@/components/modules";
import { contentItems } from "@/constants";

export default {
  name: "Content",
  components: {
    ...modules
  },
  data() {
    return {
      contentItems
    };
  },
  mounted() {
    const el = document.querySelector(".content");
    window.dispatchEvent(new CustomEvent("foo", { detail: el }));
  }
};
</script>

<style lang="scss" scoped>
$break--base: 47.9375rem; // Triggers at 767px

@mixin under-break($viewportWidth) {
  @media only screen and (max-width: ($viewportWidth - 0.0625rem)) {
    @content;
  }
}
.content {
  flex-grow: 1;
  background: #3d505d;
  padding: 30px;
  max-width: 1400px;
  overflow: auto;
  margin: 0 auto;
  @include under-break($break--base) {
    padding: 0;
  }
}
</style>
