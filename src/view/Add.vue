<template>
    <HeaderView />
    <main class="main-content">
    <div class="content-inner mt-5 py-0">
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header d-flex justify-content-between">
                <div class="header-title">
                  <h4 class="card-title">Add restaurant</h4>
                </div>
              </div>
              <div class="card-body">
                <div class="new-user-info">
                  <form>
                    <div class="row">
                      <div class="form-group col-md-6">
                        <label class="form-label" for="fname">First Name:</label>
                        <input v-model="restaurant.name" type="text" class="form-control" id="fname"
                          placeholder="First Name">
                      </div>
                      <div class="form-group col-md-6">
                        <label class="form-label" for="lname">Contact:</label>
                        <input type="text" v-model="restaurant.address" class="form-control" id="lname"
                          placeholder="Last Name">
                      </div>
                      <div class="form-group col-md-12">
                        <label class="form-label" for="lname">Adress:</label>
                        <textarea type="text" v-model="restaurant.contact" class="form-control" id="lname"
                          placeholder="Adresse">
                         </textarea>
                      </div>
                    </div>
                    <button type="button" @click="addrestaurant" class="btn btn-primary">Add restaurant</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from 'axios';
import HeaderView from '../components/Header.vue'
export default {
    name:'AddView',
    components:{
        HeaderView
    },
    data()
    {
        return{
            restaurant:{
                name:'',
                address: '',
                contact:''
            }
        }
    },
    methods:{
       async addrestaurant(){
           console.log(this.restaurant);
           const result = await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
           });
           console.log(result.status);
           if(result.status == 201){
                this.$router.push({name:'HomeView'})
           }
        }
    }
}
</script>
<style>

</style>