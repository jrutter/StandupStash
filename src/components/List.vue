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
              <h1>Stash History</h1>

              <div v-if="!authenticated">
                You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
              </div>

              <div v-else-if="authenticated">

                <div class="list-filter">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ active: teamActive }" href="/log/team">My Team</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ active: userActive }" href="/log/user">Personal</a>
                  </li>
                </ul>
                </div>

                <template v-if="path === 'team'">

                </template>


                <div class="card-deck">
                  <div v-for="item in entries" class="card mb-4 box-shadow">
                    <div class="card-header">
                      <h4 class="my-0 font-weight-normal">{{item.created_at | formatDate}}</h4>
                    </div>

                    <div class="card-body">
                      <ul class="list-unstyled mt-3 mb-4">
                        <li><i class="fas fa-calendar-plus"></i> Today: {{item.today | capitalize }}</li>
                        <li><i class="fas fa-calendar-check"></i> Yesterday: {{item.yesterday | capitalize }}</li>
                        <li><i class="fas fa-ban"></i> Blocker: {{item.blocker}}</li>
                        <template v-if="item.team">
                          <li><i class="fas fa-users"></i> Team: {{item.team}}</li>
                        </template>

                        <li><i class="fas fa-user"></i> User: {{item.name}}</li>
                      </ul>
                    </div>

                  </div>
                </div>




              </div>
            </div>


          </div>
      </div>


</div>
</template>

<script>
import axios from 'axios'
import NavBar from '@/components/Nav'
import moment from 'moment'

export default {
  name: 'List',
  props: ['auth', 'authenticated'],
  components: {
    NavBar
  },
  data () {
    return {
      entries: [],
      searchResults: '',
      profile: '',
      path: '',
      teamActive: '',
      userActive: ''

    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    formatDate: function (value) {
      if (!value) return ''
      return moment(value).format('MM/DD/YYYY hh:mm')
    }
  },
  mounted: function () {
    this.loadItems()
  },
  methods: {
    loadItems: function () {
      let self = this
      let getProfile = localStorage.getItem('userProfile')
      let labKey = process.env.MLABKEY

      this.profile = JSON.parse(getProfile)
      let teamName = this.profile['https://standupstash.com/team']
      let searchQ

      let teamQuery = this.$route.params.id
      self.path = teamQuery
      if (teamQuery === 'team') {
        searchQ = {'team': teamName}
        self.teamActive = true
      } else if (teamQuery === 'user') {
        searchQ = {'email': this.profile.name}
        self.userActive = true
      }

      axios.get('https://api.mlab.com/api/1/databases/standup/collections/stash',
        {
          params: {
            apiKey: labKey,
            q: searchQ
          }
        }).then(function (response) {
          self.entries = response.data
        }).catch(function (error) {
          console.log('error', error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
