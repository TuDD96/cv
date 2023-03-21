<template>
  <div id="page-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading">DataTables Advanced Tables</div>
          <!-- /.panel-heading -->
          <div class="panel-body">
            <div class="dataTable_wrapper">
              <table
                id="dataTables-example"
                class="table table-striped table-bordered table-hover"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX">
                    <td>1</td>
                    <td>AAAAAA</td>
                    <td>0963636837</td>
                    <td>Ha Noi</td>
                    <td>
                      <NuxtLink to="/admin/users/1">
                        <button type="button" class="btn btn-primary">
                          <i class="fa fa-eye fa-fw" />
                        </button>
                      </NuxtLink>
                      <button type="button" class="btn btn-danger">
                        <i class="fa fa-trash-o fa-fw" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
      </div>
      <!-- /.col-lg-12 -->
    </div>
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
