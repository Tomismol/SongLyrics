//Tom Smolarek 1801495

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Band } from '../../models/band.model';
import { SongsService } from '../../services/songs.services';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  band: Band = {
    name: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private regBand: SongsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  //method to save the new band
  addBand(band: Band){
    this.regBand.addBand(band).then(ref => {
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }

}
