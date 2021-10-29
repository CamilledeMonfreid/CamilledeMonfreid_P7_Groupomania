<template>
  <div id="login" v-if="isDisplay">
    <main class="pageconnexion">
      <aside>
        <img src="images/business-3d-298.png">
      </aside>

      <section>
        <div class="title">
          <h2>Bonjour !</h2>
          <div class="background"></div>
        </div>

        <form class="connexion">
          <label for="mail">e-mail</label>
          <input type="email" id="mail" name="mail"  class='input' required v-model="email">

          <label for="password">mot de passe</label>
          <input type="password" id="password" name="password"  class='input' required v-model="password">

          <input class="button" type="button" value="se connecter" @click="postUserLogin()">
        </form>

        <div class="inscrire">
          <p>Pas encore de compte ?</p>
          <router-link to="/signup" @click.native="displayNot()">INSCRIVEZ VOUS</router-link>    
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: [],
      connected: '',
      isDisplay: true,
    }
  },
  methods: {
    // Pushes posts to the server when called.
    postUserLogin() {
      axios.post(`http://localhost:3000/users/login`,{
        email: this.email,
        password: this.password
      }, 
      {
        headers: {
          'authorization': 'bearer ' + localStorage.getItem('token')
        }
      })
      .then(response => {
        localStorage.setItem('session', JSON.stringify(response.data))
        localStorage.setItem('token', JSON.stringify(response.data.token))
        this.connected = true;
        location.reload()
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    displayNot(){
      this.isDisplay = false;
      console.log(this.isDisplay)
    }
  }
}
</script>

