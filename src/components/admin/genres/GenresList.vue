<template>
  <div>
    <h2> Tous les genres </h2>
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

export default {
  name: 'GenresList',
  data () {
    return {
      genres: [],
    }
  },
  components: {
    'id-genre': IdGenre
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
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
