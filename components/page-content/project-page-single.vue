<template>
  <div class="project-page-single">
    <div class="container">
      <div class="project-page-single__inner">
        <header class="project-page-single__header">
          <div
            v-if="pageData"
            class="header-image"
          >
            <img
              v-if="pageData"
              :src="pageData.hero_image.url"
              :alt="pageData.hero_image.alt"
            />
          </div>
          <div class="header-text">
            <prismic-rich-text
              v-if="pageData"
              :field="pageData.hero_heading"
              class="header-heading"
            />
            <badgeList
              v-if="pageData.project_tags"
              :list="pageData.project_tags"
            />
          </div>
        </header>
        <main class="project-page-single__main">
          <prismic-rich-text
            v-if="pageData"
            :field="pageData.project_text"
            class="text text-modal"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import badgeList from '~/components/shared/badge-list';

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  components: {
    badgeList
  }
}
</script>

<style>

</style>