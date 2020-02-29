<template>
  <header class="page-header">
    {{ headerData }}<br />
    <nuxt-link :to="{ name: 'index' }">HomePage</nuxt-link>
    <nuxt-link :to="{ name: 'career' }">Career</nuxt-link>
    <nuxt-link :to="{ name: 'about-us' }">About us</nuxt-link>
    <nuxt-link :to="{ name: 'projects' }">Projects</nuxt-link>
    <nuxt-link :to="{ name: `services-:slug`, params: { slug: 'ios' } }">iOS</nuxt-link>
    <nuxt-link :to="{ name: `services-:slug`, params: { slug: 'java' } }">Java</nuxt-link>
    <nuxt-link :to="{ name: `services-:slug`, params: { slug: 'dotnet' } }">.NET</nuxt-link>
    <nuxt-link :to="{ name: `services-:slug`, params: { slug: 'android' } }">Android</nuxt-link>
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