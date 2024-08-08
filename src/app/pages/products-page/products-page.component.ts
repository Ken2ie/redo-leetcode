import { Component } from '@angular/core';
import { ProductsService } from '../../utils/products.service';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

    constructor(private product :  ProductsService) {}

    allShoes : Array<any> =  [
      {
        "name": "Area Lo Sneaker",
        "materials": "Full Grain Leather",
        "price": 285,
        image : 'https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?ga=GA1.1.1900006000.1721461402&semt=ais_hybrid'
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
    ];

}
