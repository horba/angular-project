export default class Contact {
   readonly id:number;

   private firstName:string;
   private lastName:string;
   private email:string;

   constructor(contact:{lastName:string;firstName:string;email:string;id:number});
   constructor(_id:number, _firstName:string, _lastName:string, _email:string);
   constructor(x, ...rest) {
      if(typeof x === 'object') {
         this.id        = x.id;
         this.firstName = x.firstName;
         this.lastName  = x.lastName;
         this.email     = x.email;
      } else {
         this.id = x;
         this.firstName = rest[0];
         this.lastName  = rest[1];
         this.email     = rest[2];
      }
   }
   // getters
   public get FirstName()  { return this.firstName; }
   public get LastName()   { return this.lastName; }
   public get UserEmail()  { return this.email; }
}