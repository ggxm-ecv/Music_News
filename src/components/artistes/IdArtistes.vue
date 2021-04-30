<template>
  <div class="id-card">
    <img height="300px" :src="avatar">
    <p> {{ name }} </p>
  </div>
</template>

<script>
export default {
  
  props: {
    name: {
      type: String,
      required: true,
      default: () => 'John'
    },
    avatar: {
      type: String
    }
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
