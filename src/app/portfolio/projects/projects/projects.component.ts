import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProjectsService} from "../services/projects.service";
import  {Swiper, SwiperOptions} from "swiper";
import {ProjectInterface} from "../interfaces/project.interface";



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],

})
export class ProjectsComponent implements OnDestroy, OnInit, AfterViewInit {

  @ViewChild('car', { static: false }) car!: ElementRef;

  constructor(private projectService: ProjectsService) {}

  ngAfterViewInit(): void {


  }






  title: string = "Portfolio"
  public projectsx: ProjectInterface[] = [];



  ngOnDestroy(): void {
    console.log("Portafolio Destruido");
  }


  ngOnInit(): void {
    const projects: ProjectInterface[] = this.getProjects();
    this.projectsx = projects;


  }

  getProjects(): ProjectInterface[] {
    return this.projectService.projects;
  }


}
