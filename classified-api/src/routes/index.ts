import { Router } from 'express';
import classifiedRoute from './classified.route';
const router =  Router();

router.use('/classified', classifiedRoute);

export { router } ;