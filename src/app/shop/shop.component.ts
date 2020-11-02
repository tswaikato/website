import {Component, OnInit} from '@angular/core';
import {theNightSky} from './Products/TheNightSky';
import {Product} from './Models/Product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public productList: Product[] = [theNightSky];

  constructor() {
  }

  ngOnInit(): void {
  }

}
