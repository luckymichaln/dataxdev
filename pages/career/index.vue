<template>
  <div class="career">
    {{ document }}
    <nuxt-link :to="{ name: 'index' }">Home page</nuxt-link>
  </div>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"

export default {
  async asyncData({context, error, req}) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {accessToken: PrismicConfig.token, req})

      let document = {}
      const result = await api.getSingle('career')
      document = result.data
      console.log(document, 'doc')

      return {
        document,
        documentId: result.id,
      }
    } catch (e) {
      console.error({ e, statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style>

</style>