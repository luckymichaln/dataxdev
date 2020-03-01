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
              :class="submenuLinkClass(e)"
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
  },

  methods: {
    submenuLinkClass(el) {
      return {
        'nav-el__link': true,
        'link--java': el.tech_type.toLowerCase() === 'java',
        'link--dotnet': el.tech_type.toLowerCase() === '.net',
        'link--ios': el.tech_type.toLowerCase() === 'ios',
        'link--android': el.tech_type.toLowerCase() === 'android',
        'link--red': el.theme_colour.toLowerCase() === 'red',
        'link--yellow': el.theme_colour.toLowerCase() === 'yellow',
        'link--blue': el.theme_colour.toLowerCase() === 'blue',
        'link--green': el.theme_colour.toLowerCase() === 'green',
      }
    }
  }
}
</script>

<style>

</style>