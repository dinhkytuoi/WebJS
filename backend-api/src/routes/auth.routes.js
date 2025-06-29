const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const validate = require('../middlewares/validate');
const { authLimiter } = require('../middlewares/rateLimit');
const { registerSchema, loginSchema } = require('../validators/schemas');

// Kiểm tra chắc chắn tất cả đều là function
console.log('register:', authController.register);
console.log('login:', authController.login);
console.log('validate:', validate);
console.log('authLimiter:', authLimiter);

router.post('/register', authLimiter, validate(registerSchema), authController.register);
router.post('/login', authLimiter, validate(loginSchema), authController.login);

module.exports = router;
