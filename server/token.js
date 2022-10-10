const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const newToken = jwt.sign({ id }, "skffjpiegjhgortjrtohrthlrtjohhutjrto", {
    expiresIn: "7d",
  });
  return newToken;
};

module.exports = generateToken;
