<template>
  <div id="helloContent">
      <h1>posts/hello.md</h1>
      <h2>{{ helloInside.title }} - {{ helloInside.description }}</h2>
      <nuxt-content :document="helloInside" />

      <hr>

      <nuxt-content :document="helloOutside" />
  </div>
</template>

<script>
export default {
  name: "HelloContent",
  data() {
    return {
      helloInside: {},
      helloOutside: {},
    }
  },
  async fetch() {
    const helloInside = await this.$content('posts/hello').fetch()
    // console.log('helloInside : ', helloInside);
    this.helloInside = helloInside

    const helloOutside = await this.$content('hello').fetch()
    // console.log('helloOutside : ', helloOutside);
    this.helloOutside = helloOutside
  },
}
</script>
