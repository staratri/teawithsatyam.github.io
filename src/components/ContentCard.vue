<template>
  <div class="content-card">
    <h2 class="content-card__title">
      {{ title }}
    </h2>
    <span class="content-card__divider divider" />
    <p class="content-card__sub-title">
      {{ subtitle }}
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  name: "ContentCard",
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.content-card {
  padding: 50px 30px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  & + & {
    border-top: 1px solid #d2cfcf;
  }
  &__title {
    font-size: 40px;
    font-weight: 700;
    color: #151b25;
    clear: both;
    line-height: 1;
  }

  &__sub-title {
    font-weight: 400;
    font-size: 18px;
    color: #505050;
    margin-bottom: 30px;
  }
}
</style>
