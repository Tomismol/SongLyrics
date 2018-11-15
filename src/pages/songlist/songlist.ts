//Tom Smolarek 1801495

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsService } from '../../services/songs.services';
import { Observable } from 'rxjs/Observable';
import { Song } from '../../models/song.model';
import { Band } from '../../models/band.model';
import 'rxjs/add/operator/map';



@IonicPage()
@Component({
  selector: 'page-songlist',
  templateUrl: 'songlist.html',
})
export class SonglistPage {

  songsList$: Observable<Song[]>;
  bandsList$: Observable<Band[]>;
  band: Band = {
    name: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public songsServices: SongsService) {
    this.songsList$ = this.songsServices.getSongsList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SonglistPage');
  }
  
}
