import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-healtyfood',
  templateUrl: './healtyfood.component.html',
  styleUrls: ['./healtyfood.component.css']
})
export class HealtyfoodComponent {
  constructor(private router: Router) {}
  onClose() {
    this.router.navigate(['/projects'])
  }

}
