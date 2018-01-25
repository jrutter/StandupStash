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
              <h1>Welcome to Standup Stash</h1>


<p>The whole team meets every day for a quick status update. We stand up to keep the meeting short.

<br>That's it.</p>

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

export default {
  name: 'Add',
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
