<template>
  <div>
    <div class="home">
      <div class="home-flex">
        <div class="add-text">
          <h1>Добавить технику</h1>
          <router-link class="add-text-img" to="/zakaz"><img :src="require('../nimg/right.png')" alt=""></router-link>
        </div>
        <div class="add-img-or-p">
          <p>Добавьте фото или ссылку на чек</p>
        </div>
        <div class="chek-img">
          <div class="chek-img-border">
            <img :src="require('../nimg/17.png')" alt="">
            <p>Добавить фото чека</p>
          </div>
        </div>
        <div class="chek-link">
          <div class="chek-link-border">
            <img :src="require('../nimg/link.png')" alt="">
            <p>Ссылка на чек</p>
          </div>
        </div>
      </div>
      <div class="add-about-btn">
        <button>Сохранить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.add-about-btn button {
  background: linear-gradient(176.61deg, #ED9700 2.73%, #EFC881 95.26%);
  box-shadow: 5px 4px 10px rgba(237, 151, 0, 0.3);
  border-radius: 10px;
  width: 238px;
  height: 50px;
  border: none;
  cursor: pointer;
}

.add-about-btn {
  width: 100%;
  margin-top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chek-link-border img {
  margin-top: 12px;
}

.chek-link-border p {
  color:
    #9F9F9F;
  font-weight: 500;
  font-size: 12px;
  line-height: 40px;
  margin-left: 5px;
}

.chek-link {
  width: 100%;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chek-link-border {
  width: 312px;
  padding-left: 20px;
  height: 44px;
  background: #FFFFFF;
  border: 1px solid #EFC881;
  border-radius: 10px;
  display: flex;
  align-items: start;
  justify-content: left;
}

.chek-img-border img {
  color:
    #9F9F9F;
  width: 20px;
}

.chek-img-border p {
  color:
    #9F9F9F;
  font-weight: 700;
  font-size: 10px;
  margin-top: 15px;
  line-height: 0px;
  /* line-height: 10px; */
}

.chek-img {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chek-img-border {
  width: 308px;
  height: 149px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(176.61deg, rgba(237, 151, 0, 0.3) 2.73%, rgba(239, 200, 129, 0.3) 95.26%);
  border-radius: 10px;
  flex-direction: column;
}

.home-flex {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: start;
  justify-content: top;
  flex-direction: column;
}

.add-img-or-p {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-img-or-p p {
  color: #9F9F9F;
  font-weight: 500;
  font-size: 14px;
  line-height: 0px;
  letter-spacing: 0.01em;
}

.add-text h1 {
  font-weight: 500;
  font-size: 24px;
  line-height: 20px;
}

.add-text-img {
  position: absolute;
  top: 30px;
  left: 20px;
}

.add-text {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: space-around;
}

.home {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}</style>