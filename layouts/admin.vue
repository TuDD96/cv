<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/admin/layouts/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>

<style>
body {
  margin: 0;
}
#page-wrapper {
  padding-top: 60px !important;
}
</style>
