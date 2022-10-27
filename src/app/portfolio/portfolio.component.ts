import { Component, OnInit } from '@angular/core';
import { projects } from '../projects';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  projects = projects;
  
  constructor() {}
    

}
