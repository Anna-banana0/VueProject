<template>
  <div class="container">
      <h1>Fill the below details to register</h1>
    <br>
    <br>
    <div class="row">
      <div class="col-md-3"></div>
        <div class="col-md-6">
            <form>
                <div class="mb-3">
                    <input
                    type="text"
                    name="fullName"
                    class="form-control"
                    id="fullName"
                    required
                    v-model="users"
                    placeholder="Full Name"/>
                </div>
                <div class="mb-3">
                    <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="email"
                    required
                    v-model="email"
                    placeholder="Email Address"
                    aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <input
                    type="number"
                    class="form-control"
                    id="phNo"
                    name="phNo"
                    required
                    v-model="phNo"
                    placeholder="Mobile Number"/>
                </div>
                <div class="mb-3">
                    <input
                    type="text"
                    class="form-control"
                    id="Address"
                    name="Address"
                    required
                    v-model="Address"
                    placeholder="Address"/>
                </div>
                <div class="mb-3">
                    <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    required
                    v-model="password"
                    placeholder="Password"/>
                </div>
                <div v-if="password.length>0 && password.length<5" class="text-danger">Password must have atleast 5 characters</div>
                <div class="mb-3">
                    <input
                    type="password"
                    class="form-control"
                    id="reenterpassword"
                    name="reenterpassword"
                    required
                    v-model="reenterpassword"
                    placeholder="Re-enter Password"/>
                </div>
                <div v-if="password != reenterpassword" class="text-danger">Passwords dont match</div>
                <br>
                <br>
                <button @click="register()" class="btn lg btn-primary">Register</button>
               
            </form>
            
        </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
    name: "register",
    data(){
        return{
           
            fullName: "",
            email: "",
            phNo: "",
            Address: "",
            password: "",
            reenterpassword: "",
            

        }
    },
    methods:{
       async register(){
            console.log("full name "+this.fullName);
            console.log("email "+this.email);
            console.log("Phno "+this.phNo);
            console.log("address "+this.Address);
            console.log("password "+this.password);
            console.log("2nd password "+this.reenterpassword);
        try{
        const data = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
       console.log(data)
       this.$router.replace({name:"login"})
    //    for(var j=0; j<this.users.length; j++){
    //         this.users.push({"Fullname":this.fullName,"email":this.email,"Phno":this.phNo,"address":this.Address,"password":this.password})
    //        console.log("hii")
    //        console.log(this.users[this.users.length-1].fullName);
    //    }
     }
        catch(error) {
            alert("Unable to register user "+error.message);
        };

        }
    }
};
</script>

<style scoped>
</style>