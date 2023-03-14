<template>
  <div>
    <div class="first-page">
      <div class="first-page-img">
        <img :src="require('../nimg/12.png')" alt="" />
      </div>
      <div class="first-page-loading">
        <h5>Загрузка.</h5>
      </div>
    </div>
    <div class="second-page">
      <div class="second-page-flex">
        <div class="second-page-img">
          <img :src="require('../nimg/12.png')" alt="" />
        </div>
        <div class="second-page-h1">
          <h3>Авторизация</h3>
        </div>
        <div class="second-page-p">
          <p>
            Для входа используйте номер <br />
            своего телефона
          </p>
        </div>
        <div class="second-page-inp">
          <select name="num" id="num">
            <option value="">ru</option>
            <option value="">uz</option>
            <option value="">en</option>
          </select>
          <input placeholder="+ 7 (965) 668 - 15 - 98" type="number" />
        </div>
      </div>

      <div class="second-page-btn">
        <button>Отправить код</button>
      </div>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

select#xyz option {
  border: none;
}

.second-page-flex {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

select {
  width: 43px;
  height: 36px;
  background: #f6ecd9;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.second-page-inp {
  width: 65%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.second-page-inp input {
  width: 204px;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 36px;
  background: #f7ecd9;
  border: none;
  padding-left: 10px;
  color: #000;
}

input:focus {
  outline: none;
}

.second-page-btn button {
  width: 238px;
  height: 50px;
  background: linear-gradient(176.61deg, #ed9700 2.73%, #efc881 95.26%);
  box-shadow: 5px 4px 10px rgba(237, 151, 0, 0.3);
  border-radius: 10px;
  color: #fff;
  border: none;
}

::placeholder {
  color: #252525;
  opacity: 1;
  /* Firefox */
}

.first-page {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #ed9700 20%, #efc881 30%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.first-page-loading h5 {
  font-size: 17px;
  color: #333333;
  letter-spacing: -0.408px;
  font-weight: 600;
  font-family: RP pro text;
}

.first-page-img {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.first-page-img img {
  width: 75%;
}

@font-face {
  font-family: "RP pro text";
  src: url(../nfile/SF-Pro-Text-Black.otf);
  font-family: "Roboto";
  src: url(../nfile/Roboto-Black.ttf);
}

.second-page {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* background: #000; */
}

.second-page-img {
  padding-top: 30px;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.second-page-h1 {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
}

.second-page-h1 h3 {
  color: #ed9700;
  font-family: Roboto;
  font-size: 28px;
}

.second-page-img img {
  width: 75%;
}

.second-page-p {
  width: 100%;
  text-align: center;
}

.second-page-p p {
  color: #9f9f9f;
  font-size: 16px;
  font-weight: 600;
  font-family: Roboto;
}
</style>

<script>
// function my() {
//   document.querySelector(".first-page").style = "display: none"
//   document.querySelector(".second-page").style = "display: flex"
// }
// setTimeout(() => {
//   my()
// }, 5000);
</script>
