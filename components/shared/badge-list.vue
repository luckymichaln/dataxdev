<template>
  <ul class="badge-list">
    <li
      v-for="badge in list"
      :key="badge.text"
      :class="tagListClass(badge.text)"
    >
      {{ badge.text }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    tagListClass(label) {
      return {
        'badge-list__el': true,
        'badge-list__el--yellow': label.toLowerCase() === 'mobile app' || 'mobile',
        'badge-list__el--green': label.toLowerCase() === 'development',
        'badge-list__el--purple': label.toLowerCase() === 'marketing',
        'badge-list__el--red': label.toLowerCase() === 'design',
      }
    },
  }
}
</script>

<style>

</style>