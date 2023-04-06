const router = require('express').Router();
const dateController = require('../controllers/dateController');


router
    .route('/')
    .get(dateController.index)
    .post(dateController.addDate)
    .delete(dateController.delete) //ternary operator
    .put(dateController.editDate); 

module.exports = router;

