import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  route = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeRoute(route: string): void {
    this.route = route;
  }

}
