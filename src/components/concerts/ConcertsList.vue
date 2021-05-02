<template>
  <div>
    <h2> Tous les concerts </h2>
    <id-concerts
      v-for="item in concerts" 
      :key="item.name" 
      :name="item.name" 
      :avatar="item.avatar"
      :desc="item.description"
    ></id-concerts>
  </div>
</template>

<script>
import IdConcerts from "@/components/concerts/IdConcerts"
import axios from 'axios'

export default {
  name: 'test',
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
