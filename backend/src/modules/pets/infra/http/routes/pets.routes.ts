import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import PetsController from '../controllers/PetsController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const petsRouter = Router();
const petsController = new PetsController();

petsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      user_id: Joi.string().required(),
    },
  }),
  petsController.create,
);

petsRouter.get(
  '/owner',
  ensureAuthenticated,
  petsController.listByOwner,
);

export default petsRouter;
