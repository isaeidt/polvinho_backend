import { Router } from 'express';
import loginController from '../modules/User/controller/loginController.js';

const loginRouter = Router();

loginRouter.post('/', loginController.login);

export default loginRouter;
