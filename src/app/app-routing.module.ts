import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
//import { EOBDetailComponent } from './eobdetail';
//import { LoginComponent } from './login';
//import { AuthGuard } from './_guards';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent},
    //{ path: 'eobdetail/:claimId', component: EOBDetailComponent },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
