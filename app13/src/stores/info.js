import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useInfoStore = defineStore('info', () => {

  const nameFirst = ref("Joe")
  const nameLast = ref("Deez")
  const street = ref("255 State St")
  const city = ref("Boston")
  const state = ref("MA")
  const zip = ref("02109")

  const events = ref([])

  return { nameFirst, nameLast, street, city, state, zip, events }
})
