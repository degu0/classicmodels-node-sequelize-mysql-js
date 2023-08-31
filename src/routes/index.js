const express = require('express');
const router = express.Router();

const officeRouter = require('./officeRoute');

router.use('/offices', officeRouter);

module.exports = router;