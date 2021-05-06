<template>
  <div>
    <router-link to="/"> Accueil </router-link>
    <router-link to="/concerts"> Concerts </router-link>
    <router-link to="/artistes"> Artistes/Groupes </router-link>
    <router-link to="/login"> Connexion </router-link>
    <router-link to="/register"> Inscription </router-link>

    <button @click="logout"> Logout </button>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('vuejs_token')
      localStorage.removeItem('vuejs_user_id')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
