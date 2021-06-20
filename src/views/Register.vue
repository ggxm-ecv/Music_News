<template>
  <div>
    <Header />

    <main class="px-6 py-12">

      <div class="w-80 mt-12 mx-auto shadow-md bg-indigo-600 p-6 flex flex-col justify-between items-center rounded-lg">
        <h1 class="text-2xl"> Inscription </h1>
        <input class="mt-4"  v-model="email" placeholder="Email"/>
        <input class="mt-2" type="password" v-model="password" placeholder="Mot de passe"/>
        <input class="mt-2" v-model="firstname" placeholder="Prénom"/>
        <input class="mt-2" v-model="lastname" placeholder="Nom"/>
        <button class="text-black bg-white mt-6 px-4 py-2 rounded-lg" @click="submitForm">S'inscrire</button>
      </div>

    </main>
    
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import jwt_decode from "jwt-decode"
import Header from '@/components/static/Header'
import Footer from '@/components/static/Footer'

export default {
  data () {
    return {
      email: null,
      password: null,
      firstname: null,
      lastname: null,
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    async submitForm () {
      const res = await axios.post('http://localhost:3000/register', {
        email: this.email,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
      })

      const { accessToken } = res.data

      const { sub } = jwt_decode(accessToken)

      localStorage.setItem('vuejs_token', accessToken)
      localStorage.setItem('vuejs_user_id', sub)

      this.$router.push({ path: '/' })
    }
  }
}
</script>
