import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {FormBuilder} from '@angular/forms';
import {MemberService} from '../../services/member.service';
import {UserService} from '../../services/user.service';
import {Member } from '../../interfaces/member';
import {User} from '../../interfaces/user';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage implements OnInit{

	obsTotalUsers$;
	obsTotalMembers$

	constructor(public navCtrl: NavController, private userService:UserService, private memberService:MemberService){}

	ngOnInit(){

		this.obsTotalUsers$ = this.getUsersTotal();
		this.obsTotalMembers$ = this.getMembersTotal();
	}
	
  	getUsersTotal(){
  	this.userService.getUsers().subscribe(
  		res => this.obsTotalUsers$ = res['users_total'] 
  		);
  }
  	
  	getMembersTotal(){
  	this.memberService.getMembers().subscribe(
  		res => this.obsTotalMembers$ = res['members_total'] 
  		);
  }
	
}