import { Router } from 'express';

import urlRouter from '@modules/urls/routes/url.routes';
import docRouter from '@shared/api/routers/doc.routes';

const routes = Router();

routes.use(docRouter);
routes.use(urlRouter);

export default routes;
