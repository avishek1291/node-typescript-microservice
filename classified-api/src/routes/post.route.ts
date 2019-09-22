import { Router } from 'express';
import { postController }  from '../controllers';
import { authentication } from '../middlewares/authentication'

const router =  Router();

router
        .get('/', postController.getAllPosts)
        .post('/create', authentication , postController.createPost)
        .post('/negotiate', postController.negotiatePost);

export default router;