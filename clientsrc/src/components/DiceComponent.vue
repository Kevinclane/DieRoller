<template>
  <div class="DiceComponent col-3 bg-primary">
    <img v-if="die.output != ''" :src="`${die.output}`" alt="error loading image" />
  </div>
</template> 

<script>
export default {
  name: "DiceComponent",
  props: ["die"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    rollDie() {
      let result = "";
      let rng = Math.random();
      if (rng < 1 / 6) {
        result = "../assets/die1.png";
      } else if (rng < (1 / 6) * 2) {
        result = "../assets/die2.png";
      } else if (rng < (1 / 6) * 3) {
        result = "../assets/die3.png";
      } else if (rng < (1 / 6) * 4) {
        result = "../assets/die4.png";
      } else if (rng < (1 / 6) * 5) {
        result = "../assets/die5.png";
      } else if (rng < (1 / 6) * 6) {
        result = "../assets/die6.png";
      }
      this.die.output = result;
    },
  },
};
</script>