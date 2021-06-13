<template>
  <div class="id-card bg-indigo-600 p-6 rounded-lg shadow-lg">
    <p class="text-2xl"> {{ album.name }} </p>
    <p class="text-xs"> Publié en {{ album.released }} </p>
    <div class="mt-4">
      <p> Nombre de musique : {{ album.tracks }} </p>
      <p> Artiste : {{ artistName }} </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    album: {
      type: Object,
      required: true,
      default: () => []
    },
  },
  data () {
    return {
      artists: [],
      artistName: ''
    }
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')

      const res = await axios.get('http://localhost:3000/artists', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.artists = res.data

      this.artistName = this.artists[this.album.artistId - 1].name
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
