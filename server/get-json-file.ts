import { Request, Response } from 'express';
const jsonFile = require("./json/file.json");

export function getJsonFile(req: Request, res: Response) {
  setTimeout(() => {
    res.status(200).json({ payload: Object.values(jsonFile) });
  }, 500);
}