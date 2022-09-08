import { Router } from "express";
import peopleRoutes from "./PeopleRoutes";

const routes = Router();

routes.use("/people", peopleRoutes);

export default routes;
