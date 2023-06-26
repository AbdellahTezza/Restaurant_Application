<template>
  <section class="container-fluid bg-circle-login" id="auth-sign">
    <div class="row align-items-center">
      <div class="col-md-12 col-lg-7 col-xl-4">
        <div class="card-body">

          <h2 class="mb-2 text-center">Sign In</h2>
          <p class="text-center">Sign in to stay connected.</p>
          <!-- <form> -->
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" v-model="email" name="email" class="form-control form-control-sm" id="email"
                  aria-describedby="email" placeholder=" ">
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <input type="password" v-model="password" name="password" class="form-control form-control-sm"
                  id="password" aria-describedby="password" placeholder=" ">
              </div>
            </div>
            <div class="col-lg-12 d-flex justify-content-between">
              <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input" id="customCheck1">
                <label class="form-check-label" for="customCheck1">Remember Me</label>
              </div>
              <a href="recoverpw.html">Forgot Password?</a>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button @click="login" class="btn btn-primary">Sign In</button>
          </div>

          <!-- </form> -->
        </div>
      </div>
      <div class="col-md-12 col-lg-5 col-xl-8 d-lg-block d-none vh-100 overflow-hidden">
               <img src="../assets/images/auth/09.png" class="img-fluid sign-in-img" alt="images">
      </div>
    </div>
  </section>
</template>
<script>

import axios from 'axios';
export default {
    name: 'LoginView',
    data(){
        return {
            email:'',
            password:''
        }
    },    
    methods:{
       async login() {
            //console.log("signup", this.name + this.email + this.password);
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`, {
                email:this.email,
                password:this.password
            });
            //console.log(result);
            if(result.status == 200 && result.data.length>0){
              localStorage.setItem("user-info",JSON.stringify(result.data[0]));
              this.$router.push({name:'HomeView'});
             }
             
        }
    },
    mounted(){
      let user = localStorage.getItem('user-info');
      if(user){
        this.$router.push({name:'HomeView'});
      }
    }
}
</script>
<style>
  @import '../assets/css/core/libs.min.css';
  @import '../assets/css/aprycot.min.css?v=1.0.0"';

</style>