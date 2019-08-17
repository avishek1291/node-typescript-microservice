import { NextFunction , Request , Response } from 'express';
import { OK } from 'http-status-code';
import { userService } from '../services/user.service';


class UserController {

   
public async signUp(req: Request, res: Response, next: NextFunction){

    try{
        console.log('inside classified controller' ,req.body)
        const response = await userService.userSignUp(req.body);
        res.json(response).status(OK);
    }
    catch(e){
        next(e)
    }

}

}

export const userController =  new UserController()