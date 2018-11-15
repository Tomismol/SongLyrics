//Tom Smolarek 1801495

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SonglistPage } from './songlist';
import { SongsService } from '../../services/songs.services';

@NgModule({
  declarations: [
    SonglistPage,
  ],
  imports: [
    IonicPageModule.forChild(SonglistPage),
  ],
  providers: [ SongsService ],
})
export class SonglistPageModule {}
