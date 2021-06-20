<template>
  <div class="id-card block bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 class="mt-4 text-2xl font-bold"> {{ album.name }} </h2>
    <p class="mt-2"> {{ album.released }} </p>
    <p class="mt-2"> Nombre de musique : {{ album.tracks }} </p>
    <p class="mt-2"> Id artiste/groupe : {{ album.artistId }} </p>
    <slot></slot>
    <button @click="formOpen = !formOpen" class="inline-block px-4 py-2 ml-2 mt-2 rounded-lg border-2 border-gray-700">Editer un Album</button>
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
      <br>
      <button @click="submitForm" class="text-black bg-white mt-2 px-4 py-2 rounded-lg">Enregistrer l'album</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      formOpen: false,
      form: {
        name: this.album.name,
        released: this.album.released,
        tracks: this.album.tracks,
        artistId: this.album.artistId
      }
    }
  },
  props: {
    album: {
      type: Object,
      required: true,
      default: () => []
    },
  },
  methods: {
    submitForm () {
      axios.patch(`http://localhost:3000/albums/${this.album.id}`, this.form)
        .then(function (response) {
          this.$emit('updateData', response.data)
        }.bind(this))
    }
  }
}
</script>

