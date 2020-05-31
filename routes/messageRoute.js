const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');


// router.get('/', messageController.getAllMessage);
router.post('/', messageController.createMessage);



module.exports = router;