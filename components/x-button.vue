<template>
  <div class="button-wrapper">
    <prismic-link
      v-if="button.button_url && (
        button.button_url.link_type.toLowerCase() === 'web'
          ||
        button.button_url.link_type.toLowerCase()  === 'document'
      )"
      :field="button.button_url"
      :class="buttonClass(button)"
    >
      {{ button.button_label }}
    </prismic-link>
    <button
      v-else
      :class="buttonClass(button)"
    >
      {{ button.button_label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    button: [Object, Array]
  },

  methods: {
    buttonClass(b) {
      return {
        'button': true,
        'button--red': b.button_theme.toLowerCase() === 'red',
        'button--yellow': b.button_theme.toLowerCase() === 'yellow',
        'button--blue': b.button_theme.toLowerCase() === 'blue',
        'button--green': b.button_theme.toLowerCase() === 'green',
        'button--solid': b.button_style.toLowerCase() === 'solid',
        'button--clean': b.button_style.toLowerCase() === 'clean',
        'button--bordered': b.button_style.toLowerCase() === 'bordered'
      }
    }
  }
}
</script>

<style>

</style>