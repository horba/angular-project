import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import VerifiedMail from './verified-mail.model';
import Mail from './mail.model';
import Contact from './../../common/contact.model';

@Injectable()
   export class MailService {
      readonly SERVER_URL = 'http://localhost:3000';
      readonly VERIFIED_MAILS_PATH = 'verified_messages';

      constructor(private http: Http) { }
      public getVerifiedMails() : Promise<VerifiedMail[]> {
         return this.http.get(`${this.SERVER_URL}/${this.VERIFIED_MAILS_PATH}`)
            .toPromise()
            .then(response => {
               return response.json().map(mail => new VerifiedMail(mail.id, new Mail(new Contact(mail.from), new Contact(mail.to), mail.content, new Date()), true));
            });
      }
}