<template>
  <div>
    <h1>Register</h1>

    <input 
      type="email" 
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
    <input 
      type="passoword" 
      name="passoword"
      v-model="password"
      placeholder="passoword" />
    <br>
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email:'',
      password:''
    }
  },
  methods: {
    async register () {    
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log()
    }
  }
}
</script>
<style scoped>
</style>
