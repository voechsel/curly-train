import {Injectable} from '@angular/core';
import {userListItem} from 'src/assets/models/userListItem';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  itemsSecond: userListItem[] = [
    {
      id: 4,
      idx: 1,
      name: 'Audrey',
      hairColor: 'noir'
    },
    {
      id: 5,
      idx: 2,
      name: 'Damien'
    },
    {
      id: 7,
      idx: 3,
      name: 'Marc',
      matos: 'souris'
    },
    {
      id: 6,
      idx: 4,
      name: 'Corina',
      hairColor: 'blonde'
    }
  ];

  currentUser_1?: userListItem;
  currentUser_2?: userListItem;

  constructor(

  ) {
  }

  selectUser(event: any): any {
    return event;
  }

  delete(event: any): any {
    if (this.currentUser_2) {
      event = this.currentUser_2.idx;
      console.log(event);
      this.itemsSecond.splice(event, 1);
    }
  }
}
