import Contact from './../../common/contact.model';
import Mail from './mail.model';

export default class VerifiedMail {
   // constructor(_fromFirstName:string, _fromLastName:string, _fromMail:string,
   //    _toFirstName:string, _toLastName:string, _toMail:string,
   //    _message:string, _date:Date, _isSecure:boolean, _errors?:Array<string>);   
   constructor(readonly id:number, _source:Mail, _isSecure:boolean, _errors?:Array<string>) {
      this.initByMail(_source, _isSecure, _errors);
   };
   // constructor(sourceOrFromFirstName:Mail|string, isSecureOrFromLastName:boolean|string, errorsOrFromMail?:Array<string>|string,
   //       _toFirstName?:string, _toLastName?:string, _toMail?:string,
   //       _message?:string, _date?:Date, _isSecure?:boolean, _errors?:Array<string>
   //       ) {
   //    if (typeof sourceOrFromFirstName === 'string') {
   //       this.initByMailInfo(sourceOrFromFirstName, isSecureOrFromLastName as string, errorsOrFromMail as string,
   //          _toFirstName, _toLastName, _toMail, _message, _date, _isSecure, _errors);
   //    } else if (typeof sourceOrFromFirstName === 'object') {
   //       this.initByMail(sourceOrFromFirstName, isSecureOrFromLastName as boolean, errorsOrFromMail as Array<string>);
   //    }
   // };

   private source:Mail;
   private isSecure:boolean;
   private errors:Array<string>;

   private initByMail(_source:Mail, _isSecure:boolean, _errors:Array<string>=[]) : void {
      this.source    = _source;
      this.isSecure  = _isSecure;
      this.errors    = _errors;
   }

   // private initByMailInfo(_fromFirstName:string, _fromLastName:string, _fromMail:string,
   //    _toFirstName:string, _toLastName:string, _toMail:string,
   //    _message:string, _date:Date, _isSecure:boolean, _errors:Array<string>=[]) : void {
      
   //    const from:Contact = new Contact(_fromFirstName, _fromLastName, _fromMail);
   //    const to:Contact = new Contact(_toFirstName, _toLastName, _toMail);
   //    const mail:Mail = new Mail(from, to, _message, _date);

   //    this.initByMail(mail, _isSecure, _errors);
   // }

   // getters
   public get Source()     { return this.source; }
   public get IsSecure()   { return this.isSecure; }
   public get Errors()     { return this.errors; }
}