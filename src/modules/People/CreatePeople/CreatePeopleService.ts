import { injectable, inject } from "tsyringe";
import { PeopleRepository } from "../../../repositories/People";
import { PeoplePhoneRepository } from "../../../repositories/PeoplePhone";

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
    private peoplePhoneRepository: PeoplePhoneRepository,
  ) {}

  async execute(data: IRequest) {
    try {      
      const phone = await this.peoplePhoneRepository.create({
        phone: data.phone
      })

      const people = await this.peopleRepository.create({
        name: data.name,
        birthDate: data.birthDate,
        phone,
      })

      return people;
    } catch (err) {
      throw err;
    }
  }
}
