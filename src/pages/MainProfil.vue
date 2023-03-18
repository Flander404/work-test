<template>
    <div>
        <div class="h1-no">
            <router-link to="/home">
                <i class='bx bx-left-arrow-alt'></i>
            </router-link>

            <h1>Профиль</h1>
        </div>
        <div class="a-cards">
            <div class="a-card">
                <img :src="require('../nimg/177.png')" alt="">
            </div>
            <div class="a-card1">
                <h1>Павел</h1>
                <p>+ 7 (965) 568 - 15 - 98</p>
                <p>pavelkv@gmail.com</p>
            </div>
            <i class='bx bx-chevron-right'></i>
        </div>
        <div class="conta">
            <router-link class="mincon" to="/person"><i class='bx bx-user-circle'></i>
                <h3>Личные данные</h3>
                <i class='bx bx-chevron-right' id="rightt"></i>
            </router-link>
            <hr>
            <router-link class="mincon" to="/setting"> <i class='bx bx-credit-card'></i>
                <h3>Мои карты</h3>
                <i class='bx bx-chevron-right' id="rightt"></i>
            </router-link>
            <hr>
            <router-link to="/order" class="mincon"><i class='bx bx-heart'></i>
                <h3>Мои заказы</h3>
                <i class='bx bx-chevron-right' id="rightt"></i>
            </router-link>
        </div>
        <div class="conta">
            <div class="mincon">
                <i class='bx bx-file-blank'></i>
                <h3>Личные данные</h3>
                <i class='bx bx-chevron-right' id="rightt"></i>
            </div>
            <hr>
            <div class="mincon">
                <i class='bx bx-alarm-exclamation'></i>
                <h3>Мои карты</h3>
                <i class='bx bx-chevron-right' id="rightt"></i>
            </div>
        </div>
        
        <router-link to="/"><h3 class="viyt">Выйти из профиля</h3></router-link>
        <p class="udalt">Удалить профиль</p>
    </div>
</template>

<style scoped>
.h1-no {
    display: flex;
    align-items: center;
    width: 60%;
    justify-content: space-between;
    font-size: 25px;
    margin-left: 7%;
}

.h1-no h1 {
    font-size: 30px;
}

.a-cards {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-items: center;
}

.a-card {
    /* width: 60%; */
    align-items: center;
}

.a-card1 h1 {
    font-size: 25px;
    margin-bottom: 35px;
    height: 38px;
    margin-top: -20px;
}

.a-card img {
    width: 100px;
    /* margin-top: 40px; */
}

.a-card1 p {
    line-height: 5px;
    margin-top: 0px;
    color: #9F9F9F;
}

.bx-chevron-right {
    font-size: 30px;
    color: #9F9F9F;
}

.conta {
    margin-top: 30px !important;
    width: 90%;
    margin: auto;
    border: 1px solid #EFC881;
    border-radius: 10px;
}

.mincon {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 50px;
}

.conta hr {
    width: 90%;
    border: 1px solid #EFC881;
}

.mincon h3 {
    width: 60%;
    font-size: 20px;
    color: #000;
}

.mincon i {
    font-size: 25px;
    color: #EFC881;
}

.viyt {
    font-size: 17px;
    text-align: center;
    color: #EFC881;
}

.udalt {
    text-align: center;
    color: #9F9F9F;
    margin-top: -15px;
}
</style>