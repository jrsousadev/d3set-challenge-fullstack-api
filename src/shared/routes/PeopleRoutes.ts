import { Router } from "express";
import { CreatePeopleController } from "../../modules/People/CreatePeople/CreatePeopleController";
import { DeletePeopleController } from "../../modules/People/DeletePeople/DeletePeopleController";
import { GetAllPeoplesController } from "../../modules/People/GetAllPeoples/GetAllPeoplesController";
import { GetPeopleController } from "../../modules/People/GetPeople/GetPeopleController";
import { UpdatePeopleController } from "../../modules/People/UpdatePeople/UpdatePeopleController";

const peopleRoutes = Router();

const createPeopleController = new CreatePeopleController();
peopleRoutes.post("/", createPeopleController.handle);

const getAllPeoplesController = new GetAllPeoplesController();
peopleRoutes.get("/all", getAllPeoplesController.handle);

const getPeopleController = new GetPeopleController();
peopleRoutes.get("/:id", getPeopleController.handle);

const updatePeopleController = new UpdatePeopleController();
peopleRoutes.put("/:id", updatePeopleController.handle);

const deletePeopleController = new DeletePeopleController();
peopleRoutes.delete("/:id", deletePeopleController.handle);

export default peopleRoutes;
