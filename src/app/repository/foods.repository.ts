import { Food } from "../models/food";

export class FoodRepository{
    foods:Food[]=[
        {
            id:1,
            name:'Mantı',
            price:50,
            description:'Kayseriye Ozel',
            tags:['Türkiye Mutfağı','Yerel'],
            imageUrl:'food-1.jpg',
            categoryId:1

        },
        {
            id:2,
            name:'Adana Kebap',
            price:100,
            description:'Adanamızda olmeden cıktıktan sonra aşabılecegınız en kalıtelı urunlerden.Adanlı flortume selam olsun',
            tags:['Türkiye Mutfağı','Yerel'],
            imageUrl:'food-2.jpg',
            categoryId:1

        },
        {
            id:3,
            name:'Fransız Kızartma',
            price:150,
            description:'İncecik kızatrmaya dolandırılma',
            tags:['Fransız Mutfağı','Lüks'],
            imageUrl:'food-3.jpg',
            categoryId:2

        },
        {
            id:4,
            name:'Pizza',
            price:50,
            description:'İtalyan mutfagının en kabul goren urunlerınden olan pizza mutfagımızda',
            tags:['İtalyan Mutfağı','Yerel'],
            imageUrl:'food-4.jpg',
            categoryId:3

        },
        {
            id:5,
            name:'Suşi',
            price:50,
            description:'Çinden getirdiğimiz ozel lezzetler',
            tags:['Çin Mutfağı','Yerel'],
            imageUrl:'food-5.jpg',
            categoryId:4

        },
        {
            id:6,
            name:'Mantı',
            price:50,
            description:'Kayseriye Ozel',
            tags:['Türkiye Mutfağı','Yerel'],
            imageUrl:'food-1.jpg',
            categoryId:1
        },
        {
            id:7,
            name:'Adana Kebap',
            price:100,
            description:'Adanamızda olmeden cıktıktan sonra aşabılecegınız en kalıtelı urunlerden.Adanlı flortume selam olsun',
            tags:['Türkiye Mutfağı','Yerel'],
            imageUrl:'food-2.jpg',
            categoryId:1

        },
        {
            id:8,
            name:'Fransız Kızartma',
            price:150,
            description:'İncecik kızatrmaya dolandırılma',
            tags:['Fransız Mutfağı','Lüks'],
            imageUrl:'food-3.jpg',
            categoryId:2
        },
        {
            id:9,
            name:'Pizza',
            price:50,
            description:'İtalyan mutfagının en kabul goren urunlerınden olan pizza mutfagımızda',
            tags:['İtalyan Mutfağı','Yerel'],
            imageUrl:'food-4.jpg',
            categoryId:3

        },
        {
            id:10,
            name:'Suşi',
            price:50,
            description:'Çinden getirdiğimiz ozel lezzetler',
            tags:['Çin','Çalma'],
            imageUrl:'food-5.jpg',
            categoryId:4
        }
    ]

    getAllFoods():Food[]{
        return this.foods;
    }
    
    getFoodById(id:number){
        return this.foods.find(i=>i.id == id);
    }

    getFoodByCategoryId(id:number){
        return this.foods.filter(i=>i.categoryId == id);
    }
}