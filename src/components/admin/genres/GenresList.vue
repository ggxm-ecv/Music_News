<template>
  <div>
    <h2> Tous les genres </h2>
    <br>
    <AddGenre @getNewData="setNewData" />
    <br>
    <id-genre
      v-for="genre in genres" 
      :key="genre.id" 
      :genre="genre"
    ></id-genre>
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
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
