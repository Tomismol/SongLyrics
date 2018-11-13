import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSongPage } from './edit-song';
import { SongsService } from '../../services/songs.services';

@NgModule({
  declarations: [
    EditSongPage,
  ],
  imports: [
    IonicPageModule.forChild(EditSongPage),
  ],
  providers: [ SongsService ],
})
export class EditSongPageModule {}
