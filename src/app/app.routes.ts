import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [

{path:'' , component:LandingComponent},
{ path: 'project/:website', component: DetailsComponent }
];
