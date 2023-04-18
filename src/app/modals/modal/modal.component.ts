import { Component, EventEmitter, Output } from '@angular/core';
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() close = new EventEmitter();
  faPhone = faPhone;

  onClose() {
    this.close.emit();
  }

}
