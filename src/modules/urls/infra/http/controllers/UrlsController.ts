import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UrlService } from '@modules/urls/services/UrlService';
import { mold } from '@shared/api/views/mold';

export class UrlsController {
  async index(req: Request, res: Response): Promise<void> {
    return res.status(200).render('index', mold);
  }

  async url(req: Request, res: Response): Promise<void> {
    const { url } = req.body;
    const createShortUrl = container.resolve(UrlService);
    const newUrl = await createShortUrl.createShortUrl({ path: url });
    return res.status(201).render('created', {
      ...mold,
      url: newUrl.url,
    });
  }

  async findUrl(req: Request, res: Response): Promise<void> {
    const { reference } = req.params;
    const findUrl = container.resolve(UrlService);
    const url = await findUrl.findShortUrl({ reference });
    return res.status(302).redirect(url.path);
  }
}
