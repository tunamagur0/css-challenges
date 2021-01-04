<template>
  <div>
    <nav>
      <div class="link">
        <nuxt-link to="/">Home</nuxt-link>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
nav {
  background-color: rgb(164, 243, 127);
  height: 10vh;
}

.link {
  text-align: center;
  padding-top: 2vh;
  padding-left: 2vh;
  display: flex;
  justify-content: flex-start;
}

.link a {
  font-size: 5vh;
  color: #35495e;
  text-decoration: none;
}
</style>
