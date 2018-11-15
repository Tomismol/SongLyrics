//Tom Smolarek 1801495

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public angularFireAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //method to link the new user to the RegisterPage
  register(email, password) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.navCtrl.setRoot('RegisterPage', { email });
    });
  }

  //method to link the user to the MenuPage
  login(email, password) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email,password).then((res) =>{
      this.navCtrl.setRoot('MenuPage', {email});
    });
  }
}