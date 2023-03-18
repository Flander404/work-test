<template>
    <div>
        <div class="h1-no-3">
            <router-link to="/profile">
            <i class='bx bx-left-arrow-alt'></i>
            </router-link>
            <h1>Мои заказы</h1>
        </div>
        <div class="minnav">
            <h2 style="width: 50%; height: 100%; background: #FFFFFF;
    border: 1px solid #EFC881; line-height: 38px;
    border-radius: 20px;">Активные</h2>
            <h2>Завершенные</h2>
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
    </div>
</template>

<style>
.zakaz-border {
  width: 90%;
  margin-top: 30px;
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

.zakaz h3 {
  font-size: 14px;
  color: #333333;
  line-height:
    15px;
  font-weight: 400;
}

.zakaz {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

}
.h1-no-3{
    display: flex;
    align-items: center;
    width: 70%;
    justify-content: space-between;
    font-size: 25px;
    margin-left: 7%;
    margin-top: -10px;
}
.h1-no-3 h1{
    font-size: 30px;
}
.minnav{
    width: 90%;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    background: #FAFAFA;
    margin: 0 auto;
    border-radius: 30px;
}
.minnav h2{
    border-radius: 30px;
    text-align: center;
    font-size: 19px;
    border: 1px solid #FAFAFA;
}
.minnav h2:active{
    border: 1px solid #EFC881;
    color: #EFC881;
}
.vrabote{
    width: 90%;
    border: 1px solid #EFC881;
    border-radius: 10px;
    margin: auto;
    margin-top: 20px;
}
.zaka-z h2{
    font-size: 17px;
    color: black;
    font-weight: 600;
}
.zaka-z{
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin: auto;
    align-items: center;
}
.btn-p{
    width: 25%;
    height: 25px;
    border: 1px solid #90A554;
    background: none;
    border-radius: 10px;
    font-size: 1px;
    font-weight: 600;
    color: #90A554;
    outline: none;
}
.vrabote p{
    margin-left: 5%;
}
.vrabote p span{
    color: gray;
}
.icnbr{
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: space-between;
}
.bx-right-arrow-alt{
    width: 30px;
    padding: 3px;
    text-align: center;
    font-size: 20px;
    background: linear-gradient(176.61deg, rgba(237, 151, 0, 0.7) 2.73%, rgba(239, 200, 129, 0.7) 95.26%);
border-radius: 10px;
margin-top: -3px;
padding-bottom: 3px;
align-items: center;
}
</style>