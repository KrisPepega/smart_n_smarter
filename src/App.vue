<script setup>
import { ref } from "vue"
import class_data from "./data/classes.json"
console.log(class_data)

const selected_class = ref("None")
const selected_perks = ref({ "perk_1": "None", "perk_2": "None", "perk_3": "None", "perk_4": "None" })

function check_disabled_perk(selected_perk, option_name) {
  return Object.keys(this.selected_perks).filter((key) => {
    return selected_perk !== key && this.selected_perks[key] == option_name
  }).length > 0
}

</script>

<template>
  <header>
    <h1>
      Smart n' Smarter
    </h1>
  </header>

  <main>
    <div id="class-select">
      <select v-model="selected_class">
        <option value="None" selected disabled hidden>Select an Option</option>
        <option v-for="option in class_data" :key="option.name" :value="option.name.toLocaleLowerCase()">
          {{ option.name }}
        </option>
      </select>
      <label>Selected: {{ selected_class }}</label>
    </div>

    <div v-if="selected_class !== 'None'" id="perk-selectors">
      <select v-for="(value, perk) in selected_perks" :key="perk" :id="perk" v-model="selected_perks[perk]">
        <option value="None" selected disabled hidden>Select an Option</option>
        <option v-for="option in class_data[selected_class].perks" :disabled="check_disabled_perk(perk, option.name)"
          :key="option.name">
          {{ option.name }}
        </option>
      </select>
    </div>
  </main>
</template>

<style scoped></style>
