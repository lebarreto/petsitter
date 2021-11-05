import { createConnection } from 'typeorm';

createConnection({
  type: 'postgres',
  url: 'postgres://ftwhqmngnwkazw:fe19f877eced64efc07f777ed2ef198b831538e5654a68a47131ea52cd0917e5@ec2-52-201-72-91.compute-1.amazonaws.com:5432/dep2o78ptojiem',
  extra: {
    ssl: true,
    rejectUnauthorized: false
  },
  entities: ['../../../modules/**/infra/typeorm/entities/*.js']
});
