import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { UrlsController } from '@modules/urls/controllers/UrlsController';

const urlRouter = Router();
const urlsController = new UrlsController();

urlRouter.get('/', urlsController.index);

urlRouter.get('/:reference', urlsController.findUrl);

urlRouter.post(
  '/new',
  celebrate({
    [Segments.BODY]: {
      url: Joi.string().uri().required(),
      'g-recaptcha-response': Joi.string().required(),
    },
  }),
  urlsController.url,
);

export default urlRouter;
