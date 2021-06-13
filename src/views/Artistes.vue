<template>
  <div>
    <Header />

    <main class="px-6 py-12">

      <h1 class="text-2xl text-center"> Artistes/Groupes </h1>

      <ArtistesList />

    </main>
    
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
 
