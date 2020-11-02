import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from '../error/error.component';
import {ShopComponent} from './shop.component';
import {ShopItemComponent} from './shop-item/shop-item.component';


const routes: Routes = [
  {path: '', component: ShopComponent},

  {path: '**', component: ErrorComponent}
];


@NgModule({
  declarations: [ShopComponent, ShopItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopModule {
}
