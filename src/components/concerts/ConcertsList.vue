<template>
  <div>
    <id-concerts 
      v-for="concert in concerts" 
      :key="concert.id" 
      :concert="concert"
    ></id-concerts>
  </div>
</template>

<script>
import IdConcerts from "@/components/concerts/IdConcert"
import axios from 'axios'
export default {
  name: 'ConcertsList',
  data () {
    return {
      concerts: [],
    }
  },
  components: {
    'id-concerts': IdConcerts
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')

      const res = await axios.get('http://localhost:3000/concerts', {
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
