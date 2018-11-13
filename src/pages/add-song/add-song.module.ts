import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSongPage } from './add-song';
import { SongsService } from '../../services/songs.services';

@NgModule({
  declarations: [
    AddSongPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSongPage),
  ],
  providers: [ SongsService ],
})
export class AddSongPageModule {}
