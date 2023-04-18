import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private router: Router, private route: ActivatedRoute,) {}

  onWebsite(where:string){
    const location = where
    this.router.navigate([location], {relativeTo:this.route})
  }

}
