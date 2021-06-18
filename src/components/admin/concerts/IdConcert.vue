<template>
  <div class="id-card block bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 class="mt-4 text-2xl font-bold"> Nom : {{ concert.name }} </h2>
    <p class="mt-2"> Date : {{concert.date}} </p>
    <p class="mt-2"> Artiste id : {{concert.artistId}} </p>
    <slot></slot>
    <button @click="formOpen = !formOpen" class="inline-block px-4 py-2 ml-2 mt-2 rounded-lg border-2 border-gray-700">Editer le Concert</button>
    <div v-if="formOpen" class="w-80 mt-4 mx-auto shadow-md bg-gray-700 p-6 flex flex-col justify-between items-center rounded-lg">
      <input v-model="form.name" placeholder="Nom">
      <br>
      <label>Date : </label>
      <input v-model="date" type="date">
      <br>
      <label>Id Artiste : </label>
      <input v-model.number="form.artistId" type="number" min="0">
      <br>
      <br>
      <button @click="submitForm" class="text-black bg-white mt-2 px-4 py-2 rounded-lg">Enregistrer le Concert</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      formOpen: false,
      date: '',
      form: {
        name: this.concert.name,
        date: '', // TODO : Date Format on mounted
        artistId: this.concert.artistId
      }
    }
  },
  props: {
    concert: {
      type: Object,
      required: true,
      default: () => []
    },
  },
  methods: {
    submitForm () {
      function formatDate (arr, old_index, new_index) {
        if (new_index >= arr.length) {
          let k = new_index - arr.length + 1
          while (k--) {
            arr.push(undefined)
          }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
        return arr.join('/')
      }

      const dateSplited = this.date.split('-')
      const dateFormated = formatDate(dateSplited, 0, 2)
      this.form.date = dateFormated
      const dateSplited2 = this.form.date.split('/')
      const dateFormated2 = formatDate(dateSplited2, 0, 1)
      this.form.date = dateFormated2

      axios.patch(`http://localhost:3000/concerts/${this.concert.id}`, this.form)
        .then(function (response) {
          this.$emit('updateData', response.data)
        }.bind(this))
    }
  }
}
</script>
