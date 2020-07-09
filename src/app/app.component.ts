import { Component, OnInit, OnDestroy } from '@angular/core';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './shared/core/services/auth.service';
import { faCalendar, faEnvelope, faInfo, faHome, faUser, faGripLinesVertical, faInfoCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { Account } from 'msal';
import { Subscription } from 'rxjs';
import { UserModel } from './shared/core/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  faInfo = faInfoCircle;
  faEnvelope = faEnvelope;
  faCalendar = faCalendarAlt;
  faHome = faHome;
  faUser = faUser;
  faGripLine = faGripLinesVertical;

  public isMenuCollapsed: boolean = true;

  private userSubscription: Subscription;

  user: UserModel;
  constructor(public authService: AuthService) { }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.userSubscription = this.authService.user$.subscribe(user => this.user = user);
  }
}
