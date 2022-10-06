import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appTitle = 'Titre par défaut';

  // Liste de résultats API
  itemsFirst: { id: number; name: string; matos?: string }[] = [
    {
      id: 1,
      name: 'Francine',
      matos: 'mac'
    },
    {
      id: 2,
      name: 'Antony'
    },
    {
      id: 3,
      name: 'Vincent',
      matos: 'pc'
    }
  ];

  itemsSecond: { id: number; name: string }[] = [
    {
      id: 4,
      name: 'Audrey'
    },
    {
      id: 5,
      name: 'Damien'
    },
    {
      id: 6,
      name: 'Corina'
    }
  ];

  ngOnInit() {
  }

  setTitle(title: string): void {
    this.appTitle = title;
  }
}
