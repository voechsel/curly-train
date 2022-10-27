import { Component, OnInit } from '@angular/core';
import {userListItem} from "../../assets/models/userListItem";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // Liste de résultats API

  currentUser_1?: userListItem;
  currentUser_2?: userListItem;
  itemsFirst: any;
  itemsSecond: any;

  constructor(
    private usersService: UsersService
  ) {

  }

  ngOnInit(): void {
    this.itemsFirst = this.usersService.itemsFirst;
    this.itemsSecond = this.usersService.itemsSecond;
  }

  reset(): void {
    this.currentUser_1 = undefined;
    this.currentUser_2 = undefined;
  }

  userIsSelected(event: any, list: string): void {
    console.log('userIsSelected:', event, list);
    if(list === 'list_1') {
      this.currentUser_1 = this.usersService.selectUser(event);
    } else {
      this.currentUser_2 = this.usersService.selectUser(event);
    }
  }

  delete(evt: any): void {
    this.currentUser_1 = this.usersService.delete(evt);
  }
}
