const db = require("../db/queries");

exports.indexGet = async (req, res) => {
  const { search } = req.query;
  if (search) {
    const usernameArr = await db.searchQuery(search);
    console.log(usernameArr);
    res.send(
      `${search} results are: ` +
        usernameArr.map((user) => user.username).join(", ")
    );
    return;
  }
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

exports.searchGet = async (req, res) => {
  const { q } = req.query;
  const username = await db.getUsername(q);
  res.send("username: " + username.id + " and " + username.username);
};
