import { Request , Response , NextFunction } from 'express';
import UserModel  from '../models/user.model';
export const authentication =  (req: Request, res: Response, next: NextFunction) => {
  
    const user = {
        first_name: 'avishek',
        last_name: 'choudhury',
        id: '',
    }//  This will be replaced with jwt verification with auth0
    UserModel.findOne({'first_name': user.first_name, 'last_name': user.last_name}).then(data => {
        console.log('userdata', data);
        user.id = data.id;
        req.body.user =  user;
        return next();
    })
    
   
    

}

export const NegotiatorAuthentication =  (req: Request, res: Response, next: NextFunction) => {
  
    const user = {
        first_name: 'sunny',
        last_name: 'choudhury',
        id: '',
    }//  This will be replaced with jwt verification with auth0
    UserModel.findOne({'first_name': user.first_name, 'last_name': user.last_name}).then(data => {
        console.log('userdata', data);
        user.id = data.id;
        req.body.user =  user;
        return next();
    })
    
   
    

}