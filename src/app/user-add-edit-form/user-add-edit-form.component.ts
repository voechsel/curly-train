import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-add-edit-form',
  templateUrl: './user-add-edit-form.component.html',
  styleUrls: ['./user-add-edit-form.component.css']
})
export class UserAddEditFormComponent implements OnInit {

  user: any;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
  ) {
    this.user = {name: '', matos: '', haircolor: ''};
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(this.user.name, Validators.required),
      matos: new FormControl(this.user.matos, Validators.required),
      haircolor: new FormControl(this.user.haircolor, Validators.required)
    });
    console.log(this.route);
  }

  submit(): void {
    let value = this.form.value;
    console.log(value);
    this.httpClient.post('http://localhost:8000/home/add/', value).subscribe(response => {
        console.log('User has been created !');
        this.router.navigate(['/users']);
      }
    );
  }
}
