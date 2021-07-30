import { Injectable } from '@angular/core';
import { LoadingComponent } from 'src/shared/components/loading/loading.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor() { }

  //Exibe Loading por injeção de dependencia
  showLoading() {
    let loadingElement = document.getElementById('loading');
    if (loadingElement) loadingElement.style.display = 'block';
  }

  //Fecha Loading por injeção de dependencia
  hideLoading() {
    let loadingElement = document.getElementById('loading');
    if (loadingElement) loadingElement.style.display = 'none';
  }
}
