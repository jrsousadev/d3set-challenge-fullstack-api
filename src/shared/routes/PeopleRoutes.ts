import { Router } from "express";
import { CreatePeopleController } from "../../modules/People/CreatePeople/CreatePeopleController";
import { GetAllPeoplesController } from "../../modules/People/GetAllPeoples/GetAllPeoplesController";
import { GetPeopleController } from "../../modules/People/GetPeople/GetPeopleController";

const peopleRoutes = Router();

const createPeopleController = new CreatePeopleController();
peopleRoutes.post("/", createPeopleController.handle);

const getAllPeoplesController = new GetAllPeoplesController();
peopleRoutes.get("/all", getAllPeoplesController.handle);

const getPeopleController = new GetPeopleController();
peopleRoutes.get("/:id", getPeopleController.handle);

export default peopleRoutes;
