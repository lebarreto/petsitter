module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [process.env.ENTITIES],
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
