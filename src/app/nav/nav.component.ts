import { Component, OnInit} from '@angular/core';
import { fromEvent } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, NavigationStart, Event } from '@angular/router';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {   

  breakpoints = Breakpoints; 

  resize$ = fromEvent(this.window, 'resize')

  isBreakPointSmall = this.breakpointObserver.isMatched(Breakpoints.XSmall);

  event$ = this.router.events;

  currentRoute!: string;

  constructor(private window: Window, private breakpointObserver: BreakpointObserver, private router: Router) {

    this.event$.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {          
        this.currentRoute = event.url        
      }

    })

  }
  
  ngOnInit(): void {
    
    localStorage.setItem('darkModeEnabled', 'true');

    this.resize$.subscribe(()=> {

      this.isBreakPointSmall = this.breakpointObserver.isMatched(Breakpoints.XSmall)      

    })   

  }
  
  
  
  
}
