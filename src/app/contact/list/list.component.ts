import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ContactListComponent implements OnInit {

  items = [
    { name: 'Vincent', color: 'chatain', id: 3},
    { name: 'Francine', color: 'Vert', id: 1},
    { name: 'Antony', color: 'brun', id: 2}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
