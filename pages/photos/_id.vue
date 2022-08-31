<template>
  <div class="photo-info">
    <h1>Photo Detail</h1>
    <img :src="photo.download_url" class="img" />
    <p>Author : {{ photo.author }}</p>

    <nuxt-link to="/photos" class="link"><button class="button-3">Back to Photos</button></nuxt-link>
  </div>
</template>
<script>
  export default {
    middleware: 'auth',
    async asyncData({ $axios, params }) {
      const photo = await $axios.$get(`https://picsum.photos/id/${params.id}/info`);
      return { photo };
    }
  };
</script>

<style scoped>
  .photo-info {
    width: 860px;
    margin: 0 auto;
    text-align: center;
  }
  .img {
    width: 100%;
  }

  .link {
    display: inline-block;
    margin-top: 2em;
    border-style: solid;
  }
</style>