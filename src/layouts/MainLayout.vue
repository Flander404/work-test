<template>
  <div>
    <div class="menu">
      <img to="home" :src="require('../nimg/1.png')" alt="">
      <img :src="require('../nimg/11.png')" alt="">
      <img :src="require('../nimg/22.png')" alt="">
      <img :src="require('../nimg/33.png')" alt="">
      <img :src="require('../nimg/44.png')" alt="">
    </div>
    
  </div>
</template>

<style scoped>
.menu {
  /* margin-top: 10px; */
  width: 100%;
  position: fixed;
  bottom: 5px;
  left: 0;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 0.5px solid rgba(159, 159, 159, 0.6);
}
</style>