<template>
  <div>
    <AddConcert @getNewData="setNewData" />
    <br>
    <id-concerts 
      v-for="concert in concerts" 
      :key="concert.id" 
      :concert="concert"
      @updateData="updateData"
    >
      <button @click="deleteConcert(concert)" class="inline-block px-4 py-2 mt-4 rounded-lg border-2 border-gray-700"> Supprimer le Concert </button>
    </id-concerts>
  </div>
</template>

<script>
import axios from 'axios'
import IdConcerts from "@/components/admin/concerts/IdConcert"
import AddConcert from "@/components/admin/concerts/AddConcert"

export default {
  name: 'ConcertsList',
  data () {
    return {
      concerts: [],
    }
  },
  components: {
    'id-concerts': IdConcerts,
    AddConcert
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
    },
    setNewData (data) {
      this.concerts.push(data)
    },
    updateData (data) {
      this.concerts.forEach(el => {
        if (el.id === data.id) {
          el.name = data.name
          el.date = data.date
          el.artistId = data.artistId
        }
      })
    },
    async deleteConcert (concert) {
      await axios
        .delete(`http://localhost:3000/concerts/${concert.id}`)
        .then(response => {
          this.concerts = this.concerts.filter((el) => el.id !== concert.id)
        })
        .catch(error => console.log('Error : ' + error))
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
