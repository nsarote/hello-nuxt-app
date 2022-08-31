<template>
  <div>
    <h1>About Page</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloNuxtAppAbout',
  middleware: 'auth',

  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get('/hello')
      return { title: response.title }
    } catch (error) {
      console.log(error)
    }
  },

  data() {
    return {}
  },

  head() {
    return {
      title: this.title || 'About',
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
