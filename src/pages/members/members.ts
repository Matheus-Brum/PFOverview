import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {MemberService} from '../../services/member.service';
import {Member } from '../../interfaces/member';


@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})

export class MembersPage implements OnInit{

  
  public single;
  view:any[];
	obsMembers: Observable<Member[]>
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

  constructor(public navCtrl: NavController, private memberService: MemberService) {}

  ngOnInit(){
  	this.getMembers();
  	this.getMembersTotal();
    this.single = this.getGroupTotal();
    

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

  getMembers(){
  	this.memberService.getMembers().subscribe(
  		res => this.obsMembers = res['members_data']
  		);
  }
  
  getMembersTotal(){
  	this.memberService.getMembers().subscribe(
  		res => this.obsTotal = res['members_total'] 
  		);
  }
  
  getGroupTotal(){
  	this.memberService.getMembers().subscribe(
  		res => this.single = res['occurences']
  		);
  }
  

}
