<template>
  <div>
    <div class="add">
      <div class="add-text">
        <h1>Добавить технику</h1>
        <img :src="require('../nimg/right.png')" alt="">
      </div>
      <div class="add-img">
        <div class="add-img-bor">
          <img :src="require('../nimg/add-img.png')" alt="">
        </div>
        <p>Изменить фото</p>
      </div>
      <div class="add-next-text">
        <div class="add-next-text-flex">
          <h1>Основная ифнормация:</h1>
        </div>
      </div>
      <div class="add-select">
        <select name="" id="">
          <option value="">Категория</option>
          <option value="">Моноблоки</option>
          <option value="">Компьютеры</option>
        </select>
        <select name="" id="">
          <option value="">Бренд</option>
          <option value="">Моноблоки</option>
          <option value="">Компьютеры</option>
        </select>
        <input placeholder="Модель" type="text">
        <input placeholder="Серийный номер" type="text">
      </div>
      <div class="add-about">
        <div class="add-about-text">
          <div class="add-about-text-flex">
            <h1>Данные о покупке</h1>
          </div>
        </div>
        <div class="add-about-inp">
          <input placeholder="Магазин" type="text">
          <input placeholder="Дата покупки" type="date">
        </div>
        <div class="add-about-btn">
          <button>Сохранить</button>
        </div>
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
.add-about-inp {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.add-about-inp input {
  width: 90%;
  margin-top: 10px;
  padding-left: 10px;
  height: 44px;
  border: 1px solid #EFC881;
  border-radius: 10px;
  color: #9F9F9F;
}

.add-about {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.add-about-text {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.add-about-text-flex {
  width: 80%;
  display: flex;
  align-items: start;
  justify-content: left;
}

.add-about-text-flex h1 {
  font-weight: 500;
  font-size: 18px;
  line-height: 0px;
  margin-top: 20px;
  letter-spacing: 0.01em;
  color: #333333;
}

.add-select input {
  width: 90%;
  margin-top: 10px;
  padding-left: 10px;
  height: 44px;
  border: 1px solid #EFC881;
  border-radius: 10px;
  color: #9F9F9F;
}

::placeholder {
  color: #9F9F9F;
  opacity: 1;
  /* Firefox */
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

.add-select {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.add-select select {
  width: 90%;
  margin-top: 10px;
  padding-left: 10px;
  height: 44px;
  border: 1px solid #EFC881;
  border-radius: 10px;
  color: #9F9F9F;
}

.add-next-text-flex h1 {
  font-weight: 500;
  font-size: 18px;
  line-height: 0px;
  color: #333333;
}

.add-next-text {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.add-next-text-flex {
  width: 80%;
  display: flex;
  align-items: start;
  justify-content: left;
}

.add-img p {
  font-weight: 500;
  font-size: 10px;
  line-height: 0px;
  margin-top: 20px;
}

.add-img {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.add-img-bor {
  width: 177px;
  height: 149px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(176.61deg, rgba(237, 151, 0, 0.3) 2.73%, rgba(239, 200, 129, 0.3) 95.26%);
  border-radius: 10px;
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

.add {
  width: 100%;
  height: 95vh;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.add-text {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: space-around;
}</style>