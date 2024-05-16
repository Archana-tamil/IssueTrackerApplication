import express from 'express';
import homePage from "../controllers/home.controller.js";
import projectRouter from './project.routes.js';


const homeRouter = express.Router();


// route for home page
homeRouter.get('/',homePage);

// route for project request
homeRouter.use('/project', projectRouter);

export default homeRouter;
