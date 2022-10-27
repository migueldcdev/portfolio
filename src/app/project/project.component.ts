import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, projects } from '../projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project | undefined;


  constructor( private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;    
    const projectIdFromRoute = Number(routeParams.get('projectId'));    

    this.project = projects.find(project => project.id === projectIdFromRoute);

  }

}
