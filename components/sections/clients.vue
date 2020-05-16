<template>
  <section class="clients">
      <div class="container">
        <div class="clients__wrapper">
          <div class="clients__logo"
            v-for="(logo, index) in logos"
            :key="index"
          >
            <img
              :src="logo.logo.url"
              :srcset="`${logo.logo.url} 1x, ${logo.logo.url} 2x`"
              :alt="logo.logo.alt"
            />
          </div>
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