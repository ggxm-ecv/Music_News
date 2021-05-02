<template>
  <div>
    <h2> Les dernières news </h2>
    <id-news
      v-for="news in news" 
      :key="news.id" 
      :news="news"
    ></id-news>
  </div>
</template>

<script>
import IdNews from "@/components/news/IdNews"
import axios from 'axios'

export default {
  name: 'NewsList',
  data () {
    return {
      news: [],
    }
  },
  components: {
    'id-news': IdNews
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')

      const res = await axios.get('http://localhost:3000/news', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res.data)
      this.news = res.data
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
