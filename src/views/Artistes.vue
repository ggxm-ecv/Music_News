<template>
  <div>
    <Header />
    <h1> Artistes </h1>
    <ArtistesList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/static/Header'
import Footer from '@/components/static/Footer'
import ArtistesList from "@/components/artistes/ArtistesList"

export default {
  components: {
    Header,
    Footer,
    ArtistesList,
  }
}
</script>
 
