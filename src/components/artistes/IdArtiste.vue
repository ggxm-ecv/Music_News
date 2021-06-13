<template>
  <router-link :to="{ path: `/artiste/${artist.id}` }" class="id-card block bg-indigo-600 p-6 rounded-lg shadow-lg">

    <img class="artiste__img rounded-lg" :src="artist.avatar">
    <p class="mt-4 text-2xl font-bold"> {{ artist.name }} </p>
    <p class="mt-2"> {{ artist.description }} </p>

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
