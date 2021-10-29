<template>
  <div  v-if="connected">
    <main>
      <section class="post">
        <form class="post__form">
          <label for="message" class="post__form--title">Que voulez-vous partager aujourd’hui ?</label>
          <textarea id="message" name="message" v-model="post">Ecrivez votre message</textarea>
    
          <div class="post__form--image">
            <label for="gif" class="post__form--soustitre">Un GIF à ajouter ? Ajoutez un lien ici !</label>
            <input type="url" pattern="http://.*" id="gif" name="urlGif" v-model="image">
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
                  <p v-bind:id="post.id">{{ post.numberOfLikes - 1 }} </p>
                  <img src="images/like.svg" alt="like" class="likeicon" @click="numberOfLikes()" v-bind:id="post.id">
                  <img src="images/close.svg" alt="close" class="closeicon" v-if="session == true" v-bind:id="post.id" @click="deleteAPost()">         
                </div>
            </div>
    
            <div class="post__message--media">
              <p>{{ post.post }}</p>
              <img :src="post.image" >
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
        connected: true,
        session:null
    };
  },
  created(){
    this.isConnected()
  },
  mounted(){
    
    axios.get(`http://localhost:3000/users`, 
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
    )
    .then(reponse => {
      const users = reponse.data
      this.users = users

      const sessionStorage = JSON.parse(localStorage.getItem("session"))
        for(let i = 0; i < users.length; i++){
          if(sessionStorage.userId == users[i].id){
            this.session = users[i].admin;
          }
        }
    })
    .catch(e => {this.errors.push(e)})

    axios.get(`http://localhost:3000/posts/`, 
      { 
        headers: {
          'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        }
      }
    )
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
    createPost(){
      const sessionStorage = JSON.parse(localStorage.getItem("session"))
      axios.post(`http://localhost:3000/posts`,
        {
          post: this.post,
          image: this.image,
          likes:[sessionStorage.userId],
          numberOfLikes: 1,
          userId: sessionStorage.userId
        }, 
        {
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
          }
        } 
      )
      .then(response => {
        console.log(response.data)
        location.reload()
      })
      .catch(e => {this.errors.push(e)})
    },

    deleteAPost(){
      axios.delete(`http://localhost:3000/posts/${event.target.id}`, 
        {
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
          }
        }
      )
      .then(reponse => {
        console.log(reponse.data)
        location.reload()
      })
      .catch(e => {this.errors.push(e)})
    },
    
    numberOfLikes(){
      const useeeer = event.target.id
      const idUser = JSON.parse(localStorage.getItem('session'))
      let numberLikes= ''
      let countLikes = ''

      axios.get(`http://localhost:3000/posts/${event.target.id}`, 
        { 
          headers: {
            'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
          }
        }
      )
      .then(response => {
        let postLikes = response.data.likes
        
        if(!postLikes.includes(idUser.userId)){
          postLikes.push(idUser.userId)
          numberLikes = postLikes
          countLikes = numberLikes.length
        } else{
          numberLikes = postLikes
          countLikes = numberLikes.length
        }
      
        countLikes = numberLikes.length
        console.log(numberLikes)
        console.log(countLikes)

        axios.put(`http://localhost:3000/posts/${useeeer}`, 
          {
            likes: numberLikes,
            numberOfLikes: countLikes
          },
          { 
            headers: {
              'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
            }
          }
        )
        .then(response => {
        console.log(response.data)
        location.reload()
        })
        .catch(e => {this.errors.push(e)})
      })
      .catch(e => {this.errors.push(e)})
      
    }
  }
}
</script>

