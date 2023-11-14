import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: ""},
  {path: "", component:LandingComponent},
  {path: "sign", component:SignupComponent},
  {path: "login", component:LoginComponent},
  {path: "user", component:UserComponent},
  {path: "admin", component:AdminComponent},
  {path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
