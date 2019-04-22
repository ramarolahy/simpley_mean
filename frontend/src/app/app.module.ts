import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";
// Components
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {TodayComponent} from './today/today.component';
import {MenuComponent} from './menu/menu.component';
import {TaskListComponent} from './task-list/task-list.component';
import {AddTaskComponent} from './add-task/add-task.component';
// Services
import {AuthenticationService} from "./services/authentication.service";
import {AuthenticateService} from "./services/authenticate.service";
import {ListService} from "./services/list.service";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'today', component: TodayComponent, canActivate: [AuthenticateService]}
];

@NgModule({
  declarations: [
    // Components
    AppComponent,
    SignupComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    TodayComponent,
    TaskListComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService, AuthenticateService, ListService],
  // Which components gets booted first?
  bootstrap: [AppComponent]
})
export class AppModule {
}
