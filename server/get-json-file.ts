import { Request, Response } from 'express';
import axios from 'axios';

let url = "https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/en.1.json";

export function getJsonFile(req: Request, res: Response) {
  setTimeout(async () => {
    const data = await axios.get(url, { responseType: 'json' })
    res.status(200).json(data.data);
  }, 1000);
}