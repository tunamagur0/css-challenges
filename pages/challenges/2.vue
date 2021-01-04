<template>
  <div class="frame">
    <div class="center">
      <div class="humberger" @click="isOpen = !isOpen">
        <div
          v-for="index in [0, 1, 2]"
          :key="index"
          :class="{ 'is-open': !isOpen, 'is-closed': isOpen }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      isOpen: false,
    };
  },
});
</script>

<style lang="scss" scoped>
// delete the following line if no text is used
// edit the line if you wanna use other fonts
@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);

// use only the available space inside the 400x400 frame
.frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  overflow: hidden;
  background: #3faf82;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 -3px 3px 0 rgba(0, 0, 0, 0.1) inset;
  font-family: 'Open Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

$humberger-height: 10px;
$humberger-diff: 30px;
$humberger-width: $humberger-height * 3 + $humberger-diff * 2;

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: $humberger-width;
  height: $humberger-width;
  transform: translate(-50%, -50%);
}

.humberger {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.humberger div {
  position: absolute;
  top: 50%;
  left: 50%;
  width: $humberger-width;
  height: $humberger-height;
  border-radius: $humberger-height/3;
  box-shadow: 1px 2px 15px 0 rgba(0, 0, 0, 0.3);
  background: white;
  transform: translate(-50%, -50%);
}

$anim-time: 0.3s;
.humberger .is-closed:nth-child(1) {
  animation: gather-top $anim-time ease-in-out forwards,
    rotate-right $anim-time ease-in-out $anim-time forwards;
}

.humberger .is-closed:nth-child(2) {
  animation: fade-out $anim-time ease-in-out forwards;
}

.humberger .is-closed:nth-child(3) {
  animation: gather-bottom $anim-time ease-in-out forwards,
    rotate-left $anim-time ease-in-out $anim-time forwards;
}

.humberger .is-open:nth-child(1) {
  animation: rotate-left $anim-time ease-in-out reverse forwards,
    spread-top $anim-time ease-in-out $anim-time forwards;
}

.humberger .is-open:nth-child(2) {
  opacity: 0;
  animation: fade-in $anim-time ease-in-out $anim-time forwards;
}

.humberger .is-open:nth-child(3) {
  animation: rotate-right $anim-time ease-in-out reverse forwards,
    spread-bottom $anim-time ease-in-out $anim-time forwards;
}

@keyframes gather-top {
  0% {
    transform: translate(-50%, -$humberger-diff - $humberger-height);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}

@keyframes gather-bottom {
  0% {
    transform: translate(-50%, $humberger-diff);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}

@keyframes spread-top {
  0% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(-50%, -$humberger-diff - $humberger-height);
  }
}

@keyframes spread-bottom {
  0% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(-50%, $humberger-diff);
  }
}

@keyframes fade-out {
  100% {
    transform: scale(0, 0);
    opacity: 0;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes rotate-right {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(45deg);
  }
}

@keyframes rotate-left {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style>
