import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  open = false;
  ngOnInit(): void {

 }

  openNav() {
    const mobileNav = document.querySelector('.mobile-nav') as HTMLElement;
    if(!this.open){
      this.open = true
      mobileNav.classList.add('open');
    } else {
      this.open = false;
      mobileNav.classList.remove('open');
    }
  }

  closeNav() {
    const mobileNav = document.querySelector('.mobile-nav') as HTMLElement;
    mobileNav.classList.remove('open');
  }

}
