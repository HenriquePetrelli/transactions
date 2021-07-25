import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/shared/services/modal.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.less']
})
export class TransactionDetailsComponent implements OnInit, OnDestroy {
  @Input()
  id!: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
    this.element.style.display = 'none';
  }

  ngOnInit(): void {
    document.body.appendChild(this.element);
    // close modal on background click
    this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
      if (el.target.className === 'modal') {
        this.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}