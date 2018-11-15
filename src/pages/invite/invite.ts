//Tom Smolarek 1801495

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';


@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
  }

  //method to create automatically a email on your phone with a specific subject and body
  sendEmail() {
    let email = {
      to: '',
      cc: '',
      attachments: [

      ],
      subject: 'Join the band and see instant Lyrics updates',
      body: 'Check out the app on the appstore or googleplay',
      isHtml: true
    };
    this.emailComposer.open(email);
  }

}
