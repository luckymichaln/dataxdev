<template>
  <section class="career-tabs">
    <div class="container">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="tabClass(tab.tab_type, index)"
        @click="manageTab(index)"
      >
        <header class="tab__header">
          <div class="tab__icon" />
          <div class="tab__info">
            <div class="info-title">{{ tab.tab_title }}</div>
            <div class="info-level">
              <div class="level-dots">
                <span
                  v-for="(dot, i) in 4"
                  :key="i"
                  :class="dotClass(tab.tab_level, i)"
                />
              </div>
              {{ tab.tab_level }}
            </div>
          </div>
          <img
            src="~/assets/static/icons/icon_arrow--circle.svg"
            alt="icon arrow"
            class="tab__arrow"
          />
        </header>
        <div
          v-if="tabsOpened[index]"
          class="tab__body"
        >
          <prismic-rich-text :field="tab.tab_content"/>
          <xButton
            v-if="tab.tab_content.length"
            :button="{
              button_label: tab.tab_button_label || 'Apply now',
              button_url: tab.tab_button_link,
              button_style: tab.button_style,
              button_theme: tab.button_theme,
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import xButton from '~/components/x-button';

export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      tabsOpened: [],
    }
  },

  created() {
    this.tabs.map(t => this.tabsOpened.push(false))
  },

  methods: {
    tabClass(type, i) {
      return {
        'tab': true,
        'tab--opened': this.tabsOpened[i],
        'tab--android': type.split(' ')[0].toLowerCase() === 'android',
        'tab--ios': type.split(' ')[0].toLowerCase() === 'ios',
        'tab--dotnet': type.split(' ')[0].toLowerCase() === '.net',
        'tab--java': type.split(' ')[0].toLowerCase() === 'java',
        'tab--account': type.split(' ')[0].toLowerCase() === 'account',
        'tab--product': type.split(' ')[0].toLowerCase() === 'product',
      }
    },

    dotClass(level, index) {
      return {
        'dot': true,
        'dot--filled': level.toLowerCase() === 'junior' && index < 1
          ||
            level.toLowerCase() === 'medium' && index < 2
          ||
            level.toLowerCase() === 'senior' && index < 3
          ||
            level.toLowerCase() === 'leader' && index <= 4
        ,
      }
    },

    manageTab(i) {
      const foo = !this.tabsOpened[i];
      this.tabsOpened = this.tabsOpened.map((el, index) =>  index === i ? foo : false)
    }
  },

  components: {
    xButton
  }
}
</script>

<style>

</style>