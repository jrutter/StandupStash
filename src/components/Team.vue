<template>
<div>

  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h5 class="my-0 mr-md-auto font-weight-normal logo"><a href="/">Standup Stash</a></h5>
      <nav-bar :auth="auth"
      :authenticated="authenticated"></nav-bar>
        <a class="btn btn-outline-primary" @click="auth.login()" v-if="!authenticated">Sign up</a>
        <a class="btn btn-outline-primary" @click="auth.logout()" v-else-if="authenticated">Log-out</a>
    </div>


      <div class="container">
          <div id="content">
              <h1>Setup your account?</h1>


              <div v-if="!authenticated">
                You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
              </div>

              <div v-else-if="authenticated">

                <div class="card" style="margin:20px 0;">
                  <h5 class="card-header">Setup Team</h5>
                  <div class="card-body">
                    <h5 class="card-title">Please pick a team name</h5>
                    <div class="form-group">
                      <input type="text" class="form-control" v-model="team" placeholder="Enter Team Name">
                    </div>
                    <a href="#" class="btn btn-primary" v-on:click="saveStatus()">Save</a>
                  </div>
                </div>
              </div>


          </div>
      </div>

      <footer class="text-muted">
      <div class="container">
        <p>&copy; 2018 Standup Stash! | Created by <a href="http://www.onerutter.com">Jake Rutter</a></p>
      </div>
    </footer>

</div>
</template>

<script>

import NavBar from '@/components/Nav'
import auth0 from 'auth0-js'
import EventEmitter from 'eventemitter3'



export default {
  name: 'Team',
  props: ['auth', 'authenticated'],
  components: {
    NavBar
  },
  data () {
    return {
      items: [],
      team: '',
    }
  },
  mounted: function () {
    this.loadProfile()
  },
  methods: {
    loadProfile: function () {

      // this.profile = profileObj
    },
    saveStatus: function () {
      var self = this
      let getProfile = localStorage.getItem('userProfile')
      let profileObj = JSON.parse(getProfile)
      let tokenID = localStorage.getItem('id_token')

      var auth0Manage = new auth0.Management({
        domain: 'onerutter.auth0.com',
        token: ""
      })

      auth0Manage.getUser(profileObj.sub, function (err, profile) {
        if (profile) {
          // let this.userProfile = profile;
          console.log('profile', profile)
        } else {
          console.log('err', err)
        }
      })

      // auth0Manage.getUser(userId, cb);


    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
