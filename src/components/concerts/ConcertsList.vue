<template>
  <div>
    <h2> Tous les concerts : </h2>
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
      console.log(res.data)
      this.concerts = res.data
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
