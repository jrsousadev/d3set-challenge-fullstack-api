import { Request, Response } from "express";
import { container } from "tsyringe";
import { CustomError } from "../../../shared/errors/CustomError";
import { CreatePeopleService } from "./CreatePeopleService";

export class CreatePeopleController {
  async handle(request: Request, response: Response) {
    const { name, birthDate, phone } = request.body;

    try {
      const createPeopleService = container.resolve(CreatePeopleService);
      const people = await createPeopleService.execute({
        name,
        birthDate,
        phone,
      });

      return response.status(201).json(people);
    } catch (err) {
      if (err instanceof CustomError) {
        response.status(err.status).json({ message: err.message });
      }
    }
  }
}
