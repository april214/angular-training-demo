import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private cart: CartService
  ) { }

  addToCart(product){
    this.cart.AddToCart(product);
    window.alert("Your product has been added to the cart.");  
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {this.product = products[+params.get('productId')];});
  }

}