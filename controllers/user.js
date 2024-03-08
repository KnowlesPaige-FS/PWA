const signup = (req, res) => {
    const maskedPassword = req.body.password.split("").map(char => "●").join("");
    res.status(200).json({
        status: true, 
        message: 'User has sucessfully signed up!',
        ...req.body,
        password: maskedPassword
    });
}

module.exports = { signup };
