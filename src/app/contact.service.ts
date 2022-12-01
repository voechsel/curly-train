import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  userInDb = [
    { name: 'Vincent', color: 'chatain', id: 3, 'email': 'vince@rn.fr'},
    { name: 'Francine', color: 'blond', id: 1, 'email': 'francine@rn.fr'},
    { name: 'Antony', color: 'brun', id: 2, 'email': 'antony@rn.fr'},
  ];

  constructor(
    private httpClient: HttpClient
  ) { }

  find(id:any): any {
    let tmpUser: any;
    this.userInDb.forEach((user, idx) => {
      if (user.id == id) {
        tmpUser = user;
        tmpUser.idx = idx;
      }
    });
    return tmpUser;
  }

  delete(index: number): void {
    this.userInDb.splice(index, 1);
  }

  update(id: number, data:any) {
    let tmpUser = this.find(id);
    this.userInDb[tmpUser.idx]= data;
    console.log(this.userInDb);
  }

  create(data:any) {
    data.id = this.userInDb.length;
    this.userInDb.push(data);
  }

  getHome() {
    this.httpClient.get('http://localhost:8000/home').subscribe(el => {
      console.log(el);
    })
  }
}
