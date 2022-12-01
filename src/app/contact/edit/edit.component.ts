import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../../contact.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ContactEditComponent implements OnInit {

  user: any;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private contact: ContactService,
    private formBuilder: FormBuilder
  ) {
    this.route.params.subscribe(evt => {
      if (evt['id'] == 0) {
        this.user = { name: '', color: '', id: 0, email: ''};
      } else {
        this.user = this.contact.find(evt['id']);
      }
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: new FormControl(this.user.id, Validators.required),
      name: new FormControl(this.user.name, Validators.required),
      color: new FormControl(this.user.color, Validators.required),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
    });
  }

  submit(): void {
    console.log(this.user)
    this.user = this.form.value;
    if (this.user.id == 0) {
      this.contact.create(this.form.value);
    } else {
      this.contact.update(this.user.id, this.form.value);
    }
  }
}
