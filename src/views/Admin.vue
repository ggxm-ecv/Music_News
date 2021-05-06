<template>
  <div>
    <h1> Admin </h1>

    <nav class="">
      <ul class="admin__nav">
        <li class="admin__nav-item active"
            cat-name="news"
            @click="switchCat"
        >
          Actualités
        </li>
        <li class="admin__nav-item"
            cat-name="artists"
            @click="switchCat"
        >
          Artistes
        </li>
        <li class="admin__nav-item"
            cat-name="albums"
            @click="switchCat"
        >
          Albums
        </li>
        <li class="admin__nav-item"
            cat-name="concerts"
            @click="switchCat"
        >
          Concerts
        </li>
        <li class="admin__nav-item"
            cat-name="genres"
            @click="switchCat"
        >
          Genres
        </li>
      </ul>
    </nav>

    <div class="admin__content">
      <div v-if="content.news" class="admin__cat">
        <NewsList />
      </div>

      <div v-if="content.artists" class="admin__cat">
        <ArtistesList />
      </div>

      <div v-if="content.albums" class="admin__cat">
        <AlbumsList />
      </div>

      <div v-if="content.concerts" class="admin__cat">
        <ConcertsList />
      </div>

      <div v-if="content.genres" class="admin__cat">
        <GenresList />
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import NewsList from '@/components/admin/news/NewsList'
import ArtistesList from '@/components/admin/artistes/ArtistesList'
import AlbumsList from '@/components/admin/albums/AlbumsList'
import ConcertsList from '@/components/admin/concerts/ConcertsList'
import GenresList from '@/components/admin/genres/GenresList'

export default {
  data () {
    return {
      content: {
        news: true,
        artists: false,
        albums: false,
        concerts: false,
        genres: false
      }
    }
  },
  components: {
    NewsList,
    ArtistesList,
    AlbumsList,
    ConcertsList,
    GenresList
  },
  methods: {
    switchCat: function (e) {
      const catName = e.target.getAttribute('cat-name')

      document.getElementsByClassName('admin__nav-item').forEach(element => {
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
