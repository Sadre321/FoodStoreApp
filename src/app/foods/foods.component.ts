import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodRepository } from 'src/app/repository/foods.repository';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {
  foods;
  model:FoodRepository;
 
  constructor(private route:ActivatedRoute){
   this.model = new FoodRepository();
   this.foods = this.model.getAllFoods();
  }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      if(params["categoryId"]){
        this.foods = this.model.getFoodByCategoryId(params["categoryId"]);
      }else{
        this.foods = this.model.getAllFoods();
      }
    })
  }


}
