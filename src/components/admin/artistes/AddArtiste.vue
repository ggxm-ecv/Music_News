<template>
  <div class="id-card p-6 rounded-lg">
    <div class="text-center">
      <button @click="formOpen = !formOpen" class="inline-block px-4 py-2 mt-2 rounded-lg border-2 border-gray-700">Ajouter un Artist</button>
    </div>
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
      <button @click="submitForm" class="text-black bg-white mt-2 px-4 py-2 rounded-lg">Ajouter l'artiste</button>
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
          this.$emit('getNewData', response.data)
        }.bind(this))
    }
  }
}
</script>
