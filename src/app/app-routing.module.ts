import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './foods/foods.component';
import { FoodComponent } from './foods/food/food.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'foods',component:FoodsComponent},
  {path:'foods/:foodId',component:FoodComponent},
  {path:'foods/category/:categoryId',component:FoodsComponent},
  {path:'card',component:CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
