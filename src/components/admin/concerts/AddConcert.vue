<template>
  <div class="id-card p-6 rounded-lg">
    <div class="text-center">
      <button @click="formOpen = !formOpen" class="inline-block px-4 py-2 mt-2 rounded-lg border-2 border-gray-700">Ajouter un Concert</button>
    </div>
    <div v-if="formOpen" class="w-80 mt-4 mx-auto shadow-md bg-gray-700 p-6 flex flex-col justify-between items-center rounded-lg">
      <input v-model="form.name" placeholder="Nom">
      <br>
      <label>Date : </label>
      <input v-model="date" type="date">
      <br>
      <label>Id Artiste : </label>
      <input v-model.number="form.artistId" type="number" min="0">
      <br>
      <button @click="submitForm" class="text-black bg-white mt-2 px-4 py-2 rounded-lg">Ajouter le Concert</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddConcert',
  data () {
    return {
      formOpen: false,
      date: '',
      form: {
        name: '',
        date: '',
        artistId: undefined
      }
    }
  },
  methods: {
    submitForm () {
      function formatDate (arr, old_index, new_index) {
        if (new_index >= arr.length) {
          let k = new_index - arr.length + 1
          while (k--) {
            arr.push(undefined)
          }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
        return arr.join('/')
      }

      const dateSplited = this.date.split('-')
      const dateFormated = formatDate(dateSplited, 0, 2)
      this.form.date = dateFormated
      const dateSplited2 = this.form.date.split('/')
      const dateFormated2 = formatDate(dateSplited2, 0, 1)
      this.form.date = dateFormated2

      axios.post('http://localhost:3000/concerts', this.form)
        .then(function (response) {
          this.$emit('getNewData', response.data)
        }.bind(this))
    }
  }
}
</script>
