<template>
  <div class="id-card">
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
