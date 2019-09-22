import { NextFunction , Request , Response } from 'express';
import { OK } from 'http-status-code';
import { postService } from '../services/post.service';


class PostController {


public async getAllPosts(req: Request, res: Response, next: NextFunction){

        try{
            //  console.log('request body', req.body)
            const response = await postService.getAll();
            res.json(response).status(OK);
        }   
        catch(e){
            next(e)
        }
    
    }

public async createPost(req: Request, res: Response, next: NextFunction){

    try{
        console.log('request body', req.body)
        const response = await postService.createPost(req.body);
        res.json('hi').status(OK);
    }   
    catch(e){
        next(e)
    }

}
public async getPostById(req: Request, res: Response, next: NextFunction){

    try{
        const { id } = req.body;
        const response = await postService.getPost(id);
        res.json(response).status(OK);
    }
    catch(e){
        next(e)
    }

}
public async deletePostById(req: Request, res: Response, next: NextFunction){

    try{
        const { id } = req.body; 
        const response = await postService.deletePost(id);
        res.json(response).status(OK);
    }
    catch(e){
        next(e)
    }

}
public async updatePostById(req: Request, res: Response, next: NextFunction){

    try{
        const { id , payload }  = req.body;
        const response = await postService.updatePost(id, payload);
        res.json(response).status(OK);
    }
    catch(e){
        next(e)
    }

}

public async negotiatePost(req: Request, res: Response, next: NextFunction){
    try{
        const negotiateMessage =  await postService.createOrUpdateNegotiatePost({...req.body, lastUpdated: new Date()})
        // if user sends first contact flag true -- fill the initial msg and go for insert

        // if its not first contact then update the resply field of lastest message by time

        return res.json(negotiateMessage).status(OK);
    }
    catch(e){
        next(e)
    }
}

}

export const postController =  new PostController()