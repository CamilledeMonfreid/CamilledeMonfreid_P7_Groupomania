const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const postCtrl = require('../controllers/posts');

router.post('/', auth, postCtrl.createPost);
router.get('/', postCtrl.getAllPosts);
router.get('/:id', auth, postCtrl.getOnePost);
router.delete('/:id', auth, postCtrl.deletePost);
router.put('/:id', auth, postCtrl.modifyPost)

module.exports = router;