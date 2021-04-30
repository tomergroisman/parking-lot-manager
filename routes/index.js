const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

// Entry
router.post('/entry', controllers.createParking);

// Exit
router.post('/exit', controllers.clearParking);

// Lot occupation
router.get('/lot', controllers.getAllParkings);

module.exports = {
    routes: router,
    reset: controllers.resetDatabase,
};