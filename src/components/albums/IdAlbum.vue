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

<style>
  .id-card {
    border: 1px solid gray;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.50);
    width: 400px;
    margin: 25px auto;
  }
</style>
