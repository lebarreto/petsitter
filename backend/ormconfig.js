module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "entities": [process.env.DB_ENTITIES],
  "migrations": [process.env.DB_MIGRATIONS],
  "cli": {
    "migrationsDir": process.env.DB_MIGRATIONS_DIR
  },
  "ssl": true,
  "dialectOptions": {
    "ssl": {
      "require": true,
      "rejectUnauthorized": false,
    },
    "keepAlive": true,
  },
}
