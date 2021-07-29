import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/shared/services/loading/loading.service';
import { NotificationService } from 'src/shared/services/notification/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  isEnLanguage: string;
  constructor(private notificationService: NotificationService, private loadingService: LoadingService) {
    this.isEnLanguage = "0";
    this.verifyLocalStorageLanguage();
  }

  ngOnInit(): void {
  }

  async verifyLocalStorageLanguage() {
    this.loadingService.showLoading();
    let lSLanguage = localStorage.getItem('country');
    this.isEnLanguage = lSLanguage ? lSLanguage : "0";
    localStorage.setItem('country', this.isEnLanguage);
    this.loadingService.hideLoading();
  }

  async setCountry(isEn: string) {
    this.loadingService.showLoading();
    localStorage.setItem('country', isEn);
    this.isEnLanguage = isEn;
    this.loadingService.hideLoading();
    window.location.href = ('/');
  }
}
