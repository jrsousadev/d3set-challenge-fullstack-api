import { inject, injectable } from "tsyringe";
import { PeopleRepository } from "../../../repositories/People";
import { CustomError } from "../../../shared/errors/CustomError";

interface IRequest {
  id: string;
}

@injectable()
export class GetPeopleService {
  constructor(
    @inject("PeopleRepository")
    private peopleRepository: PeopleRepository
  ) {}
  
  async execute({ id }: IRequest) {
    try {
      const people = await this.peopleRepository.getOne({ id });

      if (!people) throw new CustomError("People is not exist", 400);

      return people;
    } catch (err) {
      throw err;
    }
  }
}
