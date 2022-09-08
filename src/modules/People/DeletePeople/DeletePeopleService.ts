import { inject, injectable } from "tsyringe";
import { PeopleRepository } from "../../../repositories/People";
import { PeoplePhoneRepository } from "../../../repositories/PeoplePhone";

interface IRequest {
  id: string;
}

@injectable()
export class DeletePeopleService {
  constructor(
    @inject("PeopleRepository")
    private peopleRepository: PeopleRepository,
    @inject("PeoplePhoneRepository")
    private peoplePhoneRepository: PeoplePhoneRepository,
  ) {}
  async execute({ id }: IRequest) {
    try {

      const people = await this.peopleRepository.getOne({
        id: String(id)
      });

      for await (const index of people.peoplePhone) {
        await this.peoplePhoneRepository.delete({
          phone: index.phone,
        })
      }

      await this.peopleRepository.delete({
        id,
      });

      return {
        message: 'People successfully deleted'
      };
    } catch (err) {
      throw err;
    }
  }
}
