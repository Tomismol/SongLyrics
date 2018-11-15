//Tom Smolarek 1801495

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = 'TabsPage';
 
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'HomePage', pageName: 'HomePage', tabComponent: 'HomePage', index: 0, icon: 'home' },
    { title: 'AboutPage', pageName: 'AboutPage', tabComponent: 'AboutPage', index: 1, icon: 'contacts' },
    { title: 'SonglistPage', pageName: 'SonglistPage', tabComponent: 'SonglistPage', index: 2, icon: 'musical-notes' },
  ];
 
  constructor(public navCtrl: NavController) { }
 
  //methods to open the slide menu
  openPage(page: PageInterface) {
    let params = {};
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
}