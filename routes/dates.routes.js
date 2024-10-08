const express = require('express');
const responseDate = require('../controllers/dates.controller');

const dateRouter = express.Router();

dateRouter.get('/api/:date?', (req, res) => {
    responseDate(req, res);
});

module.exports = dateRouter;