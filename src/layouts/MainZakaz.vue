<template>
  <div>
    <div class="home">
      <div class="add-text">
        <h1>Добавить технику</h1>
        <p>DEXP WM-F610NTMA/WW</p>
        <img :src="require('../nimg/right.png')" alt="">
      </div>
      <div class="zakaz-img">
        <div class="zakaz-img-border">
          <img :src="require('../nimg/image 2.png')" alt="">
        </div>
      </div>
      <div class="zakaz-chek">
        <div class="check">
          <img :src="require('../nimg/17.png')" alt="">
          <p>Чек</p>
        </div>
        <div class="check">
          <img :src="require('../nimg/17.png')" alt="">
          <p>Гарантия</p>
        </div>
        <div class="check">
          <img :src="require('../nimg/17.png')" alt="">
          <p>Шильдик</p>
        </div>
      </div>
      <div class="href">
        <div class="href-master">
          <h1>Смотреть инструкии</h1>
          <img :src="require('../nimg/left.png')" alt="">
        </div>
      </div>
      <div class="zakaz-about">
        <div class="zakaz-about-border">
          <div class="zakaz-about-border-flex">
            <h1>Основная информация</h1>
            <h2>Категория: <span>стиральные машины</span></h2>
            <h2>СМА: </h2>
            <h2>Бренд: <span>DEXP WM</span></h2>
            <h2>Candy: </h2>
          </div>
        </div>
      </div>
      <div class="zakaz-question">
        <button><img style="margin-right: 5px;" :src="require('../nimg/sms.png')" alt=""> Задать вопрос эксперту</button>
      </div>
      <div class="add-about-btn">
        <button>Сохранить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.add-about-btn button{
  background: linear-gradient(176.61deg, #ED9700 2.73%, #EFC881 95.26%);
box-shadow: 5px 4px 10px rgba(237, 151, 0, 0.3);
border-radius: 10px;
  width: 238px;
  height: 50px;
  border: none;
  cursor: pointer;
}
.add-about-btn{
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.zakaz-question {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.zakaz-question button {
  width: 312px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #EFC881;
  border-radius: 10px;
  background: #FFFFFF;
}

.zakaz-about-border-flex {
  width: 90%;
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
}

.zakaz-about-border h1 {
  font-weight: 500;
  font-size: 14px;
  line-height: 10px;
  color: #333333;
  letter-spacing: 0.01em;
}

.zakaz-about-border h2 {
  color: #333333;
  font-weight: 500;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.01em;
}

.zakaz-about-border span {
  color: #9F9F9F;
}

.zakaz-about {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.zakaz-about-border {
  width: 312px;
  height: 157px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* flex-direction: column; */
  border: 1px solid #EFC881;
  border-radius: 10px;
}

.href-master img {
  position: absolute;
  top: 13px;
  right: 14px;
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
  width: 90%;
  position: relative;
  padding-top: 5px;
  padding-left: 20px;
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
  padding-top: 10px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* padding-top: 10px; */
  /* padding-bottom: 10px; */
}

p {
  margin: 0 0 0px;
}

.check p {
  color:
    #9F9F9F;
  margin-left: 3px;
  font-weight: 700;
  font-size: 8px;
  /* line-height: 10px; */
  letter-spacing: 0.01em;
}

.zakaz-chek {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.check {
  width: 90px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #EFC881;
  border-radius: 10px;
}

.zakaz-img img {
  position: absolute;
  top: -50px;
  left: 37px;
}

.zakaz-img {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.zakaz-img-border {
  width: 229px;
  height: 149px;
  position: relative;
  background: linear-gradient(176.61deg, rgba(237, 151, 0, 0.5) 2.73%, rgba(239, 200, 129, 0.5) 95.26%);
  border-radius: 10px;
}

.add-text p {
  font-weight: 500;
  font-size: 14px;
  line-height: 10px;
  color: #9F9F9F;
}

.add-text h1 {
  font-weight: 500;
  font-size: 24px;
  line-height: 20px;
}

.add-text img {
  position: absolute;
  top: 30px;
  left: 20px;
}

.home {
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.add-text {
  position: relative;
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 30px;
  justify-content: space-around;
}
</style>