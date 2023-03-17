<template>
    <div>
        <h1 class="chat-01">Чат</h1>
        <div class="crd-d">
            <i class='bx bx-message'></i>
            <h1>Консультация</h1>
            <i class='bx bx-chevron-right'></i>
        </div>
        <h1 class="napisa-t">Написать в поддержку</h1>

        <div class="chats-la">
            <div class="chat-cha">
                <i class='bx bx-error-circle'></i>
                <h1>Задать вопрос по работе сервиса</h1>
                <i class='bx bx-chevron-right'></i>
            </div>
            <hr>
            <div class="chat-cha">
                <i class='bx bx-error-circle'></i>
                <h1>Вопрос по заявке</h1>
                <i class='bx bx-chevron-right'></i>
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
              <router-link to="/person" class="roter">
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
              <router-link to="/setting" class="roter">
                <i class='bx bx-cog'></i>
                <p>Мастера</p>
              </router-link>
            </div>

          </div>
    </div>
</template>

<style>
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
.chat-01 {
    text-align: center;
    font-size: 25px;
}

.crd-d h1 {
    font-size: 15px;
}

.crd-d {
    width: 90%;
    height: 45px;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    border: 1px solid #EFC881;
}

.bx-message {
    color: #EFC881;
}

.napisa-t {
    font-size: 20px;
    margin-left: 10%;
}

.chat-cha h1 {
    font-size: 17px;
    width: 90%;
    margin-left: 2%;
    line-height: 25px;
}

.chat-cha {
    width: 90%;
    margin: auto;
    height: 60px;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
}

.chat-cha .bx-chevron-right {
    color: gray;
}

.chat-cha .bx-error-circle {
    color: #EFC881;
}

.chats-la {
    border-radius: 10px;
    border: 1px solid #EFC881;
    width: 90%;
    margin: auto;
}

.chats-la hr {
    width: 90%;
    border-top: 1px solid #EFC881;
}</style>