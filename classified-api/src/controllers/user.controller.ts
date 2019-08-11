import { NextFunction , Request , Response } from 'express';
import { OK } from 'http-status-code';
import { userService } from '../services/user.service'
class UserController {

public async getClassified(req: Request, res: Response, next: NextFunction){

    try{
        console.log('inside classified controller')
        // const response = await userService.getAllClassifieds()
        // console.log('service response', response)
        res.json({
            "id": 1,
            "title": "Room rent at new Town",
            "rent": 2000,
            "isAvialble": true
        }).status(OK).send();
    }
    catch(e){
        next(e)
    }

}

}

export const userController =  new UserController()