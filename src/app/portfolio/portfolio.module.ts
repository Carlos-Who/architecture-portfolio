import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import {ProjectsModule} from "./projects/projects.module";



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ProjectsModule
  ]
})
export class PortfolioModule { }
