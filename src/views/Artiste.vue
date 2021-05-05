<template>
  <div>
    <Header />
    <h1> Un Artiste </h1>
    <IdArtiste />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/static/Header'
import Footer from '@/components/static/Footer'
import IdArtiste from '@/components/artiste/IdArtiste'


export default {
  components: {
    Header,
    Footer,
    IdArtiste
  }
}
</script>
