<template>
  <div class="id-card">
    <p> {{ title }} </p>
    <p> {{ published }} </p>
    <p> {{ content }} </p>
  </div>
</template>

<script>

export default {
  
  props: {
    title: {
      type: String,
      required: true,
      default: () => 'Title'
    },
    published: {
      type: String,
      required: true,
      default: () => '01-01-0101'
    },
    content: {
      type: String,
      required: true,
      default: () => 'Some content'
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
