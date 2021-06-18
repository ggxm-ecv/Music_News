<template>
  <div class="id-card block bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 class="mt-4 text-2xl font-bold"> {{ genre.name }} </h2>
    <slot></slot>
    <button @click="formOpen = !formOpen" class="inline-block px-4 py-2 ml-2 mt-2 rounded-lg border-2 border-gray-700">Editer le Genre</button>
    <div v-if="formOpen" class="w-80 mt-4 mx-auto shadow-md bg-gray-700 p-6 flex flex-col justify-between items-center rounded-lg">
      <input v-model="form.name" placeholder="Nom">
      <br>
      <button @click="submitForm" class="text-black bg-white mt-2 px-4 py-2 rounded-lg">Enregistrer le Genre</button>
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
