<template>
  <div>
    <button @click="formOpen = !formOpen">Ajouter un Genre</button>
    <div v-if="formOpen">
      <label>Nom : </label>
      <input v-model="form.name">
      <br>
      <br>
      <button @click="submitForm">Ajouter le genre</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddGenre',
  data () {
    return {
      formOpen: false,
      form: {
        name: ''
      }
    }
  },
  methods: {
    submitForm () {
      axios.post('http://localhost:3000/genres', this.form)
        .then(function (response) {
          this.$emit('getNewData', response.data)
        }.bind(this))
    }
  }
}
</script>
