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
    >
      <button @click="deleteAlbum(album)"> Supprimer l'Album </button>
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
