<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 box">
          </div>

          <div class="column is-6 box">

          </div>

          <div class="column box">
            <br>
            <div class="columns is-centered">
              <img :src="user.fb.photoURL" alt="" class="circle">
            </div>
            <br>
            <div class="columns is-centered">
              <h1 class="title is-6">{{user.fb.displayName}}</h1>
            </div>
            <div class="columns is-centered">
            </div>
            <br>
            <div class="columns is-centered">
              <button @click="logout" class="button  is-danger is-outlined">logout</button>
            </div>
            <br>
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
    ...mapActions(['logout', 'getMargetData'])
  },
  computed: {
    ...mapGetters([
      'user',
      'margetData'
    ]),
    img () {
      return this.user.fb.photoURL
    }
  }
}
</script>
<style>
  .circle{ /* ชื่อคลาสต้องตรงกับ <img class="circle"... */
    height: auto;  /* ความสูงปรับให้เป็นออโต้ */
    width: auto;  /* ความสูงปรับให้เป็นออโต้ */
    border: 3px solid #fff; /* เส้นขอบขนาด 3px solid: เส้น #fff:โค้ดสีขาว */
    border-radius: 50%; /* ปรับเป็น 50% คือความโค้งของเส้นขอบ*/
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* เงาของรูป */
  }
  div{
    font-family: 'Kanit', sans-serif;
  }
  .box{
    margin-left: 2px;
    margin-right: 2px;
    margin-top: 2px;
  }
</style>
