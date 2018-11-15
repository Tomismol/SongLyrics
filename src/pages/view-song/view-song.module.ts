//Tom Smolarek 1801495

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewSongPage } from './view-song';
import { SongsService } from '../../services/songs.services';

@NgModule({
  declarations: [
    ViewSongPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewSongPage),
  ],
  providers: [ SongsService ],
})
export class ViewSongPageModule {}
