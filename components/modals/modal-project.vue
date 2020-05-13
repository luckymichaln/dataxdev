
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
            <div class="modal-image-text">
              <p class="heading-3 main-link-heading">{{ project.link_label }}</p>
              <badgeList :list="project.link_tags" />
            </div>
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
    setTimeout(() => {
      document.getElementsByTagName('html')[0].classList.add('frozen');
      document.getElementsByTagName('body')[0].classList.add('frozen');
      document.getElementById('__nuxt').classList.add('frozen');
      document.getElementById('__layout').classList.add('frozen');
    }, 300);
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

  beforeDestroy() {
    document.getElementsByTagName('html')[0].classList.remove('frozen');
    document.getElementsByTagName('body')[0].classList.remove('frozen');
    document.getElementById('__nuxt').classList.remove('frozen');
    document.getElementById('__layout').classList.remove('frozen');
  },

  components: {
    xButton,
    badgeList
  }
}
</script>

<style>

</style>

