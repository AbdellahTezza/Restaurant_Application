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
                  <h4 class="card-title">Update Information</h4>
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
                    <button type="button" @click="Upadaterestaurant" class="btn btn-primary">Update Restaurant</button>
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
import HeaderView from './Header.vue'
import axios from 'axios';

export default {
  name: 'UpdateView',
  components: {
    HeaderView,
  },
  data() {
    return {
      restaurant: {
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  methods: {
    async Upadaterestaurant() {
      const result = await axios.put("http://localhost:3000/restaurant/" + this.$route.params.id, {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact
      });
      if (result.status == 200) {
        this.$router.push({ name: 'HomeView' })
      }
    }
  },
  async mounted() {
    const result = await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id);
    this.restaurant = result.data
  }
}
</script>
<style>
main.main-content {
  transition: all 300ms ease;
  margin-left: 4.8rem;
}

label {
  text-align: left;
  display: block;
}</style>
