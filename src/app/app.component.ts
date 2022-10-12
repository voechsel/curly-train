import {Component, OnInit} from '@angular/core';
import {userListItem} from 'src/assets/models/userListItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appTitle = 'Titre par défaut';

  // Liste de résultats API
  itemsFirst: userListItem[] = [
    {
      id: 1,
      idx: 1,
      name: 'Francine',
      matos: 'mac',
      hairColor: 'bleu'
    },
    {
      id: 2,
      idx: 2,
      name: 'Antony',
      hairColor: 'chatain'
    },
    {
      id: 3,
      idx: 3,
      name: 'Vincent',
      matos: 'pc',
      hairColor: null
    }
  ];

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

  ngOnInit() {
  }

  setTitle(title: string): void {
    this.appTitle = title;
  }

  userIsSelected_1(event: any): void {
    console.log('userIsSelected_1:', event);
    this.currentUser_1 = event;
  }

  reset_1(): void {
    this.currentUser_1 = undefined;
    this.currentUser_2 = undefined;
  }

  userIsSelected_2(event: any): void {
    console.log('userIsSelected_2:', event);
    this.currentUser_2 = event;
  }
}
