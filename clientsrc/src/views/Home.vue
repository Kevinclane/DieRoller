<template>
  <div class="home container-fluid">
    <!-- <div class="row">
      <div class="col-12 bg-secondary">
        <form @submit.prevent="selectDieNum()">
          <input type="number" name="setDieNum" id="setDieNum" />
          <label for="setDieNum">Select number of dice</label>
          <button type="submit" class="btn btn-primary">Set</button>
        </form>
      </div>
    </div>-->
    <div class="row">
      <Die v-for="die in dice" :key="die.index" :die="die" />
    </div>
    <button @click="rollDice" class="my-3 btn btn-success w-50">Roll</button>
  </div>
</template>


<script>
import Die from "../components/DiceComponent.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    dice() {
      return this.$store.state.currentDieNum;
    },
  },
  methods: {
    rollDice() {
      let i = 0;
      while (i < this.dice.length) {
        let result = "";
        let rng = Math.random();
        if (rng < 1 / 6) {
          result = "die1";
        } else if (rng < (1 / 6) * 2) {
          result = "die2";
        } else if (rng < (1 / 6) * 3) {
          result = "die3";
        } else if (rng < (1 / 6) * 4) {
          result = "die4";
        } else if (rng < (1 / 6) * 5) {
          result = "die5";
        } else if (rng < (1 / 6) * 6) {
          result = "die6";
        }
        this.dice[i].output = result;
        i++;
      }
      this.$store.dispatch("setDiceImages", this.dice);
    },
  },
  components: {
    Die,
  },
};
</script>


<style scoped>
</style>