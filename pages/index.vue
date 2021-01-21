<template>
  <div class="container">
    <div class="title">100 Days CSS Challenges を解いていく</div>
    <div class="list">
      <div class="list-title">作ったもの</div>
      <div class="links">
        <div v-for="s in solved" :key="s">
          <nuxt-link :to="`/challenges/${s}`" class="button--green">{{
            s
          }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      solved: [1, 2, 3, 4, 5],
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  flex-direction: column;
}

$title-size: 40px;
.title {
  font-size: $title-size;
  color: #35495e;
  border-bottom: solid 2px rgb(71, 70, 70);
  margin-bottom: 20px;
  margin-top: 20px;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

$list-title-size: 25px;
.list-title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: $list-title-size;
  color: #35495e;
  letter-spacing: 1px;
}

.list-title::after {
  content: '';
  display: inline-block;
  position: relative;
  width: $list-title-size * 2/3;
  height: $list-title-size * 2/3;
  bottom: 0;
  border-top: $list-title-size/6 solid #b0b0b0;
  border-right: $list-title-size/6 solid #b0b0b0;
  transform: rotate(135deg) translate(-$list-title-size/2, -$list-title-size/4);
  animation: 1.5s shake infinite ease-in;
}

@keyframes shake {
  0% {
    bottom: $list-title-size/3;
  }
  30% {
    bottom: 0;
  }
  100% {
    bottom: $list-title-size/3;
  }
}

.links {
  padding-top: 15px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.links > div {
  margin: 1rem;
}
</style>
