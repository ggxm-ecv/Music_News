<template>
  <div>
    <id-artiste 
      v-for="artist in artists" 
      :key="artist.id" 
      :artist="artist"
    ></id-artiste>

    <paginate
      :click-handler="functionName"
      :page-range="3"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'className'">
    </paginate>
  </div>
</template>

<script>
import IdArtiste from "@/components/artistes/IdArtiste"
import axios from 'axios'

export default {
  name: 'ArtistesList',
  data () {
    return {
      artists: [],
    }
  },
  components: {
    'id-artiste': IdArtiste
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')

      const res = await axios.get('http://localhost:3000/artists', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.artists = res.data
    },
    functionName: function (pageNum) {
      console.log(pageNum) 
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style >
  .className {
    width: 60px;;
    display: flex;
    margin: 0 auto;
    list-style: none;
  }
  .className li {
    margin: 0 20px;
  }
</style>
