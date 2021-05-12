<template>
  <div class="id-card">
    <p> {{ album.name }} </p>
    <p> {{ album.released }} </p>
    <p> Nombre de musique : {{ album.tracks }} </p>
    <p> Id artiste/groupe : {{ album.artistId }} </p>
    <slot></slot>
    <button @click="formOpen = !formOpen">Editer un Album</button>
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
      <button @click="submitForm">Enregistrer l'album</button>
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

