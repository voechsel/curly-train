import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {userListItem} from "../../assets/models/userListItem";
import { UsersService } from '../users.service';

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

  userIsSelected_1(event: any): void {
    this.currentUser_1 = this.users.userIsSelected_1(event);
  }

  reset(): any {
   this.currentUser_1 = undefined;
   this.currentUser_2 = undefined; 
  }

  delete(event: any): any {
    this.currentUser_1 = this.users.delete(event);
    this.currentUser_2 = this.users.delete(event);
  }

  userIsSelected_2(event: any): void {
    this.currentUser_2 = this.users.userIsSelected_2(event);
  }
}
