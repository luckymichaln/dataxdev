<template>
  <div class="industries-list">
    <div class="container">
      <header class="industries-list">
        <prismic-rich-text
          :field="heading"
          class="industries-list__heading heading-3"
        />
      </header>
      <div class="industries-list__cards">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="card"
        >
          <img
            v-if="card.image.url"
            :src="card.image.url"
            :alt="card.image.alt"
            class="card-image"
          />
          <span class="card-text">{{ card.industries }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: Array,
      default: () => []
    },
    cards: {
      type: Array,
      default: () => []
    }
  },
}
</script>