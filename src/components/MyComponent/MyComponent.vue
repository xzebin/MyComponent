<template>
  <div>
    <div class="left-top">
      <ul>
        <li v-for="(item, index) in imgs" :key="index">
          <img :src="item" alt="" />
        </li>
      </ul>
    </div>
    <h5>请拖拽上方图片到右边完成一下图片</h5>
    <div class="left-botton">
      <img src="../../assets/imgs/max.jpg" alt="" />
    </div>
    <div class="right-box">
      <ul>
        <li v-for="(item, index) in selectImgs" :key="index">
          <img :src="item" alt="" />
        </li>
      </ul>
    </div>
    <div class="prompt"></div>
    <div class="btn-box">
      <button
        :class="imgs.length > 0 ? 'commit-display' : 'commit-select'"
        :disabled="imgs.length > 0"
      >
        提交拼图
      </button>
      <button class="reset">重置</button>
    </div>
  </div>
</template>


<script src="./MyComponent.js"></script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  li {
    list-style-type: none;
  }
}
.left-top {
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 240px;
    li {
      img {
        width: 50px;
        height: 50px;
      }
      margin: 10px;
      border: 1px solid red;
    }
  }
}
.prompt {
  color: red;
  position: absolute;
  right: 100px;
  top: 50px;
}
.left-botton {
  margin-top: 10px;
  img {
    border: 1px solid red;
    width: 250px;
  }
}
img {
  margin-bottom: -4px;
}
.right-box {
  position: absolute;
  right: 100px;
  top: 100px;
  width: 150px;
  height: 160px;
  border: 1px solid #ccc;
  ul {
    display: flex;
    display: flex;
    flex-wrap: wrap;
    width: 150px;
    height: 150px;
    li {
      width: 50px;
      height: 50px;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
.btn-box {
  position: absolute;
  right: 100px;
  top: 300px;
  .commit-select {
    width: 60px;
    height: 20px;
    border-radius: 4px;
    outline: none;
    border: 1px;
    background: linear-gradient(90deg, #63bb68 0%, #10ad53 100%);
    color: rgba(255, 255, 255, 100);
    font-size: 14px;
    text-align: center;
    font-family: PingFangSC-Regular;
    margin-top: 10px;
    margin-right: 10px;
  }
  .commit-display {
    opacity: 0.4;
    width: 60px;
    height: 20px;
    border-radius: 4px;
    border: 1px;
    background: linear-gradient(90deg, #63bb68 0%, #10ad53 100%);
    color: rgba(255, 255, 255, 100);
    font-size: 14px;
    text-align: center;
    font-family: PingFangSC-Regular;
    margin-top: 10px;
    margin-right: 10px;
  }
}
</style>