<template>
  <div class="id-card bg-indigo-600 p-6 rounded-lg shadow-lg">
    <p class="text-2xl"> {{ news.title }} </p>
    <p class="text-xs"> Publié le {{ news.published }} </p>
    <p class="mt-4"> {{ news.content }} </p>
  </div>
</template>

<script>

export default {
  props: {
    news: {
      type: Object,
      required: true,
      default: () => []
    },
  }
}
</script>
