import { Component,ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-toggle-mode',
  templateUrl: './toggle-mode.component.html',
  styleUrls: ['./toggle-mode.component.css']
})
export class ToggleModeComponent  {

  darkModeEnable = localStorage.getItem('darkModeEnabled');  //setted in nav component

  constructor(private element: ElementRef, private renderer: Renderer2) { } 

  toggleMode() {
    
    if(this.darkModeEnable == 'true') {
       this.renderer.removeClass(this.element.nativeElement.ownerDocument['childNodes'][1], 'dark');
       localStorage.setItem('darkModeEnabled', 'false');                
    }
    else {
      this.renderer.addClass(this.element.nativeElement.ownerDocument['childNodes'][1], 'dark');
      localStorage.setItem('darkModeEnabled', 'true');
    }

    this.darkModeEnable = localStorage.getItem('darkModeEnabled');
      
  }

}
