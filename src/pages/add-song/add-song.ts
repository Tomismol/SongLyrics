//Tom Smolarek 1801495

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song.model';
import { SongsService } from '../../services/songs.services';

@IonicPage()
@Component({
  selector: 'page-add-song',
  templateUrl: 'add-song.html',
})
export class AddSongPage {

  song: Song = {
    title: '',
    chords: '',
    lyrics: '',
    band: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private songs: SongsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSongPage');
  }

  //method for saving the inputs
  addSong(song: Song) {
    this.songs.addSong(song).then(ref => {
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }

}
