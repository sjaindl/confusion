import { Component, OnInit } from '@angular/core';
import { MaterialModule, MdDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openSignInForm() {
    this.dialog.open(LoginComponent, {width: "300px", height: "400px"});
  }

}
