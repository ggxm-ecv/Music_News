<template>
  <div v-if="concert.artistId == `${this.$route.params.id}`" class="id-card">
    <p>A {{ concert.name }} le {{ concert.date }} </p>
  </div>
</template>

<script>
export default {
  props: {
    concert: {
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
