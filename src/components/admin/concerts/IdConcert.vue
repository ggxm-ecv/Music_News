<template>
  <div class="id-card">
    <p> Nom : {{ concert.name }} </p>
    <p> Date : {{concert.date}} </p>
    <p> Artiste id : {{concert.artistId}} </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    concert: {
      type: Object,
      required: true,
      default: () => []
    },
  }
}
</script>
