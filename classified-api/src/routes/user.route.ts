import { Router } from 'express';
import { userController }  from '../controllers';
const router =  Router();

router.post('/signup', userController.signUp);
router.get('/', userController.getAllUsers);
export default router;