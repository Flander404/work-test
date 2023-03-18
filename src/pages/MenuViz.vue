<template>
    <div>
        <div class="home">
            <div class="viz">
                <h1>Вызов</h1>
            </div>
            <div class="viz-dow">
                <p>Что нужно установить?</p>
            </div>
            <div class="viz-select">
                <select name="" id="">
                    <option value="">Добавить услугу</option>
                    <option value="">Моноблоки</option>
                    <option value="">Компьютеры</option>
                </select>
            </div>
            <div class="viz-about">
                <div class="viz-about-flex">
                    <h1>Установка и подключение отдельно стоящей стиральной машины</h1>
                    <h2>В работу по стандартной установке стиральной машины входит: Выезд мастера в пределах МКАД; снятие транспортировочных креплений у стиральной машины...</h2>
                </div>
            </div>
            <div class="viz-dow">
                <p>Информация о Вас</p>
            </div>
            <div class="viz-inp">
                <input style="margin-top: 0px;" placeholder="ФИО" type="text">
                <input placeholder="Адрес" type="text">
                <input placeholder="Номер телефона" type="text">
                <input placeholder="Дата приезда" type="date">
            </div>
            <div class="viz-time">
                <button style="background: rgba(237, 151, 0, 0.1);">9:00-16:00</button>
                <button>16:00-21:00</button>
                <button>16:00-21:00</button>
            </div>
            <div class="viz-inp-2">
                <input placeholder="Комментарий" type="text">
                <button><i style="margin-right: 10px;" class='bx bx-paperclip bx-rotate-270'></i>Прикрепить фото или видео</button>
            </div>
            <div class="viz-summ">
                <div class="viz-summ-flex">
                    <p>Ваш заказ на сумму: <span>2.500 руб.</span> </p>
                </div>
            </div>
            <div class="viz-btn">
                <button>Отправить заказ</button>
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

<style scoped>
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
.viz-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.viz-btn button {
    width: 238px;
    height: 50px;
    background: linear-gradient(176.61deg, #ED9700 2.73%, #EFC881 95.26%);
    box-shadow: 5px 4px 10px rgba(237, 151, 0, 0.3);
    border-radius: 10px;
    border: none;
}

.viz-summ-flex span {
    color:
        #9F9F9F;
}

.viz-summ {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.viz-summ-flex {
    width: 80%;
    display: flex;
    align-items: start;
    justify-content: left;
}

.viz-summ-flex p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color:
        #333333;
}

.viz-inp-2 button {
    margin-top: 10px;
    width: 90%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    background: #FFFFFF;
    display: flex;
    border: 1px solid #EFC881;
    border-radius: 10px;
}

.viz-inp-2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

.viz-inp-2 input {
    width: 90%;
    /* height: 144px; */
    background: #FFFFFF;
    border: 1px solid #EFC881;
    border-radius: 10px;
    padding-top: 15px;
    padding-bottom: 55px;
    padding-left: 15px;
}

.viz-time {
    width: 85%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.viz-time button {
    color: #9F9F9F;
    width: 30%;
    /* height: 26px; */
    padding-top: 5px;
    padding-bottom: 5px;
    border: 1px solid #EFC881;
    border-radius: 3px;
    background: #FFF;
}

.viz-inp {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

.viz-inp input {
    margin-top: 10px;
    padding-left: 20px;
    width: 90%;
    height: 44px;
    background: #FFFFFF;
    border: 1px solid #EFC881;
    border-radius: 10px;
}

::placeholder {
    color: #9F9F9F;
}

.viz-about {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.viz-about-flex {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

.viz-about-flex h1 {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #333333;
}

.viz-about-flex h2 {
    color: #9F9F9F;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
}

.viz-select select {
    width: 90%;
    padding-left: 10px;
    height: 44px;
    border: 1px solid #EFC881;
    border-radius: 10px;
    color: #9F9F9F;
}

.select-items div,
.select-selected {
    color: red;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

.viz-select {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.viz-dow {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: left;
    padding-left: 40px;
}

.viz-dow p {
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
}

.home {
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

.viz {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.viz h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 10px;
    margin-top: 50px;
}
</style>