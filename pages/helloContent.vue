<template>
  <div id="helloContent">
    <HelloContent />
    <hr />
    <DataContent />
    <hr />
  </div>
</template>

<script>
export default {
  name: 'HelloNuxtAppHelloContent',

  middleware: 'auth',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
</style>