<template>
  <div>
    <h2> Les dernièrs albums </h2>
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

export default {
  name: 'AlbumsList',
  data () {
    return {
      albums: [],
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
  mounted () {
    this.fetchData()
  }
}
</script>
