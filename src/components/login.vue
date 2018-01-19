<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <img src="https://media.giphy.com/media/ijEiXYEo9DBxm/giphy.gif" alt="">
            <button class="button is-large is-info is-outlined"  @click="toHomePage" style="width : 100%">LOGIN</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['login', 'logout']),
    toHomePage () {
      this.login()
      this.$router.push({path: '/home'})
    }
  },
  computed: {
    ...mapGetters(['user', 'isReady'])
  }
}
</script>
