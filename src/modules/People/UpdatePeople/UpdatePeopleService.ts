import { inject, injectable } from "tsyringe";
import { PeopleRepository } from "../../../repositories/People";
import { PeoplePhoneRepository } from "../../../repositories/PeoplePhone";
import { CustomError } from "../../../shared/errors/CustomError";

interface Phones {
  id: string;
  phone: string;
}

interface IRequest {
  id: string;
  name: string;
  birthDate: string;
  phones: Phones[];
}

@injectable()
export class UpdatePeopleService {
  constructor(
    @inject("PeopleRepository")
    private peopleRepository: PeopleRepository,
    @inject("PeoplePhoneRepository")
    private peoplePhoneRepository: PeoplePhoneRepository
  ) {}

  async execute({ id, name, birthDate, phones }: IRequest) {
    try {
      const peopleExist = await this.peopleRepository.getOne({ id });
      if (!peopleExist) throw new CustomError("People is not exist", 400);

      for await (const index of phones) {
        const existPhone = await this.peoplePhoneRepository.getOne({
          phone: index.phone,
        });

        if (
          existPhone &&
          String(existPhone.peopleId) !== String(peopleExist.id)
        ) {
          throw new CustomError("Phone exist", 400);
        } 
      }
    

      await this.peopleRepository.update({ id: String(id), name, birthDate: new Date(birthDate) });

      for await (const index of phones) {
        if (typeof index.id !== "undefined" && index.phone !== "") {
          await this.peoplePhoneRepository.update({
            id: index.id,
            phone: index.phone,
          });
        } 

        if (!index.id) {
          await this.peoplePhoneRepository.create({
            peopleId: peopleExist.id,
            phone: index.phone,
          })
        }

        if(index.phone === ""){
          await this.peoplePhoneRepository.delete({
            id: index.id
          })
        }
      }

      const people = await this.peopleRepository.getOne({ id });

      return people;
    } catch (err) {
      throw err;
    }
  }
}
