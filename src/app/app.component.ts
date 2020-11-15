import {AfterViewInit, Component, ElementRef, isDevMode, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  faInfo = faInfoCircle;
  faEnvelope = faEnvelope;
  faCalendar = faCalendarAlt;
  faHome = faHome;
  faUser = faUser;
  faGripLine = faGripLinesVertical;

  @ViewChild('navElement') navElement: ElementRef;

  headerHeight = window.innerHeight;

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

  ngAfterViewInit(): void {
    this.headerHeight -= parseInt(window.getComputedStyle(this.navElement.nativeElement).height, 10);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.user$.subscribe(user => this.user = user);
  }

}
