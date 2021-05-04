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

<style>

  .admin__nav {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  .admin__nav-item {
    cursor: pointer;
    margin: 4px;
    padding: 8px 16px;
    border: 2px solid #222;
    border-radius: 4px;
    background-color: #fff;
    color: #222;
    transition: all 150ms ease-out;
  }

  .admin__nav-item.active,
  .admin__nav-item:hover {
    background-color: #222;
    color: #fff;
  }

</style>
