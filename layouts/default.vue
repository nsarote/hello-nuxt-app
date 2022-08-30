<template>
    <div id="app" class="app">
    <HeaderMenu />

    <Content />
  </div>
</template>

<script>
export default {
    name: 'HelloNuxtAppDefault',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style>
body {
  min-height: 100vh;
  margin: 0;
  position: relative;
}

body {
  position: relative;
}

body::after {
  content: '';
  display: block;
  height: 50px; /* Set same as footer's height */
}

.nuxt-link-exact-active {
  color: white;
  background-color: black;
  padding: 5px;
}

</style>
