import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,) {}

  ngOnInit(){}

  onWebsite(where:string){
    this.router.navigate([where], {relativeTo:this.route})
  }

}
