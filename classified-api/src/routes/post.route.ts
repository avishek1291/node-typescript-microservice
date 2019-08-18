import { Router } from 'express';
import { postController }  from '../controllers';
import {authentication} from '../middlewares/authentication'

const router =  Router();

router.get('/', postController.getAllPosts);

router.post('/create', authentication , postController.createPost);

export default router;