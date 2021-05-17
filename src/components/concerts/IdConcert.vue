<template>
  <div class="id-card">
    <p> Nom : {{ concert.name }} </p>
    <p> Date : {{concert.date}} </p>
    <p> Artiste : {{ artists[this.concert.artistId-1].name }} </p>
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
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
