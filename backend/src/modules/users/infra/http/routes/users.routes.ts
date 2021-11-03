import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6),
      admin: Joi.boolean().required(),
    },
  }),
  usersController.create,
);


usersRouter.get(
  '/teste',
  usersController.test,
);

export default usersRouter;
