import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less'],
})
export class LoadingComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.hideLoading();
  }

  showLoading() {
    let loadingElement = document.getElementById("loading");
    if (loadingElement)
    loadingElement.style.display = "block";
  }

  hideLoading() {
      let loadingElement = document.getElementById("loading");
      if (loadingElement)
      loadingElement.style.display = "none";
  }
}
