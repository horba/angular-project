import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
   sideNavMode:string = 'push';

   ngOnInit() {
      this.defineSideNavigationMode();
   }

   private defineSideNavigationMode = () => {
      this.sideNavMode = window.innerWidth > 915 ? 'push' : 'over';
   }

   public onResize = () => {
      this.defineSideNavigationMode();
   }

}
