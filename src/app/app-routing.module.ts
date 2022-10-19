import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {UsersComponent} from './users/users.component';
import {ContactListComponent} from './contact/list/list.component';
import {ContactDetailComponent} from './contact/detail/detail.component';
import {NotfoundComponent} from "./notfound/notfound.component";

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
      }
    ]
  },
  {
    path: 'users',
    component: UsersComponent
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
