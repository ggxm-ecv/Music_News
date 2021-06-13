<template>
  <div>
    <h2> Les dernièrs albums </h2>
    <input type="text" v-model="search" placeholder="album">
    <id-album
      v-for="album in filteredAlbums" 
      :key="album.id" 
      :album="album"
    ></id-album>
  </div>
</template>

<script>
import IdAlbum from "@/components/albums/IdAlbum"
import axios from 'axios'

export default {
  name: 'AlbumsList',
  data () {
    return {
      albums: [],
      search: ''
    }
  },
  components: {
    'id-album': IdAlbum
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
    }
  },
  computed: {
    filteredAlbums: function () {
      return this.albums.filter((album) => {
        return album.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
