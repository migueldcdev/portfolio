import { Component, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent{

  @Input() currentRoute!: string

  isDropdownHidden = true;  

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  showDropdown() {

    if(this.isDropdownHidden) {
      this.renderer.removeClass(this.element.nativeElement.childNodes[1], 'hidden');      
    } else {
      this.renderer.addClass(this.element.nativeElement.childNodes[1], 'hidden');
    }
    
    this.isDropdownHidden = !this.isDropdownHidden;
    
  }

}
