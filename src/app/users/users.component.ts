import { Component, OnInit } from '@angular/core';
import {userListItem} from "../../assets/models/userListItem";
import {UsersService} from "../users.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

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
    private usersService: UsersService,
    private httpClient: HttpClient,
    private router: Router
  ) {

  }

  async ngOnInit() {
    this.itemsFirst = await this.httpClient.get('http://localhost:8000/home/').toPromise();
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
    if (this.currentUser_1) {
      this.httpClient.get('http://localhost:8000/home/delete/'+this.currentUser_1?.id).subscribe(async response => {
          console.log('User has been cloned !');
          this.itemsFirst = await this.httpClient.get('http://localhost:8000/home/').toPromise();
          console.log(this.itemsFirst);
        }
      );
      this.currentUser_1 = undefined;
    } else {
      console.log('User is not selected !');
    }
  }

  clone(evt: any): void {
    if (this.currentUser_1) {
      this.httpClient.get('http://localhost:8000/home/clone/'+this.currentUser_1?.id).subscribe(async response => {
          console.log('User has been cloned !');
          this.itemsFirst = await this.httpClient.get('http://localhost:8000/home/').toPromise();
          console.log(this.itemsFirst);
        }
      );
      this.currentUser_1 = undefined;
    } else {
      console.log('User is not selected !');
    }
  }

}
