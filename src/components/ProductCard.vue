<template>
  <div :class="classItem">
    <img :src="require(`@/assets/img/${card.image}`)" :alt="card.image" />
    <div class="best__item-title">{{ card.name }}</div>
    <div class="best__item-price">{{ card.price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    classItem: {
      type: String,
      required: false,
    },
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>
