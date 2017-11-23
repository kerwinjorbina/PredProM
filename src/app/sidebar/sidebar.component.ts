import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    //{ path: 'dashboard', title: 'Dashboard',  icon: '', class: '' },

    { path: 'encode/boolean', title: 'Boolean',  icon:'', class: '' },
    { path: 'encode/frequency', title: 'Frequency',  icon:'', class: '' },
    { path: 'encode/simple', title: 'Simple Index',  icon:'', class: '' },
    { path: 'encode/payload', title: 'Latest Payload',  icon:'', class: '' },
    { path: 'encode/complex', title: 'Complex',  icon:'', class: '' },
    //{ path: 'intercase', title: 'Intercase',  icon:'', class: '' },
    { path: 'about', title: 'About The Project',  icon:'', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
