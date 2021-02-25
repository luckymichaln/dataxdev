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
              v-for="(link, i) in filteredList"
              :key="link.link_label"
            >
              <div
                v-if="i === filteredList.length - 1"
                class="main-link__inner"
                :style="{ backgroundImage: `url(${link.link_background_image.url})` }"
                @click="openModal(true)"
              >
                <badgeList :list="link.link_tags" />
                <p class="heading-3 main-link-heading">{{ link.link_label }}</p>
                <p class="main-link-text">
                  {{ link.link_text }}
                </p>
              </div>
              <nuxt-link
                v-else
                :to="`projects/${friendlyLink(link.link_label)}`"
                class="main-link__inner"
                :style="{ backgroundImage: `url(${link.link_background_image.url})` }"
              >
                <badgeList :list="link.link_tags" />
                <p class="heading-3 main-link-heading">{{ link.link_label }}</p>
                <p class="main-link-text">
                  {{ link.link_text }}
                </p>
              </nuxt-link>
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
import badgeList from '~/components/shared/badge-list';

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

  mounted() {
    if (this.$route.query.name) {
      const pName = this.friendlyLink(this.$route.query.name)
      this.openModal(true, pName);
    }
  },

  watch: {
    $route(to, from) {
      if (to.query.name) {
        const pName = this.friendlyLink(to.query.name)
        this.openModal(true, pName);
      }
    }
  },

  data() {
    return {
      projectsNavIndex: 0,
      projectsList: null,
      filteredList: null,
    }
  },

  created() {
    this.projectsList = this.bricks;
    this.filteredList = this.projectsList;
  },

  methods: {
    friendlyLink(label) {
      return label.toLowerCase().split(' ').join('-')
    },

    navButtonClass(index) {
      return {
        'nav-el': true,
        'nav-el--active': index === this.projectsNavIndex,
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
    },

    openModal(open) {
      this.$store.commit('ui/SET_MODAL_OPEN', { modalOpened: open, name: 'contact' });
    }
  },

  components: {
    badgeList
  }
}
</script>
