import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Params} from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../_services';
import { HttpParams } from '@angular/common/http';
import { of, throwError } from 'rxjs';


export interface AuthToken {
    access_token: string,
    token_type: string,
    expires_in: number,
    refresh_token: string,
    scope: Array<string>
}

@Component({templateUrl: 'login.component.html'})
  
  
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    code: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            authToken: ['', Validators.required]
        });

    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        
        var username = 'BBUser00000';
        if(localStorage.getItem('currentUser') != null){
            localStorage.removeItem('currentUser');
        }
        localStorage.setItem('currentUser', JSON.stringify({ username, token: this.loginForm.get('authToken').value }));
        this.router.navigate(['/home']);
    }

    saveToken(data : any, username : any){
        localStorage.setItem('currentUser', JSON.stringify({ username, token: data.access_token}));
        this.router.navigate(['/home']);
    }

    onClickMe() {
        return throwError("on click error");
    }

}
