<template>
    <div>
        <div class="h1-no-4">
            
                <router-link to="/profile"><i class='bx bx-left-arrow-alt'></i></router-link>
            <h1>Заказ №2323434</h1>
            <input type="radio">
        </div>
        <div class="pla-01">
            <p>Дата и время: <span> 03.03 в 15:00</span></p>
            <p>Услуги: <span> Диагностика, замена кнопки и сетевго шнура</span></p>
            <p>Стоимость: <span> 2.500 руб.</span></p>
            <p>Мастер: <span>Антон</span></p>
        </div>
        <div class="oplatit">
            <button class="oplatit-btn">Оплатить картой</button>
        </div>
        <div class="error1">
            <i class='bx bx-error-circle'></i>
            <p style="font-weight: 400;
    font-size: 8px;
    line-height: 14px;" class="tri">Если мастер взял с Вас сумму большую чем указано в приложении,<br> свяжитесь с нами любым удобным способом.
            </p>
        </div>
        <div class="rightdv">
            <p>Предварительный расчет</p>
            <i class='bx bx-chevron-right'></i>
        </div>
        <div class="rightdv">
            <p>Акт выполненных работ</p>
            <i class='bx bx-chevron-right'></i>
        </div>
        <div class="rightdv">
            <p>Электронный чек</p>
            <i class='bx bx-chevron-right'></i>
        </div>
        <button class="chats-s">Чат по заказу</button>
    </div>
</template>

<style>
p {
    margin: 0 0 0px;
}
.h1-no-4 {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin: auto;
}

.h1-no-4 h1 {
    font-size: 25px;
    font-weight: 600;
}

.h1-no-4 i {
    font-size: 25px;
}

.pla-01 {
    margin-top: -20px !important;
    width: 80%;
    margin: auto;
}
.pla-01 p{
    line-height: 25px;
}
.pla-01 p span {
    color: gray;
}

.oplatit button {
    width: 187px;
    margin-top: 20px;
    height: 34px;
    border: none;
    background: linear-gradient(180deg, rgba(239, 200, 129, 0.7) 15.85%, rgba(245, 184, 73, 0.7) 100%);
    border-radius: 10px;
    margin-left: 25%;
    font-style: normal;
}

.error1 {
    margin-top: 20px !important;
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    margin-bottom:20px;
}


.rightdv {
    border: 1px solid #EFC881;
    margin-top: 20px;
    width: 90%;
    height: 44px;
    padding-left: 20px;
    padding-right: 4px;
    color: gray;
    margin: auto;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    border-radius: 10px;
}

.rightdv i {
    margin-top: 10px;
}

.rightdv p {
    font-weight: 500;
font-size: 12px;
margin-top: 10px;
line-height: 20px;
}

.chats-s {
    width: 50%;
    height: 50px;
    border: none;
    color: white;
    font-weight: 600;
    margin-left: 26%;
    margin-top: 150px;
    background: linear-gradient(176.61deg, #ED9700 2.73%, #EFC881 95.26%);
    box-shadow: 5px 4px 10px rgba(237, 151, 0, 0.3);
    border-radius: 10px;
}
</style>