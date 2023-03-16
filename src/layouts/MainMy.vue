<template>
  <div>
    <div class="my">
      <div class="my-flex">
        <div class="my-text">
          <h1>Моя техника</h1>
        </div>
        <div class="my-cards">
          <div class="my-card">
            <img class="my-img" :src="require('../nimg/left.png')" alt="">
            <img :src="require('../nimg/Tv.png')" alt="">
            <p>Телевизор LED DEXP <br> H24H7000E</p>
          </div>
          <div class="my-card">
            <img class="my-img" :src="require('../nimg/left.png')" alt="">
            <img :src="require('../nimg/Tv.png')" alt="">
            <p>Телевизор LED DEXP <br> H24H7000E</p>
          </div>
          <div id="id-card" class="my-card">
            <img class="my-plus" :src="require('../nimg/17.png')" alt="">
            <p>Добавить</p>
          </div>
        </div>
      </div>
      <div class="menu">
        <img :src="require('../nimg/55.png')" alt="">
        <img :src="require('../nimg/2.png')" alt="">
        <img :src="require('../nimg/22.png')" alt="">
        <img :src="require('../nimg/33.png')" alt="">
        <img :src="require('../nimg/44.png')" alt="">
      </div>
    </div>
  </div>
</template>
<style scoped>

#id-card{
  padding-top: 10px;
  width: 148px;
  height: 165px;
  background: linear-gradient(176.61deg, rgba(237, 151, 0, 0.3) 2.73%, rgba(239, 200, 129, 0.3) 95.26%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.my-img{
  position: absolute;
  top: 10px;
  right: 15px;
}
#id-card p{
  font-weight: 700;
font-size: 8px;
line-height: 20px;
color: #333333;
}
.my-card p{
  
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  color: #333333;
  letter-spacing: 0.01em;
}

.my-card {
  margin-top: 10px;
  position: relative;
  width: 148px;
  height: 165px;
  background: linear-gradient(176.61deg, rgba(237, 151, 0, 0.3) 2.73%, rgba(239, 200, 129, 0.3) 95.26%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
}

.my-flex {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
}

.my-cards {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.my {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.my-text {
  width: 100%;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.my-text h1 {
  letter-spacing: 0.01em;
  color: #000;
  font-weight: 500;
  font-size: 24px;
  line-height: 20px;
}

.menu {
  /* margin-top: 10px; */
  width: 100%;
  position: fixed;
  bottom: 5px;
  left: 0;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 0.5px solid rgba(159, 159, 159, 0.6);
}
</style>