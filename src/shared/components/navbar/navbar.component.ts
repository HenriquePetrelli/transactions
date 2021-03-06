import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/shared/services/loading/loading.service';
import { NotificationService } from 'src/shared/services/notification/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  language: string;
  constructor(private notificationService: NotificationService, private loadingService: LoadingService) {
    this.language = "2";
  }

  ngOnInit(): void {
    this.language = "2";
    this.verifyLocalStorageLanguage();
  }

  //Verifica se já possui em localStorage algum idioma
  async verifyLocalStorageLanguage() {
    this.loadingService.showLoading();
    let lSLanguage = localStorage.getItem('country');
    this.language = lSLanguage ? lSLanguage : "2";
    localStorage.setItem('country', this.language);
    this.loadingService.hideLoading();
  }

  //A escolha de idioma do usuário ficará salva no localStorage
  async setCountry(country: string) {
    this.loadingService.showLoading();
    localStorage.setItem('country', country);
    this.language = country;
    window.location.href = ('/');
  }
}
