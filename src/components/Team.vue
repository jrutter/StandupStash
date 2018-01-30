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
import axios from 'axios'



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
    this.getToken()
  },
  methods: {
    loadProfile: function () {

      // this.profile = profileObj
    },
    getToken: function () {

      axios({
        method: 'post',
        url: 'https://onerutter.auth0.com/oauth/token',
        headers: { 'content-type': 'application/json' },
        data: {
          grant_type: 'client_credentials',
          client_id: 'sZKMo3vwdiKRxiMPAi0yTt9SdFzs0soW',
          client_secret: 'xw8S5_LUB-9bn-yU8RHQLgYs7afu2G9WxkPCfKomMYsJKmc48Ai-fklbL741ZmE7',
          audience: 'https://onerutter.auth0.com/api/v2/'
        }
      }).then(function (response) {
        console.log('response', response)
      }).catch(function (error) {
        console.log('error', error)
      })


      // axios.post('https://onerutter.auth0.com/oauth/token',
      //   {
      //     headers: { 'content-type': 'application/json' },
      //     body: {
      //       grant_type: 'client_credentials',
      //       client_id: '0ccWtJI4unjRAEgULYPIXS-lo5twGlYh',
      //       client_secret: '0nt2Z9tZ3B1Xcpm7pMfr9-xlcLBI704NwyAUBUs6BIjoBUVk4l2HVvhH7DmWsqT8',
      //       audience: 'https://onerutter.auth0.com/api/v2/'
      //     },
      //   }).then(function (response) {
      //     console.log('response', response)
      //   }).catch(function (error) {
      //     console.log('error', error)
      //   })

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
