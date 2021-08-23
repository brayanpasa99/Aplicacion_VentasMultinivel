import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  Items: any;

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.menuService.getItems().subscribe(res => {
      this.Items = res;
      console.log("Items", this.Items)
    }, (err) => console.log(err))
  }
}
