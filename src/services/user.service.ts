import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '.././interfaces/user';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';



@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }
	
    
    targetUrl = "http://127.0.0.1:5000/api/users";
    
    getUsers(){
        //console.log(this.http.get<Member[]>(this.targetUrl));
        return this.http.get(this.targetUrl);
    }
	
} 