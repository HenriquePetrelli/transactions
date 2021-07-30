import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/shared/services/modal/modal.service';

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

  async ngOnInit() {
    document.body.appendChild(this.element);
    // Ao clicar no plano de fundo da modal, ela fechará
    await this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
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

  // Abre modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  // Fecha modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}