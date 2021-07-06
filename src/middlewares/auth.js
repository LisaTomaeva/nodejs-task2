import jwt from "jsonwebtoken";

const tokenCheck = (req, res, next) => {
    let token = req.headers['token'];
    console.log(req.headers)

    if (token) {
        jwt.verify(token, 'secret', function(err, decoded) {
            if (err) {
                throw new Error(err);
            } else {
                next()
            }
        })
    } else {
        res.status(401).json({
            code: 401,
            message: "Not authorized!"
        });
    }
}

export { tokenCheck };