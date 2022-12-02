import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {BsModalRef} from "ngx-bootstrap/modal";
import {User} from "../../../assets/models/user";

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  user: any;
  form!: FormGroup;

  constructor(
    private bsModalRef: BsModalRef,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
  ) {
  }

  ngOnInit(): void {
    if (!this.user) {
      this.user = new User({});
    } else {
      this.user = new User(this.user);
    }
      this.form = this.formBuilder.group({
        name: new FormControl(this.user.name, Validators.required),
        id: new FormControl(this.user.id, Validators.required),
        matos: new FormControl(this.user.matos, Validators.required),
        haircolor: new FormControl(this.user.haircolor, Validators.required)
      });
  }

  sniff(): void {
    let url: string;
    let value = this.form.value;
    if (!value.id) {
      url = 'add';
    } else {
      url = 'edit/'+value.id;
    }
    this.submit(url, value);
    console.log(value);
  }

  submit(url: string, value: any): void {
    this.httpClient.post('http://localhost:8000/home/'+url, value).subscribe(response => {
        console.log('Operation succeeded !');
        this.confirmFn();
      }
    );
  }

  close(): void {
    this.bsModalRef.hide();
  }

  confirmFn = () => {};
}
