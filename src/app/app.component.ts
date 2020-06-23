import { Component, OnInit, OnDestroy } from '@angular/core';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './shared/core/services/auth.service';
import { faCalendar, faEnvelope, faInfo, faHome, faUser, faGripLinesVertical, faInfoCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { Account } from 'msal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faInfo = faInfoCircle;
  faEnvelope = faEnvelope;
  faCalendar = faCalendarAlt;
  faHome = faHome;
  faUser = faUser;
  faGripLine = faGripLinesVertical;
  faMicrosoft = faMicrosoft;


  isMenuCollapsed:boolean = true;
  account:Account;
  constructor(public authService: AuthService, private http:HttpClient, private broadcastService: BroadcastService){}
  ngOnInit(): void {
    this.account = this.authService.msalService.getAccount();
  }
}
