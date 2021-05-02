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
    
    <div class="home__cat news active">
      <NewsList />
    </div>

    <div class="home__cat albums">
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
  components: {
    Header,
    Footer,
    NewsList,
    AlbumsList
  },
  methods: {
    switchCat: function (e) {
      const navItemSelected = e.target
      const catName = navItemSelected.getAttribute('cat-name')

      document.getElementsByClassName('home__nav-item').forEach(element => {
        element.classList.remove('active')
      })

      e.target.classList.add('active')

      document.getElementsByClassName('home__cat').forEach(element => {
        element.classList.remove('active')
        if (element.classList.contains(`${catName}`)) {
          element.classList.add('active')
        }
      })
    }
  }
}
</script>

<style>

  .home__nav {
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin: 0 auto;
    padding: 0;
  }

  .home__nav-item {
    cursor: pointer;
    padding: 8px 16px;
    border: 2px solid #222;
    border-radius: 4px;
    background-color: #fff;
    color: #222;
    transition: all 150ms ease-out;
  }

  .home__nav-item.active,
  .home__nav-item:hover {
    background-color: #222;
    color: #fff;
  }

  .home__cat {
    display: none;
  }

  .home__cat.active {
    display: block;
  }

</style>
