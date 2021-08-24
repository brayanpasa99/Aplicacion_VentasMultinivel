import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/models/details';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  details:Details[];  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.cartService.getAddedProducts().subscribe(res => {      
      this.details = res.map(
        function(product:Product){
          return new Details(product)
        }
      );
      // this.details.forEach( (item, index) => {
      //   if(item === sessionStorage.getItem("")) this.details.splice(index,1);
      // });

      console.log("Products", this.details)
    }, err => console.log(err))

  }

  addDetail(detail:Details){
    this.details.push(detail)
  }


  addProduct(detail:Details){
    detail.amount++; 
  }

  subtractProduct(detail:Details){
    if(detail.amount-- < 0){
      detail.amount = 0;
    }else{
      detail.amount--;
    } 
  }

  removeProduct(detail:Details){
   this.details.forEach( (item, index) => {
     if(item === detail) this.details.splice(index,1);
   });
  }



}
