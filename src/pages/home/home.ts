import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsService } from '../../services/songs.services';
import { Observable } from 'rxjs/Observable';
import { Song } from '../../models/song.model';
import { Band } from '../../models/band.model';
import 'rxjs/add/operator/map'

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

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

  ionViewWillLoad() {
    this.bandsList$ = this.songsServices.getBandList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  onContextChange(ctxt: string): void {
    this.songsList$ = this.songsServices.assembleBandFilteredList(ctxt).snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  showAllSongs() {
    this.songsList$ = this.songsServices.getSongsList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

}
