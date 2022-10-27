import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ToggleModeComponent } from './toggle-mode/toggle-mode.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { ThreeComponent } from './three/three.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ToggleModeComponent,
    DropdownMenuComponent,
    ThreeComponent,
    IntroSectionComponent,
    AboutComponent,
    FooterComponent,
    PortfolioComponent,
    ProjectComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
