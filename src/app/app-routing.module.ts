import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {EventsComponent} from './events/events.component';
import {ErrorComponent} from './error/error.component';
import {MsalGuard} from '@azure/msal-angular';
import {JoinComponent} from './join/join.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'events', component: EventsComponent, canActivate: [MsalGuard]},
  {path: 'joinus', component: JoinComponent},
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)},

  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
