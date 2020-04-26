<template>
  <ContentCard :title="data.title" :subtitle="data.subtitle">
    <section class="contact">
      <form class="contact__form">
        <input type="text" name="name" id="name" placeholder="Name*" required />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email*"
          required
        />
        <input type="phone" name="phone" id="phone" placeholder="Phone" />
        <textarea
          rows="6"
          type="text"
          name="message"
          id="message"
          placeholder="Message*"
          required
        />
      </form>
      <div class="contact__card">
        <div class="content">
          <h2>Let's get in touch</h2>
          <p>C - (+91) 7835845186</p>
          <p>E - teawithsatyam@gmail.com</p>
          <p>A - Noida, UP, India.</p>
        </div>
      </div>
    </section>
    <button class="button-wrapper">
      Send Message
    </button>
  </ContentCard>
</template>

<script>
import ContentCard from "@/components/ContentCard";
export default {
  Name: "Contact",
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
.contact {
  display: flex;
  justify-content: space-between;
  @include under-break($break--base) {
    flex-direction: column;
  }
  &__form {
    display: inherit;
    flex-direction: column;
    width: 48%;
    @include under-break($break--base) {
      width: 100%;
      margin-bottom: 15px;
    }
    input,
    textarea {
      width: initial;
      background: #eaedfd;
      margin: 0;
      border: 1px solid;
      padding: 10px 15px;
      &:not(:first-child) {
        margin-top: 15px;
      }
    }
  }

  &__card {
    width: 50%;
    background: url("/assets/software-engineer.jpg") #eaedfd center center
      no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    @include under-break($break--base) {
      width: 100%;
    }
    .content {
      width: 100%;
      height: 100%;
      background: #011627d9;
      color: #ffffff;
      position: relative;
      z-index: 1;

      h2 {
        padding: 30px;
      }

      p {
        padding: 0 30px;
        &:last-child {
          padding-bottom: 30px;
        }
      }

      p + p {
        margin-top: 15px;
      }
    }
  }
}

.button-wrapper {
  margin-top: 30px;
  width: 200px;
  background-color: #e71d36;
  color: #ffffff;
  padding: 15px 0px 15px 0px;
}
</style>
