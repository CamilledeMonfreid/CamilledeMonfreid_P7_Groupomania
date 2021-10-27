<template>
  <div  v-if="connected">
        <main>
            <section class="post">
                <form class="post__form">
                    <label for="message" class="post__form--title">Que voulez-vous partager aujourd’hui ?</label>
                    <textarea id="message" name="message" v-model="post">Ecrivez votre message</textarea>
    
                    <div class="post__form--image">
                        <label for="gif" class="post__form--soustitre">Un GIF à ajouter ? Ajoutez un lien ici !</label>
                        <input type="url" id="gif" name="urlGif" v-model="image">
    
                    </div>
    
                    <input class="button" type="button" value="publier" @click="createPost()">
                </form>
            </section>
    
            <section class="post">
                <div class="title">
                    <h2>Quoi de neuf ?</h2>
                    <div class="background"></div>
                </div>
                <div id="post__message">
                <div class="post__message notselect" :key="index" v-for="(post,index) in posts">
                    <div class="post__message--notselected">
                           
                           <p v-if="post.User !== null">{{ post.User.prenom }} {{ post.User.nom }}</p>
                            <p v-if="post.User == null">Ancien utilistateur</p>
                          
                        <div class="like">
                            <p>0</p>
                            <img src="images/like.svg" alt="like" class="likeicon">
                        </div>
                    </div>
    
                    <div class="post__message--media">
                        <p>{{ post.post }}</p>
                        <img :src="post.image" v-bind:alt="image">
                    </div>
                </div>
              </div>
               
            </section>

        </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
   data() {
    return{
        posts: null,
        post: null,
        image: null,
        userId: null,
        users: null,
        nom: null,
        prenom:null,
        connected: true
    };
  },
  computed: {
    userName() {
   
            return this.prenom + ' ' + this.nom 
    },
  },
   created(){
    this.isConnected()
  },
  mounted(){
    
      axios.get(`http://localhost:3000/users`, {
    headers: {
        'Authorization': 'bearer ' + localStorage.getItem('token')
            }})
        .then(reponse => {
            const users = reponse.data
            this.users = users
        })
        .catch(e => {this.errors.push(e)})
    
      
    
      axios.get(`http://localhost:3000/posts/`, { headers: {
        'authorization': 'bearer ' + JSON.parse(localStorage.getItem('sessionStorage'))}})
      .then(response => {
          const post = response.data
        this.posts = post

        
        
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
    getImgUrl(){
            return this.image =  this.posts.image 
            
        },

    createPost(){
      const sessionStorage = JSON.parse(localStorage.getItem("session"))
      axios.post(`http://localhost:3000/posts`,{
            post: this.post,
            image: this.image,
            userId: sessionStorage.userId


      }, {
    headers: {
        'Authorization': 'bearer ' + localStorage.getItem('token')
            }})
      .then(response => {
        console.log(response.data)
      location.reload()})
      .catch(e => {
        this.errors.push(e)
      })
    }
    

    
  }
}
</script>

