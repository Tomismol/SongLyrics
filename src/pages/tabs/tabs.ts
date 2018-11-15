//Tom Smolarek 1801495

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  tab1Root: any = 'HomePage';
  tab2Root: any = 'AboutPage';
  tab3Root: any = 'SonglistPage';
  myIndex: number;
 
  constructor(navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }
}