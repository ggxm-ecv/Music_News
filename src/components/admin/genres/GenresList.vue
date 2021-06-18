<template>
  <div>
    <AddGenre @getNewData="setNewData" />
    <br>
    <id-genre
      v-for="genre in genres" 
      :key="genre.id" 
      :genre="genre"
      @updateData="updateData"
    >
      <button @click="deleteGenre(genre)" class="inline-block px-4 py-2 mt-4 rounded-lg border-2 border-gray-700"> Supprimer le Genre </button>
    </id-genre>
  </div>
</template>

<script>
import axios from 'axios'
import IdGenre from "@/components/admin/genres/IdGenre"
import AddGenre from "@/components/admin/genres/AddGenre"

export default {
  name: 'GenresList',
  data () {
    return {
      genres: [],
    }
  },
  components: {
    'id-genre': IdGenre,
    AddGenre
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')

      const res = await axios.get('http://localhost:3000/genres', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.genres = res.data
    },
    setNewData (data) {
      this.genres.push(data)
    },
    updateData (data) {
      this.genres.forEach(el => {
        if (el.id === data.id) {
          el.name = data.name
        }
      })
    },
    async deleteGenre (genre) {
      await axios
        .delete(`http://localhost:3000/genres/${genre.id}`)
        .then(response => {
          this.genres = this.genres.filter((el) => el.id !== genre.id)
        })
        .catch(error => console.log('Error : ' + error))
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
