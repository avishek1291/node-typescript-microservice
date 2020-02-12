import MedicineModel, { iMedicine } from '../models/medicine.model';
import CategoryModel from "../models/category.model";
export class MedicineService {
  getAll = async () => {
    const allPosts = await MedicineModel.find({}).populate("category");
    return allPosts;
  };

  addMedicine = async (medicinePayload: iMedicine) => {

    const newMedicine: iMedicine = new MedicineModel({
        medicine_name: medicinePayload.medicine_name,
        img_url: medicinePayload.img_url,
        description: medicinePayload.description,
        price: medicinePayload.price,
        category: medicinePayload.category,
        isAvailable: medicinePayload.isAvailable,
        created_date: new Date(),
        last_updated: new Date()
    });

    const medicine = await newMedicine.save();
    await CategoryModel.findByIdAndUpdate(medicinePayload.category, {"$push": { medicines: medicine._id}});
    return medicine;

  };
}

export const medicineService = new MedicineService();
