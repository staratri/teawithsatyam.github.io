<template>
  <div class="action">
    <button class="download-resume button-wrapper">
      Download Resume
    </button>
    <button @click="scrollTo" class="view-portfolio button-wrapper">
      View Skills
    </button>
  </div>
</template>

<script>
export default {
  name: "ActionBar",
  methods: {
    scrollTo() {
      const resume = document.querySelector("#skills");
      resume && resume.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
.action {
  display: flex;
  & > * {
    flex: 1;
  }

  .button-wrapper {
    color: #ffffff;
    padding: 23px 0px 21px 0px;
    &.download-resume {
      background-color: #e71d36;
    }

    &.view-portfolio {
      background-color: #1c2a34;
    }
  }
}
</style>
