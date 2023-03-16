<template>
  <div>
    <div class="home">
      <div class="panel">
        <div class="panel-text">
          <h5>Главная</h5>
        </div>
        <div class="panel-img">
          <img :src="require('../nimg/14.png')" alt="">
        </div>
      </div>
      <div class="zakaz">
        <div class="zakaz-border">
          <h1>Заказ №2323434</h1>
          <h3>Дата и время:<span> 03.03 15:00</span> </h3>
          <h3>Услуга:<span> Диагностика холодильника</span> </h3>
          <h3>Стоимость:<span> 2.000 руб.</span> </h3>
          <h3>Мастер:<span> Антон</span> </h3>
          <button>В работе</button>
          <div class="dotted">
            <img :src="require('../nimg/15.png')" alt="">
          </div>
        </div>
      </div>
      <div class="uslugi">
        <div class="uslugi-flex">
          <h1>Услуги:</h1>
        </div>
      </div>
      <div class="href">
        <div class="href-master">
          <h1>Вызов мастера</h1>
          <h2>Вызов специалиста на установку, диагностику или ремонт</h2>
        </div>
        <div class="href-master">
          <h1>Вызов мастера</h1>
          <h2>Вызов специалиста на установку, диагностику или ремонт</h2>
        </div>
        <div class="href-master">
          <h1>Вызов мастера</h1>
          <h2>Вызов специалиста на установку, диагностику или ремонт</h2>
        </div>
      </div>
      <div class="add">
        <div class="add-btn">
          <img class="btn-tv" :src="require('../nimg/16.png')" alt="">
          <h1>Добавить технику</h1>
          <img class="btn-plus" :src="require('../nimg/17.png')" alt="">
        </div>
      </div>
      <div class="menu">
        <img :src="require('../nimg/1.png')" alt="">
        <img :src="require('../nimg/11.png')" alt="">
        <img :src="require('../nimg/22.png')" alt="">
        <img :src="require('../nimg/33.png')" alt="">
        <img :src="require('../nimg/44.png')" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.btn-plus {
  position: absolute;
  top: 15px;
  width: 15px;
  right: 20px;
  /* background: #333333; */
  /* transform: rotate(-45deg); */
}

.btn-tv {
  position: absolute;
  top: -30px;
  left: 0;
}

.add {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.add-btn {
  width: 80%;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(176.61deg, rgba(237, 151, 0, 0.7) 2.73%, #efc881b3 95.26%);
  border-radius: 10px;
  position: relative;
}

.add-btn h1 {
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #333333;
}

.href-master h1 {
  color:
    #333333;
  font-weight: 500;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.01em;
}

.href-master h2 {
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: 0.01em;
  color: #9F9F9F;
}

.href-master {
  width: 80%;
  padding-top: 5px;
  padding-left: 30px;
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
  padding-bottom: 5px;
  background: #FFFFFF;
  border: 1px solid #EFC881;
  border-radius: 10px;
  margin-bottom: 10px;
}

.href {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* padding-top: 10px; */
  padding-bottom: 10px;
}

.uslugi {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.uslugi-flex {
  width: 80%;
  display: flex;
  align-items: start;
  justify-content: lefy;
}

.uslugi-flex h1 {
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
}

.dotted {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  right: 15px;
  background: linear-gradient(176.61deg, rgba(237, 151, 0, 0.7) 2.73%, rgba(239, 200, 129, 0.7) 95.26%);
  border-radius: 10px;
}

.zakaz-border {
  width: 80%;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  background: #FFFFFF;
  border: 1px solid #EFC881;
  border-radius: 10px;
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
  padding-left: 20px;
}

.zakaz-border button {
  font-weight: 500;
  font-size: 10px;
  line-height: 20px;
  padding-left: 16px;
  padding-right: 16px;
  top: 17px;
  right: 10px;
  position: absolute;
  border: none;
  border: 2px solid #90A554;
  border-radius: 50px;
  color: #90A554;
  background: #FFF;
}

.zakaz-border span {
  color:
    #9F9F9F;
}

.zakaz h1 {
  font-size: 16px;
  /* font-family: Roboto; */
  line-height:

    20px;
  color: #333333;
  font-weight: 550;
}

.zakaz h3 {
  font-size: 14px;
  color: #333333;
  line-height:
    20px;
  font-weight: 400;
}

.zakaz {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

}

.home {
  flex-direction: column;
  width: 100%;
  margin-top: -20px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #D7D8EA; */
}

@font-face {
  font-family: "RP pro text";
  src: url(../nfile/SF-Pro-Text-Black.otf);
  font-family: "Roboto";
  src: url(../nfile/Roboto-Black.ttf);
}

.panel {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.panel-text {
  width: 51%;
  display: flex;
  align-items: start;
  justify-content: right;
}

.panel-text h5 {
  font-size: 24px;
  /* font-family: Roboto; */
  font-weight: 550;
  line-height: 0px;
}
</style>