<template>
  <ContentCard :title="data.title" :subtitle="data.subtitle">
    <ul class="hobbies">
      <li class="hobby">
        <div class="container">
          <img
            class="hobby__icon"
            src="/assets/hobbies/soccer.png"
            alt="football icon"
          />
          <p class="hobby__label">
            Football
          </p>
        </div>
      </li>
      <li class="hobby">
        <div class="container">
          <img
            class="hobby__icon"
            src="/assets/hobbies/audio.png"
            alt="football icon"
          />
          <p class="hobby__label">
            Music
          </p>
        </div>
      </li>
      <li class="hobby">
        <div class="container">
          <img
            class="hobby__icon"
            src="/assets/hobbies/travel.png"
            alt="football icon"
          />
          <p class="hobby__label">
            Travel
          </p>
        </div>
      </li>
      <li class="hobby">
        <div class="container">
          <img
            class="hobby__icon"
            src="/assets/hobbies/beer.png"
            alt="football icon"
          />
          <p class="hobby__label">
            Party
          </p>
        </div>
      </li>
      <li class="hobby">
        <div class="container">
          <img
            class="hobby__icon"
            src="/assets/hobbies/camera.png"
            alt="camera icon"
          />
          <p class="hobby__label">
            Photography
          </p>
        </div>
      </li>
    </ul>
  </ContentCard>
</template>

<script>
import ContentCard from "@/components/ContentCard.vue";

export default {
  name: "Hobbies",
  components: {
    ContentCard
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
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

.hobbies {
  display: flex;
  list-style: none;
  & > * {
    flex-basis: 0;
    flex-grow: 1;
  }
  @include under-break($break--base) {
    flex-direction: column;
  }
  .hobby {
    color: #ffffff;
    display: flex;
    padding: 35px 0;
    align-items: center;
    justify-content: center;
    background: #e71d36;
    @include under-break($break--base) {
      width: 100%;
    }
    &:not(:last-child) {
      border-right: 1px solid rgba(255, 255, 255, 0.25);
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;

      * + * {
        margin-top: 10px;
      }
    }

    &__icon {
      width: 48px;
      height: 48px;
    }
  }
}
</style>
