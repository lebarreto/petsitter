import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ChecklistsController from '../controllers/ChecklistsController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const checklistsRouter = Router();
const checklistsController = new ChecklistsController();

checklistsRouter.post(
  '/',
  ensureAuthenticated,
  celebrate({
    [Segments.BODY]: {
      pet_id: Joi.string().required(),
      user_id: Joi.string().required(),
      questions: Joi.array().items(Joi.string()).required()
    },
  }),
  checklistsController.create,
);

checklistsRouter.get(
  '/:id',
  ensureAuthenticated,
  checklistsController.listById,
);

checklistsRouter.get(
  '/owner/:id',
  ensureAuthenticated,
  checklistsController.listByOwner,
);

checklistsRouter.get(
  '/pet/:id',
  ensureAuthenticated,
  checklistsController.listByPet,
);

export default checklistsRouter;
