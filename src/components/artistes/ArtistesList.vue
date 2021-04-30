<template>
  <div>
    <h2> Tous les artistes </h2>
    <id-artistes v-for="item in artists" :key="item.name" :name="item.name" :avatar="item.avatar"></id-artistes>
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

      const res = await axios.get('http://localhost:3000/artists', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res.data)
      this.artists = res.data
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
