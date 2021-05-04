<template>
  <router-link :to="{ path: `/artiste/${artist.id}` }">
  <div class="id-card">
    <img height="300px" :src="artist.avatar">
    <p> {{ artist.name }} </p>
    <p>{{ artist.id }}</p>
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

<style>
  .id-card {
    border: 1px solid gray;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.50);
    width: 400px;
    margin: 25px auto;
  }
</style>
