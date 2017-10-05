import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MailService } from './shared/mail.service';

import { DatePipe } from '@angular/common';

import VerifiedMail from './shared/verified-mail.model';

let verified_mails:VerifiedMail[];

@Component({
  selector: 'emails',
  templateUrl: 'emails.component.html',
  styleUrls: ['emails.component.css'],
  providers: [MailService]
})
export class EmailsComponent implements OnInit {

   constructor(private MailService: MailService) { }
   mails:ExampleDataSource;

   ngOnInit() {
      this.MailService.getVerifiedMails().then(_mails => {
         verified_mails = _mails;
         console.log(verified_mails);
         this.mails = new ExampleDataSource();
      });
   }
}

export class ExampleDataSource extends DataSource<any> {
   /** Connect function called by the table to retrieve one stream containing the data to render. */
   connect(): Observable<VerifiedMail[]> {
     return Observable.of(verified_mails);
   }
 
   disconnect() {}
 }
