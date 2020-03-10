<template>
  <main class="projects-home">
    <div class="container">
      <header class="projects-home__header">
        <prismic-rich-text
          :field="heading"
          class="header-heading"
        />
        <p class="header-text">{{ text }}</p>
      </header>
      <div class="projects-home__bricks">
        <nav class="bricks-nav">
          <button
            v-for="(button, index) in nav"
            :key="index"
          >
            {{ button.tag_label }}
          </button>
        </nav>
        <div class="brucks__main">
          <nuxt-link
            v-for="(link, index) in bricks"
            :key="index"
            :to="{ name: 'projects' }"
            class="main-link"
          >
            {{ link.link_label }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    heading: {
      type: Array,
      default: () => []
    },
    text: String,
    nav: {
      type: Array,
      default: () => []
    },
    bricks: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>