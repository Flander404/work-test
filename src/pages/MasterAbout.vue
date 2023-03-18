<template>
  <div>
    <div class="home">
      <div class="home-like">
        <div class="home-like-flex">
          <router-link to="/master">
            <i class='bx bx-left-arrow-alt'></i>
          </router-link>
          <router-link to="#">
            <i class='bx bx-heart'></i>
          </router-link>
        </div>
      </div>
      <div class="master">
        <div class="master-border">
          <img :src="require('../nimg/master.png')" alt="">
          <div class="border-text">
            <h1>Павел Викторович</h1>
            <p>Выполнено заказов: 67</p>
            <div class="otzav">
              <p>Отзывы: </p>
              <li>32</li>
              <li>2</li>
            </div>
          </div>
          <div class="border-i">
            <i style="color: #ED9700;" class='bx bxs-star'></i>
            <p>4.8</p>
          </div>
          <button>Вызвать</button>
        </div>
      </div>
      <div class="cards-text">
        <div class="cards-text-flex">
          <h1>Выполенные работы:</h1>
          <p>Сортировка <i class='bx bx-chevron-down'></i></p>
        </div>
      </div>
      <div class="cards2">
        <div class="card">
          <div class="card-text">
            <div class="card-text-flex">
              <h1>Замена <br> компрессора</h1>
              <p style="margin-top: 8px;">Дата: 28.02.23</p>
              <p>Цена: 11.900 руб.</p>
            </div>
          </div>
          <div class="card-img">
            <img :src="require('../nimg/444.png')" alt="">
          </div>
          <div class="card-btn">
            <button>Подробнее</button>
          </div>
        </div>
        <div class="card">
          <div class="card-text">
            <div class="card-text-flex">
              <h1>Замена <br> компрессора</h1>
              <p style="margin-top: 8px;">Дата: 28.02.23</p>
              <p>Цена: 11.900 руб.</p>
            </div>
          </div>
          <div class="card-img">
            <img :src="require('../nimg/444.png')" alt="">
          </div>
          <div class="card-btn">
            <button>Подробнее</button>
          </div>
        </div>
        <div class="card">
          <div class="card-text">
            <div class="card-text-flex">
              <h1>Замена <br> компрессора</h1>
              <p style="margin-top: 8px;">Дата: 28.02.23</p>
              <p>Цена: 11.900 руб.</p>
            </div>
          </div>
          <div class="card-img">
            <img :src="require('../nimg/444.png')" alt="">
          </div>
          <div class="card-btn">
            <button>Подробнее</button>
          </div>
        </div>
        <div class="card">
          <div class="card-text">
            <div class="card-text-flex">
              <h1>Замена <br> компрессора</h1>
              <p style="margin-top: 8px;">Дата: 28.02.23</p>
              <p>Цена: 11.900 руб.</p>
            </div>
          </div>
          <div class="card-img">
            <img :src="require('../nimg/444.png')" alt="">
          </div>
          <div class="card-btn">
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-btn button{
  width: 86px;
  height: 24px;
  background: linear-gradient(176.61deg, #ED9700 2.73%, #EFC881 95.26%);
border-radius: 10px;
border: none;
  font-size: 10px;
}
.card-btn{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-img{
  margin-top: -10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-text-flex h1{
  font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #333333;
}
.card-text-flex p{
  font-weight: 500;
font-size: 8px;
line-height: 0px;
color: #9F9F9F;
}
.cards2{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.card-text-flex{
  width: 90%;
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
  border: none;
}
.card-text{
  width: 100%;
  align-items: center;
  justify-content: space-around;
  display: flex;
  /* flex-direction: column; */
}
.card{
  margin-top: 10px;
  width: 148px;
  border: 1px solid #EFC881;
border-radius: 10px;
  height: 213px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
.cards-text-flex p {
  font-weight: 500;
  margin-top: 15px;
  font-size: 12px;
  line-height: 20px;
  color: #9F9F9F;
}

.cards-text-flex h1 {
  color:
    #333333;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}

.cards-text {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards-text-flex {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.border-i p {
  font-weight: 500;
  margin-left: 5px;
  font-size: 10px;
  margin-top: 17px;
  line-height: 20px;
  color: #9F9F9F;
}

.border-i {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: 10px;
}

.master-border button {
  width: 86px;
  height: 24px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: linear-gradient(176.61deg, #ED9700 2.73%, #EFC881 95.26%);
  border-radius: 10px;
  border: none;
}

.otzav p {
  line-height: 0px;
}

.otzav {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.otzav li {
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  height: 6px;
  color:
    #9F9F9F;
}

.border-text p {
  font-weight: 500;
  height: 0px;
  font-size: 10px;
  line-height: 20px;
  color:
    #9F9F9F;
}

.border-text h1 {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
}

.border-text {
  margin-left: -50px;
  width: 50%;
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
  margin-top: -40px;
}

.master-border {
  position: relative;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 117px;
  background: #FFFFFF;
  border: 1px solid #EFC881;
  border-radius: 10px;
}

.master {
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.home-like-flex i {
  font-size: 30px;
  color: #000;
}

.home-like {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-like-flex {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.home {
  padding-top: 100px;
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
</style>