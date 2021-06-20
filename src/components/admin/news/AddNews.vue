<template>
  <div class="id-card p-6 rounded-lg">
    <div class="text-center">
      <button @click="formOpen = !formOpen" class="inline-block px-4 py-2 mt-2 rounded-lg border-2 border-gray-700">Ajouter une News</button>
    </div>
    <div v-if="formOpen" class="w-80 mt-4 mx-auto shadow-md bg-gray-700 p-6 flex flex-col justify-between items-center rounded-lg">
      <input v-model="form.title" placeholder="Titre">
      <br>
      <textarea v-model="form.content" placeholder="Contenu"></textarea>
      <br>
      <button @click="submitForm" class="text-black bg-white mt-2 px-4 py-2 rounded-lg">Ajouter la News</button>
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
          mm: ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1),
          dd: (date.getDate() < 10 ? '0' : '') + date.getDate(),
          yy: date.getFullYear().toString(),
          yyyy: date.getFullYear()
        }

        return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
      }

      const today = new Date()
      const todayGood = formatDate(today, 'dd/mm/yy')

      this.form.published = todayGood

      axios.post('http://localhost:3000/news', this.form)
        .then(function (response) {
          this.$emit('getNewData', response.data)
        }.bind(this))
    }
  }
}
</script>
