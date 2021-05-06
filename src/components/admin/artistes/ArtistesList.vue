<template>
  <div>
    <h2> Tous les artistes </h2>
    <br>
    <AddArtiste @getNewData="setNewData" />
    <br>
    <id-artiste 
      v-for="artist in artists" 
      :key="artist.id" 
      :artist="artist"
    ></id-artiste>
  </div>
</template>

<script>
import axios from 'axios'
import IdArtiste from "@/components/admin/artistes/IdArtiste"
import AddArtiste from "@/components/admin/artistes/AddArtiste"

export default {
  name: 'ArtistesList',
  data () {
    return {
      artists: [],
    }
  },
  components: {
    'id-artiste': IdArtiste,
    AddArtiste
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
    },
    setNewData (data) {
      this.artists.push(data)
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
