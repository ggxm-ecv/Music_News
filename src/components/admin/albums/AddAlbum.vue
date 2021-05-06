<template>
  <div>
    <button @click="formOpen = !formOpen">Ajouter un Album</button>
    <div v-if="formOpen">
      <label>Nom : </label>
      <input v-model="form.name">
      <br>
      <label>Année : </label>
      <input v-model.number="form.released" type="number" min="1900">
      <br>
      <label>Nombre de musiques : </label>
      <input v-model.number="form.tracks" type="number" min="0">
      <br>
      <label>Id Artiste : </label>
      <input v-model.number="form.artistId" type="number" min="0">
      <br>
      <br>
      <button @click="submitForm">Ajouter l'album</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddAlbum',
  data () {
    return {
      formOpen: false,
      form: {
        name: '',
        released: undefined,
        tracks: undefined,
        artistId: undefined
      }
    }
  },
  methods: {
    submitForm () {
      axios.post('http://localhost:3000/albums', this.form)
        .then(function (response) {
          this.$emit('getNewData', this.form)
        }.bind(this))
    }
  }
}
</script>

<style>
  
</style>
