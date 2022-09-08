import { Request, Response } from "express";
import { container } from "tsyringe";
import { CustomError } from "../../../shared/errors/CustomError";
import { DeletePeopleService } from "./DeletePeopleService";

export class DeletePeopleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const deletePeopleService = container.resolve(DeletePeopleService);
      const people = await deletePeopleService.execute({
        id: String(id)
      });

      return response.status(200).json(people);
    } catch (err) {
      if (err instanceof CustomError) {
        response.status(err.status).json({ message: err.message });
      }
    }
  }
}
