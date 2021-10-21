const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { sequelize, User, Post } = require('./models')

const app = express()
app.use(express.json())

// Create a user
app.post('/users/signup', async(req, res) =>{
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                nom:req.body.nom,
                prenom:req.body.prenom,
                poste:req.body.poste,
                email:req.body.email,
                password:hash
            })
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(500).json({ error }))

        })
        .catch(error => res.status(500).json({ error }))
})

//Login
app.get('/users/login', async(req, res) =>{
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
})

//Supprimer un user
app.delete('/users/:id',async(req,res)=>{
    const id = req.params.id
    try{
        const user = await User.findOne({where: { id }})

        await user.destroy()

        return res.json({message: 'User deleted !'})
    }catch(err){
        console.log(err)
        return res.status(500).json({ error : 'Something went wrong !'})
    }
})


//Créer un post
app.post('/posts', async(req,res)=>{
    const { userUuid, body } = req.body
    try {
        const user = await User.findOne({ where: { uuid : userUuid}})

        const post = await Post.create({ body, userId : user.id})

        return res.json(post)

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

//Retourne tous les posts
app.get('/posts', async(req,res)=>{
    
    try {
        const posts = await Post.findAll({ include: [User]})

        return res.json(posts)

    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

//Retourner 1 seul post en fonction de son id
app.get('/posts/:id',async(req,res)=>{
    const id = req.params.id
    try{
        const post = await User.findOne({where: { id }})

        return res.json(post)
    }catch(err){
        console.log(err)
        return res.status(500).json({ error : 'Something went wrong !'})
    }
})

//Supprimer un post
app.delete('/posts/:id',async(req,res)=>{
    const id = req.params.id
    try{
        const user = await User.findOne({where: { id }})

        await user.destroy()

        return res.json({message: 'Post deleted !'})
    }catch(err){
        console.log(err)
        return res.status(500).json({ error : 'Something went wrong !'})
    }
})


app.listen({ port: 5000 }, async()=>{
    console.log('Server up on http://localhost:5000')
    await sequelize.authenticate()
    console.log('Database Connected !')
})