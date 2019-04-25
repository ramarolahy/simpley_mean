import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {APP_BASE_HREF} from "@angular/common";
// Components
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {TodayComponent} from './components/today/today.component';
import {MenuComponent} from './components/menu/menu.component';
import {TaskListComponent} from './components/task-list/task-list.component';
import {AddTaskComponent} from './components/add-task/add-task.component';
// Services
import {ApiService} from "./services/api/api.service";
import {AuthenticationService} from "./services/auth/authentication.service";
import {AuthenticateService} from "./services/auth/authenticate.service";
import {TodayService} from "./services/today/today.service";
import {DragDropModule} from "@angular/cdk/drag-drop";


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
    RouterModule.forRoot(routes),
    DragDropModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, ApiService , AuthenticationService, AuthenticateService, TodayService],
  // Which components gets booted first?
  bootstrap: [AppComponent]
})
export class AppModule {
}
