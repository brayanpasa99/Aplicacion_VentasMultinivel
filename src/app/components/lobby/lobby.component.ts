import { Component, OnInit, Input } from '@angular/core';
import { Details } from 'src/app/models/details';
import { Product } from 'src/app/models/product';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  //products: Product[];
  Products: any;
  @Input() details: Details[];

  constructor(private lobbyService: LobbyService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.lobbyService.getProducts().subscribe(res => {
      this.Products = res;
      console.log("Products", this.Products)
    }, err => console.log(err))
  }

  addDetail(product:Product){
    var amount = (<HTMLInputElement>document.getElementById("amount")).valueAsNumber;
    var detail = new Details(product)
    detail.amount = amount
    this.details.push(detail)
  }

}
