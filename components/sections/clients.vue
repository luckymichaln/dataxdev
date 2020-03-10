<template>
  <section class="clients">
      <div class="container">
        <div class="clients__logo"
          v-for="(logo, index) in logos"
          :key="index"
        >
          <img
            :src="logo.client_logo.url"
            :srcset="`${logo.client_logo.url} 1x, ${logo.client_logo.url} 2x`"
            :alt="logo.client_logo.alt"
          />
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: {
    logos: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>