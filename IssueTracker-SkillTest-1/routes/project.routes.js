import express from 'express';
const projectRouter = express.Router();
import { create,createIssue,project } from '../controllers/project.controller.js';
// route to create project
projectRouter.post('/create', create);

// route to get the project
projectRouter.get('/:id', project);

// route to create issue
projectRouter.post('/:id',createIssue);

export default projectRouter;
