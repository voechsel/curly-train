import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-clone-delete-modal',
  templateUrl: './clone-delete-modal.component.html',
  styleUrls: ['./clone-delete-modal.component.css']
})
export class CloneDeleteModalComponent implements OnInit {

  userId: any;
  msg?: string;
  isCloned = false;

  constructor(
    private bsModalRef: BsModalRef,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  confirm(): void {
    let url;
    if (this.isCloned) {
      url = 'http://localhost:8000/home/clone/';
    } else {
      url = 'http://localhost:8000/home/delete/';
    }
    this.httpClient.get( url  + this.userId).subscribe(async () => {
        this.confirmFn();
      }
    );
  }

  decline(): void {
    this.bsModalRef.hide();
  }

  confirmFn = () => {};
}
