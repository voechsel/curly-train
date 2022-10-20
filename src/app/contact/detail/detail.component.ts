import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  user: any;

  constructor(
    private route: ActivatedRoute,
    private contact: ContactService
  ) {
    this.route.params.subscribe(evt => {
      this.user = this.contact.find(evt['id']);
    });
  }

  ngOnInit(): void {
  }

}
