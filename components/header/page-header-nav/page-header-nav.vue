<template>
  <nav class="page-header__nav">
    <ul>
      <li
        v-for="(navEl, i) in navList"
        :key="i"
      >
        <prismic-link
          v-if="!navEl.items.length"
          :field="navEl.primary.link_url"
        >
          {{ navEl.primary.link_label }}
        </prismic-link>
        <div v-else>
          <prismic-link
            v-for="e in navEl.items"
            :key="e.menu_link_url.id"
            :field="e.menu_link_url"
          >
            {{ e.menu_link_label }}
          </prismic-link>
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
  }
}
</script>

<style>

</style>