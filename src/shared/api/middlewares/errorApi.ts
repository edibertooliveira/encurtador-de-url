import { NextFunction, Request, Response } from 'express';
import HandleError from '@shared/errors/HandleError';
import { CelebrateError } from 'celebrate';
import { mold } from '@shared/api/views/mold';

export default (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof HandleError) {
    return res.status(err.statusCode).render('error', {
      ...mold,
      error: {
        name: 'Error',
        message: err.message,
      },
    });
  }

  if (err instanceof CelebrateError) {
    const celebrate = Array.from(err.details)[0][1];
    return res.status(400).render('error', {
      ...mold,
      error: {
        name: celebrate.name,
        message: celebrate.message,
      },
    });
  }
  console.log(err);

  return res.status(500).render('error', {
    ...mold,
    error: {
      name: 'Error',
      message: 'Internal server error',
    },
  });
};
