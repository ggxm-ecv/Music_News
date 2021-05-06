<template>
  <div>
    <Header />

    <h1> Accueil </h1>

    <nav class="">
      <ul class="home__nav">
        <li class="home__nav-item active"
            cat-name="news"
            @click="switchCat"
        >
          Actualités
        </li>
        <li class="home__nav-item"
            cat-name="albums"
            @click="switchCat"
        >
          Albums
        </li>
      </ul>
    </nav>
    
    <div v-if="content.news" class="home__cat">
      <NewsList />
    </div>

    <div v-if="content.albums" class="home__cat">
      <AlbumsList />
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/static/Header'
import Footer from '@/components/static/Footer'
import NewsList from '@/components/news/NewsList'
import AlbumsList from '@/components/albums/AlbumsList'

export default {
  data () {
    return {
      content: {
        news: true,
        albums: false
      }
    }
  },
  components: {
    Header,
    Footer,
    NewsList,
    AlbumsList
  },
  methods: {
    switchCat: function (e) {
      const catName = e.target.getAttribute('cat-name')

      document.getElementsByClassName('home__nav-item').forEach(element => {
        element.classList.remove('active')
      })

      e.target.classList.add('active')

      Object.keys(this.content).forEach(key => {
        this.content[key] = false
        if (key === catName) {
          this.content[key] = true
        }
      })
    }
  }
}
</script>
