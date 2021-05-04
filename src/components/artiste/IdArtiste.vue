<template>
  <div class="id-card">
    <img height="300px" :src="artist.avatar">
    <p> {{ artist.name }} </p>
    <p> {{ artist.description }} </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  
  name: 'IdArtiste',
  data () {
    return {
      artist: [],
    }
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')

      const res = await axios.get(`http://localhost:3000/artists/${this.$route.params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.artist = res.data
    }
  },
  watch: {
    $route () {
      this.fetchData()
    } 
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style>
  .id-card {
    border: 1px solid gray;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.50);
    width: 400px;
    margin: 25px auto;
  }
</style>
