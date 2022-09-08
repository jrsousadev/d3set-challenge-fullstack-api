import { Request, Response } from "express";
import { container } from "tsyringe";
import { CustomError } from "../../../shared/errors/CustomError";
import { UpdatePeopleService } from "./UpdatePeopleService";

export class UpdatePeopleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, birthDate, phones } = request.body;

    try {
      const updatePeopleService = container.resolve(UpdatePeopleService);
      const people = await updatePeopleService.execute({ id, name, birthDate, phones });

      return response.status(200).json(people);
    } catch (err) {
      if (err instanceof CustomError) {
        response.status(err.status).json({ message: err.message });
      }
    }
  }
}
