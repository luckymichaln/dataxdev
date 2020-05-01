<template>
  <aside class="aside-nav">
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
          @click.native="openMobileMenu(false)"
        >
          <span class="link-text">{{ navEl.primary.link_label }}</span>
        </prismic-link>
        <div
          v-else
          class="nav-el__submenu"
          @mouseenter="openSubmenu(true)"
          @mouseleave="openSubmenu(false)"
        >
          <span :class="submenuSpanClass(true)">{{ navEl.primary.link_label }}</span>
          <transition name="submenu">
            <div
              v-if="submenuShouldOpen"
              class="submenu-box"
            >
              <prismic-link
                v-for="e in navEl.items"
                :key="e.menu_link_url.id"
                :field="e.menu_link_url"
                :class="submenuLinkClass(e)"
                @click.native="openMobileMenu(false)"
              >
                {{ e.menu_link_label }}
              </prismic-link>
            </div>
          </transition>
        </div>
      </li>
    </ul>
    <button
      class="button button--red button--bordered"
      @click="openMobileMenu(false)"
    >
      Close
    </button>
  </aside>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      submenuShouldOpen: false,
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
    },
    submenuSpanClass(submenu) {
      return {
        'link-text': true,
        'link-text--submenu': submenu,
        'link-text--submenu-opened': this.submenuShouldOpen,
        'nuxt-link-active': this.$route.name === 'services-:slug'
      }
    },
    openSubmenu(shouldOpen) {
      this.submenuShouldOpen = shouldOpen;
    },
    openMobileMenu(open) {
      this.$store.commit('ui/SET_MOBILE_MENU_OPEN', { mobileMenuOpened: open });
    }
  }
}
</script>

<style>

</style>