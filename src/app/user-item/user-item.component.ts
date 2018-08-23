import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
//implements OnInit
export class UserItemComponent {

  name: string;
  deactivated: boolean;
  tweets: any[];
  hideTweet: boolean;

  constructor() {
    this.name = 'NSO';
    this.deactivated = true;
    this.tweets = [
      {date: new Date('01/01/2018'), text: 'toto'},
      {date: new Date('02/02/2018'), text: 'titi'},
      {date: new Date('03/03/2018'), text: 'tutu'}
    ];
    this.hideTweet = true;
  }

  onClick(ev) {
    this.hideTweet = false;
  }

  // onChange(ev) {
  //   this.deactivated = ;
  // }
  // ngOnInit() {
  // }

}
