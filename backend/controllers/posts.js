const {  User, Post } = require('../models')

//Créer un post
exports.createPost = (req, res, next) => {
    const newpost = new Post ({
        post:req.body.post,
        image:req.body.image,
        userId: req.body.userId

    })
    newpost.save()
        .then(() => res.status(201).json({ message: 'Post créé !' }))
        .catch(error => res.status(500).json({ error }))
}


//Retourne tous les posts
exports.getAllPosts = (req, res, next) => {
    Post.findAll({ include: [User]}).then(
        (users) => {
          res.status(200).json(users);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
}


//Retourner 1 seul post en fonction de son id
exports.getOnePost = (req, res, next) => {
    const id = req.params.id
  Post.findOne({ where: { id } }).then(
    (posts) => {
      res.status(200).json(posts);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}

//Supprimer un post
exports.deletePost = (req, res, next) => {
    const id = req.params.id
  Post.findOne({ where: { id } }).then(
    (posts) => {
      posts.destroy()
      res.status(200).json({message : "Post détruit !"});
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}