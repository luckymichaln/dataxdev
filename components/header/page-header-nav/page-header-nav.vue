<template>
  <nav class="page-header__nav">
    <ul class="nav-list">
      <li
        v-for="(navEl, i) in navList"
        :key="i"
        class="nav-el"
      >
        <prismic-link
          v-if="!navEl.items.length"
          :field="navEl.primary.link_url"
          class="nav-el__link"
        >
          <span class="link-text">{{ navEl.primary.link_label }}</span>
        </prismic-link>
        <div
          v-else
          class="nav-el__submenu"
        >
          <span :class="submenuSpanClass">{{ navEl.primary.link_label }}</span>
          <div class="submenu-box">
            <prismic-link
              v-for="e in navEl.items"
              :key="e.menu_link_url.id"
              :field="e.menu_link_url"
              class="nav-el__link"
            >
              {{ e.menu_link_label }}
            </prismic-link>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    submenuSpanClass() {
      return {
        'link-text': true,
        'nuxt-link-active': this.$route.name === 'services-:slug'
      }
    }
  }
}
</script>

<style>

</style>