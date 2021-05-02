<template>
  <div>
    <Header />
    <h1> Concerts </h1>
    <ConcertsList />
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
