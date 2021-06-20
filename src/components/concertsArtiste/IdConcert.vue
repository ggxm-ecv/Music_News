<template>
  <div v-if="concert.artistId == `${this.$route.params.id}`" class="id-card">
    <p>{{ concert.name }} le {{ concert.date }} </p>
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
