import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ContactListComponent implements OnInit {

  items: any;
  
  constructor(private contact: ContactService) {
    this.items = this.contact.userInDb;
   }

  ngOnInit(): void {
  }

}
