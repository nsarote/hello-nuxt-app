<template>
  <div id="index">
    <h1>Hello Nuxt JS</h1>

    <hr />

    <div v-if="loggedIn">
      <h2>Hello, {{ user.email }}</h2>
      <button class="button-3" style="background-color: red" @click="logout">
        Logout
      </button>
    </div>
    <div v-else>
      <nuxt-link to="/login"
        ><button class="button-3">Login Page</button></nuxt-link
      >
    </div>
    <Tutorial />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>
