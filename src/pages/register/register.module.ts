//Tom Smolarek 1801495

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { SongsService } from '../../services/songs.services';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
  providers: [ SongsService ],
})
export class RegisterPageModule {}
