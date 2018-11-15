//Tom Smolarek 1801495

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
    declarations: [
        LoginPage
    ],
    imports: [
        IonicPageModule.forChild(LoginPage),
       
    ],
})
export class LoginPageModule { }