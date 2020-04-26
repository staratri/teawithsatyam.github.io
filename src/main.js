import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const options = {
  rootMargin: "0px",
  threshold: 0
};

window.addEventListener("foo", event => {
  console.log("asdas", event.detail);
  options.root = event.detail;
  Vue.prototype.$intersectionDetector = new IntersectionObserver(
    () => console.log("foo"),
    options
  );
});

new Vue({
  render: h => h(App)
}).$mount("#app");
