import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user';


@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})

export class UsersPage implements OnInit{

  
  public single;
  view:any[];
	obsUsers: Observable<User[]>
  showXAxis;
  showYAxis;
  gradient;
  showLegend;
  showXAxisLabel;
  xAxisLabel;
  showYAxisLabel;
  yAxisLabel;
  timeline;
  colorScheme;
  autoScale;
  showLabels;
  explodeSlices;
  doughnut;

	obsTotal:number;
	obsGroup:number;

  constructor(public navCtrl: NavController, private userService: UserService) {}

  ngOnInit(){
  	this.getUsers();
  	this.getUsersTotal();
    this.single = this.getGroupTotal()
  

    this.view = [900, 500];

    // options for the chart
    this.showXAxis = true;
    this.showYAxis = true;
    this.gradient = false;
    this.showLegend = true;
    this.showXAxisLabel = true;
    this.xAxisLabel = 'Number';
    this.showYAxisLabel = true;
    this.yAxisLabel = 'Value';
    this.timeline = true;

    this.colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#F12AAA']
    };

    // line, area
    this.autoScale = true;

    //pie
    this.showLabels = true;
    this.explodeSlices = false;
    this.doughnut = false;
  }

  getUsers(){
  	this.userService.getUsers().subscribe(
  		res => this.obsUsers = res['users_data']
  		);
  }
  
  getUsersTotal(){
  	this.userService.getUsers().subscribe(
  		res => this.obsTotal = res['users_total'] 
  		);
  }
  
  getGroupTotal(){
  	this.userService.getUsers().subscribe(
  		res => this.single = res['occurences']
  		);
  }
  

}
