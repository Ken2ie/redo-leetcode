import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  
  allShoes : Array<any> = 

  [
    {
      "name": "Area Lo Sneaker",
      "materials": "Full Grain Leather",
      "price": 285
    },
    {
      "name": "Marathon Dip-Dye Runner",
      "materials": "Leather + Polyester + Nylon",
      "price": 445
    },
    {
      "name": "Rush Sneaker",
      "materials": "Leather + Polyester",
      "price": 240
    },
    {
      "name": "Dice Lo Sneaker",
      "materials": "Recycled Polyester",
      "price": 230
    },
    {
      "name": "Dominik Tyka for Abysso",
      "materials": "Recycled Polyester + Leather",
      "price": 230
    },
    {
      "name": "Dice Lo Sneaker",
      "materials": "Recycled Polyester + Leather",
      "price": 230
    },
    {
      "name": "Genesis Vintage Runner",
      "materials": "Full Grain Leather",
      "price": 260
    },
    {
      "name": "Genesis Stripe B Bird Runner",
      "materials": "Recycled Polyester",
      "price": 265
    },
    {
      "name": "Atlas Sneaker",
      "materials": "Full Grain Leather",
      "price": 235
    },
    {
      "name": "Marathon Ghost Runner",
      "materials": "Leather + Polyester + Nylon",
      "price": 320
    },
    {
      "name": "Marathon Runner Ombre",
      "materials": "Leather + Polyester",
      "price": 335
    },
    {
      "name": "Marathon R-Tic Runner",
      "materials": "Nubuck + Polyester mesh",
      "price": 330
    }
  ]

  getAProduct(){
    
  }

}
