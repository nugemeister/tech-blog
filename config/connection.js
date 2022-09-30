// access to env variables
require('dotenv').config();

// import sequelize dependancy
const Sequelize = require('sequelize');

let sequelize;

// use env var to connect to db
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

// export
module.exports = sequelize;