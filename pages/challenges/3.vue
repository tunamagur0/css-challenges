<template>
  <div class="frame">
    <div class="center">
      <div class="sky" />
      <div class="sun" />
      <div class="mountain">
        <div class="mountain-left" />
        <div class="mountain-right" />
      </div>
      <div class="ground" />
      <div class="shadow" />
    </div>
  </div>
</template>

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
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #272c34;
  color: #333;
  font-family: 'Open Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  background: white;
  transform: translate(-50%, -50%);
  clip-path: circle(50%);
}

$horizon: 70%;
$mountain-width: 60%;
$mountain-height: 30%;
$mountain-border: 70%;

.sky {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: $horizon;
  background: skyblue;
}

@mixin sun-trans($deg) {
  transform: rotate($deg) translate(-400%, -50%);
}

.sun {
  position: absolute;
  bottom: 10%;
  left: 42.5%;
  width: 15%;
  height: 15%;
  background: yellow;
  border-radius: 50%;
  animation: rotate-sun 3s infinite ease-in-out;
  @include sun-trans(0deg);
}

.mountain {
  position: absolute;
  top: $horizon - $mountain-height;
  left: (100% - $mountain-width)/2;
  width: $mountain-width;
  height: $mountain-height;
  background: lightgray;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.mountain-left {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0, 0% 100%, $mountain-border 100%);
  background: white;
  opacity: 0.1;
  animation: shadow-left 3s infinite ease-in-out;
}

.mountain-right {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0, $mountain-border 100%, 100% 100%);
  background: white;
  opacity: 0.5;
  animation: shadow-right 3s infinite ease-in-out;
}

.ground {
  position: absolute;
  top: $horizon;
  left: 0;
  width: 100%;
  height: 100% - $horizon;
  background: beige;
}

.shadow {
  position: absolute;
  top: $horizon;
  left: (100% - $mountain-width)/2;
  width: $mountain-width;
  height: (100% - $horizon)/2;
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  transform-origin: top;
  background: black;
  opacity: 0.5;
  animation: skew-shadow 3s infinite ease-in-out;
}

@keyframes rotate-sun {
  0% {
    @include sun-trans(0deg);
  }
  30% {
    @include sun-trans(50deg);
  }
  50% {
    @include sun-trans(50deg);
  }
  100% {
    @include sun-trans(160deg);
  }
}

@keyframes skew-shadow {
  0% {
    transform: scaleY(1.5) skewX(90deg);
  }
  30% {
    transform: scaleY(0.5) skewX(30deg);
  }
  40% {
    transform: scaleY(0.5) skewX(30deg);
  }
  100% {
    transform: scaleY(1.5) skewX(-90deg);
  }
}

@keyframes shadow-left {
  0% {
    background: rgba(30, 30, 30, 0.1);
    // opacity: 0.1;
  }
  30% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
}

@keyframes shadow-right {
  0% {
    opacity: 0.1;
  }
  30% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
</style>
