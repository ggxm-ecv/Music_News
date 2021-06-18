<template>
  <div class="id-card block bg-gray-800 p-6 rounded-lg shadow-lg">
    <img class="artiste__img rounded-lg" :src="artist.avatar">
    <h2 class="mt-4 text-2xl font-bold"> {{ artist.name }} </h2>
    <p class="mt-2"> {{artist.description}} </p>
    <slot></slot>
    <button @click="formOpen = !formOpen" class="inline-block px-4 py-2 ml-2 mt-2 rounded-lg border-2 border-gray-700">Editer un Artist</button>
    <div v-if="formOpen" class="w-80 mt-4 mx-auto shadow-md bg-gray-700 p-6 flex flex-col justify-between items-center rounded-lg">
      <input v-model="form.name" placeholder="Nom">
      <br>
      <input v-model="form.origin" placeholder="Origin">
      <br>
      <input v-model="form.avatar" type="url" placeholder="Avatar (url)">
      <br>
      <label>Genre : </label>
      <input v-model.number="form.genreId" type="number" min="0">
      <br>
      <textarea v-model="form.description" placeholder="Description"></textarea>
      <br>
      <button @click="submitForm" class="text-black bg-white mt-2 px-4 py-2 rounded-lg">Enregistrer l'artiste</button>
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
        name: this.artist.name,
        origin: this.artist.origin,
        avatar: this.artist.avatar,
        genreId: this.artist.genreId,
        description: this.artist.description,
        likes: this.artist.likes
      }
    }
  },
  props: {
    artist: {
      type: Object,
      required: true,
      default: () => []
    },
  },
  methods: {
    submitForm () {
      axios.patch(`http://localhost:3000/artists/${this.artist.id}`, this.form)
        .then(function (response) {
          this.$emit('updateData', response.data)
        }.bind(this))
    }
  }
}
</script>

