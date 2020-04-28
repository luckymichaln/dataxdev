
<template>
  <div class="modal modal--project">
    <div class="container">
      <div
        class="modal__inner"
        v-on-clickaway="away"
      >
        <div class="modal__content">
          <div class="modal__image">
            <span
              class="nav-btn nav-btn--close"
              @click="openModal(false)"
            >
              <img src="~/assets/static/icons/icon_close--white.svg" alt="Close" />
            </span>
            <img
              :src="project.link_background_image.url"
              :alt="project.link_background_image.alt"
            />
            <p class="heading-3 main-link-heading">{{ project.link_label }}</p>
            <badgeList :list="project.link_tags" />
          </div>
          <div class="modal__text">
            <prismic-rich-text
              :field="project.link_text_long"
              class="text text-modal"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { directive as onClickaway } from 'vue-clickaway';
import xButton from '~/components/x-button';
import badgeList from '~/components/shared/badge-list';

export default {
  directives: {
    onClickaway: onClickaway,
  },

  props: {
    project: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      scrollTargetElement: null,
    }
  },

  mounted() {
    console.log(this.project)
    this.scrollTargetElement = document.querySelectorAll('.modal--project')[0];
    console.log(this.scrollTargetElement, 'this.scrollTargetElement')
  },

  methods: {
    openModal(open) {
      this.$router.push({ name: 'projects' })
      this.$store.commit('ui/SET_MODAL_OPEN', { modalOpened: open, name: 'project', projectName: null });
    },

    away() {
      this.openModal(false);
    }
  },

  components: {
    xButton,
    badgeList
  }
}
</script>

<style>

</style>

