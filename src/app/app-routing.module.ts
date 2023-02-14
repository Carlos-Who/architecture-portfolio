import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./portfolio/home/home.component";
import {PortfolioComponent} from "./portfolio/portfolio/portfolio.component";
import {AboutComponent} from "./portfolio/about/about.component";
import {ContactComponent} from "./portfolio/contact/contact.component";
import {ProjectsComponent} from "./portfolio/projects/projects/projects.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "portafolio",
    component: ProjectsComponent
  },
  {
    path: "acerca-de-mi",
    component: AboutComponent
  },
  {
    path: "contacto",
    component: ContactComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
