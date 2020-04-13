
<template>
  <div class="modal modal--contact">
    <div class="container">
      <nav class="modal__nav">
        <img src="~/assets/static/logotypes/logo_dataxdev.svg" alt="DataXDev logotype" />
        <span
          class="nav-btn nav-btn--close"
          @click="openModal(false)"
        >
          <img src="~/assets/static/icons/icon_close.svg" alt="Close" />
        </span>
      </nav>
      <div class="modal__inner">
        <header class="modal__header">
          <h1 class="heading-secondary text--center">Get an estimate</h1>
          <p class="text text--center">Fill out this simple form. Our team will contact you promptly to discuss next steps.</p>
          <p class="text text--center">Need NDA first? E-mail us at <a href="mailto:hello@dataxdev.com">hello@dataxdev.com</a></p>
        </header>
        <section class="modal__form">
          <h2 class="heading-3 text--center">Select device of your project?</h2>
          <form>
            <div class="subject-picker">
              <label
                class="label"
                for="option__desktop"
              >
                <input
                  checked
                  type="checkbox"
                  name="subject-picker-option"
                  id="option__desktop"
                  v-model="form.subject.web"
                />
                <div class="label__inner">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5 11.5C25.3284 11.5 26 10.8284 26 10C26 9.17157 25.3284 8.5 24.5 8.5C23.6716 8.5 23 9.17157 23 10C23 10.8284 23.6716 11.5 24.5 11.5Z" fill="currentColor"/>
                    <path d="M29.5 36.5V44.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.5 44.5V36.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.5 44.5H36.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M42.5 36.5H6.5C5.43913 36.5 4.42172 36.0786 3.67157 35.3284C2.92143 34.5783 2.5 33.5609 2.5 32.5V8.5C2.5 7.43913 2.92143 6.42172 3.67157 5.67157C4.42172 4.92143 5.43913 4.5 6.5 4.5H42.5C43.5609 4.5 44.5783 4.92143 45.3284 5.67157C46.0786 6.42172 46.5 7.43913 46.5 8.5V32.5C46.5 33.5609 46.0786 34.5783 45.3284 35.3284C44.5783 36.0786 43.5609 36.5 42.5 36.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.5 28.5H46.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Desktop</span>
                </div>
              </label>
              <label
                class="label"
                for="option__mobile"
              >
                <input
                  type="checkbox"
                  name="subject-picker-option"
                  id="option__mobile"
                  v-model="form.subject.mobile"
                />
                <div class="label__inner">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 8.5H39.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.5 38.5H39.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M35.5 2.5H13.5C11.2909 2.5 9.5 4.29086 9.5 6.5V42.5C9.5 44.7091 11.2909 46.5 13.5 46.5H35.5C37.7091 46.5 39.5 44.7091 39.5 42.5V6.5C39.5 4.29086 37.7091 2.5 35.5 2.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Mobile</span>
                </div>
              </label>
              <label
                class="label"
                for="option__other"
              >
                <input
                  type="checkbox"
                  name="subject-picker-option"
                  id="option__other"
                  v-model="form.subject.other"
                />
                <div class="label__inner">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.45 16.45C15.3049 17.5952 13.7982 18.3079 12.1865 18.4668C10.5748 18.6256 8.95794 18.2207 7.61134 17.321C6.26474 16.4213 5.27174 15.0826 4.80154 13.5329C4.33134 11.9832 4.41302 10.3184 5.03268 8.82211C5.65234 7.32587 6.77162 6.09077 8.19983 5.32726C9.62803 4.56375 11.2768 4.31907 12.8652 4.63491C14.4536 4.95075 15.8833 5.80757 16.9108 7.05937C17.9382 8.31117 18.4999 9.88051 18.5 11.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M32.5495 32.55C31.4043 33.6951 30.6916 35.2018 30.5328 36.8135C30.374 38.4252 30.7789 40.0421 31.6785 41.3887C32.5782 42.7353 33.9169 43.7283 35.4666 44.1985C37.0164 44.6687 38.6812 44.587 40.1774 43.9673C41.6737 43.3477 42.9088 42.2284 43.6723 40.8002C44.4358 39.372 44.6805 37.7232 44.3646 36.1348C44.0488 34.5464 43.192 33.1167 41.9402 32.0892C40.6884 31.0618 39.119 30.5001 37.4995 30.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M32.5495 16.45C31.4043 15.3049 30.6916 13.7982 30.5328 12.1865C30.374 10.5748 30.7789 8.95794 31.6785 7.61134C32.5782 6.26474 33.9169 5.27174 35.4666 4.80154C37.0164 4.33134 38.6812 4.41302 40.1774 5.03268C41.6737 5.65234 42.9088 6.77162 43.6723 8.19983C44.4358 9.62803 44.6805 11.2768 44.3646 12.8652C44.0488 14.4536 43.192 15.8833 41.9402 16.9108C40.6884 17.9382 39.119 18.4999 37.4995 18.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28.5 28.5H20.5L19.5 19.5H29.5L28.5 28.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.5 11.5L19.5 19.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.45 32.55C15.3049 31.4048 13.7982 30.6921 12.1865 30.5332C10.5748 30.3744 8.95794 30.7793 7.61134 31.679C6.26474 32.5786 5.27174 33.9174 4.80154 35.4671C4.33134 37.0168 4.41302 38.6816 5.03268 40.1779C5.65234 41.6741 6.77162 42.9092 8.19983 43.6727C9.62803 44.4362 11.2768 44.6809 12.8652 44.3651C14.4536 44.0492 15.8833 43.1924 16.9108 41.9406C17.9382 40.6888 18.4999 39.1195 18.5 37.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28.5 28.5L37.5 37.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29.5 19.5L37.5 11.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.5 37.5L20.5 28.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Other</span>
                </div>
              </label>
            </div>
            <h3 class="heading-3 text--center">Fill the form and get an estimate</h3>
            <fieldset invalid="This field is required">
              <label
                class="text text--bold"
                for="contact-form--name">Name *</label
              >
              <input
                required
                id="contact-form--name"
                placeholder="Your name"
                v-model="form.name"
              />
            </fieldset>
            <fieldset>
              <label
                class="text text--bold"
                for="contact-form--email">Email *</label
              >
              <input
                type="email"
                id="contact-form--email"
                placeholder="Your email address"
                v-model="form.email"
              />
            </fieldset>
            <fieldset>
              <label
                class="text text--bold"
                for="contact-form--number">Mobile number</label
              >
              <input
                type="number"
                id="contact-form--number"
                placeholder="Mobile number"
                v-model="form.phone"
              />
            </fieldset>
            <fieldset>
              <label
                class="text text--bold"
                for="contact-form--idea">Short description of your idea *</label
              >
              <textarea
                required
                id="contact-form--idea"
                placeholder="What idea you have and what you expect..."
                v-model="form.message"
              ></textarea>
            </fieldset>
            <fieldset>
              <div class="field-inline">
                <label for="contact-form--file">
                  <input
                    type="file"
                    id="contact-form--file"
                    @change="onFileChange"
                  />
                  <p class="text-accent">
                    <img src="~/assets/static/icons/icon_message.svg" alt="Icon message" />
                    <span>{{ fileName || 'Add attachment' }}</span>
                  </p>
                </label>
                <button
                  v-if="fileName"
                  class="btn-remove-file"
                  @click="removeFile"
                />
                <span class="text">We welcome everything from napkin sketches to complex business analysis.</span>
              </div>
            </fieldset>

            <p class="copy">
              DataXDev needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our <nuxt-link to="index" class="text-accennt">Privacy Policy</nuxt-link>.
            </p>

            <xButton
              :button="{
                button_label: 'Get an estimate',
                button_theme: 'red',
                button_style: 'solid',
                button_url: {
                  link_type: 'any'
                }
              }"
            />
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import xButton from '~/components/x-button';

export default {
  data() {
    return {
      form: {
        subject: {
          web: true,
          mobile: false,
          other: false,
        },
        name: null,
        email: null,
        phone: null,
        message: null,
        file: null,
      },
      fileName: null
    }
  },

  methods: {
    openModal(open) {
      this.$store.commit('ui/SET_MODAL_OPEN', { modalOpened: open });
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.fileName = files[0].name;
      this.createFile(files[0]);
    },

    createFile(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.form.file = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeFile() {
      this.fileName = null;
      this.form.file = null;
    }
  },

  components: {
    xButton
  }
}
</script>

<style>

</style>

