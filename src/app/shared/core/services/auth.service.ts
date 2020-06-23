import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MsalService, BroadcastService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public msalService: MsalService, private broadcastService: BroadcastService) {}

  msLogin(): void{
    this.msalService.loginRedirect({
      extraScopesToConsent: ["user.read", "openid", "profile"]
    });
  }
  msLogout(): void{
    this.msalService.logout();
  }
  isLoggedIn(): boolean{
    if(this.msalService.getAccount() === null){
      return false;
    }
    return true;
  }
  msBroadcast(){
    
  }
}
