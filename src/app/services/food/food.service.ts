import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) :Foods[]{
    return tag == "All" ?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return[
      { name: 'All', count:14 },
      { name: 'FastFood' , count: 4 }, 
      { name: 'Pizza' , count: 2 }, 
      { name: 'Lunch' , count: 3 }, 
      { name: 'BreakFast' , count: 4 }, 
      { name: 'Fry' , count: 1 }, 
      { name: 'Soup' , count: 4 }, 
      { name: 'Hamburger' , count: 1 }, 

    ]
  }


  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Hamburger', 
        cookTime: '20-30',
        price: 100 ,
        favorite: false,
        origins: ['germany', 'US'], 
        star: 4.5,
        imageUrl: '/assets/F1.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 2,
        name: 'Pizza', 
        cookTime: '10-15',
        price: 200 ,
        favorite: false,
        origins: ['germany', 'US'], 
        star: 4.6,
        imageUrl: '/assets/F2.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 3,
        name: 'Fried Chicken', 
        cookTime: '20-30',
        price: 100 ,
        favorite: false,
        origins: ['Kentucy', 'US'], 
        star: 5,
        imageUrl: '/assets/F4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 4,
        name: 'momos', 
        cookTime: '10',
        price: 100 ,
        favorite: false,
        origins: ['Indian'], 
        star: 4.4,
        imageUrl: '/assets/F7.jpg',
        tags: ['FastFood', 'idli'],
      },
      {
        id: 5,
        name: 'idli', 
        cookTime: '10',
        price: 100 ,
        favorite: false,
        origins: ['Kerala', 'India'], 
        star: 4.5,
        imageUrl: '/assets/F9.jpg',
        tags: ['BreakFast', 'Dosa'],
      },
      {
        id: 6,
        name: 'Dosa', 
        cookTime: '20',
        price: 60 ,
        favorite: false,
        origins: ['Kerela', 'India'], 
        star: 4.7,
        imageUrl: '/assets/F10.jpg',
        tags: ['BreakFast', 'Momos'],
      },
      {
        id: 7,
        name: 'Noodles', 
        cookTime: '15',
        price: 80 ,
        favorite: false,
        origins: ['Chinese'], 
        star: 4.8,
        imageUrl: '/assets/F5.jpg',
        tags: ['FastFood', 'Noodles'],
      },
      {
        id: 8,
        name: 'Samosa', 
        cookTime: '15',
        price: 80 ,
        favorite: false,
        origins: ['India'], 
        star: 4.8,
        imageUrl: '/assets/F3.png',
        tags: ['FastFood', 'Samosa'],
      },
      {
        id: 9,
        name: 'Pasta', 
        cookTime: '5',
        price: 10 ,
        favorite: false,
        origins: ['germany', 'US'], 
        star: 4.8,
        imageUrl: '/assets/F15.jpg',
        tags: ['FastFood', 'Pasta'],
      },
      {
        id: 10,
        name: 'Cheese Pizza', 
        cookTime: '25',
        price: 80 ,
        favorite: false,
        origins: ['germany', 'US'], 
        star: 4.8,
        imageUrl: '/assets/F14.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 11,
        name: 'Masala Dosa', 
        cookTime: '15',
        price: 80 ,
        favorite: false,
        origins: ['South Indian', 'India'], 
        star: 4.8,
        imageUrl: '/assets/F6.webp',
        tags: ['BreakFast', 'Masala Dosa'],
      },
      {
        id: 12,
        name: 'Sandwitch', 
        cookTime: '15',
        price: 80 ,
        favorite: false,
        origins: ['germany', 'US'], 
        star: 4.8,
        imageUrl: '/assets/F13.png',
        tags: ['BreakFast', 'Sandwitch'],
      },
      
      
    ]
  }
}
