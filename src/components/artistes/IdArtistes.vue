<template>
  <div class="id-card">
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
