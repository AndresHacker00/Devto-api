const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const sign = (payload = {}) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "5h" });
}

const verify = (token) => {
    const check = jwt.verify(token, SECRET_KEY);
    return jwt.verify(token, SECRET_KEY);
}

module.exports = { sign, verify };
