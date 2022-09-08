import { prismaClient } from "../database/prismaClient";

interface ICreatePeoplePhone {
  phone: string;
}

interface IGetPeoplePhone {
  id: string;
}

interface IDeletePeoplePhone {
  id: string;
}

interface IGetAllPeoplePhones {}

export class PeoplePhoneRepository {
  async create(data: ICreatePeoplePhone) {
    try {
      return await prismaClient.peoplePhone.create({
        data: data,
      });
    } catch (err) {
      throw err;
    }
  }

  async getOne({ id }: IGetPeoplePhone) {
    try {
      return await prismaClient.peoplePhone.findFirst({
        where: {
          id,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  async getAll({}: IGetAllPeoplePhones) {
    try {
      return await prismaClient.peoplePhone.findMany({});
    } catch (err) {
      throw err;
    }
  }

  async delete({ id }: IDeletePeoplePhone) {
    try {
      await prismaClient.peoplePhone.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      throw err;
    }
  }
}
