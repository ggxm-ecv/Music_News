<template>
  <div>
    <id-concert
      v-for="concert in concerts" 
      :key="concert.id"
      :concert="concert"
    ></id-concert>
  </div>
</template>

<script>
import IdConcert from "@/components/concertsArtiste/IdConcert"
import axios from 'axios'

export default {
  name: 'ConcertList',
  data () {
    return {
      concerts: [],
    }
  },
  components: {
    'id-concert': IdConcert
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')

      const res = await axios.get('http://localhost:3000/concerts/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.concerts = res.data
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

