import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  userInDb = [
    { name: 'Vincent', color: 'chatain', id: 3},
    { name: 'Francine', color: 'blond', id: 1},
    { name: 'Antony', color: 'brun', id: 2}
  ];

  user: any;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(evt => {
      this.userInDb.forEach(user => {
        if (user.id == evt['id']) {
          this.user = user;
        }
      });
    });
  }

  ngOnInit(): void {
  }

}
