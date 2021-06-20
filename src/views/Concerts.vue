<template>
  <div>
    <Header />

    <main class="px-6 py-12">

      <h1 class="text-2xl text-center"> Concerts </h1>
      
      <ConcertsList />

    </main>
    
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/static/Header'
import Footer from '@/components/static/Footer'
import ConcertsList from "@/components/concerts/ConcertsList"

export default {
  components: {
    Header,
    Footer,
    ConcertsList,
  }
}
</script>
