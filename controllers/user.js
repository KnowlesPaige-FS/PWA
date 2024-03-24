// const signup = (req, res) => {
//     const maskedPassword = req.body.password.split("").map(char => "●").join("");
//     res.status(200).json({
//         status: true, 
//         message: 'User has sucessfully signed up!',
//         ...req.body,
//         password: maskedPassword
//     });
// }

// module.exports = { signup };

const signup = (req, res) => {
    if (!req.body.password) {
        return res.status(422).json({
            status: false,
            message: 'Password field is missing in the request body.'
        });
    }

    const maskedPassword = req.body.password.split("").map(char => "●").join("");
    
    res.status(200).json({
        status: true, 
        message: 'User has successfully signed up!',
        ...req.body,
        password: maskedPassword
    });
}

module.exports = { signup };
