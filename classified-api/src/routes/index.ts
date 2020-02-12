import { Router } from 'express';
import userRoute from './user.route';
import postRoute from './post.route';
import medicineRoute from './medicine.route';
import categoryRoute from './category.route';
const router =  Router();

router.use('/user', userRoute);
router.use('/post', postRoute);
router.use('/med', medicineRoute);
router.use('/category', categoryRoute);
export { router } ;