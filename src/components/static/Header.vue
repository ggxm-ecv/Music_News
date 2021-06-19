<template>
  <header class="z-10 relative sticky top-0 shadow-md bg-indigo-600 px-4 py-2 lg:p-6 flex lg:grid grid-cols-none lg:grid-cols-3 lg:justify-between items-center">
    <div class="mobile-only">
      <div @click="toggleActiveMobileMenu" class="header__burger-menu inline-block bg-indigo-900 px-2 py-1 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"/></g></g></svg>
      </div>
    </div>
    <div class="ml-4 lg:ml-0">
      <router-link to="/" class="header__title inline-block bg-indigo-900 px-2 py-1 lg:px-4 lg:py-2 rounded-lg"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="music"><rect width="24" height="24" opacity="0"/><path d="M19 15V4a1 1 0 0 0-.38-.78 1 1 0 0 0-.84-.2l-9 2A1 1 0 0 0 8 6v8.34a3.49 3.49 0 1 0 2 3.18 4.36 4.36 0 0 0 0-.52V6.8l7-1.55v7.09a3.49 3.49 0 1 0 2 3.17 4.57 4.57 0 0 0 0-.51zM6.54 19A1.49 1.49 0 1 1 8 17.21a1.53 1.53 0 0 1 0 .3A1.49 1.49 0 0 1 6.54 19zm9-2A1.5 1.5 0 1 1 17 15.21a1.53 1.53 0 0 1 0 .3A1.5 1.5 0 0 1 15.51 17z"/></g></g></svg>
        <span> Music News </span>
      </router-link>
    </div>

    <nav class="header__main-nav absolute lg:relative top-0 left-0 lg:top-auto z-20 flex justify-center items-center bg-indigo-600 w-full lg:w-auto h-screen lg:h-auto" :class="{active: mobileNavIsActive}">
      <div @click="toggleActiveMobileMenu" class="header__main-nav-close mobile-only absolute top-4 right-4 inline-block bg-indigo-900 px-2 py-1 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>
      </div>
      <ul class="flex flex-col lg:flex-row items-center">
        <li><router-link class="header__main-nav-link p-4" to="/"> <span class="header__main-nav-link-txt">Accueil</span> </router-link></li>
        <li><router-link class="header__main-nav-link p-4" to="/concerts"> <span class="header__main-nav-link-txt">Concerts</span> </router-link></li>
        <li><router-link class="header__main-nav-link p-4" to="/artistes"> <span class="header__main-nav-link-txt">Artistes/Groupes</span> </router-link></li>

        <li><router-link v-if="!isAuth" class="header__second-nav-link mobile-only p-4" to="/login"> <span class="header__second-nav-link-txt">Connexion</span> </router-link></li>
        <li><router-link v-if="!isAuth" class="header__second-nav-link mobile-only p-4" to="/register"> <span class="header__second-nav-link-txt">Inscription</span> </router-link></li>
        <li><button v-if="isAuth" @click="logout" class="header__second-nav-link mobile-only p-4"> <span class="header__second-nav-link-txt">Déconnexion</span> </button></li>
      </ul>
    </nav>
    
    <nav class="flex justify-end desktop-only">
      <ul class="flex items-center">
        <li><router-link v-if="!isAuth" class="header__second-nav-link p-4" to="/login"> <span class="header__second-nav-link-txt">Connexion</span> </router-link></li>
        <li><router-link v-if="!isAuth" class="header__second-nav-link p-4" to="/register"> <span class="header__second-nav-link-txt">Inscription</span> </router-link></li>
        <li><button v-if="isAuth" @click="logout" class="header__second-nav-link p-4"> <span class="header__second-nav-link-txt">Déconnexion</span> </button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isAuth: false,
      mobileNavIsActive: false,
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('vuejs_token')
      localStorage.removeItem('vuejs_user_id')
      this.$router.push({ path: '/login' })
    },
    toggleActiveMobileMenu () {
      this.mobileNavIsActive = !this.mobileNavIsActive
    }
  },
  created () {
    // Check user is Authenticated
    if (localStorage.vuejs_user_id) {
      this.isAuth = true
    } else {
      this.isAuth = false
    }
  },
}
</script>
