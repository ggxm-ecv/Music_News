<template>
  <div class="id-card">
    <p> {{ album.name }} </p>
    <p> {{ album.released }} </p>
    <p> Nombre de musique : {{ album.tracks }} </p>
    <p> Artiste : {{ artistName }} </p>
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
