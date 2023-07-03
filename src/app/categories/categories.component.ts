import { Component } from '@angular/core';
import { category } from '../models/category';
import { CategoryRepository } from '../repository/categories.repository';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  category:category[]=[];
  model:CategoryRepository;
  selectedCategory:category|null;

  constructor(){
    this.model = new CategoryRepository();
    this.category = this.model.getAllCategories();
  }

  displayAll= true;

  SelectCategory(category?:category){
    if(category){
      this.selectedCategory = category;
      this.displayAll = false;
    }else{
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }

  
}
