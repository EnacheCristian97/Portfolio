import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painting-gallery',
  templateUrl: './painting-gallery.component.html',
  styleUrls: ['./painting-gallery.component.css']
})
export class PaintingGalleryComponent {
  constructor(private router: Router){}
  onClose() {
    this.router.navigate(['/projects'])
  }
}
