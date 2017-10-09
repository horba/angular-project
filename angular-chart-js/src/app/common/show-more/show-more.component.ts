import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';

enum Mode {
   CropedText,
   FullText
}

@Component({
   selector: 'show-more',
   templateUrl: 'show-more.component.html' ,
   styleUrls: ['show-more.component.css']
})
export class ShowMoreComponent {
   private mode:Mode;
   public Mode = Mode;

   ngOnInit() {
      this.mode = Mode.CropedText;
   }

   @Input('show-limit') private visibleCharsLimit:number;
   @Input('text') private sourceText:string;

   onClick() {
      this.mode = this.mode === Mode.CropedText ? Mode.FullText : Mode.CropedText;
   }

   
}