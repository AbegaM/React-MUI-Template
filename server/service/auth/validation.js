const utils = require("../../utils/customFunctions");
const userModel = require("../../schema/user");

const validateSignInData = ({ data }) => {
  if (utils.isFieldInvalid(data.email)) {
    throw new Error("Email is required");
  } else if (utils.isFieldInvalid(data.password)) {
    throw new Error("Password is required");
  }

  const userData = { email: data.email, password: data.password };
  return userData;
};

const validateSignUpData = async (data) => {
  if (utils.isFieldInvalid(data.firstName)) {
    throw new Error("Frist name is required");
  } else if (utils.isFieldInvalid(data.lastName)) {
    throw new Error("Last name is required");
  } else if (utils.isFieldInvalid(data.email)) {
    throw new Error("Email is required");
  } else if (utils.isFieldInvalid(data.password)) {
    throw new Error("Password is required");
  } else if (data.password.length < 0) {
    throw new Error("Password needs to be more than 8 charachters");
  }

  userModel.firstName = data.firstName;
  userModel.lastName = data.lastName;
  userModel.email = data.email;
  userModel.password = await utils.hashPassword(data.password);

  return userModel;
};

module.exports = { validateSignInData, validateSignUpData };
