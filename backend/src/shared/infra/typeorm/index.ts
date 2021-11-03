import { createConnection } from 'typeorm';
import Checklist from '@modules/checklists/infra/typeorm/entities/Checklist';
import Pet from '@modules/pets/infra/typeorm/entities/Pet';
import User from '@modules/users/infra/typeorm/entities/User';

createConnection({
  type: 'postgres',
  database: 'dep2o78ptojiem',
  synchronize: true,
  logging: true,
  entities: [User, Pet, Checklist],
});
