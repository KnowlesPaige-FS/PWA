const validateName = (req, res, next) => {
    const regex = /^[a-zA-Z\s]+$/;
    if (regex.test(req.body.name)) {
      next();
    } else {
      res.status(422).json({
        status: false,
        message: 'Name field is not valid.'
      });
    }
};

const validateEmail = (req, res, next) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(req.body.email)) {
      next();
    } else {
      res.status(422).json({
        status: false,
        message: 'Email field is not valid.'
      });
    }
};

const validatePhone = (req, res, next) => {
    const regex = /^\d{3}-\d{3}-\d{4}$/; // Allows phone numbers in the format XXX-XXX-XXXX
    if (regex.test(req.body.phone)) {
      next();
    } else {
      res.status(422).json({
        status: false,
        message: 'Phone field is not valid.'
      });
    }
};

const validateBirthday = (req, res, next) => {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/; // Assumes MM/DD/YYYY format
    if (regex.test(req.body.birthday)) {
      next();
    } else {
      res.status(422).json({
        status: false,
        message: 'Birthday field is not valid. Please use MM/DD/YYYY format.'
      });
    }
};

const validatePassword = (req, res, next) => {
    const regex = /.{6,}/; // Password must be at least 6 characters long
    if (regex.test(req.body.password)) {
      next();
    } else {
      res.status(422).json({
        status: false,
        message: 'Password field is not valid.'
      });
    }
};

module.exports = { validateName, validateEmail, validatePhone, validateBirthday, validatePassword };