import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {APP_BASE_HREF} from "@angular/common";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
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
import {AlertService} from "./services/alerts/alert.service";

// App routes. Accessible via HashLocationStrategy
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'today', component: TodayComponent, canActivate: [AuthenticateService]}
];

@NgModule({
    declarations: [
        // Declare all components here
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
        // Declare all modules here, as well as packages used by the app.
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        DragDropModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        })
    ],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
    },
        // Use HashLocationStrategy in order to allow the user to enter and endpoint at the browser address.
        // Enter after /#/
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        ApiService, AuthenticationService, AuthenticateService, TodayService, AlertService],
    // Which components gets booted first?
    bootstrap: [AppComponent]
})
export class AppModule {
}
