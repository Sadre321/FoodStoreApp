import { category } from "../models/category";

export class CategoryRepository{
    category:category[]=[
        {categoryId:1,name:'Türk Mutfağı'},
        {categoryId:2,name:'Fransız Mutfağı'},
        {categoryId:3,name:'İtalyan Mutfağı'},
        {categoryId:4,name:'Çin Mutfağı'},
   ];

   getAllCategories(){
    return this.category;
   }
    
}