<template>
  <div id="header">
    <ul class="header">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/users">User List</nuxt-link></li>
      <li><nuxt-link to="/helloContent">Hello Nuxt Content</nuxt-link></li>
      <li><nuxt-link to="/blogContent">Blog Content</nuxt-link></li>
      <li><nuxt-link to="/photos">Photo Api</nuxt-link></li>
      <li><nuxt-link to="/todoList">Todos(Nuxt Vue)</nuxt-link></li>
      <li><nuxt-link to="/about">About {{loggedIn}}</nuxt-link></li>
      <li><button @click="logout">Logout</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloNuxtAppHeaderMenu',
  data() {
    return {
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
    }
  },

  mounted() {},

  methods: {
    async logout(e) {
      e.preventDefault();
      await this.$auth.logout()
      this.$router.push('/')
    }
  },
}
</script>

<style scoped>
.header {
  min-height: 20px;
  background: lightblue;
  color: white;
  padding: 20px;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  /*margin-right: 8px;*/
  /* padding: 8px; */
}

.header li + li:before {
    content: " | ";
    padding: 0 8px;
}

</style>