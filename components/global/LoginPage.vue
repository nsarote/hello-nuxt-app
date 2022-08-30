<template>
  <div id="loginComponent">
    <form @submit="onSubmit">
      <label for="email">Email :</label>
      <input v-model="email" type="text" />
      <label for="password">Password :</label>
      <input v-model="password" type="password" />
      <button type="submit" class="button-3">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloNuxtAppLogin',

  data() {
    return {
      email: '',
      password: '',
    }
  },

  mounted() {},

  methods: {
    async onSubmit(e) {
      e.preventDefault()

      const payload = {
        email: this.email,
        password: this.password,
      }
      try {
        await this.$auth.loginWith('local', {
          data: payload,
        })
        this.$router.push('/')
        this.$store.commit('setLoggedIn', true)
      } catch (error) {
        // console.log(error)
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
