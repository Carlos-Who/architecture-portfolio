import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {gsap} from "gsap";
@Component({
  selector: 'app-sidebar-mob',
  templateUrl: './sidebar-mob.component.html',
  styleUrls: ['./sidebar-mob.component.scss']
})
export class SidebarMobComponent {

  constructor() {}

  @ViewChild('sideBarMenu', { static: true }) sideBarMenu !: ElementRef;
  @ViewChild('MenuButton', { static: true }) MenuButton !: ElementRef;
  menuIsOpen: boolean = false;
  tl = gsap.timeline({paused:true, reversed: true});
  tl2 = gsap.timeline({paused:true, reversed: true});

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent): void {
    if (!this.sideBarMenu.nativeElement.contains(event.target) && !this.MenuButton.nativeElement.contains(event.target) ) {
      this.menuIsOpen = false;
      this.tl.timeScale(2.5).reverse();
      this.tl2.timeScale(3).reverse();
    }
  }

  toggleMenu() {
    if(!this.menuIsOpen) {
      this.tl2.timeScale(1).play();
      this.tl.timeScale(1).play();
      this.menuIsOpen = true;
      return;
    }
    this.menuIsOpen = false;
    this.tl.timeScale(2.5).reverse();
    this.tl2.timeScale(2).reverse();
  }

  ngOnInit(): void {
    // .sidebar-menu-mob
    this.tl.fromTo(".sidebar-mob-container",
      {
        xPercent: -101,
      },
      {
        xPercent: 0,
        ease:  "back.inOut(1)",
        duration: .8
      });
    this.tl.fromTo(".anim-item", {yPercent: 20, opacity: 0}, {yPercent: 0, stagger: 0.1 ,ease: "sine.inOut", opacity: 1, duration: .3});

    this.tl2.fromTo(".phantom-sidebar",
      {
        xPercent: -101,
        opacity: 0.5,
      },
      {
        xPercent: 0,
        opacity: .9,
        ease:  "expo.inOut",
        duration: 1
      });
  }
}
