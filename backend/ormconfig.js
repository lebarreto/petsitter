module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": ['dist/modules/**/infra/typeorm/entities/*.js'],
  "migrations": ['dist/shared/infra/typeorm/migrations/*.js'],
  "cli": {
    "migrationsDir": ['dist/shared/infra/typeorm/migrations/'],
    "entitiesDir": ['dist/modules/**/infra/typeorm/entities']
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
