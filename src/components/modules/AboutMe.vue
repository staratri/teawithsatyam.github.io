<template>
  <ContentCard :title="data.title" :subtitle="data.subtitle">
    <p class="language">
      I am a Software Engineer based in Noida, India. I love builduing things
      and specially if it's fun to try it. Being an engineer I like learning new
      things and try to be curious about things happening around me. I am
      working as Front End Developer from past 2 years and I already feel like
      that there is lot of thing we can do in website development and make it
      more cool. Along with working, I like watching different conferences and
      giving presentation of new things at office to my colleagues and seniors.
    </p>
    <ul class="level-bar">
      <li v-for="(item, index) in barItems" :key="`bar--item--${index}`">
        <p>
          <span>{{ item.label }}</span> <span>{{ item.percentage }}%</span>
        </p>
        <div class="bar">
          <span :style="{ width: item.percentage + '%' }" />
        </div>
      </li>
    </ul>
  </ContentCard>
</template>

<script>
import ContentCard from "@/components/ContentCard.vue";
export default {
  name: "AboutMe",
  components: {
    ContentCard
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      barItems: [
        {
          label: "Independent Developer",
          percentage: "90"
        },
        {
          label: "Team Player",
          percentage: "80"
        },
        {
          label: "Leadership",
          percentage: "75"
        },
        {
          label: "Communication",
          percentage: "85"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.language {
  color: #757575;
  font-size: 16px;
  line-height: 25px;
  text-align: justify;
}

.level-bar {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    width: 45%;
    p {
      display: flex;
      justify-content: space-between;
    }

    .bar {
      border: 2px solid #d2cfcf;
      display: inherit;
      margin-top: 10px;
      position: relative;
      margin-bottom: 25px;
      span {
        top: -2px;
        left: -2px;
        position: absolute;
        border: 2px solid red;
      }
    }
  }
}
</style>
