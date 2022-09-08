import { prismaClient } from "../database/prismaClient";

interface ICreatePeople {
  name: string;
  birthDate: string;
  phone: string;
}

interface IGetPeople {
  id: string;
}

interface IDeletePeople {
  id: string;
}

interface IGetAllPeoples {}

export class PeopleRepository {
  async create(data: ICreatePeople) {
    try {
      return await prismaClient.people.create({
        data: data,
      });
    } catch (err) {
      throw err;
    }
  }

  async getOne({ id }: IGetPeople) {
    try {
      return await prismaClient.people.findFirst({
        where: {
          id,
        },
        include: {
          peoplePhone: true,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  async getAll({}: IGetAllPeoples) {
    try {
      return await prismaClient.people.findMany({
        include: {
          peoplePhone: true,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  async delete({ id }: IDeletePeople) {
    try {
      await prismaClient.people.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      throw err;
    }
  }
}
