<template>
  <div>
    <button @click="formOpen = !formOpen">Ajouter un Artist</button>
    <div v-if="formOpen">
      <label>Nom : </label>
      <input v-model="form.name">
      <br>
      <label>Origin : </label>
      <input v-model="form.origin">
      <br>
      <label>Avatar : </label>
      <input v-model="form.avatar" type="url">
      <br>
      <label>Genre : </label>
      <input v-model.number="form.genreId" type="number" min="0">
      <br>
      <label>Description : </label>
      <input v-model="form.description">
      <br>
      <button @click="submitForm">Ajouter l'artiste</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddArtiste',
  data () {
    return {
      formOpen: false,
      form: {
        name: '',
        origin: '',
        avatar: '',
        genreId: undefined,
        description: '',
        likes: 0
      }
    }
  },
  methods: {
    submitForm () {
      axios.post('http://localhost:3000/artists', this.form)
        .then(function (response) {
          this.$emit('getNewData', this.form)
        }.bind(this))
    }
  }
}
</script>
