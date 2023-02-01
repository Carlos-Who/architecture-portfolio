import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarMobComponent } from './sidebar-mob/sidebar-mob.component';
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
  declarations: [
    SidebarComponent,
    SidebarMobComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    SidebarComponent,
    SidebarMobComponent
  ]
})
export class SharedModule { }
