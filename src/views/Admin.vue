<template>
  <div>
    <AdminHeader />

    <main class="px-6 py-12 bg-gray-900">

      <nav>
        <ul class="flex justify-center items-center">
          <li class="admin__nav-item active inline-block px-4 py-2 m-2 rounded-lg border-2 border-gray-800"
              cat-name="news"
              @click="switchCat"
          >
            Actualités
          </li>
          <li class="admin__nav-item inline-block px-4 py-2 m-2 rounded-lg border-2 border-gray-800"
              cat-name="artists"
              @click="switchCat"
          >
            Artistes
          </li>
          <li class="admin__nav-item inline-block px-4 py-2 m-2 rounded-lg border-2 border-gray-800"
              cat-name="albums"
              @click="switchCat"
          >
            Albums
          </li>
          <li class="admin__nav-item inline-block px-4 py-2 m-2 rounded-lg border-2 border-gray-800"
              cat-name="concerts"
              @click="switchCat"
          >
            Concerts
          </li>
          <li class="admin__nav-item inline-block px-4 py-2 m-2 rounded-lg border-2 border-gray-800"
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

    </main>

    <AdminFooter />
  </div>
</template>

<script>
import AdminHeader from '@/components/static/AdminHeader'
import AdminFooter from '@/components/static/AdminFooter'
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
    AdminHeader,
    AdminFooter,
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
