<template>
  <div class="frame">
    <div class="card">
      <div class="header">
        <div class="header-left">
          <p>WEEKLY REPORT</p>
          <p>01. Feb - 07. Feb</p>
        </div>
        <div class="header-right">
          <p>Revenue</p>
          <p>$ 3621.79</p>
        </div>
      </div>
      <div class="graph">
        <div class="labels">
          <div class="purchases">
            <div />
            <p>Purchases</p>
          </div>
          <div class="views">
            <div />
            <p>Views</p>
          </div>
        </div>
        <div class="lines">
          <div class="red">
            <svg>
              <defs>
                <marker
                  id="red-marker"
                  markerWidth="6"
                  markerHeight="6"
                  refX="3"
                  refY="3"
                  stroke="none"
                  fill="rgb(230, 104, 104)"
                >
                  <circle cx="3" cy="3" r="3" />
                </marker>
              </defs>
              <polyline
                points="19,46 60,12 100,23 140,11 181,38 221,48 261,19"
                marker-start="url(#red-marker)"
                marker-mid="url(#red-marker)"
                marker-end="url(#red-marker)"
              ></polyline>
            </svg>
          </div>
          <div class="blue">
            <svg>
              <defs>
                <marker
                  id="blue-marker"
                  markerWidth="6"
                  markerHeight="6"
                  refX="3"
                  refY="3"
                  stroke="none"
                  fill="rgb(104, 163, 230)"
                >
                  <circle cx="3" cy="3" r="3" />
                </marker>
              </defs>
              <polyline
                points="19,61 60,50 100,65 140,55 181,61 221,74 261,64"
                marker-start="url(#blue-marker)"
                marker-mid="url(#blue-marker)"
                marker-end="url(#blue-marker)"
              ></polyline>
            </svg>
          </div>
          <div class="line" />
          <div class="line" />
          <div class="line axis">
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
            <div>SUN</div>
          </div>
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
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 inset rgba(0, 0, 0, 0.1),
    0 -2px 2px 0 inset rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: rgb(38, 170, 170);
  color: #333;
  font-family: 'Open Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 60%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.labels {
  display: flex;
  width: 100%;
  height: 25%;
  flex-direction: row-reverse;
  padding: 10px;
}

.purchases {
  margin: 0 10px 0 10px;
  display: flex;
  align-items: center;
}

.purchases div {
  width: 10px;
  height: 2px;
  margin: 0 10px 0 0;
  background: rgb(104, 163, 230);
}

.views {
  display: flex;
  margin: 0 10px 0 10px;
  align-items: center;
}

.views div {
  width: 10px;
  height: 2px;
  margin: 0 10px 0 0;
  background: rgb(230, 104, 104);
}

.labels p {
  font-size: 0.6rem;
}

.header {
  height: 25%;
  width: 100%;
  background: rgb(241, 185, 54);
  display: flex;
  padding: 10px;
  color: #fff;
  justify-content: space-between;
}

.header-left p:nth-child(1) {
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

.header-left p:nth-child(2) {
  font-size: 0.7rem;
  font-weight: 400;
}

.header-right p:nth-child(1) {
  text-align: right;
  font-size: 0.7rem;
  font-weight: 400;
}

.header-right p:nth-child(2) {
  font-size: 1rem;
  font-weight: 700;
}

.graph {
  width: 100%;
  height: 75%;
}

.lines {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75%;
}

.line {
  border-top: solid 1px rgba(161, 161, 161, 0.267);
  margin: 0 5% 0 5%;
  width: 90%;
  height: 33%;
}

.axis {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
}

.red {
  position: absolute;
  fill: rgba(255, 255, 255, 0);
  stroke: rgb(230, 104, 104);
}

.blue {
  position: absolute;
  fill: rgba(255, 255, 255, 0);
  stroke: rgb(104, 163, 230);
}
</style>
