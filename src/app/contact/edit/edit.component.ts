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
      this.user = this.contact.find(evt['id']);
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(this.user.name, Validators.required),
      color: new FormControl(this.user.color, Validators.required),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
    });
  }

  submit(): void {
    console.log(this.form.value);
  }
}
