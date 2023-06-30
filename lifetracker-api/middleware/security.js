const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { UnauthorizedError } = require("../utils/errors");

//create function to extract jwt from req header

//Authorization: Bearer oneonqdonqwdinwqoin;
const jwtFrom = ({ headers }) => {
  if (headers?.authorization) {
    const [scheme, token] = headers.authorization.split(" ");
    if (scheme.trim() === "Bearer") {
      return token;
    }
  }
  return undefined;
};

//create function to attach user to the res object
const extractUserFromJwt = (req, res, next) => {
  try {
    const token = jwtFrom(req);
    if (token) {
      res.locals.user = jwt.verify(token, SECRET_KEY);
      console.log("jwt:", jwt.verify(token, SECRET_KEY));
      console.log("yo,", res.locals.user);
    }
    return next();
  } catch (err) {
    return next();
  }
};

//create function to verify that an authed user exists

const verifyAuthUser = (req, res, next) => {
  try {
    console.log("res.locals=", res.locals);
    const { user } = res.locals;
    console.log("usetr=", user);
    if (!user?.email) {
      throw new UnauthorizedError();
    }
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  jwtFrom,
  verifyAuthUser,
  extractUserFromJwt,
};
