import { inject, injectable } from "tsyringe";
import { PeopleRepository } from "../../../repositories/People";

interface IRequest {}

@injectable()
export class GetAllPeoplesService {
  constructor(
    @inject("PeopleRepository")
    private peopleRepository: PeopleRepository
  ) {}
  async execute({}: IRequest) {
    try {
      const peoples = await this.peopleRepository.getAll({});

      if (!peoples) return [];

      return peoples;
    } catch (err) {
      throw err;
    }
  }
}
