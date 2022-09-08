import { container } from "tsyringe";
import { PeopleRepository } from "../../repositories/People";
import { PeoplePhoneRepository } from "../../repositories/PeoplePhone";

container.registerSingleton<PeopleRepository>(
  "PeopleRepository",
  PeopleRepository
);

container.registerSingleton<PeoplePhoneRepository>(
  "PeoplePhoneRepository",
  PeopleRepository
);