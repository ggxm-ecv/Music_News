<template>
  <div>
    <button @click="formOpen = !formOpen">Ajouter une News</button>
    <div v-if="formOpen">
      <label>Titre : </label>
      <input v-model="form.title">
      <br>
      <label>Contenu : </label>
      <input v-model="form.content">
      <br>
      <br>
      <button @click="submitForm">Ajouter la News</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddNews',
  data () {
    return {
      formOpen: false,
      form: {
        title: '',
        content: '',
        published: ''
      }
    }
  },
  methods: {
    submitForm () {
      function formatDate (date, format) {
        const map = {
          mm: date.getMonth() + 1,
          dd: date.getDate(),
          yy: date.getFullYear().toString().slice(-2),
          yyyy: date.getFullYear()
        }

        return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
      }

      const today = new Date()
      const todayGood = formatDate(today, 'dd/mm/yy')

      this.form.published = todayGood

      const res = axios.post('http://localhost:3000/news', this.form)
        .then(function (response) {
          this.$emit('getNewData', this.form)
        }.bind(this))
      this.news = res.data
    }
  }
}
</script>

<style>
  
</style>
