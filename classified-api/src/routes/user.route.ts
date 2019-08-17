import { Router } from 'express';
import { userController }  from '../controllers';
const router =  Router();

router.post('/signup', userController.signUp);

export default router;