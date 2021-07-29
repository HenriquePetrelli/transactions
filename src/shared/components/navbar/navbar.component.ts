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
    await this.loadingService.showLoading();
    let lSLanguage = await localStorage.getItem('country');
    this.isEnLanguage =  lSLanguage? lSLanguage : "0";
    await localStorage.setItem('country', this.isEnLanguage);
    await this.loadingService.hideLoading();
  }

  async setCountry(isEn: string) {
    await this.loadingService.showLoading();
    await localStorage.setItem('country', isEn);
    this.isEnLanguage = isEn;
    await this.loadingService.hideLoading();
    window.location.href = ('/');
  }
}
