import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UrlService } from '@modules/urls/services/UrlService';

export class UrlsController {
  async index(req: Request, res: Response): Promise<void> {
    return res.status(200).render('index', {
      title: 'Encurtador ZG',
      linkDoc: process.env.APP_API_URL + '/docs',
      url: '',
      isActive: true,
    });
  }

  async url(req: Request, res: Response): Promise<void> {
    const { url } = req.body;
    const createShortUrl = container.resolve(UrlService);
    const newUrl = await createShortUrl.createShortUrl(url);
    return res.status(201).render('index', {
      title: 'Encurtador ZG',
      linkDoc: process.env.APP_API_URL + '/docs',
      url: newUrl.url,
      isActive: true,
    });
  }

  async findUrl(req: Request, res: Response): Promise<void> {
    const { reference } = req.params;
    const findUrl = container.resolve(UrlService);
    const url = await findUrl.findShortUrl(reference);
    return res.status(302).redirect(url.path);
  }
}
