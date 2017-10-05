import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: 'mainmenu.component.html',
  styleUrls: ['mainmenu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor() { }
  private _open:boolean = false;
  
   @Input()
   set open(open: boolean) {
      this._open = open;
   };  
   get open(): boolean { return this._open; }

   @Output() onClose = new EventEmitter<void>();

   close() {
      this.onClose.emit();
      this.open = false;
   }

  ngOnInit() {
  }

}
