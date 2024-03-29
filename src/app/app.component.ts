import {Component, OnDestroy, OnInit} from '@angular/core';
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

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map(() => '../assets/images/bannerImage.png');

  public isMenuCollapsed = true;
  user: UserModel;
  private userSubscription: Subscription;

  constructor(public authService: AuthService, config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.user$.subscribe(user => this.user = user);
  }
}
