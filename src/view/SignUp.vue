<template>
<div class="SignUp">
<div class="screen-1">
    <img class="logo" src="../assets/logo2.png" alt="">
    <div class="email name">
    <label for="email">Enter Name</label>
    <div class="sec-2">
      <ion-icon name="mail-outline"></ion-icon>
      <input type="text" v-model="name" name="name" placeholder="Enter Name"/>
    </div>
  </div>
  <div class="email">
    <label for="email">Email Address</label>
    <div class="sec-2">
      <ion-icon name="mail-outline"></ion-icon>
      <input type="email" v-model="email" name="email" placeholder="Username@gmail.com"/>
    </div>
  </div>
  <div class="password">
    <label for="password">Password</label>
    <div class="sec-2">
      <ion-icon name="lock-closed-outline"></ion-icon>
      <input class="pas" type="password" v-model="password" name="password" placeholder="············"/>
      <ion-icon class="show-hide" name="eye-outline"></ion-icon>
    </div>
  </div>
  <button @click="signup" class="login">Signup </button>
  <div class="footer"><span>Login</span><span>Forgot Password?</span></div>
</div>
</div>
</template>
<script>
import axios from 'axios';
 export default {
    name : 'SignUp',
    data(){
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
       async signup() {
            //console.log("signup", this.name + this.email + this.password);
            let result = await axios.post("http://localhost:3000/user", {
                email:this.email,
                name:this.name,
                password:this.password
            });
            console.log(result);
            if(result.status == 201){
              localStorage.setItem("user-info",JSON.stringify(result.data));
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
.screen-1 {
  background: #f1f7fe;
  padding: 2em;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  box-shadow: 0 0 2em #e6e9f9;
  gap: 2em;
}
.email.name {
    margin-top: -54px;
}
img.logo {
    width: 142px;
    /* height: 241px; */
    margin: 0px auto 44px;
}
.screen-1 .email {
  background: white;
  box-shadow: 0 0 2em #e6e9f9;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  border-radius: 20px;
  color: #4d4d4d;
  text-align: left;
}
.screen-1 .email input {
  outline: none;
  border: none;
}
.screen-1 .email input::-moz-placeholder {
  color: black;
  font-size: 0.9em;
}
.screen-1 .email input:-ms-input-placeholder {
  color: black;
  font-size: 0.9em;
}
.screen-1 .email input::placeholder {
  color: black;
  font-size: 0.9em;
}
.screen-1 .email ion-icon {
  color: #4d4d4d;
  margin-bottom: -0.2em;
}
.screen-1 .password {
  background: white;
  box-shadow: 0 0 2em #e6e9f9;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  border-radius: 20px;
  color: #4d4d4d;
  text-align: left;
}
.screen-1 .password input {
  outline: none;
  border: none;
}
.screen-1 .password input::-moz-placeholder {
  color: black;
  font-size: 0.9em;
}
.screen-1 .password input:-ms-input-placeholder {
  color: black;
  font-size: 0.9em;
}
.screen-1 .password input::placeholder {
  color: black;
  font-size: 0.9em;
}
.screen-1 .password ion-icon {
  color: #4d4d4d;
  margin-bottom: -0.2em;
}
.screen-1 .password .show-hide {
  margin-right: -5em;
}
.screen-1 .login {
  padding: 1em;
  background: #3e4684;
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  
}
.screen-1 .footer {
  display: flex;
  font-size: 0.7em;
  color: #5e5e5e;
  gap: 14em;
  padding-bottom: 10em;
}
.screen-1 .footer span {
  cursor: pointer;
}

button {
  cursor: pointer;
}

.SignUp {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dde5f4;
    height: 100vh;
}
</style>