<template>
  <div class="about-us__item">
    <div class="about-us__item__person">
    </div>

    <div class="about-us__item__info">
      <p class="about-us__item__info__title">{{ item.name }}</p>
      <p class="about-us__item__info__subTitle">
        <span>a.k.a</span>{{ item.aka }}
      </p>
      <div class="about-us__item__info__social">
        <span class="about-us__item__info__social__twitter"></span>
        <span class="about-us__item__info__social__instagram"></span>
      </div>
      <div class="about-us__item__info__content">
        {{ item.desc }}
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'about-us-item',
  props: ['item'],
};
</script>
