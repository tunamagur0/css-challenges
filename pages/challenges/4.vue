<template>
  <div class="frame">
    <div class="circle1" />
    <div class="circle2" />
    <div class="circle3" />
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
  background: #e56262;
  color: #333;
  font-family: 'Open Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
$circle1-radius: 25%;
$circle2-radius: 18%;
$circle3-radius: 11%;

$animate-time: 2s;
$bezier: cubic-bezier(0.175, 0.955, 0.585, 1.01);

@mixin circle($radius) {
  position: absolute;
  top: 50% - $radius/2;
  left: 50% - $radius/2;
  transform: translate(-50%, -50%);
  background: white;
  width: $radius;
  height: $radius;
  border-radius: 100%;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
}

@keyframes animate-circle1 {
  0%,
  10% {
    transform: scale(0, 0);
  }

  100% {
    transform: scale(1, 1);
  }
}
@keyframes animate-circle2 {
  0%,
  50% {
    transform: scale(0, 0);
  }

  100% {
    transform: scale(1, 1);
  }
}
@keyframes animate-circle3 {
  0%,
  70% {
    transform: scale(0, 0);
  }

  100% {
    transform: scale(1, 1);
  }
}

.circle1 {
  @include circle($circle1-radius);

  animation: animate-circle1 $animate-time infinite alternate $bezier;
}

.circle2 {
  @include circle($circle2-radius);

  animation: animate-circle2 $animate-time infinite alternate $bezier;
}

.circle3 {
  @include circle($circle3-radius);

  animation: animate-circle3 $animate-time infinite alternate $bezier;
}
</style>
