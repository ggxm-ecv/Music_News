<template>
  <div>
    <Header />

    <h1> Accueil </h1>

    <nav>
      <ul class="home__nav">
        <li>Actualités</li>
        <li>Albums</li>
      </ul>
    </nav>
    
    <div class="news">

    </div>

    <div class="albums">

    </div>
    
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/static/Header'
import Footer from '@/components/static/Footer'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>
