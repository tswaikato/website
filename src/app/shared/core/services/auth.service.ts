import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BroadcastService, MsalService} from '@azure/msal-angular';
import {defaultUser, UserModel} from '../models/user.model';


const idTokenScope = {scopes: ['5efe6947-d960-4808-84f9-6454a37be0b6']};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$ = new BehaviorSubject<UserModel>(defaultUser);
  public user: UserModel;

  constructor(public msalService: MsalService, private broadcastService: BroadcastService) {
    this.user$.subscribe(user => this.user = user);
    if (msalService.getAccount() !== null) {
      var account = msalService.getAccount();
      var user: UserModel = {name: account.name, email: account.userName, accountId: account.accountIdentifier};
      this.user$.next(user);
    }
  }

  msLogin(): void {
    this.msalService.loginRedirect({
      extraScopesToConsent: ['user.read', 'openid', 'profile']
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
