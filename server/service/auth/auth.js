const db = require("../../db");
const utils = require("../../utils/customFunctions");
const { validateSignUpData, validateSignInData } = require("./validation");

const signIn = async ({ data, query }) => {
  const userData = validateSignInData({ data });
  const users = await db.find({ email: userData.email });
  if (users.length == 0) {
    throw new Error("Invalid email");
  }

  const user = await users[0];
  const isPasswordValid = await utils.comparePassword(
    userData.password,
    user.password
  );
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  const token = await utils.generateToken(
    { id: user._id, email: user.email },
    "2M"
  );
  return {
    action: "send",
    data: { token: token },
    message: "User logged in successfully",
  };
};

const signUp = async ({ data, query }) => {
  const userData = await validateSignUpData(data);
  const user = await db.find({ email: userData.email });
  if (user.length > 0) {
    throw new Error("This email is already taken");
  }

  const result = await db.save(userData);
  return {
    action: "send",
    message: "User registered successfully",
    data: [],
  };
};
module.exports = { signIn, signUp };
