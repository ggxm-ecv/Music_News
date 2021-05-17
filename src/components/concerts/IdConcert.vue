<template>
  <div class="id-card">
    <p> Nom : {{ concert.name }} </p>
    <p> Date : {{concert.date}} </p>
    <p> Artiste : {{ artistName }} </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    concert: {
      type: Object,
      required: true,
      default: () => []
    }
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

      this.artistName = this.artists[this.concert.artistId - 1].name
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
