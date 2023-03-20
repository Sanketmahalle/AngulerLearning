import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-shoppinghome',
  templateUrl: './shoppinghome.component.html',
  styleUrls: ['./shoppinghome.component.css']
})
export class ShoppinghomeComponent implements OnInit {

  products: Product[] = [];
  cartItems: CartItem[] = [];

  constructor(private http: HttpClient, private cartService: CartService) { }

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe(products => {
      this.products = products;
    });
    this.cartItems = this.cartService.getCartItems();
  }

  isProductInCart(product: Product): boolean {
    return this.cartItems.some(item => item.product.id === product.id);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.cartItems = this.cartService.getCartItems();
  }

  changeProductQuantity(product: Product, type: string): void {
    this.cartService.changeProductQuantity(product, type);
    this.cartItems = this.cartService.getCartItems();
  }

  getProductQuantity(product: Product): number {
    const cartItem = this.cartItems.find(item => item.product.id === product.id);
    return cartItem ? cartItem.quantity : 0;
  }

  getCartTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
}
