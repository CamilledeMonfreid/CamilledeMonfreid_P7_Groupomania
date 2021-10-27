<template>
  <div  v-if="connected">
    <main class="profil">
            <div class="title">
                <h2>Profil</h2>
                <div class="background"></div>
            </div>

            <div class="profil__nom">
                <p class="profil__title">Nom</p>
                <p>{{ nom }} </p>
            </div>

            <div class="profil__prenom">
                <p class="profil__title">Prénom</p>
                <p>{{ prenom }}</p>
            </div>

            <div class="profil__mail">
                <p class="profil__title">E-mail</p>
                <p>{{ email }}</p>
            </div>

            <a href="#" class="button" @click="deconnecter()">Se déconnecter</a>
            <a href="#" class="button supprimer" @click="supprimerCompte()">Supprimer mon compte</a>
        </main>
  </div>
</template>

<script>
import axios from 'axios';


export default {
   data() {
    return{
      nom: '',
      prenom: '',
      email: '',
      errors: [],
      connected: true
    };
  },
   created(){
    this.isConnected()
  },
  mounted(){
    
      axios.get(`http://localhost:3000/users/`, {
    headers: {
        'Authorization': 'bearer ' + localStorage.getItem('token')
            }})
      .then(response => {
        const users = response.data
        const sessionStorage = JSON.parse(localStorage.getItem("session"))

        for(let i = 0; i < users.length; i++){
          if(sessionStorage.userId == users[i].id){
            this.nom = users[i].nom;
            this.prenom = users[i].prenom;
            this.email = users[i].email
          }
        }
      })
      .catch(e => {this.errors.push(e)})

      
    
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

    deconnecter(){
      localStorage.removeItem("session")

      location.reload()

    },

    supprimerCompte(){
      const sessionStorage = JSON.parse(localStorage.getItem("session"))
      axios.delete(`http://localhost:3000/users/` + sessionStorage.userId)
      .then(response => {console.log(response.data)
        localStorage.removeItem("session")
        location.reload()
      })
      .catch(e => {this.errors.push(e)})
    }
    
  }
}
</script>

