<template>
  <div>
    <Header />
    <h1> Accueil </h1>
    <NewsList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/static/Header'
import Footer from '@/components/static/Footer'
import NewsList from '@/components/news/NewsList'

export default {
  components: {
    Header,
    Footer,
    NewsList
  }
}
</script>
