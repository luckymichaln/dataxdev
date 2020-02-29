<template>
  <header class="page-header">
    {{ headerData }}
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