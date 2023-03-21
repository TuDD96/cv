<template>
  <div>
    <HeaderPage />
    <nuxt />
  </div>
</template>

<script lang="ts">
import HeaderPage from '~/components/layouts/HeaderPage.vue'
export default {
  components: {
    HeaderPage,
  },
}
</script>
