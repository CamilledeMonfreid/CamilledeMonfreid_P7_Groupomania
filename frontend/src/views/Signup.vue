<template>
  <main class="inscription">
    <div class="title">
      <h2>Inscription</h2>
      <div class="background"></div>
    </div>
    <p>*Champs obligatoires</p>

    <form class="connexion">
      <label for="nom">Nom*</label>
      <input type="text" id="nom" name="nom" minlength="2" class='input' required v-model="lastname" >

      <label for="prenom">Prénom*</label>
      <input type="text" id="prenom" name="prenom" minlength="2"   class='input' required v-model="firstname">

      <label for="poste">Poste occupé</label>
      <input type="text" id="poste" name="poste" minlength="2" class='input'  v-model="poste">

      <label for="mail">E-mail*</label>
      <input type="email" id="mail" name="mail" required minlength="2"  class='input'  v-model="email">

      <label for="password">Mot de passe*</label>
      <input type="password" id="password" name="password" required minlength="2"   class='input'  v-model="password">

      <router-link to="/" class="button"  @click.native="postUser()">S'inscrire</router-link>
      <router-view />           
    </form>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      poste: '',
      email: '',
      password: '',
      errors: []
    }
  },
  methods: {
    // Pushes posts to the server when called.
    postUser() {
      axios.post(`http://localhost:3000/users/signup`,{
            prenom: this.firstname,
            nom: this.lastname,
            poste: this.poste,
            email: this.email,
            password: this.password
      })
      .then(response => {console.log(response.data)})
      .catch(e => {
        this.errors.push(e)
      })
      location.reload()
    }
  }
}
</script>


