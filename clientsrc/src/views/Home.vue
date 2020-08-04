<template>
  <div class="home container">
    <button @click="rollDice">Roll</button>
    <div class="row">
      <Die v-for="die in dice" :key="die.index" :die="die" />
    </div>
    <img src="../assets/die1.png" alt />
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
          result = " ../assets/die1.png";
        } else if (rng < (1 / 6) * 2) {
          result = " ../assets/die2.png";
        } else if (rng < (1 / 6) * 3) {
          result = " ../assets/die3.png";
        } else if (rng < (1 / 6) * 4) {
          result = "../assets/die4.png";
        } else if (rng < (1 / 6) * 5) {
          result = "../assets/die5.png";
        } else if (rng < (1 / 6) * 6) {
          result = "../assets/die6.png";
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