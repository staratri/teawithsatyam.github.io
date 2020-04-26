<template>
  <ContentCard id="skills" :title="data.title" :subtitle="data.subtitle">
    <div class="skills">
      <div class="primary">
        <div class="skill model-1">
          <div class="graph">
            <img src="/assets/skills/vue.png" alt="Vue logo" />
          </div>
          <span tooltip="80%" class="tooltip">Vue</span>
        </div>
        <div class="skill model-2">
          <div class="graph">
            <img src="/assets/skills/js.png" alt="Javascript logo" />
          </div>
          <span tooltip="75%" class="tooltip">JavaScript</span>
        </div>
        <div class="skill model-3">
          <div class="graph">
            <img src="/assets/skills/node.png" alt="Node logo" />
          </div>
          <span tooltip="65%" class="tooltip">Node</span>
        </div>
        <div class="skill model-4">
          <div class="graph">
            <img src="/assets/skills/htmlcss.png" alt="Node logo" />
          </div>
          <span tooltip="82%" class="tooltip">HTML5/CSS</span>
        </div>
      </div>
      <div class="secondary">
        <img src="/assets/skills/python.png" alt="Python logo" />
        <img src="/assets/skills/php.svg" alt="Php logo" />
        <img src="/assets/skills/ts.png" alt="Typescript logo" />
        <img src="/assets/skills/jest.png" alt="Jest logo" />
        <img src="/assets/skills/lodash.png" alt="lodash logo" />
        <img src="/assets/skills/postman.png" alt="postman logo" />
        <img src="/assets/skills/cypress.png" alt="cypress logo" />
        <img src="/assets/skills/laravel.png" alt="laravel logo" />
        <img src="/assets/skills/react.webp" alt="React logo" />
        <img src="/assets/skills/vscode.png" alt="VsCode logo" />
        <img src="/assets/skills/github.png" alt="github logo" />
        <img src="/assets/skills/jira.svg" alt="jira logo" />
        <img src="/assets/skills/aws.png" alt="Aws logo" />
      </div>
    </div>
  </ContentCard>
</template>

<script>
import ContentCard from "@/components/ContentCard";
export default {
  name: "Skills",
  components: {
    ContentCard
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
$break--base: 47.9375rem; // Triggers at 767px
$break--xs: 23.4375rem;
@mixin under-break($viewportWidth) {
  @media only screen and (max-width: ($viewportWidth - 0.0625rem)) {
    @content;
  }
}

.base-abt,
:after,
:before {
  box-sizing: border-box;
}

.content-card#skills {
  @include under-break($break--xs) {
    padding: 0;
  }
}

::v-deep {
  @include under-break($break--xs) {
    .content-card__title,
    .content-card__sub-title {
      padding: 0 30px;
    }

    .content-card__title {
      padding-top: 50px;
    }

    .content-card__divider {
      margin-left: 30px;
    }
  }
}

.primary {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @include under-break($break--base) {
    justify-content: initial;
  }
  & > * {
    width: 50%;
  }
}

.secondary {
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  @include under-break($break--base) {
    flex-wrap: wrap;
  }
  img {
    height: 32px;
    margin: 10px;
  }

  img + img {
    margin-left: 15px;
  }
}

.skill {
  display: inline-block;
  margin: 20px 0;
  text-align: center;
  min-width: 200px;
  position: relative;
}

.model-1 .graph {
  color: #41b883;
}
.model-1 .graph:before {
  -ms-transform: rotate(140deg);
  -webkit-transform: rotate(140deg);
  transform: rotate(140deg);
  border-color: #41b883;
}

.model-2 .graph {
  color: #dab930;
}
.model-2 .graph:before {
  -ms-transform: rotate(130deg);
  -webkit-transform: rotate(130deg);
  transform: rotate(130deg);
  border-color: #dab930;
}

.model-3 .graph {
  color: #7fc727;
}
.model-3 .graph:before {
  -ms-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
  transform: rotate(120deg);
  border-color: #7fc727;
}

.model-4 .graph {
  color: #ef5339;
}
.model-4 .graph:before {
  -ms-transform: rotate(1450deg);
  -webkit-transform: rotate(145deg);
  transform: rotate(145deg);
  border-color: #ef5339;
}

.tooltip {
  position: absolute;
  background: #eee;
  padding: 3px;
  font-weight: 100;
  font-size: 12px;
  border-radius: 2px;
  border: 1px solid #ddd;
  bottom: 100%;
  left: 50%;
  opacity: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  -ms-transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.tooltip:after {
  content: "" attr(tooltip) "";
  margin-left: 3px;
  color: #2dabd8;
}
.tooltip:before {
  content: "";
  width: 8px;
  height: 8px;
  background: #2dabd8;
  display: inline-block;
  margin-right: 5px;
}

.graph {
  width: 300px;
  height: 150px;
  position: relative;
  margin: auto;
  text-align: center;
  color: #fff;
  font-size: 22px;
  line-height: 280px;
  font-weight: 600;
  border-radius: 150px 150px 0 0;
  overflow: hidden;
  color: #0ff;

  img {
    height: 48px;
  }
}
.graph:before,
.graph:after {
  content: "";
  width: 300px;
  height: 150px;
  border: 50px solid #0ff;
  border-top: none;
  position: absolute;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  -ms-transform-origin: 50% 0%;
  -webkit-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
  border-radius: 0 0 300px 300px;
  left: 0;
  top: 100%;
  z-index: 5;
}
.graph:after {
  z-index: 3;
  border-color: rgba(0, 0, 0, 0.15);
  -ms-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.graph:hover:before {
  opacity: 0.8;
  cursor: pointer;
  -webkit-animation: demo 2s;
  animation: demo 2s;
}
.graph:hover + .tooltip {
  bottom: 105%;
  opacity: 1;
}

@-webkit-keyframes demo {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@keyframes demo {
  0% {
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
</style>
