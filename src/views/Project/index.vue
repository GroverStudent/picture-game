<template>
  <div class="pro-container">
    <div class="content" ref="game"></div>
  </div>
</template>

<script>
import lol from "@/assets/img/lol.png";

export default {
  mounted() {
    let gameConfig = {
      width: 500,
      height: 500,
      rows: 3,
      columns: 3,
      url: lol,
      dom: this.$refs["game"],
    };
    gameConfig.boxWidth = gameConfig.width / gameConfig.columns;
    gameConfig.boxHeight = gameConfig.height / gameConfig.rows;
    gameConfig.boxNums = gameConfig.rows * gameConfig.columns;

    let blockList = [];

    function Block(left, top, visible) {
      this.left = left;
      this.top = top;
      this.correctLeft = this.left;
      this.correctTop = this.top;
      this.visible = visible;
      this.dom = document.createElement("div");
      this.dom.style.width = gameConfig.boxWidth + "px";
      this.dom.style.height = gameConfig.boxHeight + "px";
      this.dom.style.backgroundImage = `url(${gameConfig.url})`;
      this.dom.style.backgroundPosition = `${-this.correctLeft}px ${-this
        .correctTop}px`;
      this.dom.style.position = "absolute";
      this.dom.style.display = `${visible ? "block" : "none"}`;
      this.dom.style.boxSizing = `border-box`;
      this.dom.style.border = "1px solid";
      this.show = function () {
        this.dom.style.left = this.left + "px";
        this.dom.style.top = this.top + "px";
      };
      this.show();
      gameConfig.dom.appendChild(this.dom);
    }

    function init() {
      //初始化游戏区域
      renderGame();
      //创建移动块
      createBlock();
      //乱序
      change();
      //点击事件
      clickEvent();

      function clickEvent() {
        let blank = blockList.find(function (item) {
          return !item.visible;
        });
        // console.log(blank);
        blockList.forEach(function (item) {
          item.dom.onclick = function () {
            // console.log(12)
            exchange(item, blank);
            item.show();
            blank.show();
            isCorrect();
          };
        });
      }

      function isCorrect() {
        let arr = blockList.filter(function (item) {
          return !(
            item.left === item.correctLeft && item.top === item.correctTop
          );
        });
        console.log(4556);
        if (!arr.length) {
          blockList.forEach(function (item) {
            item.dom.style.border = "";
            item.dom.style.display = "block";
          });
          blockList.forEach(function (item) {
            item.dom.onclick = null;
          });
        }
      }

      function exchange(b1, b2) {
        let temp = b1.left;
        b1.left = b2.left;
        b2.left = temp;

        temp = b1.top;
        b1.top = b2.top;
        b2.top = temp;
      }

      function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      function change() {
        for (let i = 0; i < gameConfig.boxNums - 1; i++) {
          let index = getRandom(0, gameConfig.boxNums - 2);
          exchange(blockList[index], blockList[i]);
          // console.log(index)
        }
        blockList.forEach(function (item) {
          item.show();
        });
      }

      function createBlock() {
        for (let i = 0; i < gameConfig.rows; i++) {
          for (let j = 0; j < gameConfig.columns; j++) {
            let visible = true;
            if (i === gameConfig.rows - 1 && j === gameConfig.columns - 1) {
              visible = false;
            }
            let temp = new Block(
              j * gameConfig.boxWidth,
              i * gameConfig.boxHeight,
              visible
            );
            blockList.push(temp);
          }
        }
      }

      function renderGame() {
        gameConfig.dom.style.width = gameConfig.width + "px";
        gameConfig.dom.style.height = gameConfig.height + "px";
        gameConfig.dom.style.margin = "20px auto";
        gameConfig.dom.style.position = "relative";
        gameConfig.dom.style.border = "1px solid";
        // gameConfig.dom.style.background = `url(${gameConfig.url})`;
      }
    }

    init();
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 70vh;
}
</style>
