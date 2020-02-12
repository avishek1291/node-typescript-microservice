import { Router } from 'express';
import { categoryController }  from '../controllers';
import { authentication } from '../middlewares/authentication'

const router =  Router();

router
        .get('/', categoryController.getAllCategories)
        .post('/create', categoryController.createCategory)

export default router;