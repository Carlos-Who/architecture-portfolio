import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarMobComponent } from './sidebar-mob/sidebar-mob.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SidebarMobComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    SidebarMobComponent
  ]
})
export class SharedModule { }
