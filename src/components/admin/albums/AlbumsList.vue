<template>
  <div>
    <AddAlbum @getNewData="setNewData" />
    <br>
    <id-album
      v-for="album in albums" 
      :key="album.id" 
      :album="album"
      @updateData="updateData"
    >
      <button @click="deleteAlbum(album)" class="inline-block px-4 py-2 mt-4 rounded-lg border-2 border-gray-700"> Supprimer l'Album </button>
    </id-album>
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
    },
    updateData (data) {
      this.albums.forEach(el => {
        if (el.id === data.id) {
          el.name = data.name
          el.released = data.released
          el.tracks = data.tracks
          el.artistId = data.artistId
        }
      })
    },
    async deleteAlbum (album) {
      await axios
        .delete(`http://localhost:3000/albums/${album.id}`)
        .then(response => {
          this.albums = this.albums.filter((el) => el.id !== album.id)
        })
        .catch(error => console.log('Error : ' + error))
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
