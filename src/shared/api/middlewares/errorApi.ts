import { NextFunction, Request, Response } from 'express';
import HandleError from '@shared/errors/HandleError';

export default (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof HandleError) {
    return res.status(err.statusCode).render('error', {
      status: 'error',
      message: err.message,
    });
  }

  console.log('ERROR: ', err);
  return res.status(500).render('error', {
    status: 'error',
    message: err.message,
  });
};
