<template>
    <div>
        <div class="h1-no-3">
            <i class='bx bx-left-arrow-alt'></i>
            <h1>Личные данные</h1>
        </div>
        <div class="minnav">
            <h2>Активные</h2>
            <h2>Завершенные</h2>
        </div>
        <div class="vrabote">
            <div class="zaka-z">
                <h2>Заказ №2323434</h2>
                <button class="btn-p">В работе</button>
            </div>
            <p>Дата и время: <span>  03.03 15:00</span></p>
            <p>Услуга: <span> Диагностика холодильника</span></p>
            <p>Стоимость: <span>2.000 руб.</span></p>
            <div class="icnbr">
            <p>Мастер: <span> Антон</span></p>
            <i class='bx bx-right-arrow-alt'></i>
        </div>
        </div>
    </div>
</template>

<style>
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
    justify-content: space-evenly;
    background: #FAFAFA;
    margin: auto;
    border-radius: 30px;
}
.minnav h2{
    width: 50%;
    height: 40px;
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