<template>
  <div class="id-card">
    <p> {{ album.name }} </p>
    <p> {{ album.released }} </p>
    <p> Nombre de musique : {{ album.tracks }} </p>
    <p> Id artiste/groupe : {{ album.artistId }} </p>
    <slot></slot>
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

