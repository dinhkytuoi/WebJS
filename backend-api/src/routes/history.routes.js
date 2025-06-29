// routes/history.routes.js
const express = require('express');
const router = express.Router();
const historyController = require('../controllers/history.controller');
const { authenticate } = require('../middlewares/authMiddleware');

router.get('/:uid', authenticate, historyController.getHistoryByUser);
router.post('/', authenticate, historyController.createHistory);

module.exports = router;
