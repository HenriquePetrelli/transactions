import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less'],
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.hideLoading();
  }

  //Função para exibir Loading na aplicação
  showLoading() {
    let loadingElement = document.getElementById("loading");
    if (loadingElement)
      loadingElement.style.display = "block";
  }

  //Função para esconder Loading na aplicação
  hideLoading() {
    let loadingElement = document.getElementById("loading");
    if (loadingElement)
      loadingElement.style.display = "none";
  }
}
