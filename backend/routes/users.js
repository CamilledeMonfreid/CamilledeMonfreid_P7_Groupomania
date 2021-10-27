const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/:_id',userCtrl.getUser);
router.get('/',userCtrl.getAllUser);
router.delete('/:_id',userCtrl.deleteUser);

module.exports = router;