import { Router } from 'express';
import userRoute from './user.route';
import postRoute from './post.route';
const router =  Router();

router.use('/user', userRoute);
router.use('/post', postRoute);
export { router } ;