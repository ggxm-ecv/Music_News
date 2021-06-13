<template>
  <header class="sticky top-0 shadow-md bg-indigo-600 p-6 grid grid-cols-3 justify-between items-center">
    <div>
      <router-link to="/" class="header__title inline-block bg-indigo-900 px-4 py-2 rounded-lg"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="music"><rect width="24" height="24" opacity="0"/><path d="M19 15V4a1 1 0 0 0-.38-.78 1 1 0 0 0-.84-.2l-9 2A1 1 0 0 0 8 6v8.34a3.49 3.49 0 1 0 2 3.18 4.36 4.36 0 0 0 0-.52V6.8l7-1.55v7.09a3.49 3.49 0 1 0 2 3.17 4.57 4.57 0 0 0 0-.51zM6.54 19A1.49 1.49 0 1 1 8 17.21a1.53 1.53 0 0 1 0 .3A1.49 1.49 0 0 1 6.54 19zm9-2A1.5 1.5 0 1 1 17 15.21a1.53 1.53 0 0 1 0 .3A1.5 1.5 0 0 1 15.51 17z"/></g></g></svg>
        <span> Music News </span>
      </router-link>
    </div>

    <nav class="flex justify-center">
      <ul class="flex items-center">
        <li><router-link class="header__main-nav-link p-4" to="/"> <span class="header__main-nav-link-txt">Accueil</span> </router-link></li>
        <li><router-link class="header__main-nav-link p-4" to="/concerts"> <span class="header__main-nav-link-txt">Concerts</span> </router-link></li>
        <li><router-link class="header__main-nav-link p-4" to="/artistes"> <span class="header__main-nav-link-txt">Artistes/Groupes</span> </router-link></li>
      </ul>
    </nav>
    
    <nav class="flex justify-end">
      <ul class="flex items-center">
        <li><router-link v-if="!isAuth" class="header__second-nav-link p-4" to="/login"> <span class="header__second-nav-link-txt">Connexion</span> </router-link></li>
        <li><router-link v-if="!isAuth" class="header__second-nav-link p-4" to="/register"> <span class="header__second-nav-link-txt">Inscription</span> </router-link></li>
        <li><button v-if="isAuth" @click="logout" class="header__second-nav-link p-4"> <span class="header__second-nav-link-txt">Logout</span> </button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isAuth: false,
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('vuejs_token')
      localStorage.removeItem('vuejs_user_id')
      this.$router.push({ path: '/login' })
    }
  },
  created () {
    // Check user is Authenticated
    console.log(localStorage)
    if (localStorage.vuejs_user_id) {
      this.isAuth = true
    } else {
      this.isAuth = false
    }
  },
}
</script>
