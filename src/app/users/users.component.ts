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
    private users: UsersService
  ) {

  }

  ngOnInit(): void {
    this.itemsFirst = this.users.itemsFirst;
    this.itemsSecond = this.users.itemsSecond;
  }

  reset(): void {
    this.currentUser_1 = undefined;
    this.currentUser_2 = undefined;
  }

  userIsSelected(event: any, list: string): void {
    console.log('userIsSelected:', event, list);
    if(list === 'list_1') {
      this.currentUser_1 = event;
    } else {
      this.currentUser_2 = event;
    }
  }

  delete(evt: any): void {

  }
}
