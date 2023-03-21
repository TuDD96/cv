<template>
  <nav
    class="navbar navbar-default navbar-static-top"
    role="navigation"
    style="margin-bottom: 0"
  >
    <HeaderComponent />
    <div class="navbar-default sidebar" role="navigation">
      <div class="sidebar-nav navbar-collapse">
        <ul class="nav" id="side-menu">
          <li class="sidebar-search">
            <div class="input-group custom-search-form">
              <input type="text" class="form-control" placeholder="Search..." />
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </li>
          <MenuSingle title="Dashboard" routelink="/admin"/>
          <MenuSingle title="Users" routelink="/admin/users"/>
          <MenuMulti />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import HeaderComponent from '~/components/admin/layouts/Header.vue'
import MenuSingle from '~/components/admin/navbar/MenuSingle.vue'
import MenuMulti from '~/components/admin/navbar/MenuMulti.vue'

export default {
  components: {
    HeaderComponent,
    MenuSingle,
    MenuMulti,
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
.navbar-default.sidebar {
  position: fixed;
}
.navbar {
  position: fixed;
  width: 100%;
}
</style>
