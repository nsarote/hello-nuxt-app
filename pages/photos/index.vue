<template>
  <div id="photoIndex" class="container">
    <h1><b>Photos</b></h1>
    <div class="photos">
      <nuxt-link
        v-for="photo in photos"
        :to="{ path: `/photos/${photo.id}` }"
        :key="photo.id"
      >
        <img :src="photo.download_url" class="photo-item" />
        {{ photo.author }}
      </nuxt-link>
    </div>

<br>
<br>
<br>
    <hr />
<br>
    <nuxt-link to="/"><button class="button-3">Back to Home</button></nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'HelloNuxtAppIndex',

  async asyncData({ $axios }) {
    const photos = await $axios.$get('https://picsum.photos/v2/list?limit=12')
    return { photos }
  },

  data() {
    return {}
  },

  head() {
    return {
      title: 'Nuxt Fetch API',
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
.container {
  padding: 1em;
  width: 1220px;
  margin: 0 auto;
}
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1em;
  text-align: center;
}

.photo-item {
  width: 100%;
  height: 256px;
  object-fit: cover;
}
</style>
