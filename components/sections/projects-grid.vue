<template>
  <main :class="gridClass()">
    <div class="container">
      <header
        v-if="heading"
        class="projects-grid__header"
      >
        <prismic-rich-text
          :field="heading"
          class="header-heading heading-secondary"
        />
        <p class="header-text">{{ text }}</p>
      </header>
      <div class="projects-grid__bricks">
        <ul class="bricks-nav">
          <li
            v-for="(button, index) in nav"
            :key="index"
            :class="navButtonClass(index)"
          >
            <button
              @click="manageProjects({ index, tag: button.tag_label || button.label })"
            >
              {{ button.tag_label || button.label }}
            </button>
          </li>
        </ul>
        <div class="bricks__main">
          <transition-group
            tag="div"
            name="bricks"
            class="main-transition"
          >
            <div
              class="main-link"
              v-if="link"
              v-for="link in filteredList"
              :key="link.link_text"
            >
              <div
                :is="isProjectPage ? 'div' : 'nuxt-link'"
                :to="isProjectPage ? null : { name: 'projects' }"
                class="main-link__inner"
                :style="{ backgroundImage: `url(${link.link_background_image.url})` }"
              >
                <ul class="badge-list">
                  <li
                    v-for="badge in link.link_tags"
                    :key="badge.text"
                    :class="tagListClass(badge.text)"
                  >
                    {{ badge.text }}
                  </li>
                </ul>
                <p class="heading-3 main-link-heading">{{ link.link_label }}</p>
                <p class="main-link-text">
                  {{ link.link_text }}
                </p>
              </div>
            </div>
          </transition-group>
          <nuxt-link
            v-if="!hideRedirect"
            :to="{ name: 'projects' }"
            class="link-all"
          >
            Check all projects
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    heading: {
      type: Array,
      default: () => []
    },
    text: String,
    nav: {
      type: Array,
      default: () => []
    },
    bricks: {
      type: Array,
      default: () => []
    },
    hideRedirect: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      projectsNavIndex: 0,
      projectsList: null,
      filteredList: null,
      isProjectPage: false,
    }
  },

  created() {
    this.projectsList = this.bricks;
    this.filteredList = this.projectsList;
    this.isProjectPage = this.$route.name === 'projects';
  },

  methods: {
    navButtonClass(index) {
      return {
        'nav-el': true,
        'nav-el--active': index === this.projectsNavIndex,
      }
    },

    tagListClass(label) {
      return {
        'badge-list__el': true,
        'badge-list__el--yellow': label.toLowerCase() === 'mobile app' || 'mobile',
        'badge-list__el--green': label.toLowerCase() === 'development',
        'badge-list__el--purple': label.toLowerCase() === 'marketing',
        'badge-list__el--red': label.toLowerCase() === 'design',
      }
    },

    gridClass() {
      return {
        'projects-grid': true,
        'projects-grid--page': this.isProjectPage,
      }
    },

    manageProjects({index, tag}) {
      this.projectsNavIndex = index;

      if (tag.toLowerCase() === 'all') {
        this.filteredList = this.projectsList;
        return;
      }

      this.filteredList = this.projectsList.map(el => {
        const { link_tags } = el;

        return link_tags.map(t => t.text.toLowerCase() === tag.toLowerCase() ? el : null).filter(el => el)[0];
      });
    }
  }
}
</script>
