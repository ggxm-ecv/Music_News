<template>
  <div>
    <Header />
    <h1> This is a test for artistes </h1>
    <ArtistesList />
  </div>
</template>

<script>

import Header from "@/components/Header"
import ArtistesList from "@/components/ArtistesList"

export default {
  components: {
    Header,
    ArtistesList,
  }
}
</script> 
