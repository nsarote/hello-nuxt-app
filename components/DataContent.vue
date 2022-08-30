<template>
  <div id="dataContent">
    <h1>Data Content</h1>
    <pre>data : {{ data }}</pre>
  </div>
</template>

<script>
export default {
  name: 'SiteContent',
  data() {
    return {
      data: {},
    }
  },
  async fetch() {
    const data = await this.$content('data').fetch()
    // console.log('data : ', data);
    this.data = data
  },
}
</script>
