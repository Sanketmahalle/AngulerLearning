import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];

  constructor() {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) as CartItem[];
    if (savedCartItems) {
      this.cartItems = savedCartItems;
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: Product): void {
    const cartItem = this.cartItems.find(item => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cartItems.push({
        product, quantity: 1,
        id: 0
      });
    }
    this.saveCartItems();
  }
  changeProductQuantity(product: Product, type: string): void {
    const cartItem = this.cartItems.find(item => item.product.id === product.id);
    if (cartItem) {
      if (type === 'decrement') {
        cartItem.quantity--;
        if (cartItem.quantity === 0) {
          this.cartItems = this.cartItems.filter(item => item.product.id !== product.id);
        }
      } else if (type === 'increment') {
        cartItem.quantity++;
      }
      this.saveCartItems();
    }
  }

  private saveCartItems(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}

