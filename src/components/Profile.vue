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
              <h1>User Profile</h1>

              <div class="row mb-2" v-if="authenticated">
        <div class="col-md-12">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <h3 class="mb-0">
                <a class="text-dark" href="#">{{profile.nickname}}</a>
              </h3>
              <div class="mb-1 text-muted">{{profile.name}}</div>

              <p class="card-text mb-auto">Team: </p>
              <a href="#" @click="auth.logout()">Edit</a>
              <a href="#" @click="auth.logout()">Log out</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" :src="profile.picture" alt="Thumbnail [200x250]" style="width: 200px; height: 250px;" data-holder-rendered="true">
          </div>
        </div>
        <div class="col-md-6">

        </div>
      </div>




              <div v-else-if="!authenticated">
                You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
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
  name: 'Add',
  props: ['auth', 'authenticated'],
  components: {
    NavBar
  },
  data () {
    return {
      items: [],
      profile: ''
    }
  },
  mounted: function () {
    this.loadProfile()
  },
  methods: {
    loadProfile: function () {
      let getProfile = localStorage.getItem('userProfile')
      this.profile = JSON.parse(getProfile)
      console.log('retrievedObject: ', this.profile)
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
