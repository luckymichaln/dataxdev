<template>
  <div class="project-page">
    <div class="container">
      <div class="project-page__inner">
        <header class="project-page__header">
          <prismic-rich-text
            :field="pageData.hero_heading"
            class="heading-primary text--center"
          />
          <prismic-rich-text
            :field="pageData.hero_text"
            class="text text--center"
          />
        </header>
      </div>
    </div>
    <projectsGrid
      hideRedirect
      :nav="pageData.body[0].items"
      :bricks="pageData.body[1].items"
    />
  </div>
</template>

<script>
import projectsGrid from '~/components/sections/projects-grid';

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  head () {
    return {
      title: 'Data X Dev - Projects',
      link: [
        { rel: 'cannonical', href: '/projects' }
      ]
    }
  },

  components: {
    projectsGrid
  }
}
</script>