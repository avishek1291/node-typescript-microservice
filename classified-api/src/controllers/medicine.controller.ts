import { NextFunction , Request , Response } from 'express';
import { OK } from 'http-status-code';
import { medicineService } from '../services/medicine.service';


class MedicineController {


public async getAllMedicines(req: Request, res: Response, next: NextFunction){

        try{
            //  console.log('request body', req.body)
            const response = await medicineService.getAll();
            res.json(response).status(OK);
        }   
        catch(e){
            next(e)
        }
    
    }

public async createMedicine(req: Request, res: Response, next: NextFunction){

    try{
        console.log('request body', req.body)
        const response = await medicineService.addMedicine(req.body);
        res.json(response).status(OK);
    }   
    catch(e){
        next(e)
    }

}


}

export const medicineController =  new MedicineController()