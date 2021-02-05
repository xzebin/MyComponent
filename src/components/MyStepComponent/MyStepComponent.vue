<template>
  <div class="step-box">
    <div v-if="direction === 'horizontal'" class="horizontal">
      <div
        class="horizontal-box"
        v-for="(item, index) in stepLists"
        :key="index"
      >
        <div :class="item.doneState ? 'info' : 'info noDone-font'">{{ item.title }}</div>
        <div class="center">
          <div :class="item.doneState ? 'circle' : 'circle noDone'"></div>
          <div
            :class="stepLists[index+1].doneState ? 'article' : 'article noDone'"
            v-if="index !== stepLists.length - 1"
          ></div>
        </div>
        <div :class="item.doneState ? 'title' : 'title noDone-font'">{{ item.thingName }}</div>
      </div>
    </div>
    <div v-else class="vertical">
      <div class="vertical-box" v-for="(item, index) in stepLists" :key="index">
        <div :class="item.doneState ? 'left' : 'left noDone-font'">{{ item.title }}</div>
        <div class="center">
          <div :class="item.doneState ? 'circle' : 'circle noDone'"></div>
          <div class="space"></div>
          <div :class="stepLists[index+1].doneState ? 'article' : 'article noDone'" v-if="index !== stepLists.length - 1"></div>
        </div>
        <div :class="item.doneState ? 'right' : 'right noDone-font'">
          <input type="text" :value="item.thingName" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyStepComponent",
  props: {
    //控制步骤条的方向 => horizontal横式  vertical竖式
    direction: {
      type: String,
      default: "horizontal",
    },
    //控制步骤条圆圈的颜色
    step_circle_color: {
      type: String,
      default: "#FF4040",
    },
    //控制步骤条的颜色
    step_article_color: {
      type: String,
      default: "#FF7256",
    },
    //步骤条数据信息
    stepLists: {
      type: Array,
      default: () => [],
    },
    step_article_height: {
      type: String,
      default: "30",
    },
  },
  mounted() {
    let articleDoms = document.querySelectorAll(".article");
    let stepBox = document.querySelector(".step-box");
    stepBox.style.color = this.step_circle_color;
    [...articleDoms].map((v) => {
      if (this.step_article_height > 50 || !Number(this.step_article_height)) {
        v.style.height = "30px";
      } else {
        v.style.height = this.step_article_height + "px";
      }
      v.style.backgroundColor = this.step_article_color;
    });
    let circleDoms = document.querySelectorAll(".circle");
    [...circleDoms].map((v) => {
      v.style.backgroundColor = this.step_circle_color;
    });
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.step-box {
  padding: 30px 10px;
  .noDone {
    background-color: #ccc !important;
  }
  .noDone-font {
    color: #ccc !important;
  }
  .horizontal {
    display: flex;
    .horizontal-box {
      display: flex;
      align-items: center;
      flex-direction: column;
      align-items: flex-start;
      .info {
        margin-right: 20px;
      }
      .title {
        margin-right: 20px;
      }
      .center {
        display: flex;
        align-items: center;
        margin: 10px 0;
        width: 100%;
        .circle {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          z-index: 99;
        }
        .article {
          width: 70px;
          border-radius: 2px;
          flex: 1;
        }
      }
    }
  }
  .vertical {
    .vertical-box {
      width: 100%;
      display: flex;
      .left {
        width: 10%;
        margin-top: -3px;
      }
      .right {
        width: 80%;
        input {
          display: block;
          outline: none;
          border: 0;
          height: 20px;
          width: 80%;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 10px;
          margin-top: -15px;
        }
      }
      .center {
        width: 10%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .circle {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: red;
          z-index: 99;
        }
        .article {
          width: 4px;
          border-radius: 2px;
          margin-top: -1px;
        }
        .space {
          width: 100%;
        }
      }
    }
  }
}
</style>