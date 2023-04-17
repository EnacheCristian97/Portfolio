import { Component } from '@angular/core';
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faDiscord = faDiscord;
  faWhatsapp = faWhatsapp;
}
