import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdSidenavModule, MdButtonModule, MdIconModule, MdCardModule, MdTableModule } from '@angular/material';

import { ChartsModule } from 'ng2-charts';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { appRoutes } from './common/router/router.config';
import { MainMenuComponent } from './mainmenu/mainmenu.component';
import { EmailsComponent } from './emails/emails.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainMenuComponent,
    EmailsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdTableModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
