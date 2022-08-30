<template>
  <div>
    <nuxt-link :to="`/blog/author/${author.name}`" class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col">
      <img
        v-if="author.img"
        class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
        :src="author.img"
      />
      <div class="flex flex-col m-4">
        <h4 class="font-semibold">Author</h4>

        <p>{{ author.name }}</p>
        <p>{{ author.bio }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'HelloNuxtAppAuthor',

  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
