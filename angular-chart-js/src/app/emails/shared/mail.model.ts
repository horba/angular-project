import Contact from './../../common/contact.model';

export default class Mail {
   private from:Contact;
   private to:Contact;
   private subject:string;
   private cc:Array<Contact>;
   private content:string;
   private attachments:FileList;
   private date: Date;

   constructor (_from:Contact, _to:Contact, _content:string, _date:Date) {
      this.from      = _from;
      this.to        = _to;
      this.content   = _content;
      this.date      = _date;
   }

   // getters
   public get From()    { return this.from; }
   public get To()      { return this.to; }
   public get Subject() { return this.subject; }
   public get Cc()      { return this.cc; }
   public get Content() { return this.content; }
   public get Date()    { return this.date; }

   public get Attachments() { return this.attachments; }
}