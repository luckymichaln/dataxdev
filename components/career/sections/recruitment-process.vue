<template>
  <section class="recruitment-process">
    <div class="container">
      <div class="recruitment-process__inner">
        <prismic-rich-text
          :field="heading"
          class="recruitment-process__heading heading-secondary text--center"
        />
        <div class="recruitment-cols">
          <recruitmentCol
            v-for="(col, i) in cols"
            :key="i"
            :index="i"
            :col="col"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import recruitmentCol from './recruitment-col';

export default {
  props: {
    heading: {
      type: Array,
      default: () => []
    },
    cols: {
      type: Array,
      default: () => []
    },
  },

  components: {
    recruitmentCol
  }
}
</script>
