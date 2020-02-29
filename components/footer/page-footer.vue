<template>
  <footer class="page-footer">
    -------------------------------<br />
    {{ footerData }}
  </footer>
</template>

<script>
export default {
  props: {
    footerData: {
      type: Object,
      default: () => {},
    }
  }
}
</script>
<style>

</style>