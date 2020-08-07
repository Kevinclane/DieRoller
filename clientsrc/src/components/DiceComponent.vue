<template>
  <div class="DiceComponent col-6 col-md-3 my-1">
    <img
      v-if="die.output != ''"
      :src="require('../assets/' + die.output + '.png')"
      alt="error loading image"
    />
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
  methods: {},
};
</script>