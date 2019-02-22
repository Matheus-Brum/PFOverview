import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MembersPage } from '../pages/members/members';
import { UsersPage } from '../pages/users/users';
import {MemberService} from '../services/member.service';
import {UserService} from '../services/user.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MembersPage,
    UsersPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MembersPage,
    UsersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MemberService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
