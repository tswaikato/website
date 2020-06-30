import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { UserAgentApplication } from 'msal';
import { StringDict } from 'msal/lib-commonjs/MsalTypes';


const idTokenScope = { scopes: ['5efe6947-d960-4808-84f9-6454a37be0b6'] }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public msalService: MsalService, private broadcastService: BroadcastService) {
    msalService.acquireTokenSilent(idTokenScope);
  }

  msLogin(): void {
    this.msalService.loginRedirect({
      extraScopesToConsent: ["user.read", "openid", "profile"]
    });
  }
  msLogout(): void {
    this.msalService.logout();
  }
  isLoggedIn(): boolean {
    if (this.msalService.getAccount() === null) {
      return false;
    }
    return true;
  }
  msBroadcast() {

  }
}
