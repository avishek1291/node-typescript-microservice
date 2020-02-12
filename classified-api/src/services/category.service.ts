import categoryModel, { iCategory } from '../models/category.model';

export class CategoryService {
  getAll = async () => {
    const allCategories = await categoryModel.find({}).populate("medicines");
    return allCategories;
  };

  addCategory = async (categoryPayload: iCategory) => {
    const newCategory: iCategory = new categoryModel({
      category_name: categoryPayload.category_name
    });

    return await newCategory.save();
  };
}

export const categoryService = new CategoryService();
