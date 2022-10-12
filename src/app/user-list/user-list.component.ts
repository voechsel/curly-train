import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {userListItem} from 'src/assets/models/userListItem';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() userListItems: userListItem[] = [];
  @Input() showResults? = false;
  @Input() bgClass? = 'bg-primary';

  @Output() selectUser: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  userOnClick(param: userListItem): void {
    this.selectUser.emit(param);
  }
}
