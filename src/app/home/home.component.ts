import { Component } from '@angular/core';
import { faComment} from '@fortawesome/free-regular-svg-icons/faComment'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  faComment = faComment;
  faFacebook = faFacebook;
  faDiscord = faDiscord;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  call = false;

  onClick(event: Event) {
    const button = document.getElementById('chat');

    this.call = true;
  }

  onClose() {
    this.call = false;
  }
}
