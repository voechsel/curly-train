import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  userInDb = [
    { name: 'Vincent', color: 'chatain', id: 3},
    { name: 'Francine', color: 'blond', id: 1},
    { name: 'Antony', color: 'brun', id: 2}
  ];

  constructor() { }

  find(id:any): any {
    let tmpUser;
    this.userInDb.forEach(user => {
      if (user.id == id) {
        tmpUser = user;
      }
    });
    return tmpUser;
  }
}
