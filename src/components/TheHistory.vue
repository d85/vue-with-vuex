<template>
  <div class="container">
    <h4>History</h4>
    <div class="flex">
      <p v-for="(num, index) in history" :key="index"
        :class="matchingIndexes(parseInt(value)).includes(index) && 'bold'">
        {{ num }}
      </p>
    </div>
    <input type="number" placeholder="Search" v-model="value">
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
  data() {
    return {
      value: 0
    }
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["matchingIndexes"])
  }
}
</script>

<style scoped>
.container {
  margin-top: 7rem;
}

.flex {
  display: flex;
  text-align: center;
  width: 25rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
}

.flex p {
  margin: 1rem;
}

.bold {
  font-weight: 900;
}

input[type='number'] {
  text-align: center
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  margin-left: -14px;
}
</style>