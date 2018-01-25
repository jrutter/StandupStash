<template>
<div>

  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Standup Stash</h5>
      <nav-bar :auth="auth"
      :authenticated="authenticated"></nav-bar>
        <a class="btn btn-outline-primary" @click="auth.login()" v-if="!authenticated">Sign up</a>
        <a class="btn btn-outline-primary" @click="auth.logout()" v-if="authenticated">Log-out</a>
    </div>

      <div class="container">
          <div id="content">
              <h1 class="display-4">Features</h1>
              <p class="lead">I am still building the features for billing and setting up a team to manage multiple users, dashboards, etc.<br><br></p>

              <div v-if="!authenticated">

                <!-- Three columns of text below the carousel -->
        <div class="row">
          <div class="col-lg-4">
            <h2>Web App Checkin</h2>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <h2>Unlimited Users</h2>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <h2>Manage Teams</h2>
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->

              </div>
              <div v-if="authenticated">

              </div>

          </div>
      </div>

      <footer class="text-muted">
      <div class="container">
        <p>&copy; 2018 Standup Stash!</p>
      </div>
    </footer>

</div>
</template>

<script>
import NavBar from '@/components/Nav'

export default {
  name: 'Features',
  props: ['auth', 'authenticated'],
  components: {
    NavBar
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
