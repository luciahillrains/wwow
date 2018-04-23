import { Component, OnInit } from '@angular/core';
import {AccountInProgress} from '../objects/account-in-progress';

@Component({
  selector: 'app-new-account-screen',
  templateUrl: './new-account-screen.component.html',
  styleUrls: ['./new-account-screen.component.scss']
})
export class NewAccountScreenComponent implements OnInit {

  account:AccountInProgress = new AccountInProgress();
  constructor() { }

  ngOnInit() {
  }

  submit() {
  	console.log("new account form will be submitted");
  	let acctString = JSON.stringify(this.account);
  	console.log("account", acctString);
  }

}
