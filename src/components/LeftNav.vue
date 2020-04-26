<template>
  <div class="container">
    <div class="left-nav">
      <div class="shrink-section"></div>
      <div class="menu-section">
        <h2 class="title">Satyam</h2>
        <ul class="nav-items">
          <li
            v-for="item in navItems"
            :key="item.slug"
            class="item item--active"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
    </div>
    <div class="mobile"></div>
  </div>
</template>

<script>
export default {
  name: "LeftNav",
  props: {
    navItems: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
$break--base: 47.9375rem; // Triggers at 767px
$break--small: 63.75rem; // Triggers at 767px

@mixin under-break($viewportWidth) {
  @media only screen and (max-width: ($viewportWidth - 0.0625rem)) {
    @content;
  }
}

.left-nav {
  color: #ffffff;
  height: 100vh;
  background: #011627;
  display: flex;
  max-width: 500px;
  @include under-break($break--small) {
    display: none;
  }

  & > * {
    flex-grow: 1;
  }

  .shrink-section {
    border-right: 1px solid #606060;
    width: 100px;
    flex-shrink: 1;
  }

  .menu-section {
    width: 200px;
    min-width: 200px;
    padding: 20px;
    position: relative;
    display: flex;
    .title {
      position: absolute;
    }

    .nav-items {
      margin: 0;
      padding: 0;
      list-style: none;
      align-self: center;
      .item + .item {
        margin-top: 15px;
      }

      .item {
        font-weight: bold;
        &--active {
          position: relative;
          &:before {
            content: "";
            border: 1px solid red;
            position: absolute;
            left: -25px;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
