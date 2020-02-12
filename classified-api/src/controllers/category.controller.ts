import { NextFunction , Request , Response } from 'express';
import { OK } from 'http-status-code';
import { categoryService } from '../services/category.service';


class CategoryController {


public async getAllCategories(req: Request, res: Response, next: NextFunction){

        try{
            //  console.log('request body', req.body)
            const response = await categoryService.getAll();
            res.json(response).status(OK);
        }   
        catch(e){
            next(e)
        }
    
    }

public async createCategory(req: Request, res: Response, next: NextFunction){

    try{
        console.log('request body', req.body)
        const response = await categoryService.addCategory(req.body);
        res.json(response).status(OK);
    }   
    catch(e){
        next(e)
    }

}


}

export const categoryController =  new CategoryController();