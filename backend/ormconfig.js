module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": ['src/modules/**/infra/typeorm/entities/*.js'],
  "migrations": ['dist/shared/infra/typeorm/migrations/*.js'],
  "cli": {
    "migrationsDir": ['src/shared/infra/typeorm/migrations/'],
    "entitiesDir": ['src/modules/**/infra/typeorm/entities']
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
