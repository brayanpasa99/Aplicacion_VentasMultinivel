import { Component, OnInit } from '@angular/core';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  Products: any;

  constructor(private lobbyService: LobbyService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.lobbyService.getProducts().subscribe(res => {
      this.Products = res;
      console.log("Productos", this.Products)
    }, err => console.log(err))
  }

}
