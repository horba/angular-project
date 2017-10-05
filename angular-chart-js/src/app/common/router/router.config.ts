import { Routes } from '@angular/router';
import { DashboardComponent } from './../../dashboard/dashboard.component';
import { EmailsComponent } from './../../emails/emails.component';

export const appRoutes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   { path: 'dashboard',    component: DashboardComponent },
   { path: 'emails',       component: EmailsComponent }
];
