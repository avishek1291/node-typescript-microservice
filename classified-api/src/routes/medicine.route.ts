import { Router } from 'express';
import { medicineController }  from '../controllers';
import { authentication } from '../middlewares/authentication'

const router =  Router();

router
        .get('/', medicineController.getAllMedicines)
        .post('/create', medicineController.createMedicine)

export default router;