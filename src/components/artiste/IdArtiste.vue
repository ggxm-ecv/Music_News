<template>
  <div class="id-card block bg-indigo-600 p-6 rounded-lg shadow-lg">
    <img class="artiste__img rounded-lg" :src="artist.avatar">
    <h2 class="mt-4 text-2xl font-bold"> {{ artist.name }} </h2>
    <p class="mt-2"> {{ artist.country }} </p>
    <p class="mt-2"> {{ artist.description }} </p>

    <h3 class="mt-6 font-bold">Albums :</h3>
    <AlbumsList />
    
    <h3 class="mt-6 font-bold">Concerts :</h3>
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
