import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothingService } from 'src/app/services/clothing.service';

@Component({
  selector: 'app-fashiondetails',
  templateUrl: './fashiondetails.component.html',
  styleUrls: ['./fashiondetails.component.css']
})
export class FashiondetailsComponent implements OnInit {
  //? id: number; 
  fashionItem: any;

  constructor(private route: ActivatedRoute,private   Clothing: ClothingService) { }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     this.id = +params.get('id');
  //   });
  // }
  product: any;
  ngOnInit(): void {
    const id =  this.route.snapshot.paramMap.get('id');
    this.product = this.Clothing.getFashionItem(id);
  }

}
