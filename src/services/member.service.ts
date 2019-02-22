import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Member } from '.././interfaces/member';



@Injectable()
export class MemberService {
	
    constructor(private http: HttpClient) { }
	
    
    targetUrl = "http://127.0.0.1:5000/api/members";
    getMembers(){
        //console.log(this.http.get<Member[]>(this.targetUrl));
        return this.http.get(this.targetUrl);
    }
    /*
    getMembersTotal():number{
        return this.http.get(this.targetUrl)
    }
    */

	/*
    myUrl = "/api/invalid";
    getDataForUrl(): Observable<any> {
	return this.http.get(this.myUrl);
    }
    */	
} 