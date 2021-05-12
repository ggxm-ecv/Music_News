<template>
  <div class="id-card">
    <p> {{ genre.name }} </p>
    <slot></slot>
    <button @click="formOpen = !formOpen">Editer le Genre</button>
    <div v-if="formOpen">
      <label>Nom : </label>
      <input v-model="form.name">
      <br>
      <br>
      <button @click="submitForm">Enregistrer le Genre</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      formOpen: false,
      form: {
        name: this.genre.name,
      }
    }
  },
  props: {
    genre: {
      type: Object,
      required: true,
      default: () => []
    },
  },
  methods: {
    submitForm () {
      axios.patch(`http://localhost:3000/genres/${this.genre.id}`, this.form)
        .then(function (response) {
          this.$emit('updateData', response.data)
        }.bind(this))
    }
  }
}
</script>
