<template>
  <div class="about-container">
    <iframe
      src="//player.bilibili.com/player.html?aid=336833513&bvid=BV1jR4y1b7A9&cid=447275394&page=1"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
      class="video"
    >
    </iframe>
    <h2 class="content">
      {{ introduce }}
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduce: `Hello, my friend. I am Grover, a junior majoring in computer science in Taiyuan. In the first two years of university, I have been exposed to JAVA and Python, but I don't like them very much. I started learning the front end in June of last year. The front end engineer's main job is to interact with users efficiently and happily, which is exactly the area I look forward to working in. Therefore, I made up my mind to become a front-end engineer.`,
    };
  },
};
</script>

<style scoped>
.about-container {
  position: relative;
}
.content {
  padding-top: 410px;
  text-indent: 2em;
}
.video {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 400px;
}
</style>>


