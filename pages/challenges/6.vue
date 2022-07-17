<template>
  <div class="frame">
    <div class="card">
      <div class="user">
        <div class="profile">
          <div class="image"></div>
          <h3 class="name">Jessica Potter</h3>
          <p class="title">Visual Artist</p>
        </div>
        <div class="buttons">
          <button class="rounded-button">Follow</button>
          <button class="rounded-button">Message</button>
        </div>
      </div>
      <div class="counts">
        <div>
          <p class="num">523</p>
          <p class="label">Posts</p>
        </div>
        <div>
          <p class="num">1387</p>
          <p class="label">Likes</p>
        </div>
        <div>
          <p class="num">146</p>
          <p class="label">Follower</p>
        </div>
      </div>
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
  color: #333;
  font-family: 'Open Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  background: linear-gradient(to top right, #eebe6c 0%, #ca7c4e 100%);
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 75%;
  display: flex;
  background: white;
  border-radius: 0.3rem;
  flex-direction: row;
  color: #796551;
}

.user {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10%;
  width: 60%;
  background: white;
  flex-direction: column;
  gap: 10%;
}

.counts {
  display: flex;
  width: 40%;
  flex-direction: column;
  height: 100%;
  gap: 2px;
  & div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f4e7de;
    transition: background 0.3s ease-in-out;
  }
  & div:hover {
    background-color: #e1cfc2;
    cursor: pointer;
  }
}

.num {
  font-size: 1.3rem;
  font-weight: 600;
}

.label {
  font-size: 0.7rem;
  font-weight: 500;
}

.profile {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
}

.image {
  background-image: url('https://100dayscss.com/codepen/jessica-potter.jpg');
  background-position: center;
  background-size: cover;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.image::before {
  content: '';
  display: inline-block;
  border-color: #796551 transparent #796551 #796551;
  border-style: solid;
  border-width: 1px;
  width: 89px;
  height: 89px;
  position: absolute;
  border-radius: 100%;
  transition: transform 1.5s ease-in-out;
}

.image:hover::before {
  transform: rotate(-360deg);
}

.image::after {
  content: '';
  display: inline-block;
  border-style: solid;
  border-width: 1px;
  border-color: #796551 transparent #796551 transparent;
  width: 82px;
  height: 82px;
  position: absolute;
  border-radius: 100%;
  transition: transform 1.5s ease-in-out;
}

.image:hover::after {
  transform: rotate(360deg);
}
.name {
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 0 0 0;
}

.title {
  font-size: 0.7rem;
  font-weight: lighter;
}

.rounded-button {
  width: 60%;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  border: solid 1px #796551;
  border-radius: 20px;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #796551;
  background-color: white;
  &:hover {
    background-color: #796551;
    color: white;
  }
}

.buttons {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
  align-items: center;
}
</style>
