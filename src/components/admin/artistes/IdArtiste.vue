<template>
  <div class="id-card">
    <img height="300px" :src="artist.avatar">
    <p> {{ artist.name }} </p>
    <p> {{artist.description}} </p>
    <slot></slot>
    <button @click="formOpen = !formOpen">Editer un Artist</button>
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
      <textarea v-model="form.description" rows="5" cols="33"></textarea>
      <br>
      <button @click="submitForm">Enregistrer l'artiste</button>
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

