const knex = require("../db/connection");

// create
function create(newObservation) {
  return knex("observations").insert(newObservation).returning("*");
}

// read
async function list() {
  return knex("observations").select("*");
}



module.exports = {
  create,
  list,
};

