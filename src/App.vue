<template>
  <div>
    <!-- <MyComponent></MyComponent> -->
    <MyStepComponent
      :stepLists="stepLists"
      step_circle_color="#188FFF"
      step_article_color="#8BC7FF"
      step_article_height="1"
    >
    </MyStepComponent>
    <!-- <MyStepComponent
      :stepLists="stepLists"
      direction="vertical"
      step_circle_color="#188FFF"
      step_article_color="#8BC7FF"
      step_article_height="50"
    >
    </MyStepComponent> -->
  </div>
</template>

<script>
// import MyComponent from "./components/MyComponent/MyComponent.vue"
import MyStepComponent from "./components/MyStepComponent/MyStepComponent.vue";
export default {
  data() {
    return {
      stepLists: [
        {
          title: "2020/02/22 18:26:43",
          thingName: "到达商场",
          doneState: true
        },
        {
          title: "2020/02/22 18:26:44",
          thingName: "到达商场",
          doneState: true
        },
        {
          title: "2020/02/22 18:26:45",
          thingName: "到达商场",
          doneState: false
        },
        {
          title: "2020/02/22 18:26:46",
          thingName: "到达商场",
          doneState: false
        },
      ],
    };
  },
  components: {
    // MyComponent
    MyStepComponent,
  },
};
</script>

<style lang="scss" scoped>
</style>