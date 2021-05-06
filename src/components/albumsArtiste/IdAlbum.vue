<template>
  <div v-if="album.artistId == `${this.$route.params.id}`" class="id-card">
    <h1> {{ album.name }}</h1>
    <p>Sortie en {{ album.released }} </p>    
    <p>Possède {{ album.tracks }} titres</p>
  </div>
</template>

<script>
export default {
  props: {
    album: {
      type: Object,
      required: true,
      default: () => []
    }
  },
}
</script>
