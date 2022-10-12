import {Component, Input, OnInit} from '@angular/core';
import {userListItem} from 'src/assets/models/userListItem';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() userListItem?: userListItem;
  @Input() bgClass? = 'bg-danger';

  constructor() { }

  ngOnInit(): void {
  }
}
