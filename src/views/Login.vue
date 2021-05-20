<template>
  <div class="container">
    <h1>Enter the login credentials</h1>
    <br>
    <br>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              required
              v-model="email"
              placeholder="email address"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              required
              v-model="password"
              placeholder="password"
            />
          <div v-if="password.length>0 && password.length<5" class="text-danger">Password must have atleast 5 characters</div>
          </div>
          <button @click="login()" class="btn btn-primary">Login</button>
        
      </div>
      <p>{{ email }}</p>
      <p>{{ password }}</p>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  name: 'login',
  data(){
    return {
      email: "",
      password: ""
    };
  },
  methods:{
    async login(){
      console.log("email is "+ this.email);
      console.log("password is "+this.password);
    try{
     const data = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    console.log(data)
    this.$router.replace({name:"dashboard"})
    }
  catch(error) {
    alert("Unable to login user "+error.message)
  };
    }
  }
};
</script>

<style>
</style>