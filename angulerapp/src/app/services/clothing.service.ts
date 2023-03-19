import { Injectable } from '@angular/core';
import { Clothing } from '../models/clothing';
import { CLOTHING_ITEMS } from '../models/fashion';

@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  // fashionItems = [
  //   {
  //     id: 1,
  //     name: 'Leather Jacket',
  //     description: 'A stylish leather jacket for any occasion.',
  //     price: 149.99,
  //     imageUrl: 'https://th.bing.com/th/id/R.9e145c2380b9f2c5cc298800e4a9f9fc?rik=VGukEC4xm2WESA&riu=http%3a%2f%2fwww.jackets.co.in%2fwp-content%2fuploads%2f2015%2f11%2fBrown-Leather-Jacket.jpg&ehk=P2BbMX9Lrqfdvkl%2f5E5BkdKqx1I1mhgmmgMHiiyYVJQ%3d&risl=&pid=ImgRaw&r=0'
  //   },
  //   {
  //     id: 2,
  //     name: 'Sneakers',
  //     description: 'Comfortable and durable sneakers for everyday wear.',
  //     price: 69.99,
  //     imageUrl: 'https://th.bing.com/th/id/OIP.aKQE7uBUHwzHP8eOdAg8awHaHa?pid=ImgDet&rs=1'
  //   },
  // ];


  fashionItems  = [
    {
      id: 1.1,
      name: 'Leather Jacket',
      description: 'A stylish leather jacket for any occasion.',
      price: 249.99,
      imageUrl: 'https://th.bing.com/th/id/R.9e145c2380b9f2c5cc298800e4a9f9fc?rik=VGukEC4xm2WESA&riu=http%3a%2f%2fwww.jackets.co.in%2fwp-content%2fuploads%2f2015%2f11%2fBrown-Leather-Jacket.jpg&ehk=P2BbMX9Lrqfdvkl%2f5E5BkdKqx1I1mhgmmgMHiiyYVJQ%3d&risl=&pid=ImgRaw&r=0',
      category: 'Jackets'
    },
    {
      id: 1.2,
      name: 'Bomber Jacket',
      description: 'A stylish Bomber jacket for any occasion.',
      price: 149.99,
      imageUrl: 'https://www.pngarts.com/files/4/Bomber-Jacket-PNG-High-Quality-Image.png',
      category: 'Jackets'
    },
    {
      id: 1.3,
      name: 'Denim Jacket',
      description: 'A stylish denim jacket for any occasion.',
      price: 349.99,
      imageUrl: 'https://i.pinimg.com/originals/37/1e/d0/371ed0ac7ade2eb6cea0dce907aa9304.jpg',
      category: 'Jackets'
    },
    {
      id: 2.1,
      name: 'Sneakers',
      description: 'Comfortable and durable sneakers for everyday wear.',
      price: 69.99,
      imageUrl: 'https://th.bing.com/th/id/OIP.aKQE7uBUHwzHP8eOdAg8awHaHa?pid=ImgDet&rs=1',
      category: 'Shoes'
    },
    {
      id: 2.2,
      name: 'Running Sneakers',
      description: 'Comfortable and durable sneakers for everyday wear.',
      price: 80.99,
      imageUrl: 'https://purepng.com/public/uploads/large/purepng.com-running-shoesrunning-shoesrunningshoessportingphysical-activitiesstyle-1701528185958h8x1m.png',
      category: 'Shoes'
    },
    {
      id: 2.3,
      name: 'Nike Sneakers',
      description: 'Comfortable and durable sneakers for everyday wear.',
      price: 50.99,
      imageUrl: 'https://freepngimg.com/thumb/running%20shoes/29-nike-running-shoes-png-image.png',
      category: 'Shoes'
    },
    {
      id: 3.1,
      name: 'Plain Orange T-Shirts',
      description: 'Classic Plain Orange T-Shirt for a stylish look.',
      price: 79.99,
      imageUrl: 'https://www.pngarts.com/files/5/Plain-Orange-T-Shirt-PNG-Download-Image.png',
      category: 'Tshirt'
    },
    {
      id: 3.2,
      name: 'Solid Full Sleeve  T-Shirts',
      description: 'Solids Full Sleeve: Lavender Blue Men Full Sleeve T-Shirts By The Souled Store',
      price: 79.99,
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1643000584_8338822.jpg?format=webp&w=376&dpr=1.0',
      category: 'Tshirt'
    },
    {
      id: 3.3,
      name: 'Supima T-Shirts',
      description: 'Supima Cotton Half Sleeve: Navy Blue Supima T-Shirts By The Souled Store',
      price: 79.99,
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1648647900_6784778.jpg?w=376&dpr=1.0',
      category: 'Tshirt'
    },
   
  ];
  constructor() { }

  getFashionItems() {
    return this.fashionItems;
  }

  getFashionItem(id: string) {
    return this.fashionItems.find(item => item.id === +id);
  }


  getProductsByCategory(category: string) {
    return this.fashionItems.filter(product => product.category === category);
  }

  
}
