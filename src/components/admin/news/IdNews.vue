<template>
  <div class="id-card">
    <p> {{ news.title }} </p>
    <p> {{ news.published }} </p>
    <p> {{ news.content }} </p>
    <slot></slot>
    <button @click="formOpen = !formOpen">Editer la News</button>
    <div v-if="formOpen">
      <label>Titre : </label>
      <input v-model="form.title">
      <br>
      <label>Contenu : </label>
      <textarea v-model="form.content" rows="5" cols="33"></textarea>
      <br>
      <br>
      <button @click="submitForm">Enregistrer la News</button>
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
        title: this.news.title,
        content: this.news.content,
        published: this.news.published
      }
    }
  },
  props: {
    news: {
      type: Object,
      required: true,
      default: () => []
    },
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

      axios.patch(`http://localhost:3000/news/${this.news.id}`, this.form)
        .then(function (response) {
          this.$emit('updateData', response.data)
        }.bind(this))
    }
  }
}
</script>
