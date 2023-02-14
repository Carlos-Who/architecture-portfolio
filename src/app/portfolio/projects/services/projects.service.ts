import { Injectable } from '@angular/core';
import {v4 as uuidv4} from "uuid";
import {ProjectInterface} from "../interfaces/project.interface";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  _projects: ProjectInterface[] = [
    {
      id: uuidv4(),
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      project_name: "Project Nº1",
      company_name: "Company",
      excerpt: "This is a short description of the project, to watch the full content click on the view project button...",
      description: ""
    },
    {
      id: uuidv4(),
      image: "https://swiperjs.com/demos/images/nature-2.jpg",
      project_name: "Project Nº2",
      company_name: "Company",
      excerpt: "This is a short description of the project, to watch the full content click on the view project button...",
      description: ""
    },
    {
      id: uuidv4(),
      image: "https://swiperjs.com/demos/images/nature-3.jpg",
      project_name: "Project Nº3",
      company_name: "Company",
      excerpt: "This is a short description of the project, to watch the full content click on the view project button...",
      description: ""
    },
    {
      id: uuidv4(),
      image: "https://swiperjs.com/demos/images/nature-4.jpg",
      project_name: "Project Nº4",
      company_name: "Company",
      excerpt: "This is a short description of the project, to watch the full content click on the view project button...",
      description: ""
    },
    {
      id: uuidv4(),
      image: "https://swiperjs.com/demos/images/nature-5.jpg",
      project_name: "Project Nº5",
      company_name: "Company",
      excerpt: "This is a short description of the project, to watch the full content click on the view project button...",
      description: ""
    },
    {
      id: uuidv4(),
      image: "https://swiperjs.com/demos/images/nature-7.jpg",
      project_name: "Project Nº6",
      company_name: "Company",
      excerpt: "This is a short description of the project, to watch the full content click on the view project button...",
      description: ""
    }
  ]
  constructor() { }


  get projects() {
    return [...this._projects];
  }
}
