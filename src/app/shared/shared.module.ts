import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarMobComponent } from './sidebar-mob/sidebar-mob.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SidebarMobComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
    exports: [
        SidebarComponent,
        SidebarMobComponent,
        HeaderComponent
    ]
})
export class SharedModule { }
