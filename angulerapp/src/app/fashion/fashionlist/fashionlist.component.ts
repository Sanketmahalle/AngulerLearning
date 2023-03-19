import { Component, OnInit } from '@angular/core';
import { ClothingService } from 'src/app/services/clothing.service';
interface Fashion {
  id: number;
  name: string;
  description: string;
  imageUrl: string; // add imageUrl property
}
@Component({
  selector: 'app-fashionlist',
  templateUrl: './fashionlist.component.html',
  styleUrls: ['./fashionlist.component.css']
})
export class FashionlistComponent implements OnInit {

  category: string = '';
  products: any[] = [];
  constructor(private Clothing: ClothingService) { }
  // fashions: Fashion[] = [
  //   {
  //     id: 1,
  //     name: 'Fashion Item 1',
  //     description: 'This is a fashion item.',
  //     imageUrl: 'https://example.com/fashion1.jpg'
  //   },
  //   {
  //     id: 2,
  //     name: 'Fashion Item 2',
  //     description: 'This is another fashion item.',
  //     imageUrl: 'https://example.com/fashion2.jpg'
  //   },
  //   {
  //     id: 3,
  //     name: 'Fashion Item 3',
  //     description: 'This is yet another fashion item.',
  //     imageUrl: 'https://example.com/fashion3.jpg'
  //   }
  // ];
  fashionItems: any[];
  ngOnInit() {
    this.fashionItems = this.Clothing.getFashionItems();
  }

  filterByCategory(category: string): void {
    this.category = category;
    this.products = this.Clothing.getProductsByCategory(category);
  }

  clearFilter(): void {
    
    this.products = this.Clothing.getFashionItems();
  }
}
