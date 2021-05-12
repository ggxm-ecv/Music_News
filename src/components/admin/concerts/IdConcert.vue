<template>
  <div class="id-card">
    <p> Nom : {{ concert.name }} </p>
    <p> Date : {{concert.date}} </p>
    <p> Artiste id : {{concert.artistId}} </p>
    <slot></slot>
    <button @click="formOpen = !formOpen">Editer le Concert</button>
    <div v-if="formOpen">
      <label>Nom : </label>
      <input v-model="form.name">
      <br>
      <label>Date : </label>
      <input v-model="date" type="date">
      <br>
      <label>Id Artiste : </label>
      <input v-model.number="form.artistId" type="number" min="0">
      <br>
      <br>
      <button @click="submitForm">Enregistrer le Concert</button>
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
