const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getUsername(username) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username = ($1)",
    [username]
  );
  console.log(rows);
  const usernameObject = rows[0];
  return usernameObject;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchQuery(searchQuery) {
  console.log(searchQuery);
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username LIKE $1",
    [`%${searchQuery}%`]
  );
  return rows;
}

async function deleteAllUsernames() {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getAllUsernames,
  insertUsername,
  getUsername,
  searchQuery,
  deleteAllUsernames,
};
