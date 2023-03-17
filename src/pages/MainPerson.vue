<template>
    <div>
        <div class="h1-no-2">
            <i class='bx bx-left-arrow-alt'></i>
            <h1>Личные данные</h1>
        </div>
        <h3 class="obsha-02">Общая информация:</h3>
        <div class="form01">
            <input type="text" placeholder="Имя">
            <input type="text" placeholder="Отчество">
            <input type="text" placeholder="Дата рождения">
        </div>
        <div class="radio">
            <div class="rad">
                <input type="radio">
                <p>Мужской</p>
            </div>
            <div class="rad">
                <input type="radio">
                <p>Женский</p>
            </div>
        </div>
        <h3 class="obsha-03">Контакты:</h3>
        <div class="form01">
            <input type="text" placeholder="Телефон">
            <input type="text" placeholder="Электронная почта">
        </div>
        <h3 class="obsha-03">Контакты:</h3>
        <div class="tele-02">
            <input type="text" placeholder="Телефон">
        </div>
        <div class="trlle">
            <input type="text" placeholder="Подъезд">
            <input type="text" placeholder="Этаж">
            <input type="text" placeholder="Домофон">
        </div>
        <div class="linrr">
        <button class="linerbtn">Сохранить</button>
    </div>
    </div>
</template>

<style>
.h1-no-2{
    display: flex;
    align-items: center;
    width: 70%;
    justify-content: space-between;
    font-size: 25px;
    margin-left: 7%;
    margin-top: -10px;
}
.h1-no-2 h1{
    font-size: 30px;
}
.obsha-02{
    margin-top: -10px;
    font-size: 20px;
    margin-left: 15%;
}
.form01{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}
.form01 input{
    width: 90%;
    border: 1px solid #EFC881;
    margin-top: 7px;
    padding: 5px;
    border-radius: 7px;
    height: 40px;
    font-size: 10px;
    padding-left: 15px;
}
.form01 input:focus{
    outline: 2px solid #EFC881;
}
.radio{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 10px;
}
.rad{
    width: 25%;
    display: flex;
    height: 20px;
    justify-content: space-evenly;
}
.rad input{
  background: red;
  border: 10px solid red;
}
.obsha-03{
    font-size: 20px;
    line-height: 10px;
    margin-left: 15%;
}
.tele-02{
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
}
.tele-02 input{
    margin: auto;
    width: 90%;
    border: 1px solid #EFC881;
    margin-top: 7px;
    padding: 5px;
    border-radius: 7px;
    height: 40px;
    font-size: 10px;
    padding-left: 15px;
}
.trlle{
    width: 94%;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.trlle input{
    width: 30%;
    height: 40px;
    border-radius: 7px;
    border: 1px solid #EFC881;
    margin-top: 10px;
    padding-left: 5px;
    font-size: 15px;
    margin-left: 2%;
}
.linrr{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.linerbtn{
    Width: 228px;
    Height: 50px;
    background: linear-gradient(176.61deg, #ED9700 2.73%, #EFC881 95.26%);
box-shadow: 5px 4px 10px rgba(237, 151, 0, 0.3);
border-radius: 10px;
border: none;
color: white;
font-weight: 600;
}
</style>