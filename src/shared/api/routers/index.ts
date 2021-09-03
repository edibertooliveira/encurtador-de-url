import { Router } from 'express';

import urlRouter from '@modules/urls/infra/http/routes/url.routes';
import docRouter from '@shared/api/routers/doc.routes';

const routes = Router();

routes.use(docRouter);
routes.use(urlRouter);

export default routes;
