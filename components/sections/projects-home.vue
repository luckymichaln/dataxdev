<template>
  <main class="projects-home">
    <div class="container">
      <header class="projects-home__header">
        <prismic-rich-text
          :field="heading"
          class="header-heading heading-secondary"
        />
        <p class="header-text">{{ text }}</p>
      </header>
      <div class="projects-home__bricks">
        <ul class="bricks-nav">
          <li
            v-for="(button, index) in nav"
            :key="index"
            :class="navButtonClass(index)"
          >
            <button
              @click="manageProjects({ index, tag: button.tag_label })"
            >
              {{ button.tag_label }}
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
              :key="link.link_label"
            >
              <nuxt-link
                :to="{ name: 'projects' }"
                class="main-link__inner"
                :style="{ backgroundImage: `url(${link.link_background_image.url})`}"
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
                <p class="main-link-text">{{ link.link_text }}</p>
              </nuxt-link>
            </div>
          </transition-group>
          <nuxt-link
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
    }
  },

  data() {
    return {
      projectsNavIndex: 0,
      projectsList: null,
      filteredList: null
    }
  },

  created() {
    this.projectsList = this.bricks;
    this.filteredList = this.projectsList;
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
        'badge-list__el--yellow': label.toLowerCase() === 'mobile app',
        'badge-list__el--green': label.toLowerCase() === 'development',
        'badge-list__el--purple': label.toLowerCase() === 'marketing',
        'badge-list__el--red': label.toLowerCase() === 'design',
      }
    },

    manageProjects({index, tag}) {
      this.projectsNavIndex = index;

      if (tag === 'All') {
        this.filteredList = this.projectsList;
        return;
      }

      this.filteredList = this.projectsList.map(el => {
        const { link_tags } = el;

        return link_tags.map(t => t.text === tag ? el : null).filter(el => el)[0];
      });
    }
  }
}
</script>
