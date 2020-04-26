<template>
  <div class="card">
    <div class="card__left">
      <p class="text1">Hello, I'm</p>
      <h1 class="name">Satyam</h1>
      <h1 class="name">Pathak</h1>
      <span class="divider" />
      <p class="designation">
        Front End Developer
      </p>
    </div>
    <div class="card__right">
      <img src="/assets/profile-pic.png" alt="profile picture" srcset="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FaceCard"
};
</script>

<style lang="scss" scoped>
$break--base: 47.9375rem; // Triggers at 767px

@mixin under-break($viewportWidth) {
  @media only screen and (max-width: ($viewportWidth - 0.0625rem)) {
    @content;
  }
}
.card {
  background: #ffffff;
  width: 100%;
  display: flex;
  @include under-break($break--base) {
    flex-direction: column;
  }
  &__left {
    padding: 30px;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include under-break($break--base) {
      padding-bottom: 15px;
    }
    .text1 {
      color: red;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      margin-bottom: 15px;
    }

    .name {
      color: #151b25;
      font-size: 60px;
      font-weight: 700;
      line-height: 61px;
      letter-spacing: 1.4px;
    }

    .designation {
      color: #505050;
      font-size: 20px;
      font-weight: 400;
    }
  }

  &__right {
    width: 60%;
    padding-top: 60px;
    @include under-break($break--base) {
      padding: 0;
      width: initial;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
