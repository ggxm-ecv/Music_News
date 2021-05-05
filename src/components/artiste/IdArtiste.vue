<template>
  <div class="id-card">
    <img height="300px" :src="artist.avatar">
    <h1> {{ artist.name }} </h1>
    <p> {{ artist.country }} </p>
    <p> {{ artist.description }} </p>

    <h2>Albums</h2>
    <AlbumsList />
    
    <h2>Concerts</h2>
    <ConcertsList />
    
  </div>
</template>

<script>
import axios from 'axios'
import AlbumsList from '@/components/albumsArtiste/AlbumsList'
import ConcertsList from '@/components/concertsArtiste/ConcertsList'

export default {
  
  name: 'IdArtiste',
  data () {
    return {
      artist: [],
    }
  },
  components: {
    AlbumsList,
    ConcertsList
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
