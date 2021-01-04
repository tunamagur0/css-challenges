<template>
  <div class="frame">
    <div
      v-for="(t, index) in texts"
      :key="index"
      class="card"
      :class="{ active: page === index, inactive: page !== index }"
    >
      <div class="triangle" />
      <div class="number">{{ index + 1 }}</div>

      <div class="texts">
        <div class="title">{{ t.title }}</div>
        <div class="content">{{ t.content }}</div>
      </div>
      <div class="button" @click="nextPage">ok</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      page: 0,
      texts: [
        {
          title: 'The couch',
          content: 'If you want to grow, get outside your comfort zone.',
        },
        {
          title: 'Failing is learning',
          content: 'Pick yourself up, dust yourself off, and start again.',
        },
        {
          title: 'Flowers and rainbows',
          content: 'Always be yourself, unless you can be a unicorn.',
        },
      ],
    };
  },

  computed: {
    title(): string {
      return this.texts[this.page].title;
    },
    content(): string {
      return this.texts[this.page].content;
    },
  },

  methods: {
    nextPage(): void {
      this.page++;
      this.page = this.page % 3;
    },
  },
});
</script>

<style lang="scss" scoped>
// delete the following line if no text is used
// edit the line if you wanna use other fonts
@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);

$border-rad: 2px;

// use only the available space inside the 400x400 frame
.frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: $border-rad;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 -3px 3px 0 rgba(0, 0, 0, 0.1) inset;
  overflow: hidden;
  background: #c7d6e1;
  color: #333;
  font-family: 'Open Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 40%;
  border-radius: 5px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.1);
}

$triangle-width: 25px;
$triangle-color: #8392a0;

.triangle {
  width: 0;
  height: 0;
  position: absolute;
  top: 0%;
  left: calc(100% - #{$triangle-width} * 2);
  margin: auto;
  box-sizing: border-box;
  border-radius: 0 $border-rad 0 0;
  border-right: $triangle-width solid $triangle-color;
  border-left: $triangle-width solid transparent;
  border-top: $triangle-width solid $triangle-color;
  border-bottom: $triangle-width solid transparent;
}

.number {
  position: absolute;
  top: $triangle-width/3;
  right: $triangle-width/2;
  text-align: right;
  font-size: 13px;
  line-height: 13px;
  font-weight: 600;
  color: white;
}

.texts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100%;
  width: 100%;
}

.title {
  font-size: 15px;
  font-weight: 600;
  color: #616e7d;
  text-align: center;
  margin-bottom: 10px;
}

.content {
  font-size: 13px;
  text-align: center;
  color: #616e7d;
}

.button {
  width: 100%;
  height: 40%;
  background: #3ca7fb;
  border-radius: 0 0 $border-rad $border-rad;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 200;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
}

.button:hover {
  background: #2d93e3;
}

.active {
  transition: opacity 0.5s ease-in;
  opacity: 1;
}

.inactive {
  transform: translate(-50%, -50%) scale(1.5);
  transform-origin: center;
  transition: all 0.6s ease-out;
  visibility: hidden;
  opacity: 0;
}
</style>
