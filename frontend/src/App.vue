<template>
  <div id="app">
   <header>
      <img src="images/icon-left-font-monochrome-white.svg" alt="logo">
    </header>

    <Login v-if="!connected"/>

    <div id="nav" v-if="connected">
      <router-link to="/">Fil d'actualités</router-link> 
      <router-link to="/profil">Profil</router-link> 
    </div>
    <router-view />

    <footer>
      <a href="#">Mentions légales</a>
      <p>© 2021 CONNECT-E</p>
    </footer>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mukta+Vaani:wght@200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import "../sass/styles.scss";
</style>

<script>
import Login from './components/Login.vue'

export default {
	name: 'App',
	components: {
		Login
	},
  data() {
    return{
      connected: true
    };
  },
  created(){
    this.isConnected()
  },
  methods: {
    isConnected(){
      if(localStorage.session !== undefined){
        this.connected = true;
        console.log('user connected');
      }
      else if(localStorage.session == undefined){
        this.connected = false;
        console.log('user not connected');
      }
    },
  }
}
</script>
