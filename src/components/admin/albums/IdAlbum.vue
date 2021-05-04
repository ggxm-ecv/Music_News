<template>
  <div class="id-card">
    <p> {{ album.name }} </p>
    <p> {{ album.released }} </p>
    <p> Nombre de musique : {{ album.tracks }} </p>
    <p> Id artiste/groupe : {{ album.artistId }} </p>
  </div>
</template>

<script>

export default {
  props: {
    album: {
      type: Object,
      required: true,
      default: () => []
    },
  }
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
