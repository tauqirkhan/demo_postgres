const db = require("../db/queries");

exports.indexGet = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("usernames: " + usernames.map((user) => user.username).join(", "));
};

exports.formGet = (req, res) => {
  res.render("createForm", { title: "Username" });
};

exports.createPost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};
