import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private route: ActivatedRoute,
    private cart: CartService,
    private formBuilder: FormBuilder
  ) {
    // set the checkoutForm property with a form model containing name and address fields using formBuilder.group() method
    this.checkoutForm = this.formBuilder.group({name:'', address:''});
  }

  ngOnInit() {
    this.items = this.cart.getItems();
  }

  onSubmit(customerData){
    this.items = this.cart.clearCart();
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', customerData);
  }

  removeAll(){
    this.items = this.cart.clearCart();
    window.alert("Your cart is empty now!");
  }
}