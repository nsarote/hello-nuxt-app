<template>
  <div id="userSlugDetail">
    <h1>User Slug Detail : {{ slug }}</h1>

    <hr />
    <nuxt-link to="/users"><button>Back</button></nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'UserSlugDetail',

  data() {
    return {
      slug: this.$route.params.slug,
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
