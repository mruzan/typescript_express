import { Request, Response } from "express";
import track from '../models/track';

const TrackController = {
  get: async (req: Request, res: Response) => {
    try {
      const response = await track.read();
      res.send(response? response : 'no data');
    } catch (error) {
      console.error(res, error);
    }
  },
  add: async (req: Request, res: Response) => {
    try {
      const trackName = req.body.input;
      const response = await track.write(trackName);
      res.send({"output": response });
    } catch (error) {
      console.error(res, error);
    }
  }
};

module.exports = TrackController;
