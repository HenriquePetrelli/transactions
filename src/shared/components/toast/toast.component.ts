import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less']
})
export class ToastComponent implements OnInit {

  constructor() { }
  hideToast: Boolean = true;
  ngOnInit(): void {
  }

  showToast(message: string, time: number) {
    this.hideToast = false;
    setTimeout(()=> {
      this.hideToast = true;   
    }, time);
  }

}
