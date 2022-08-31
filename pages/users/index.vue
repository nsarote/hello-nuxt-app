<template>
  <div>
    <h1>User Index</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="`/users/${user.id}`">User ID : {{ user.id }}</nuxt-link>
        ---
        <nuxt-link :to="`/users/slug/${user.slug}`"
          >User Slug : {{ user.slug }}</nuxt-link
        >
      </li>
    </ul>

    <hr />
    <nuxt-link to="/"><button>Home</button></nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'HelloNuxtAppIndex',

  data() {
    return {
      users: [
        { id: 1, slug: 'slug1' },
        { id: 2, slug: 'slug2' },
        { id: 3, slug: 'slug3' },
      ],
    }
  },

  head() {
    return {
      title: 'This is user list index page'
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
