import * as express from "express";
import { createProject } from "../../services/project";
import { createProjectCollection } from "../../services/ProjectCollection";

const projectRouter = express.Router();

projectRouter.post("/", createProject);
projectRouter.post("/collection", createProjectCollection);

export default projectRouter;
