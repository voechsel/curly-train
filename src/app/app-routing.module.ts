import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {UsersComponent} from './users/users.component';
import {ContactListComponent} from './contact/list/list.component';
import {ContactDetailComponent} from './contact/detail/detail.component';
import {NotfoundComponent} from "./notfound/notfound.component";
import {ContactEditComponent} from "./contact/edit/edit.component";
import {UserAddEditFormComponent} from "./user-add-edit-form/user-add-edit-form.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
        path: 'list',
        component: ContactListComponent
      },
      {
        path: 'detail/:id',
        component: ContactDetailComponent
      },
      {
        path: 'edit/:id',
        component: ContactEditComponent
      }
    ]
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/add',
    component: UserAddEditFormComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
