<template>
  <div>
    <input class="rounded-lg searchBar" type="text" v-model="search" placeholder="Rechercher un artiste">
    <id-artiste 
      v-for="artist in filteredArtists" 
      :key="artist.id" 
      :artist="artist"
    ></id-artiste>

    <paginate
      :click-handler="updatePaginate"
      :page-count="pageCount"
      prev-text="Prev"
      next-text="Next"
      container-class="paginate__wrapper">
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
      search: '',
      pageCount: 0,
      page: 1,
      limit: 3
    }
  },
  components: {
    'id-artiste': IdArtiste
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')

      // get page count
      const resAll = await axios.get('http://localhost:3000/artists', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.pageCount = resAll.data.length / this.limit

      const res = await axios.get(`http://localhost:3000/artists?_page=${this.page}&_limit=${this.limit}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.artists = res.data
    },
    async updatePaginate (pageNum) {
      const token = localStorage.getItem('vuejs_token')

      this.page = pageNum

      const res = await axios.get(`http://localhost:3000/artists?_page=${this.page}&_limit=${this.limit}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      
      this.artists = res.data
    }
  },
  computed: {
    filteredArtists: function () {
      return this.artists.filter((artist) => {
        return artist.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style >
  .paginate__wrapper {
    display: flex;
    justify-content: center;
    max-width: 400px;
    margin: 0 auto;
    list-style: none;
  }
  .paginate__wrapper li {
    margin: 0 20px;
  }
</style>
