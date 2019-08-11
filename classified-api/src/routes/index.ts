import { Router } from 'express';
import userRoute from './user.route';
const router =  Router();

router.use('/classified', userRoute);

export { router } ;