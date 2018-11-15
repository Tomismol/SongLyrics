//Tom Smolarek 1801495

import{ Injectable, ReflectiveInjector } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Song } from './../models/song.model';
import { Band } from './../models/band.model';


@Injectable()
export class SongsService {

    private songListRef = this.db.list<Song>('song-list');
    private bandListRef = this.db.list<Band>('band-list');

    constructor(private db: AngularFireDatabase) {}

    //collection of methods which are used in other pages
    getSongsList() {
        return this.songListRef;
    }

    filterByString(band: string) {
        return this.db.list('/song-list', ref => ref.orderByChild('band').equalTo(band));
    }

    assembleBandFilteredList(ctxt): any {
        return(this.filterByString(ctxt));
    }

    addSong(song: Song) {
        return this.songListRef.push(song);
    }

    addBand(band: Band) {
        return this.bandListRef.push(band);
    }

    getBandList() {
        return this.bandListRef;
    }

    editSong(song: Song) {
        return this.songListRef.update(song.key, song);
    }
    
    removeSong(song: Song) {
        return this.songListRef.remove(song.key);
    }
}