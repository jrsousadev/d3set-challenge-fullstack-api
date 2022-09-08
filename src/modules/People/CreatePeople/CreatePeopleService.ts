import { injectable, inject } from "tsyringe";
import { PeopleRepository } from "../../../repositories/People";
import { PeoplePhoneRepository } from "../../../repositories/PeoplePhone";
import { CustomError } from "../../../shared/errors/CustomError";

interface IRequest {
  name: string;
  birthDate: string;
  phone: string;
}

@injectable()
export class CreatePeopleService {
  constructor(
    @inject("PeopleRepository")
    private peopleRepository: PeopleRepository,
    @inject("PeoplePhoneRepository")
    private peoplePhoneRepository: PeoplePhoneRepository
  ) {}

  async execute(data: IRequest) {
    try {
      const people = await this.peopleRepository.create({
        name: data.name,
        birthDate: data.birthDate,
      });

      if (!people) throw new CustomError("People is not exist", 400);

      for await (const index of data.phone) {
        await this.peoplePhoneRepository.create({
          phone: index,
          peopleId: people.id,
        });
      }

      return people;
    } catch (err) {
      throw err;
    }
  }
}
