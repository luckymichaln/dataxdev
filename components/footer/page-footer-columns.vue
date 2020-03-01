<template>
  <ul class="page-footer__columns">
    <li
      v-for="(col, i) in columns"
      :key="i"
      class="column"
    >
      <p class="column-heading">{{ col.primary.column_title }}</p>
      <ul class="column__list">
        <li
          v-for="el in col.items"
          :key="el.column_link_label"
          class="list-el"
        >
          <prismic-link
            v-if="el.column_link.link_type !== 'Any'"
            :field="el.column_link"
          >
            {{ el.column_link_label }}
          </prismic-link>
          <prismic-rich-text
            v-else
            :field="el.column_text"
            class="list-el__text"
          />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>