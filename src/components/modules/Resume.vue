<template>
  <ContentCard
    id="resume"
    ref="resume"
    :title="data.title"
    :subtitle="data.subtitle"
  >
    <div class="resume-content">
      <ul class="education timeline">
        <li>
          <span class="year"> 2017 - 2018</span>
          <h2 class="label">Internship | LearnInfi</h2>
          <p class="description">
            6 Months Internship, LearnInfi provides a medium for online
            tuitions. Responsibility is to initially work on end-user FE
            application which connects teacher/ students to online whiteboard
            tool, later started working on creating end-user REST api's on Node
            (express) for FE and BE communication.
          </p>
        </li>
        <li>
          <span class="year"> 2014 - 2018</span>
          <h2 class="label">Dr APJ Abdul Kalam University</h2>
          <p class="description">
            Completed Bachelor's degree in Computer Science (BTECH).
          </p>
        </li>
      </ul>
      <ul class="experience timeline">
        <li>
          <span class="year"> 2018 - Till now</span>
          <h2 class="label">SDE | QAIT Devlabs</h2>
          <span> Front End Developer (Remote | US client)</span>
          <ul class="description">
            <li>Pre-development analysis of story</li>
            <li>
              Test driven development of FE modules using Vue (typescript / JS)
            </li>
            <li>
              Creating Reusable components over private NPM library to use
              across projects
            </li>
            <li>Bugfixing</li>
            <li>Peer reviews</li>
            <li>Collobarate in technical discussions and challenges</li>
            <li>Pair Programming</li>
          </ul>
        </li>
      </ul>
    </div>
  </ContentCard>
</template>

<script>
import ContentCard from "@/components/ContentCard";

export default {
  name: "Resume",
  components: {
    ContentCard
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log(this.$intersectionDetector);
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

.resume-content {
  display: flex;
  justify-content: space-between;
  & > * {
    width: 45%;
  }

  @include under-break($break--base) {
    flex-direction: column;
    & > * {
      width: 100%;
    }
  }
}

.timeline {
  position: relative;
  margin-left: 11px;
  &::before {
    content: "";
    align-self: center;
    position: absolute;
    height: 90%;
    border: 1px solid #d2cfcf;
    margin-left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }

  & > li {
    position: relative;
    padding: 15px 15px;
    &::before {
      position: absolute;
      content: "";
      width: 6px;
      height: 6px;
      left: -12px;
      top: 14px;
      background: red;
    }

    .year {
      display: block;
      color: #757575;
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 10px;
    }

    .label {
      color: #151b25;
      font-size: 20px;
      line-height: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .description {
      color: #757575;
      font-size: 15px;
      line-height: 20px;
      text-align: justify;
    }

    ul {
      list-style: initial;
      margin-left: 15px;
    }
  }
}
.timeline {
  & > li + li {
    border-top: 1px solid #f3eaea;
  }
}
</style>
