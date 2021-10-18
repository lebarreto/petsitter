import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionRouter from '@modules/users/infra/http/routes/session.routes';
import petsRouter from '@modules/pets/infra/http/routes/pets.routes';
import checklistRouter from '@modules/checklists/infra/http/routes/checklists.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', sessionRouter);
routes.use('/pets', petsRouter);
routes.use('/checklists', checklistRouter);

export default routes;
