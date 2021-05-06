<template>
  <div>
    <button @click="formOpen = !formOpen">Ajouter un Concert</button>
    <div v-if="formOpen">
      <label>Nom : </label>
      <input v-model="form.name">
      <br>
      <label>Date : </label>
      <input v-model="date" type="date">
      <br>
      <label>Id Artiste : </label>
      <input v-model.number="form.artistId" type="number" min="0">
      <br>
      <br>
      <button @click="submitForm">Ajouter le Concert</button>
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
          this.$emit('getNewData', this.form)
        }.bind(this))
    }
  }
}
</script>

<style>
  
</style>
