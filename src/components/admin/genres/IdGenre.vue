<template>
  <div class="id-card">
    <p> {{ genre.name }} </p>
  </div>
</template>

<script>
export default {
  props: {
    genre: {
      type: Object,
      required: true,
      default: () => []
    },
  }
}
</script>
