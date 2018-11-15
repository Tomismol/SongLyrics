//Tom Smolarek 1801495

import { Component, Inject, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { rootRenderNodes } from '@angular/core/src/view';

//changes are made to make lazy loading possible
@Component({
  template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
})

export class MyApp {
  @ViewChild('myNav') nav: NavController
  public rootPage: string = 'LoginPage';

  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private angularFireAuth: AngularFireAuth) {
    platform.ready().then(() => {
      statusBar.styleDefault();

      //code for authentication and menu structure
      splashScreen.hide();
      angularFireAuth.auth.onAuthStateChanged(function (user) {
        if (user) {
          this.rootPage = 'MenuPage';
        }
        else {
          this.rootPage = 'LoginPage';
        }
      });
    });
  }
  ngOnInit() {
    this.nav.push(this.rootPage);
  }
}