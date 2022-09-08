import { Request, Response } from "express";
import { container } from "tsyringe";
import { CustomError } from "../../../shared/errors/CustomError";
import { GetAllPeoplesService } from "./GetAllPeoplesService";

export class GetAllPeoplesController {
  async handle(request: Request, response: Response) {
    try {
      const getAllPeoplesService = container.resolve(GetAllPeoplesService);
      const peoples = await getAllPeoplesService.execute({});

      return response.status(200).json(peoples);
    } catch (err) {
      if (err instanceof CustomError) {
        response.status(err.status).json({ message: err.message });
      }
    }
  }
}
