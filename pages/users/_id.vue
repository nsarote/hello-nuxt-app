<template>
  <div id="userDetail">
    <h1>User Detail : {{ id }}</h1>

    <hr />
    <nuxt-link to="/users"><button>Back</button></nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  middleware: 'auth',
  
  validate({ params }) {
    return ['1','2','3'].includes(params.id);
    // return /^[1-10]+$/.test(params.id) // /^\d+$/.test(params.id)
    
  },

  data() {
    return {
      id: this.$route.params.id,
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
