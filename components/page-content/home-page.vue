<template>
  <div class="home-page">
    {{pageData}}
  </div>
</template>

<script>
export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },
}
</script>

<style>

</style>