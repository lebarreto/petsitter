import { container } from 'tsyringe';

import '../../modules/users/providers';

import IUsersRepository from '../../modules/users/repositories/IUsersRepository';
import UsersRepository from '../../modules/users/infra/typeorm/repositories/UsersRepository';

import IPetsRepository from '../../modules/pets/repositories/IPetsRepository';
import PetsRepository from '../../modules/pets/infra/typeorm/repositories/PetsRepository';

import IChecklistsRepository from '../../modules/checklists/repositories/IChecklistsRepository';
import ChecklistsRepository from '../../modules/checklists/infra/typeorm/repositories/ChecklistsRepository';

container.register<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.register<IPetsRepository>(
  'PetsRepository',
  PetsRepository,
);

container.register<IChecklistsRepository>(
  'ChecklistsRepository',
  ChecklistsRepository,
);
