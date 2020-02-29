<template>
  <header class="page-header">
    {{ headerData }}<br />
    ---------------------<br />
  </header>
</template>

<script>
export default {
  props: {
    headerData: {
      type: Object,
      default: () => {},
    }
  }
}
</script>

<style>

</style>