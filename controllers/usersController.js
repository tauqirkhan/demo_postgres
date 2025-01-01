exports.indexGet = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.send("usernames will be logged here - wip");
};

exports.formGet = (req, res) => {
  res.render("createForm", { title: "Username" });
};

exports.createPost = (req, res) => {
  const { username } = req.body;
  console.log("username to be saved: ", username);

  res.redirect("/new");
};
