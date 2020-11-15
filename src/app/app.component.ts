import {Component, isDevMode, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './shared/core/services/auth.service';
import {faCalendarAlt, faEnvelope, faGripLinesVertical, faHome, faInfoCircle, faUser} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from 'rxjs';
import {UserModel} from './shared/core/models/user.model';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

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

  public isMenuCollapsed = true;
  public joinLink = 'joinus';
  user: UserModel;
  private userSubscription: Subscription;

  constructor(public authService: AuthService, config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    if (!isDevMode()){
      this.joinLink = 'https://bit.ly/tswaikatojoinus';
    }
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.user$.subscribe(user => this.user = user);
  }
}
