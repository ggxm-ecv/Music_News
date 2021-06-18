<template>
  <div class="id-card p-6 rounded-lg">
    <div class="text-center">
      <button @click="formOpen = !formOpen" class="inline-block px-4 py-2 mt-2 rounded-lg border-2 border-gray-700">Ajouter un Album</button>
    </div>
    <div v-if="formOpen" class="w-80 mt-4 mx-auto shadow-md bg-gray-700 p-6 flex flex-col justify-between items-center rounded-lg">
      <input v-model="form.name" placeholder="Nom">
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
      <button @click="submitForm" class="text-black bg-white mt-2 px-4 py-2 rounded-lg">Ajouter l'album</button>
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
          this.$emit('getNewData', response.data)
        }.bind(this))
    }
  }
}
</script>
