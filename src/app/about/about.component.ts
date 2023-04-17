import { Component } from '@angular/core';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons/faWindowMaximize';
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons/faPaintbrush';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faFileCode } from '@fortawesome/free-regular-svg-icons/faFileCode';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  first = faWindowMaximize;
  second = faCode;
  third = faFileCode;
  fourth = faPaintbrush;
}
