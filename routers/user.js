const express = require('express');
const router = express.Router();
const userCtlr = require('../controllers/user');
const { validateName, validateEmail, validatePhone, validateBirthday, validatePassword } = require('@pknowles-fs/utils/index');


router.post('/signup', validateName, validateEmail, validatePhone, validateBirthday, validatePassword, userCtlr.signup);

module.exports = router;