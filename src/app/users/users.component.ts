import {Component, OnInit} from '@angular/core';
import {userListItem} from "../../assets/models/userListItem";
import {UsersService} from "../users.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {EditModalComponent} from "./edit-modal/edit-modal.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // Liste de résultats API

  currentUser_1?: userListItem;
  currentUser_2?: userListItem;
  itemsFirst: any;
  itemsSecond: any;
  bsModalRef?: BsModalRef;

  constructor(
    private usersService: UsersService,
    private httpClient: HttpClient,
    private modalService: BsModalService
  ) {

  }

  async ngOnInit() {
    this.itemsFirst = await this.httpClient.get('http://localhost:8000/home/').toPromise();
    this.itemsSecond = this.usersService.itemsSecond;
  }

  reset(): void {
    this.currentUser_1 = undefined;
    this.currentUser_2 = undefined;
  }

  userIsSelected(event: any, list: string): void {
    console.log('userIsSelected:', event, list);
    if (list === 'list_1') {
      this.currentUser_1 = this.usersService.selectUser(event);
    } else {
      this.currentUser_2 = this.usersService.selectUser(event);
    }
  }

  delete(): void {
    if (this.currentUser_1) {
      this.httpClient.get('http://localhost:8000/home/delete/' + this.currentUser_1?.id).subscribe(async response => {
          console.log('User has been cloned !');
          this.itemsFirst = await this.httpClient.get('http://localhost:8000/home/').toPromise();
          console.log(this.itemsFirst);
        }
      );
      this.currentUser_1 = undefined;
    }
  }

  clone(): void {
    if (this.currentUser_1) {
      this.httpClient.get('http://localhost:8000/home/clone/' + this.currentUser_1?.id).subscribe(async response => {
          console.log('User has been cloned !');
          this.itemsFirst = await this.httpClient.get('http://localhost:8000/home/').toPromise();
          console.log(this.itemsFirst);
        }
      );
      this.currentUser_1 = undefined;
    }
  }

  openModal() {
    this.bsModalRef = this.modalService.show(EditModalComponent, {
      initialState: {
        user: this.currentUser_1
      }
    });
    this.bsModalRef.content.confirmFn = async () => {
      this.bsModalRef?.hide();
      this.itemsFirst = await this.httpClient.get('http://localhost:8000/home/').toPromise();
    }
  }
}
