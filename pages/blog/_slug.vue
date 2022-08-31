<template>
  <div id="article">
    <!-- <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
        </li>
      </ul>
    </nav> -->

    <article class="article-wrapper">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <img :src="article.img" :alt="article.alt" />
      <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>

      <!-- :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }" -->
      <nuxt-content :document="article" />

      <author :author="article.author" />

      <!-- <prev-next :prev="prev" :next="next" /> -->
    </article>
  </div>
</template>

<script>
export default {
  name: 'HelloNuxtAppSlug',
  middleware: 'auth',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style lang="scss" scoped>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
.article-wrapper {
  margin: 24px;
  padding: 24px;
  border-width: 1px;
  border-color: gray;
  border-style: dashed;
}
.article-wrapper img {
  width: 300px;
}
.object-cover {
  width: 300px;
}
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
