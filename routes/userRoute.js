const express = require('express');
const router = express.Router();

//Controller
const userController = require('../controllers/userController');

router.post('/add', userController.addUser);
router.get('/view', userController.viewUser);
router.post('/search', userController.searchUser);


module.exports = router;