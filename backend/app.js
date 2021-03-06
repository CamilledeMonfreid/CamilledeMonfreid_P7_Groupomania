const express = require('express');
const app = express();
app.use(express.json())

const bodyParser = require('body-parser');
const { sequelize } = require('./models')

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/posts', postsRoutes);
app.use('/users', userRoutes);

module.exports = app;