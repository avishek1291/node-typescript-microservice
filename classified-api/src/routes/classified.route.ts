import { Router } from 'express';
import { classifiedController }  from '../controllers';
const router =  Router();

router.get('/', classifiedController.getClassified);

export default router;