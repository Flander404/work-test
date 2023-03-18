<template>
    <div>
        <h1 class="master-er">Мастера</h1>
        <div class="sort">
            <p>Сортировка</p>
            <i class='bx bx-chevron-left bx-rotate-270'></i>
        </div>
        <!-- <div class="card">
            <div class="musa">
            <img class="imagege" :src="require('../nimg/Catching a breath between the work.png')" alt="">
            </div>
            <div class="crd">
                <div class="asw">
                    <h1>Павел Викторович</h1>
                    <p><i class='bx bxs-star bx-rotate-270' ></i>4.8</p>
                </div>
            </div>
    </div> -->
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
              <router-link class="master-border-button" to="/about">
              Подробнее
              </router-link>
              
            </div>
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
              <router-link class="master-border-button" to="/about">
                  Подробнее
                  </router-link>
            </div>
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
              <router-link class="master-border-button" to="/about">
                  Подробнее
                  </router-link>
            </div>
          </div>
          <div class="menu">
            <div class="vb">
              <router-link to="/home" class="roter">
                <i class='bx bxs-home'></i>
                <p>Главная</p>
              </router-link>
            </div>
            <div class="vb">
              <router-link to="/my" class="roter">
                <i class='bx bx-desktop'></i>
                <p class="texnika">Техника</p>
              </router-link>
            </div>
            <div class="vb">
              <router-link to="/viz" class="roter">
                <i class='bx bxs-phone'></i>
                <p>Вызов</p>
              </router-link>
            </div>
            <div class="vb">
              <router-link to="/chat" class="roter">
                <i class='bx bx-message'></i>
                <p>Чат</p>
              </router-link>
            </div>
            <div class="vb">
              <router-link to="/master" class="roter">
                <i class='bx bx-cog'></i>
                <p>Мастера</p>
              </router-link>
            </div>

          </div>
    </div>
</template>

<style>

.border-i p{
  font-weight: 500;
  margin-left: 5px;
font-size: 10px;
margin-top: 17px;
line-height: 20px;
color: #9F9F9F;
}
.border-i{
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: 10px;
}
.master-border-button{
  width: 86px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #000;
  height: 24px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: linear-gradient(176.61deg, #ED9700 2.73%, #EFC881 95.26%);
border-radius: 10px;
border: none;
}
.otzav p{
  line-height: 0px;
}
.otzav{
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.otzav li{
    font-weight: 500;
font-size: 10px;
line-height: 10px;
height: 6px;
color: 
#9F9F9F;
}
.border-text p{
  font-weight: 500;
  height: 0px;
font-size: 10px;
line-height: 20px;
color: 
#9F9F9F;
}
.border-text h1{
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
  margin-top: 10px;
}

.master {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
.menu {
  /* margin-top: 10px; */
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 5px;
  left: 0;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 0.5px solid rgba(159, 159, 159, 0.6);
  color: gray;
  text-align: center;
  padding-top: 20px;
}

.menu i {
  font-size: 30px;
  color: gray;
}

.menu .vb {
  width: 28%;
  padding-top: 10px;
}

.roter {
  color: gray;
  text-decoration: none;
  border-bottom: none;
}

.vb i:active {
  color: #ED9700;
}

.roter:active {
  color: #ED9700;
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
.fonts i {
    margin-top: 15px;
    color: #ED9700;
}

.car1d {
    width: 50%;
}

.btn-0021 {
    width: 60%;
    margin-bottom: 5px;
    height: 30px;
    /* font-size: 7px; */
    margin-left: 30%;
    background: #ED9700;
    border: none;
    border-radius: 7px;
}

.fontsw {
    color: gray;
    margin-top: -10px;
    margin-left: 10px;
}

.imagege {
    width: 70%;
    height: 150px;
}

.card {
    border: none;
    width: 60%;
}

.pas {
    justify-content: space-around;
    margin-left: -40px;
    margin-top: -10px;
    width: 100%;
    display: flex;
}

.fonts h1 {
    font-size: 17px;
    line-height: 60px;
}

.fonts {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: -20px;
}

.cards {
    width: 90%;
    display: flex;
    margin: auto;
    border: 1px solid #ED9700;
    padding: 3px;
    border-radius: 10px;
    margin-top: 10px;
}

/* .card h1{
    font-size: 20px;
} */
/* .crd{
    width: 50%;
}
.musa{
    width: 50%;
}
.asw{
    display: flex;
}
.asw h1{
    font-size: 17px;
}
.card{
    width: 90%;
    display: flex;
}
.imagege{
    width: 20%;
} */
.master-er {
    font-size: 20px;
    text-align: center;
}

.sort {
    display: flex;
    justify-content: space-between;
    width: 30%;
    align-items: center;
    font-size: 17px;
    margin-left: 60%;
    margin-top: -20px !important;
    color: gray;
}

.sort i {
    margin-top: -15px;
}</style>