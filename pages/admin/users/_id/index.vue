<template>
  <div id="page-wrapper">
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  layout: 'admin',
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
