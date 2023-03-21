<template>
  <li>
    <NuxtLink :to="routelink"><i class="fa fa-dashboard fa-fw"></i> {{ title }}</NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    routelink: {
      type: String,
      required: true,
      default: 'admin',
    },
  },
}
</script>

<style scoped>
@import '~/assets/admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
@import '~/assets/admin/bower_components/metisMenu/dist/metisMenu.min.css';
@import '~/assets/admin/dist/css/timeline.css';
@import '~/assets/admin/dist/css/sb-admin-2.css';
@import '~/assets/admin/bower_components/morrisjs/morris.css';
@import '~/assets/admin/bower_components/font-awesome/css/font-awesome.min.css';
</style>
