<template>
  <div class="id-card bg-indigo-600 p-6 rounded-lg shadow-lg">
    <p> {{ news.title }} </p>
    <p> {{ news.published }} </p>
    <p> {{ news.content }} </p>
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
