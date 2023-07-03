import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodRepository } from 'src/app/repository/foods.repository';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  selectedFood:any;
  foodRepo:FoodRepository


  constructor(
    private route:ActivatedRoute,
  ){
    this.foodRepo = new FoodRepository();
  }
    
  ngOnInit(){
    this.route.params.subscribe(params=>{
      let id = params['foodId'];
      this.selectedFood = this.foodRepo.getFoodById(id);
    })
  }
}
