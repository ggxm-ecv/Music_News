<template>
  <router-link :to="{ path: `/artiste/${artist.id}` }">
  <div class="id-card">
    <img height="300px" :src="artist.avatar">
    <p> {{ artist.name }} </p>
    <p> {{ artist.description }} </p>
  </div> 

  </router-link>
</template>

<script>
export default {
  props: {
    artist: {
      type: Object,
      required: true,
      default: () => []
    },
  }
}
</script>
