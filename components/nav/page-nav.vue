<template>
  <nav class="page-nav">
    NAV
    {{ navData }}
  </nav>
</template>

<script>
export default {
  props: {
    navData: {
      type: Object,
      default: () => {},
    }
  }
}
</script>

<style>

</style>