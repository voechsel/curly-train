import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  userInDb = [
    { name: 'Vincent', color: 'chatain', id: 3, 'email': 'vince@rn.fr'},
    { name: 'Francine', color: 'blond', id: 1, 'email': 'francine@rn.fr'},
    { name: 'Antony', color: 'brun', id: 2, 'email': 'antony@rn.fr'},
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

  delete(index: number): void {
    this.userInDb.splice(index, 1);
  }

}
