import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProjectsModule { }
