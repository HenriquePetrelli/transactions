import { Injectable } from '@angular/core';
import { LoadingComponent } from 'src/shared/components/loading/loading.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor() {}

  showLoading() {
    let loadingElement = document.getElementById('loading');
    if (loadingElement) loadingElement.style.display = 'block';
  }

  hideLoading() {
    let loadingElement = document.getElementById('loading');
    if (loadingElement) loadingElement.style.display = 'none';
  }
}
