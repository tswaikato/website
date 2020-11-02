import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../Models/Product';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

  @Input() product: Product;

  constructor() {
  }

  ngOnInit(): void {
  }

}
