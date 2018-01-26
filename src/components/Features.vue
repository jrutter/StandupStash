<template>
<div>

  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h5 class="my-0 mr-md-auto font-weight-normal logo"><a href="/">Standup Stash</a></h5>
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

                <h4>Version 1.0.0</h4>
                <ul>
                    <li>Create an account using Auth0 integration</li>
                    <li>Login via Google</li>
                    <li>Add a daily status</li>
                    <li>View Profile</li>
                    <li>View All Daily Statuses in Stash History</li>
                  </ul>
                </li>

                <hr>

                <h4>Next Up</h4>
                <ul>
                    <li>Setup Teams</li>
                    <ul>
                      <li>Create a Team / Manage Team</li>
                      <li>Invite Friends</li>
                      <li>View Status of Team</li>
                    </ul>
                    <li>Filter your Stash History based on Team or Personal</li>
                    <li>Signup Flow</li>
                    <li>Add Pagination to History</li>
                    <li>Change default sort on History</li>
                    <li>Email Notificaitons</li>
                  </ul>
                </li>

                <hr>

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
