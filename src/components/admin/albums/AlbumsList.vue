<template>
  <div>
    <h2> Les dernièrs albums </h2>
    <br>
    <AddAlbum @getNewData="setNewData" />
    <br>
    <id-album
      v-for="album in albums" 
      :key="album.id" 
      :album="album"
    ></id-album>
  </div>
</template>

<script>
import axios from 'axios'
import IdAlbum from "@/components/admin/albums/IdAlbum"
import AddAlbum from "@/components/admin/albums/AddAlbum"

export default {
  name: 'AlbumsList',
  data () {
    return {
      albums: [],
    }
  },
  components: {
    'id-album': IdAlbum,
    AddAlbum
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')

      const res = await axios.get('http://localhost:3000/albums', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.albums = res.data
    },
    setNewData (data) {
      this.albums.push(data)
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
