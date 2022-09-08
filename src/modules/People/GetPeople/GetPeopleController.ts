import { Request, Response } from "express";
import { container } from "tsyringe";
import { CustomError } from "../../../shared/errors/CustomError";
import { GetPeopleService } from "./GetPeopleService";

export class GetPeopleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const getPeopleService = container.resolve(GetPeopleService);
      const people = await getPeopleService.execute({ id });

      return response.status(200).json(people);
    } catch (err) {
      if (err instanceof CustomError) {
        response.status(err.status).json({ message: err.message });
      }
    }
  }
}
