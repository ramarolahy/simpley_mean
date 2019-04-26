(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_today_today_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/today/today.component */ "./src/app/components/today/today.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/task-list/task-list.component */ "./src/app/components/task-list/task-list.component.ts");
/* harmony import */ var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/add-task/add-task.component */ "./src/app/components/add-task/add-task.component.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
/* harmony import */ var _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/auth/authenticate.service */ "./src/app/services/auth/authenticate.service.ts");
/* harmony import */ var _services_today_today_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/today/today.service */ "./src/app/services/today/today.service.ts");
/* harmony import */ var _services_alerts_alert_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/alerts/alert.service */ "./src/app/services/alerts/alert.service.ts");











// Components








// Services





var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"] },
    { path: 'today', component: _components_today_today_component__WEBPACK_IMPORTED_MODULE_14__["TodayComponent"], canActivate: [_services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_20__["AuthenticateService"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                // Components
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_today_today_component__WEBPACK_IMPORTED_MODULE_14__["TodayComponent"],
                _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_16__["TaskListComponent"],
                _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_17__["AddTaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                })
            ],
            providers: [{
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"],
                    useValue: '/'
                },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"] },
                _services_api_api_service__WEBPACK_IMPORTED_MODULE_18__["ApiService"], _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_19__["AuthenticationService"], _services_auth_authenticate_service__WEBPACK_IMPORTED_MODULE_20__["AuthenticateService"], _services_today_today_service__WEBPACK_IMPORTED_MODULE_21__["TodayService"], _services_alerts_alert_service__WEBPACK_IMPORTED_MODULE_22__["AlertService"]],
            // Which components gets booted first?
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-task/add-task.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"empty_entry_item_wrap\">\n    <form (ngSubmit)=\"onSubmit()\" name=\"newTodoForm\">\n        <!--    <div class={\"empty_entry_label\"} ref={ el => this._emptyEntryLabel = el}>-->\n        <!--      <i class={\"fas fa-plus addTodo_placeholder\"} ref={ el => this._iconAddTodoPlaceholder = el}/>-->\n        <!--      <span class={\"addTodo_placeholder\"} ref={ el => this._spanAddTodoPlaceholder = el}>-->\n        <!--                            What else do you need todo? ...-->\n        <!--                        </span>-->\n        <!--    </div>-->\n        <input type=\"text\" class=\"new_entry_input\" [ngStyle]=\"{'display':'block'}\" [(ngModel)]=\"newTodo.desc\" name=\"desc\" autoComplete=\"off\"\n               placeholder=\"Take over the world ...\" required/>\n        <button type=\"submit\" class=\"all_btn new_entry_btn\" [ngStyle]=\"{'display':'block'}\" name=\"addTodo\">\n            <i class=\"fas fa-plus addTodo\"></i>\n        </button>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_today_today_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/today/today.service */ "./src/app/services/today/today.service.ts");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");




var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(todayService, auth) {
        this.todayService = todayService;
        this.auth = auth;
        this.owner = this.auth.getUserDetails()._id;
        this.addTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        this.newTodo = {
            owner: this.owner,
            desc: '',
            completed: false,
        };
    };
    AddTaskComponent.prototype.onSubmit = function () {
        var _this = this;
        this.todayService.addTodo(this.owner, this.newTodo).subscribe(function (res) {
            if (res) {
                _this.addTodo.emit(res);
                _this.newTodo.desc = '';
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddTaskComponent.prototype, "addTodo", void 0);
    AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/components/add-task/add-task.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_today_today_service__WEBPACK_IMPORTED_MODULE_2__["TodayService"], _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth_wrap\">\n<a routerLink=\"/\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\"  class=\"big-log\" viewBox=\"0 0 10 2\">\n    <text class=\"svg_path\" x=\"5\" y=\"1\" alignment-baseline=\"middle\" text-anchor=\"middle\" font-size=\"1\" fill=\"none\"\n          stroke-width=\".02\" stroke=\"#fff\" font-family=\"Pacifico, sans-serif\" letter-spacing=\"0.02px\">\n      Simpley\n    </text>\n  </svg>\n</a>\n\n<div class=\"wrap-home-links bg-transparent \">\n  <div class=\"card wrap_home__icon\" routerLink=\"/login\">\n    <h3 class=\"text-center mb-4 title_home__icon\">Plan today!</h3>\n    <i class=\"fas fa-clipboard-list fa-9x text-center home__icon\"></i>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            //selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth_wrap\">\n  <a routerLink=\"/\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\"  class=\"big-log\" viewBox=\"0 0 10 2\">\n      <text class=\"svg_path\" x=\"5\" y=\"1\" alignment-baseline=\"middle\" text-anchor=\"middle\" font-size=\"1\" fill=\"none\"\n            stroke-width=\".02\" stroke=\"#fff\" font-family=\"Pacifico, sans-serif\" letter-spacing=\"0.02px\">\n        Simpley\n      </text>\n    </svg>\n  </a>\n  <div class=\"card bg-transparent border-0 px-5 py-5\">\n    <form id=\"signupForm\" class=\"mx-auto\" (submit)=\"login()\">\n      <div class=\"form-group\">\n        <label for=\"email\" class=\"text-white\">Email</label>\n        <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\n               autoComplete=\"off\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\"\n               required/>\n        <small id=\"emailHelp\" class=\"form-text text-muted\"> We'll never share your email with anyone else</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\" class=\"text-white\">Password</label>\n        <input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"\n               autoComplete=\"off\" placeholder=\"Enter password\" [(ngModel)]=\"credentials.password\" required/>\n      </div>\n      <button type=\"submit\" id=\"signup\" class=\"btn btn-primary mt-4\">Start Simpley</button>\n      <p class=\"login-invite text-center pt-3\">\n        <span class=\"text-white\">Still need an account? <a routerLink=\"/signup\">Signup here.</a></span>\n      </p>\n    </form>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
/* harmony import */ var _services_alerts_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alerts/alert.service */ "./src/app/services/alerts/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, toastr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    // See http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-subscribe
    // to read about subscribe() from RxJS
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/today');
            _this.toastr.showSuccess('Login successful! Happy planning!', null);
        }, function (err) {
            _this.toastr.showWarning('Oops! Please check your credentials.', null);
            console.error(err);
            // TODO: Set up login fail counter and suggest signing up?
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_alerts_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"avatarForm\" action=\"\" method=\"POST\">\n  <div id=\"radial-container\">\n    <div class=\"avatar\" [ngStyle]=\"{'background-image':'url(assets/images/avatar2.png)', 'background-size': '80%'}\" >\n<!--    <input id=\"avatarInput\" type=\"file\" name=\"avatar\" [ngStyle]=\"{'display':'none'}\"/>-->\n<!--      <label for=\"avatarInput\"><i class=\"fas fa-camera-retro\"></i></label>-->\n    <div class=\"wrap navbar-nav\">\n      <input id=\"checking\" type=\"checkbox\" [ngStyle]=\"{'display':'none'}\"/>\n      <a class=\"blob nav-link\"><i class=\"fas nav-btn fa-cog\"></i></a>\n      <a class=\"blob nav-link\"><i class=\"fas nav-btn fa-wallet\"></i></a>\n      <a class=\"blob nav-link\" (click)=\"logout()\"><i class=\"fas nav-btn fa-door-open\"></i></a>\n    </div>\n  </div>\n\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");



var MenuComponent = /** @class */ (function () {
    // Use AuthenticationService to display user firstname and get logout method
    function MenuComponent(auth) {
        this.auth = auth;
    }
    /**
     * Attach logout method to menu link
     */
    MenuComponent.prototype.logout = function () {
        this.auth.logout();
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth_wrap\">\n    <a routerLink=\"/\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\"  class=\"big-log\" viewBox=\"0 0 10 2\">\n            <text class=\"svg_path\" x=\"5\" y=\"1\" alignment-baseline=\"middle\" text-anchor=\"middle\" font-size=\"1\"\n                  fill=\"none\"\n                  stroke-width=\".02\" stroke=\"#fff\" font-family=\"Pacifico, sans-serif\" letter-spacing=\"0.02px\">\n                Simpley\n            </text>\n        </svg>\n    </a>\n    <div class=\"card bg-transparent border-0 px-5 py-5\">\n        <form id=\"signupForm\" class=\"mx-auto\" (submit)=\"signup()\">\n            <div class=\"form-group\">\n                <label for=\"firstname\" class=\"text-white\">Firstname</label>\n                <input type=\"text\" name=\"firstname\" class=\"form-control\" id=\"firstname\" autoComplete=\"off\"\n                       placeholder=\"Enter firstname\" [(ngModel)]=\"credentials.firstname\" required/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"lastname\" class=\"text-white\">Lastname</label>\n                <input type=\"text\" name=\"lastname\" class=\"form-control\" id=\"lastname\" autoComplete=\"off\"\n                       placeholder=\"Enter lastname\" [(ngModel)]=\"credentials.lastname\" required/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\" class=\"text-white\">Email</label>\n                <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\n                       autoComplete=\"off\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\"\n                       required/>\n                <small id=\"emailHelp\" class=\"form-text text-muted\"> We'll never share your email with anyone else\n                </small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\" class=\"text-white\">Password</label>\n                <input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"\n                       autoComplete=\"off\" placeholder=\"Enter password\" [(ngModel)]=\"credentials.password\" required/>\n            </div>\n            <button type=\"submit\" id=\"signup\" class=\"btn btn-primary mt-4\">Live Simpley</button>\n            <p class=\"login-invite text-center pt-3\">\n                <span class=\"text-white\">Already have an account? <a routerLink=\"/login\">Login here.</a></span>\n            </p>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
/* harmony import */ var _services_alerts_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alerts/alert.service */ "./src/app/services/alerts/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, router, toastr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.credentials = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        };
    }
    // See http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-subscribe
    // to read about subscribe() from RxJS
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.auth.signup(this.credentials).subscribe(function () {
            // Redirect to login page if signup successful
            _this.router.navigateByUrl('/login');
            _this.toastr.showSuccess('Signup successful! You may now login.', null);
        }, function (err) {
            _this.toastr.showWarning('Oops! Please make sure your information are correct.', null);
            console.error(err);
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            //selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_alerts_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/task-list/task-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/task-list/task-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div cdkDropList (cdkDropListDropped)=\"drop($event)\">\n    <div cdkDrag *ngFor=\"let todo of todos; index as i\" id=\" {{todo._id}} \"\n         class=\"entry_item_wrap  {{todo.completed.toString()}} \">\n        <i class=\"icon_info fas fa-check {{ todo.completed.toString() }}\"\n           (click)=\"editTodo(todo._id, {owner: todo.owner, completed: !todo.completed,\n            completedAt: !todo.completed ? setDate() : null} );\n             todo.completed = !todo.completed; $event.stopPropagation()\"></i>\n        <form>\n            <input type=\"hidden\" name=\"todo_id\" value=\"activity.id\"/>\n            <input type=\"text\" class=\"entry_label {{todo.completed.toString()}}\"\n                   autoComplete='off' name='updatedActivity' value=\"{{ todo.desc }}\" required readOnly/>\n            <!-- Add check if is completed-->\n            <!--            <span class=\"wrap__icon_info wrap__icon_info-edit\">-->\n            <!--                <i class=\"icon_info fas fa-pencil-alt\"></i>-->\n            <!--            </span>-->\n        </form>\n        <div>\n            <input type=\"hidden\" name=\"activity_id\"/>\n            <button type=\"button\" class=\"hidden delete__todo wrap__icon_info wrap__icon_info-delete\"\n                    (click)=\"deleteTodo(todo._id); $event.stopPropagation()\">\n                  <span class=\"delete__todo wrap__icon_info wrap__icon_info-delete\">\n                    <i class=\"icon_info fas fa-trash-alt\"></i>\n                  </span>\n            </button>\n        </div>\n    </div>\n</div>\n\n<app-add-task (addTodo)=\"onAddTodo($event)\"></app-add-task>"

/***/ }),

/***/ "./src/app/components/task-list/task-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/task-list/task-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_today_today_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/today/today.service */ "./src/app/services/today/today.service.ts");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");





var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(todayService, auth) {
        this.todayService = todayService;
        this.auth = auth;
        this.todos = [];
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    /**
     * Method to handle todo reordering with dragNdrop
     * @param event
     */
    TaskListComponent.prototype.drop = function (event) {
        var _this = this;
        // Reorder todo items in the array
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(this.todos, event.previousIndex, event.currentIndex);
        var newIndex = 0;
        // Update order field in the db for each todo with updated index.
        this.todos.forEach(function (todo) {
            _this.todayService.editTodo(todo._id, { owner: todo.owner, order: newIndex }).subscribe(function (res) { return res; });
            newIndex++;
        });
    };
    /**
     * Method to fetch all todos from db
     */
    TaskListComponent.prototype.getTodos = function () {
        var _this = this;
        var userid = this.auth.getUserDetails()._id;
        this.todayService.getTodos(userid).subscribe(function (res) { return _this.todos = res; });
    };
    TaskListComponent.prototype.onAddTodo = function (newTodo) {
        this.todos = this.todos.concat(newTodo);
    };
    TaskListComponent.prototype.setDate = function () {
        var d = new Date();
        return d.getUTCDate();
    };
    TaskListComponent.prototype.editTodo = function (todoid, body) {
        this.updatedTodo = body;
        this.todayService.editTodo(todoid, this.updatedTodo).subscribe(function (res) { return res; });
    };
    TaskListComponent.prototype.deleteTodo = function (todoid) {
        var _this = this;
        this.todayService.deleteTodo(todoid).subscribe(function (res) { return _this.todos = _this.todos.filter(function (todo) { return todo._id !== todoid; }); });
    };
    TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/components/task-list/task-list.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_today_today_service__WEBPACK_IMPORTED_MODULE_2__["TodayService"], _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/app/components/today/today.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/today/today.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main_container\">\n  <h2 class=\"text-center title__today text-white mb-3\">Today</h2>\n  <app-task-list></app-task-list>\n</div>\n<app-menu></app-menu>"

/***/ }),

/***/ "./src/app/components/today/today.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/today/today.component.ts ***!
  \*****************************************************/
/*! exports provided: TodayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayComponent", function() { return TodayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TodayComponent = /** @class */ (function () {
    function TodayComponent() {
    }
    TodayComponent.prototype.ngOnInit = function () {
        // load all todos
    };
    TodayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            //selector: 'app-today',
            template: __webpack_require__(/*! ./today.component.html */ "./src/app/components/today/today.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodayComponent);
    return TodayComponent;
}());



/***/ }),

/***/ "./src/app/services/alerts/alert.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/alerts/alert.service.ts ***!
  \**************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var AlertService = /** @class */ (function () {
    function AlertService(toastr) {
        this.toastr = toastr;
    }
    AlertService.prototype.showSuccess = function (message, title) {
        this.toastr.success(message, title);
    };
    AlertService.prototype.showWarning = function (message, title) {
        this.toastr.warning(message, title);
    };
    AlertService.prototype.showError = function (message, title) {
        this.toastr.error(message, title);
    };
    AlertService.prototype.showInfo = function (message, title) {
        this.toastr.info(message, title);
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




// See https://angular.io/api/core/Injectable for Injectable decorator
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    /**
     * Method to save token to localStorage
     * @param token
     * returns void
     */
    ApiService.prototype.saveToken = function (token) {
        localStorage.setItem('simpley-ng-token', token);
        this.token = token;
    };
    /**
     * Method to get token from localStorage
     * return token: string
     */
    ApiService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('simpley-ng-token');
        }
        return this.token;
    };
    /**
     * Private method to facilitate making API calls. This will construct and return the proper HTTP request observable
     * depending on the specific type of request.
     * @param method
     * @param type: 'login'|'register'|'todo'
     * @param param: ':userid' | ':todoid'
     * @param user
     * @param body
     */
    ApiService.prototype.request = function (method, type, param, user, body) {
        var _this = this;
        var base;
        var jsonMimeType = {
            'Content-type': 'application/json'
        };
        var tokenAuth = {
            'token': "" + this.getToken()
        };
        var baseURL = 'https://simpley.ramarolahy.website';
        if (type === 'login' || type === 'signup') {
            // Depending one the request method, send token or set request headers accordingly
            if (method === 'post') {
                base = this.http.post(baseURL + "/api/" + type, user);
            }
            else {
                base = this.http.get(baseURL + "/api/" + type, { headers: { Authorization: "Bearer " + tokenAuth.token } });
            }
            // See https://blog.angularindepth.com/reading-the-rxjs-6-sources-map-and-pipe-94d51fec71c2 to read about pipe() and
            // map()
            // ** NOT to be confused with Angular 2.0 pipes https://angular.io/guide/pipes
            return base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                if (res.token) {
                    _this.saveToken(res.token);
                }
                return res;
            }));
        }
        else {
            switch (method) {
                case "post":
                    return this.http.post(baseURL + "/api/" + type + "/" + param, body, { headers: jsonMimeType })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
                case 'get':
                    return this.http.get(baseURL + "/api/" + type + "/" + param)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
                case "put":
                    return this.http.put(baseURL + "/api/" + type + "/" + param, body, { headers: jsonMimeType })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
                case "delete":
                    return this.http.delete(baseURL + "/api/" + type + "/" + param)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
                default:
                    break;
            }
        }
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth/authenticate.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/auth/authenticate.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/auth/authentication.service.ts");




var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthenticateService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    };
    AuthenticateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "./src/app/services/auth/authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/auth/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api.service */ "./src/app/services/api/api.service.ts");





// See https://angular.io/api/core/Injectable for Injectable decorator
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(api, http, router) {
        this.api = api;
        this.http = http;
        this.router = router;
    }
    /**
     * Method to check
     */
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.api.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    /**
     * Public method to register new user
     * @param user
     */
    AuthenticationService.prototype.signup = function (user) {
        return this.api.request('post', 'signup', null, user);
    };
    /**
     * Public method to login user
     * @param user
     */
    AuthenticationService.prototype.login = function (user) {
        return this.api.request('post', 'login', null, user);
    };
    /**
     * Method to logout user and remove token from localStorage
     * return void
     */
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('simpley-ng-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/today/today.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/today/today.service.ts ***!
  \*************************************************/
/*! exports provided: TodayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayService", function() { return TodayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api.service */ "./src/app/services/api/api.service.ts");





var TodayService = /** @class */ (function () {
    function TodayService(api, http, router) {
        this.api = api;
        this.http = http;
        this.router = router;
    }
    /**
     * Public method to CREATE new todo
     * @param userid
     * @param newTodo
     */
    TodayService.prototype.addTodo = function (userid, newTodo) {
        var body = JSON.stringify(newTodo);
        return this.api.request('post', 'today', userid, null, body);
    };
    /**
     * Public method to READ user's today
     */
    TodayService.prototype.getTodos = function (userid) {
        return this.api.request('get', 'today', userid);
    };
    /**
     * Public method to UPDATE todo
     * @param todoid
     * @param body
     */
    TodayService.prototype.editTodo = function (todoid, body) {
        return this.api.request('put', 'today', todoid, null, body);
    };
    TodayService.prototype.deleteTodo = function (todoid) {
        return this.api.request('delete', 'today', todoid);
    };
    TodayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TodayService);
    return TodayService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mbinina/Desktop/Programming/BackEnd/NodeJS/CSCI E31(Node.js)/assignment-6-ramarolahy/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map