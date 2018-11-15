//Tom Smolarek 1801495

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsService } from '../../services/songs.services';
import { Song } from '../../models/song.model';


@IonicPage()
@Component({
  selector: 'page-edit-song',
  templateUrl: 'edit-song.html',
})
export class EditSongPage {
  song: Song;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private songs: SongsService) {
  }

  ionViewWillLoad() {
    this.song = this.navParams.get('song');
  }
//method for saving the inputs
  saveSong(song: Song) {
    this.songs.editSong(song).then(() =>{
    this.navCtrl.setRoot('HomePage');
  });
  }
//method for deleting the inputs
  deleteSong(song: Song) {
    this.songs.removeSong(song).then(() =>{
      this.navCtrl.setRoot('HomePage');
    });
  }

}
