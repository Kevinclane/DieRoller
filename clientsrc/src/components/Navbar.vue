<template>
  <div class="bg-secondary p-2">
    <!-- <router-link class="navbar-brand" :to="{ name: 'home' }">Die Roller</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
        </li>
    </ul>-->
    <span>
      <form @submit.prevent="selectDieNum()">
        <input type="number" name="setDieNum" id="setDieNum" />
        <label for="setDieNum">Select number of dice</label>
        <button type="submit" class="btn btn-primary">Set</button>
      </form>
    </span>
    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";

let _api = axios.create({
  baseURL: "https://localhost:3000",
  withCredentials: true,
});
export default {
  name: "Navbar",
  data() {
    return {
      formNum: 1,
    };
  },
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
    },
    async logout() {
      await this.$auth.logout({ returnTo: window.location.origin });
    },
    selectDieNum() {
      this.$store.dispatch("chooseDieNum", event.target.setDieNum.value);
    },
  },
  computed: {
    dice() {
      return this.$store.state.currentDieNum;
    },
  },
};
</script>

<style></style>
