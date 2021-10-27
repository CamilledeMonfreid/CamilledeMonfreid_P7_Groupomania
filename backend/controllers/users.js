const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { User } = require('../models')

//Créer un user
exports.signup = (req, res, next) => {
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
};

//Login
exports.login = (req, res, next) => {
    User.findOne({ where : { email: req.body.email }})
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
              userId: user.id,
              token: jwt.sign(
                { userId: user.id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

exports.getAllUser = (req, res, next) => {
  User.findAll().then(
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

//Retourner un user
exports.getUser = (req, res, next) => {
  const _id = req.params._id
  User.findOne({ where: { id: _id} }).then(
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

//Supprimer un user
exports.deleteUser = (req, res, next) => {
  const _id = req.params._id
  User.findOne({ where: { id: _id} }).then(
    (users) => {
      users.destroy()
      res.status(200).json({message : "utilisateur détruit !"});
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

