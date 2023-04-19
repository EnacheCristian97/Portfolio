import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-u-host',
  templateUrl: './u-host.component.html',
  styleUrls: ['./u-host.component.css']
})
export class UHostComponent {

  constructor(private router: Router) {}
  onClose() {
    this.router.navigate(['/projects'])
  }

}
