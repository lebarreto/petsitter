console.log('process.env.DATABASEE_URL :>> ', process.env.DATABASE_URL);

module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": ['dist/modules/**/infra/typeorm/entities/*.js'],
  "migrations": ['dist/shared/infra/typeorm/migrations/*.js'],
  "cli": {
    "migrationsDir": ['src/shared/infra/typeorm/migrations/'],
    "entitiesDir": ['src/modules/**/infra/typeorm/entities/']
  },
}
