<template>
  <div>
    <h2> Tous les artistes </h2>
    <id-artistes v-for="item in artists" :key="item.name" :name="item.name"></id-artistes>
  </div>
</template>

<script>
import IdArtistes from "@/components/artistes/IdArtistes"
import axios from 'axios'

export default {
  name: 'test',
  data () {
    return {
      artists: [],
    }
  },
  components: {
    'id-artistes': IdArtistes
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')

      const res = axios.get('http://localhost:3000/artists', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res)
      this.artists = res.data
      console.log(this.artists)
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
