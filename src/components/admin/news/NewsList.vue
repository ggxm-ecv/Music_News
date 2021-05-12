<template>
  <div>
    <h2> Les dernières news </h2>
    <br>
    <AddNews @getNewData="setNewData" />
    <br>
    <id-news
      v-for="news in news" 
      :key="news.id" 
      :news="news"
       @updateData="updateData"
    >
      <button @click="deleteNews(news)"> Supprimer la News </button>
    </id-news>
  </div>
</template>

<script>
import axios from 'axios'
import IdNews from "@/components/admin/news/IdNews"
import AddNews from "@/components/admin/news/AddNews"

export default {
  name: 'NewsList',
  data () {
    return {
      news: [],
    }
  },
  components: {
    'id-news': IdNews,
    AddNews
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')

      const res = await axios.get('http://localhost:3000/news', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.news = res.data
    },
    setNewData (data) {
      this.news.push(data)
    },
    updateData (data) {
      this.news.forEach(el => {
        if (el.id === data.id) {
          el.title = data.title
          el.content = data.content
          el.published = data.published
        }
      })
    },
    async deleteNews (news) {
      await axios
        .delete(`http://localhost:3000/news/${news.id}`)
        .then(response => {
          this.news = this.news.filter((el) => el.id !== news.id)
        })
        .catch(error => console.log('Error : ' + error))
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
