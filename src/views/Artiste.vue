<template>
  <div>
    <Header />

    <main class="px-6 py-12">

      <a @click="$router.go(-1)" class="artiste__back-link inline-flex items-center bg-indigo-600 px-4 py-2 rounded-lg shadow-lg">
        <svg class="artiste__back-link-svg mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-ios-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/></g></g></svg>
        <span>Retour</span>
      </a>
      
      <IdArtiste />

    </main>
    
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
