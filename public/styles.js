(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@media only screen and (max-width: 900px) {\n  div.wrap__navbar-brand {\n    position: relative;\n    width: 300px;\n  }\n\n  div#radial-container {\n    position: fixed;\n    left: 0px;\n    width: 1em !important;\n    height: 1em !important;\n    bottom: 0px;\n    border-radius: 50%;\n  }\n  div.avatar {\n    position: absolute;\n    /* Check position inside navbar */\n    left: 15px !important;\n    bottom: 15px !important;\n    width: 80px !important;\n    height: 80px !important;\n    border: 3px solid #48606b;\n  }\n\n  div.wrap {\n    position: absolute;\n    z-index: 0;\n    left: 0;\n    bottom: 0;\n    width: 80px !important;\n    height: 80px !important;\n    border-radius: 50%;\n    opacity: 10;\n    box-shadow:  0px 0px 20px rgba(0, 0, 0, 0.5);\n    filter: url(\"#filter\");\n    -webkit-filter: url(\"#filter\");\n  }\n\n\n  i.fas.nav-btn {\n    position: absolute;\n    font-size: 1.1em !important;\n    color: rgba(81, 111, 134, 0.8) !important;\n    top: 20%;\n    left: 50%;\n    background-color: transparent;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n  }\n\n  i.fa-check.false:hover {\n    color: rgba(18, 53, 61, 0.44);\n  }\n  i.fas.nav-btn {\n    font-size: 1em !important;\n  }\n\n  #deleteTodos:checked ~ i {\n    color: rgb(205, 92, 92) !important;\n  }\n\n  i.menu_delete.fas.fa-trash-alt:hover {\n    color: rgba(205, 92, 92, 0.29) !important;\n  }\n\n  /* second child: settings button */\n  div.wrap > #checking ~ .blob:nth-child(2) {\n    left: 0;\n    bottom: 3em !important;\n  }\n  /* second child: planner button */\n  div.wrap > #checking ~ .blob:nth-child(3) {\n    left: 2.2em !important;\n    bottom: 2.2em !important;\n  }\n  /* second child: logout button */\n  /*div.wrap > #checking ~ .blob:nth-child(4) {*/\n  #logout {\n    position: fixed;\n    right: 3em !important;\n    bottom: 3em;\n  }\n\n  i.fas.nav-btn.fa-door-open {\n    color: #516f86;\n    font-size: 2em !important;\n  }\n\n}\n\n@media only screen and (max-width: 600px) {\n  body {\n    padding-top: 0px !important;\n    padding-bottom: 50px;\n    overflow-y: scroll;\n    font: 1em \"Lucida Grande\", Helvetica, Arial, sans-serif;\n    background: linear-gradient(rgb(28, 45, 54), rgb(17, 27, 32)) no-repeat fixed;\n  }\n\n  form#loginForm, form#signupForm {\n    width: 90% !important;\n  }\n\n  .svg_path {\n    font-size: .1em !important;\n  }\n\n  p.welcome-text {\n    padding-top: 0px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    font-size: 1.2em !important;\n  }\n\n  div.card.bg-transparent {\n    padding: 0px !important;\n  }\n\n\n  /* second child: settings button */\n  div.wrap > #checking ~ .blob:nth-child(2) {\n    left: 0;\n    bottom: 3em !important;\n  }\n  /* second child: planner button */\n  div.wrap > #checking ~ .blob:nth-child(3) {\n    left: 2.2em !important;\n    bottom: 2.2em !important;\n  }\n  /* second child: logout button */\n  div.wrap > #checking ~ .blob:nth-child(4) {\n    left: 3em !important;\n    bottom: 0em;\n  }\n\n  #logout {\n    position: fixed;\n    right: 2em !important;\n    bottom: 3em;\n  }\n\n  i.fas.nav-btn.fa-door-open {\n    color: #516f86;\n    font-size: 2em !important;\n  }\n  /*  ============ TODAY ================*/\n\n  div.auth_wrap {\n      padding-top: 15% !important;\n  }\n\n  div.main_container {\n    background-color: rgba(0, 0, 0, 0.09);\n    padding: 15px 5px 120px 5px !important;\n    min-width: 100% !important;\n    width: 100% !important;\n    max-height: 100vh !important;\n    overflow-y: scroll !important;\n    position: absolute;\n  }\n\n  div.list_wrap {\n    padding-bottom: 50px;\n  }\n\n  div.input_wrap {\n    width: 100% !important;\n    height: 70px;\n    bottom: 5px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    margin-bottom: 20px;\n    position: fixed;\n  }\n\n  div.wrap-home-links {\n    bottom: 10% !important;\n    position: relative;\n    height: 300px;\n  }\n\n  div.wrap_home__icon {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-color: rgba(38, 113, 96, 0.69);\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    width: 300px;\n    padding: 50px 30px;\n    height: auto;\n    cursor: pointer;\n  }\n\n  div.wrap_home__icon:hover {\n    box-shadow:  0px 3px 30px 5px rgba(8, 11, 17, 0.92);\n  }\n  div.entry_item_wrap,  div.entry_item_wrap.true {\n    background-color: rgba(68, 211, 229, 0.03);\n    border: 0.5px solid rgba(52, 72, 92, 0.6);\n    border-radius: 5px;\n    width: 100% !important;\n    height: 60px;\n    margin-top: 10px;\n    position: relative;\n  }\n\n  div.entry_item_wrap.true {\n    background-color: rgba(48, 123, 141, 0.03);\n    border: none;\n  }\n\n  div.empty_entry_item_wrap {\n    background-color: rgba(28, 54, 69, 0.88);\n    border: none;\n    border-radius: 5px;\n    width: 600px;\n    height: 60px;\n    margin-top: 10px;\n    position: relative;\n  }\n\n\n  div.entry_item_wrap:hover {\n    border: 0.5px solid rgb(22, 108, 149);\n    background-color: rgba(13, 38, 48, 0.88);\n    box-shadow: 0px 0.5px 7px rgba(0, 0, 0, 0.26);\n    bottom: 0.5px;\n  }\n\n\n  div.empty_entry_item_wrap {\n    width: 100% !important;\n    height: 60px;\n    margin-top: 10px;\n    position: relative;\n  }\n\n  input.new_entry_input {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    display: none;\n    background-color:  rgb(16, 20, 22);\n    border-radius: 5px;\n    box-shadow: 0px 2px 15px rgb(9, 15, 19);\n    padding-left: 60px !important;\n    color: rgb(187, 202, 212);\n    font-size: 1.3em !important;\n    height: 60px !important;\n    width: 100% !important;\n  }\n\n  i.hidden.icon_info.delete__todo {\n    right: 50px !important;\n  }\n\n  button.new_entry_btn {\n    top: 32px;\n    left: 10px !important;\n  }\n\n  div.wrap-home-links {\n    top: 40%;\n    position: relative;\n    height: auto;\n  }\n\n  div.wrap_home__icon {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-color: rgba(38, 113, 96, 0.69);\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    width: 100px;\n    padding: 50px 30px;\n    height: auto;\n    cursor: pointer;\n  }\n\n}\n\n/* =========== TOASTER ==============*/\n\n/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles : HIDDEN*/\n\n.toast-title {\n  display: none;\n  font-weight: bold;\n}\n\n.toast-message {\n  font-size: 1em;\n  word-wrap: break-word;\n}\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n\n.toast-container * {\n  box-sizing: border-box;\n}\n\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: auto;\n  border-radius: 5px;\n  opacity: 0.7%;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px rgba(13, 38, 48, 0.81);\n  color: #FFFFFF;\n}\n\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n.toast-success {\n  background-color: #51A351;\n}\n\n.toast-error {\n  background-color: #BD362F;\n}\n\n.toast-info {\n  background-color: #2F96B4;\n}\n\n.toast-warning {\n  background-color: #F89406;\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n\n/* ================================ */\n\n/* =========== PAGE ============== */\n\n/* ================================ */\n\nhtml {\n  min-height: 100vh;\n}\n\nbody {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  overflow-y: scroll;\n  font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\n  background: linear-gradient(rgb(28, 45, 54), rgb(17, 27, 32)) no-repeat fixed;\n}\n\n*::-webkit-scrollbar {\n  display: none;\n  width: 12px;\n}\n\n*::-webkit-scrollbar-track {\n  background: transparent;\n  border-radius: 10px;\n}\n\n*::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);\n}\n\n/* =========== NAVBAR - RADIAL MENU ============== */\n\n/* ===================================== */\n\ndiv.wrap__navbar-brand {\n  position: relative;\n  width: 300px;\n}\n\ndiv#radial-container {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n}\n\ndiv.avatar {\n  position: absolute;\n  /* Check position inside navbar */\n  left: 40px;\n  bottom: 40px;\n  width: 130px;\n  height: 130px;\n  border: 3px solid #48606b;\n  border-radius: 50%;\n  z-index: 99;\n  cursor: pointer;\n  background-position: center, center; /* Center the image */\n  background-repeat: no-repeat, no-repeat; /* Do not repeat the image */\n  background-size: cover, cover; /* Resize the background image to cover the entire container */\n  box-shadow:  0 7px 20px  rgba(0, 0, 0, 0.7);\n}\n\ndiv.wrap {\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  bottom: 0;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  opacity: 10;\n  box-shadow:  0px 0px 20px rgba(0, 0, 0, 0.5);\n  filter: url(\"#filter\");\n  -webkit-filter: url(\"#filter\");\n}\n\ndiv.wrap .blob {\n  display: block;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  position: absolute;\n  /* Avatar dimensions*/\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n}\n\ndiv.wrap > .blob:not([for=\"checking\"]) {\n  /* Initial dimentions of each buttons */\n  position: absolute;\n  z-index: 0;\n  width: 50px;\n  height: 50px;\n  left: 45px;\n  bottom: 45px;\n  font-size: 30px;\n}\n\ndiv.wrap > a.blob:not([for=\"checking\"]) {\n  color: #0e262e;\n}\n\ndiv.wrap > a.blob:not([for=\"checking\"]):hover {\n  color: #adc0c3;\n  border: 1px solid #244957;\n}\n\ni.fas.nav-btn {\n  position: absolute;\n  font-size: 1em;\n  top: 20%;\n  left: 50%;\n  background-color: transparent;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\ni.fas.fa-camera-retro {\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  color: rgba(147, 175, 193, 0.6);\n  font-size: 1.5em;\n}\n\ni.fas.fa-camera-retro:hover {\n  color: rgb(168, 197, 215);\n}\n\nlabel[for=\"avatarInput\"] {\n  position: absolute;\n  left: -10px;\n  bottom: -10px;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: rgba(47, 59, 75, 0.4);\n  width: 40px;\n  height: 40px;\n}\n\ndiv.wrap > #checking~ .blob {\n  z-index: 10;\n}\n\n/* first child: hidden checkbox */\n\n/* second child: settings button */\n\ndiv.wrap > #checking ~ .blob:nth-child(2) {\n  left: 0;\n  bottom: 4.5em;\n}\n\n/* second child: planner button */\n\ndiv.wrap > #checking ~ .blob:nth-child(3) {\n  left: 4em;\n  bottom: 4em;\n}\n\n/* second child: logout button */\n\ndiv.wrap > #checking ~ .blob:nth-child(4) {\n  left: 4.5em;\n  bottom: 0px;\n}\n\ni.fas.nav-btn.fa-door-open {\n  color: #516f86;\n  font-size: 2em;\n}\n\n#logout {\n  position: fixed;\n  right: 3em !important;\n  bottom: 3em;\n}\n\n#label_deleteTodos {\n  position: fixed;\n  top: 26px;\n  right: 15px;\n}\n\ni.menu_delete.fas.fa-trash-alt {\n  font-size: 2em;\n  color: rgba(205, 92, 92, 0.29);\n  cursor: pointer;\n}\n\ni.menu_delete.fas.fa-trash-alt:hover {\n  color: rgb(205, 92, 92);\n}\n\n#deleteTodos {\n  display: none;\n}\n\n#deleteTodos:checked ~ i {\n  color: rgb(205, 92, 92);\n}\n\n/* ===================================== */\n\n/* ===================================== */\n\n/* =========== CONTAINERS ============== */\n\ndiv.container {\n  position: relative;\n  top: 0px;\n}\n\ndiv.wrap__error_msg {\n  position: relative;\n}\n\ndiv.jumbotron {\n  height: 180px;\n}\n\ndiv.main_container {\n  background-color: rgba(0, 0, 0, 0.09);\n  min-width: 640px;\n  border-radius: 10px;\n  padding: 15px 20px 3px 20px;\n  width: auto;\n  min-height: 750px;\n  overflow-y: scroll;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\ndiv.list_wrap {\n  padding-bottom: 50px;\n}\n\ndiv.input_wrap {\n  width: 600px;\n  height: 70px;\n  bottom: 5px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  margin-bottom: 20px;\n  position: fixed;\n}\n\ndiv.wrap-home-links {\n  top: 50%;\n  position: relative;\n  height: 300px;\n}\n\ndiv.wrap_home__icon {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  background-color: transparent;\n  border: 2px solid rgba(38, 113, 96, 0.69);\n  border-radius: 7px;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  width: 300px;\n  padding: 50px 30px;\n  height: auto;\n  cursor: pointer;\n}\n\ndiv.wrap_home__icon:hover {\n  box-shadow:  0px 3px 30px 5px rgba(8, 11, 17, 0.92);\n}\n\ndiv.entry_item_wrap {\n  background-color: rgba(68, 211, 229, 0.03);\n  border: 0.5px solid rgba(52, 72, 92, 0.6);\n  border-radius: 5px;\n  width: 600px;\n  height: 60px;\n  margin-top: 10px;\n  position: relative;\n  cursor: pointer;\n}\n\ndiv.entry_item_wrap.true {\n  background-color: rgba(48, 123, 141, 0.03);\n  border: none;\n  border-radius: 5px;\n  width: 600px;\n  height: 60px;\n  margin-top: 10px;\n  position: relative;\n  cursor: pointer;\n}\n\ndiv.empty_entry_item_wrap {\n  background-color: rgba(28, 54, 69, 0.88);\n  border: none;\n  border-radius: 5px;\n  width: 600px;\n  height: 60px;\n  margin-top: 10px;\n  position: relative;\n}\n\ndiv.entry_item_wrap:hover {\n  border: 0.5px solid rgb(22, 108, 149);\n  background-color: rgba(13, 38, 48, 0.88);\n  box-shadow: 0px 0.5px 7px rgba(0, 0, 0, 0.26);\n  bottom: 0.5px;\n}\n\ndiv.entry_item_wrap.true:hover {\n  border: none;\n  background-color: rgba(55, 147, 165, 0.06);\n  box-shadow: none;\n  bottom: 0.5px;\n}\n\n/* ===================================== */\n\n/* ===================================== */\n\n/* =========== DRAG ANIMATION ============== */\n\n/* Animate items as they're being sorted. */\n\n.cdk-drop-list-dragging .cdk-drag {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\ni.fa-grip-lines.cdk-drag-handle {\n  color: rgba(245, 245, 245, 0.28);\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  font-size: 2em;\n  z-index: 99;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n/* Animate an item that has been dropped. */\n\n.cdk-drag-animating {\n  transition: -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\ndiv.empty_entry_label {\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n  padding-left: 60px;\n  cursor: pointer;\n  width: 600px;\n  height: 60px;\n  font-size: 1.2em;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\ndiv.empty_entry_label:hover {\n  border: 0.5px solid rgb(35, 86, 110);\n}\n\n/* =========== TEXTS ============== */\n\nsvg.big-logo {\n  cursor: pointer;\n}\n\nh3.title_home__icon {\n  color: white;\n  font-family: 'Lato', sans-serif;\n}\n\nspan.error_msg.text-center  {\n  background-color: rgba(21, 39, 47, 0.87);\n  padding: 5px 20px;\n  font-size: 1.2em;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n\n}\n\ndiv.today_message > span.error_msg.text-center {\n  position: absolute;\n  top: -23px;\n  width: auto;\n}\n\nspan.addTodo_placeholder {\n  color: rgba(79, 96, 101, 0.31);\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\nspan.wrap__icon_info-edit {\n  right: 90px;\n}\n\nspan.wrap__icon_info-menu {\n  right: 10px;\n}\n\np.welcome-text {\n  padding-top: 0px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 300;\n  font-size: 1.6em;\n}\n\n/* =========== LINKS ============== */\n\na {\n  color: #00B7FF;\n}\n\na.navbar-brand {\n  text-shadow: 0 1px 10px black;\n  font-size: 3em;\n  font-family: 'Pacifico', cursive;\n  position: absolute;\n  left: 30px;\n  bottom: -30px;\n}\n\nsvg.big-logo > a {\n  text-decoration: none;\n}\n\np.signup-invite > span > a, p.login-invite > span > a {\n  text-decoration: none;\n}\n\np.signup-invite > span > a:hover, p.login-invite > span > a:hover {\n  text-decoration: none;\n  color: #00B7FF;\n  font-weight: bolder;\n}\n\n/* =========== LISTS ============== */\n\nul.navbar-nav {\n  padding-bottom: 10px;\n}\n\nli.nav-item {\n  font-size: 1.2em;\n  font-family: 'Lato', sans-serif;\n}\n\n/* =========== FORMS ============== */\n\n.api_test {\n  border: 0.5px solid rgba(255, 255, 255, 0.21);\n  background-color: transparent;\n  border-radius: 7px;\n  padding: 5px 15px;\n  color: white;\n  position: fixed;\n}\n\n#create_read {\n  top: 7px;\n  right: 250px;\n}\n\n#update {\n  top: 7px;\n  right: 140px;\n}\n\n#delete {\n  top: 7px;\n  right: 30px;\n}\n\nform#loginForm, form#signupForm {\n  width: 450px;\n}\n\ndiv[class=\"form-group\"] > input {\n  background: rgba(21, 39, 47, 0.8);\n  color: rgba(255, 243, 243, 0.76);\n  border: 0.5px solid #2a414d;\n}\n\ndiv[class=\"form-group\"] > input:focus {\n  background: rgba(21, 39, 47, 0.51);\n  color: rgba(255, 243, 243, 0.76);\n  border: 0.5px solid #b4b4b4;\n}\n\ninput.new_entry_input {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: none;\n  background-color:  rgb(16, 20, 22);\n  border-radius: 5px;\n  box-shadow: 0px 2px 15px rgb(9, 15, 19);\n  padding-left: 60px;\n  color: rgb(187, 202, 212);\n  font-size: 1.5em;\n  height: 60px;\n  width: 600px;\n}\n\ninput.new_entry_input:focus {\n  border: 0.5px solid rgb(35, 86, 110);\n}\n\ninput.new_entry_input.empty {\n  border: 0.5px solid rgb(110, 53, 41);\n}\n\ninput.new_entry_input::-webkit-input-placeholder {\n  color: rgba(113,132,135,0.25);\n  font-weight: 300;\n}\n\ninput.new_entry_input::-moz-placeholder {\n  color: rgba(113,132,135,0.25);\n  font-weight: 300;\n}\n\ninput.new_entry_input::-ms-input-placeholder {\n  color: rgba(113,132,135,0.25);\n  font-weight: 300;\n}\n\ninput.new_entry_input::placeholder {\n  color: rgba(113,132,135,0.25);\n  font-weight: 300;\n}\n\ninput.entry_label {\n  background-color: rgba(10, 18, 23, 0.1);\n  color: rgb(193, 211, 216);\n  border: none;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  width: 60%;\n  font-size: 1.2em;\n  position: absolute;\n  left: 60px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\ninput.entry_label:focus {\n  border:rgb(193, 211, 216);\n  box-shadow: none;\n}\n\ninput.entry_label:-moz-read-only {\n  color: rgb(193, 211, 216);\n  background-color: transparent;\n}\n\ninput.entry_label:read-only {\n  color: rgb(193, 211, 216);\n  background-color: transparent;\n}\n\ninput.entry_label.true:-moz-read-only {\n  color: rgb(73, 89, 94);\n  background-color: transparent;\n}\n\ninput.entry_label.true:read-only {\n  color: rgb(73, 89, 94);\n  background-color: transparent;\n}\n\nbutton.all_btn {\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  cursor: pointer;\n  font-size: 1.3em;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\nbutton.new_entry_btn {\n  position: absolute;\n  top: 32px;\n  left: 17px;\n}\n\nbutton.wrap__icon_info, span.wrap__icon_info.wrap__icon_info-edit {\n  font-size: 1.7em;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\nbutton#login, button#signup {\n  margin-top: 10px;\n  background-color: #267160;\n  border: none;\n  width: 100%;\n  position: relative;\n}\n\nbutton#login:hover, button#signup:hover {\n  bottom: 2px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n\nbutton.wrap__icon_info-reorder {\n  right: 20px;\n}\n\nbutton.hidden.wrap__icon_info--check {\n  left: 15px;\n}\n\nbutton.hidden {\n  position: absolute;\n  background-color: transparent;\n  border: none;\n}\n\n/* =========== ICONS ============== */\n\ni.home__icon {\n  color: rgba(255, 255, 255, 0.5);\n}\n\ni.icon_info.fas.fa-ellipsis-v {\n  color: rgba(255, 255, 255, 0.5);\n}\n\ni.fa-check {\n  position: relative;\n  left: 15px;\n  top: 15px;\n  font-size: 2em;\n}\n\ni.icon_info.delete__todo {\n  font-size: 1.5em;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: #cd5c5c;\n}\n\ni.fa-check:hover, i.fa-check.true {\n  color: rgb(67, 170, 106);\n}\n\ni.fa-pencil-alt:hover{\n  color: cornflowerblue;\n}\n\ni.fa-plus {\n  font-size: 1.3em;\n  color: #166c95;\n}\n\ni.addTodo_placeholder {\n  font-size: 1.3em;\n  color: #166c95;\n  position: absolute;\n  left: 27px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\ni.icon_info {\n  color: rgba(18, 53, 61, 0.44);\n  cursor: pointer;\n}\n\n/* =========== BOOTSTRAP OVERRIDE ============== */\n\ntextarea:focus,\na:focus,\ndiv:focus,\nbutton:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"email\"]:focus,\n.uneditable-input:focus {\n  border: none;\n  box-shadow: none;\n  outline: none;\n}\n\ntextarea,\nbutton[type=\"submit\"],\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\n.uneditable-input{\n  border: none;\n  cursor: pointer;\n}\n\n/* =========== ERROR MESSAGES ============== */\n\npre, h1, h2, h3, h4, h5, h6 {\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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OztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBSUEsa0RBQWtEOztBQUNsRDs7Ozs7Ozs7RUFRRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTs7Ozs7O0VBTUUsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUEsOENBQThDOztBQUM5QztFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgZGl2LndyYXBfX25hdmJhci1icmFuZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIGRpdiNyYWRpYWwtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxZW0gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDFlbSAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBkaXYuYXZhdGFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogQ2hlY2sgcG9zaXRpb24gaW5zaWRlIG5hdmJhciAqL1xuICAgIGxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgICBib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICM0ODYwNmI7XG4gIH1cblxuICBkaXYud3JhcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3BhY2l0eTogMTA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAgMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAtbW96LWJveC1zaGFkb3c6ICAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJveC1zaGFkb3c6ICAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGZpbHRlcjogdXJsKFwiI2ZpbHRlclwiKTtcbiAgICAtd2Via2l0LWZpbHRlcjogdXJsKFwiI2ZpbHRlclwiKTtcbiAgfVxuXG5cbiAgaS5mYXMubmF2LWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMS4xZW0gIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmdiYSg4MSwgMTExLCAxMzQsIDAuOCkgIWltcG9ydGFudDtcbiAgICB0b3A6IDIwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG5cbiAgaS5mYS1jaGVjay5mYWxzZTpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMTgsIDUzLCA2MSwgMC40NCk7XG4gIH1cbiAgaS5mYXMubmF2LWJ0biB7XG4gICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gICNkZWxldGVUb2RvczpjaGVja2VkIH4gaSB7XG4gICAgY29sb3I6IHJnYigyMDUsIDkyLCA5MikgIWltcG9ydGFudDtcbiAgfVxuXG4gIGkubWVudV9kZWxldGUuZmFzLmZhLXRyYXNoLWFsdDpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMjA1LCA5MiwgOTIsIDAuMjkpICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBzZWNvbmQgY2hpbGQ6IHNldHRpbmdzIGJ1dHRvbiAqL1xuICBkaXYud3JhcCA+ICNjaGVja2luZyB+IC5ibG9iOm50aC1jaGlsZCgyKSB7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDNlbSAhaW1wb3J0YW50O1xuICB9XG4gIC8qIHNlY29uZCBjaGlsZDogcGxhbm5lciBidXR0b24gKi9cbiAgZGl2LndyYXAgPiAjY2hlY2tpbmcgfiAuYmxvYjpudGgtY2hpbGQoMykge1xuICAgIGxlZnQ6IDIuMmVtICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAyLjJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC8qIHNlY29uZCBjaGlsZDogbG9nb3V0IGJ1dHRvbiAqL1xuICAvKmRpdi53cmFwID4gI2NoZWNraW5nIH4gLmJsb2I6bnRoLWNoaWxkKDQpIHsqL1xuICAjbG9nb3V0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDNlbSAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogM2VtO1xuICB9XG5cbiAgaS5mYXMubmF2LWJ0bi5mYS1kb29yLW9wZW4ge1xuICAgIGNvbG9yOiAjNTE2Zjg2O1xuICAgIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XG4gIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgZm9udDogMWVtIFwiTHVjaWRhIEdyYW5kZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjgsIDQ1LCA1NCksIHJnYigxNywgMjcsIDMyKSkgbm8tcmVwZWF0IGZpeGVkO1xuICB9XG5cbiAgZm9ybSNsb2dpbkZvcm0sIGZvcm0jc2lnbnVwRm9ybSB7XG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnN2Z19wYXRoIHtcbiAgICBmb250LXNpemU6IC4xZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIHAud2VsY29tZS10ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICBkaXYuY2FyZC5iZy10cmFuc3BhcmVudCB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuXG4gIC8qIHNlY29uZCBjaGlsZDogc2V0dGluZ3MgYnV0dG9uICovXG4gIGRpdi53cmFwID4gI2NoZWNraW5nIH4gLmJsb2I6bnRoLWNoaWxkKDIpIHtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogM2VtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLyogc2Vjb25kIGNoaWxkOiBwbGFubmVyIGJ1dHRvbiAqL1xuICBkaXYud3JhcCA+ICNjaGVja2luZyB+IC5ibG9iOm50aC1jaGlsZCgzKSB7XG4gICAgbGVmdDogMi4yZW0gIWltcG9ydGFudDtcbiAgICBib3R0b206IDIuMmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLyogc2Vjb25kIGNoaWxkOiBsb2dvdXQgYnV0dG9uICovXG4gIGRpdi53cmFwID4gI2NoZWNraW5nIH4gLmJsb2I6bnRoLWNoaWxkKDQpIHtcbiAgICBsZWZ0OiAzZW0gIWltcG9ydGFudDtcbiAgICBib3R0b206IDBlbTtcbiAgfVxuXG4gICNsb2dvdXQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMmVtICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAzZW07XG4gIH1cblxuICBpLmZhcy5uYXYtYnRuLmZhLWRvb3Itb3BlbiB7XG4gICAgY29sb3I6ICM1MTZmODY7XG4gICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcbiAgfVxuICAvKiAgPT09PT09PT09PT09IFRPREFZID09PT09PT09PT09PT09PT0qL1xuXG4gIGRpdi5hdXRoX3dyYXAge1xuICAgICAgcGFkZGluZy10b3A6IDE1JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgZGl2Lm1haW5fY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICAgIHBhZGRpbmc6IDE1cHggNXB4IDEyMHB4IDVweCAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICBkaXYubGlzdF93cmFwIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIGRpdi5pbnB1dF93cmFwIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG5cbiAgZGl2LndyYXAtaG9tZS1saW5rcyB7XG4gICAgYm90dG9tOiAxMCUgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuXG4gIGRpdi53cmFwX2hvbWVfX2ljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOCwgMTEzLCA5NiwgMC42OSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGRpdi53cmFwX2hvbWVfX2ljb246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6ICAwcHggM3B4IDMwcHggNXB4IHJnYmEoOCwgMTEsIDE3LCAwLjkyKTtcbiAgfVxuICBkaXYuZW50cnlfaXRlbV93cmFwLCAgZGl2LmVudHJ5X2l0ZW1fd3JhcC50cnVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCAyMTEsIDIyOSwgMC4wMyk7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDUyLCA3MiwgOTIsIDAuNik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgZGl2LmVudHJ5X2l0ZW1fd3JhcC50cnVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ4LCAxMjMsIDE0MSwgMC4wMyk7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgZGl2LmVtcHR5X2VudHJ5X2l0ZW1fd3JhcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwgNTQsIDY5LCAwLjg4KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuXG4gIGRpdi5lbnRyeV9pdGVtX3dyYXA6aG92ZXIge1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyLCAxMDgsIDE0OSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMzgsIDQ4LCAwLjg4KTtcbiAgICBib3gtc2hhZG93OiAwcHggMC41cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gICAgYm90dG9tOiAwLjVweDtcbiAgfVxuXG5cbiAgZGl2LmVtcHR5X2VudHJ5X2l0ZW1fd3JhcCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICBpbnB1dC5uZXdfZW50cnlfaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDE2LCAyMCwgMjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggcmdiKDksIDE1LCAxOSk7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYigxODcsIDIwMiwgMjEyKTtcbiAgICBmb250LXNpemU6IDEuM2VtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIGkuaGlkZGVuLmljb25faW5mby5kZWxldGVfX3RvZG8ge1xuICAgIHJpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBidXR0b24ubmV3X2VudHJ5X2J0biB7XG4gICAgdG9wOiAzMnB4O1xuICAgIGxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGRpdi53cmFwLWhvbWUtbGlua3Mge1xuICAgIHRvcDogNDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBkaXYud3JhcF9ob21lX19pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDExMywgOTYsIDAuNjkpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgcGFkZGluZzogNTBweCAzMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxufVxuXG4vKiA9PT09PT09PT09PSBUT0FTVEVSID09PT09PT09PT09PT09Ki9cbi8qIGJhc2VkIG9uIGFuZ3VsYXItdG9hc3RyIGNzcyBodHRwczovL2dpdGh1Yi5jb20vRm94YW5keHNzL2FuZ3VsYXItdG9hc3RyL2Jsb2IvY2I1MDhmZTY4MDFkNmIyODhkM2FmYzUyNWJiNDBmZWUxYjEwMTY1MC9kaXN0L2FuZ3VsYXItdG9hc3RyLmNzcyAqL1xuXG4vKiBwb3NpdGlvbiAqL1xuLnRvYXN0LWNlbnRlci1jZW50ZXIge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi50b2FzdC10b3AtY2VudGVyIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9hc3QtYm90dG9tLWNlbnRlciB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvYXN0LXRvcC1mdWxsLXdpZHRoIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2FzdC10b3AtbGVmdCB7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMTJweDtcbn1cbi50b2FzdC10b3AtcmlnaHQge1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xufVxuLnRvYXN0LWJvdHRvbS1yaWdodCB7XG4gIHJpZ2h0OiAxMnB4O1xuICBib3R0b206IDEycHg7XG59XG4udG9hc3QtYm90dG9tLWxlZnQge1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDEycHg7XG59XG5cbi8qIHRvYXN0IHN0eWxlcyA6IEhJRERFTiovXG4udG9hc3QtdGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50b2FzdC1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi50b2FzdC1tZXNzYWdlIGEsXG4udG9hc3QtbWVzc2FnZSBsYWJlbCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnRvYXN0LW1lc3NhZ2UgYTpob3ZlciB7XG4gIGNvbG9yOiAjQ0NDQ0NDO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogLTAuM2VtO1xuICB0b3A6IC0wLjNlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZmZmZjtcbiAgLyogb3BhY2l0eTogMC44OyAqL1xufVxuLnRvYXN0LWNsb3NlLWJ1dHRvbjpob3Zlcixcbi50b2FzdC1jbG9zZS1idXR0b246Zm9jdXMge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi8qQWRkaXRpb25hbCBwcm9wZXJ0aWVzIGZvciBidXR0b24gdmVyc2lvblxuIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxuIElmIHlvdSB3YW50IHRoZSBhbmNob3IgdmVyc2lvbiwgaXQgcmVxdWlyZXMgYGhyZWY9XCIjXCJgLiovXG5idXR0b24udG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuLnRvYXN0LWNvbnRhaW5lciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cbi50b2FzdC1jb250YWluZXIgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4udG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgMCA2cHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9wYWNpdHk6IDAuNyU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDE1cHggY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IHJnYmEoMTMsIDM4LCA0OCwgMC44MSk7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0cjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2luZm8tY2lyY2xlLnN2ZyAqL1xuLnRvYXN0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00yNTYgOEMxMTkuMDQzIDggOCAxMTkuMDgzIDggMjU2YzAgMTM2Ljk5NyAxMTEuMDQzIDI0OCAyNDggMjQ4czI0OC0xMTEuMDAzIDI0OC0yNDhDNTA0IDExOS4wODMgMzkyLjk1NyA4IDI1NiA4em0wIDExMGMyMy4xOTYgMCA0MiAxOC44MDQgNDIgNDJzLTE4LjgwNCA0Mi00MiA0Mi00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyem01NiAyNTRjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtODhjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoMTJ2LTY0aC0xMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg2NGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjEwMGgxMmM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjI0eicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL3RpbWVzLWNpcmNsZS5zdmcgKi9cbi50b2FzdC1lcnJvciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTEyMS42IDMxMy4xYzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMzggMzc3LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwyNTYgMzEybC02NS4xIDY1LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwxMzQuNCAzMzhjLTQuNy00LjctNC43LTEyLjMgMC0xN2w2NS42LTY1LTY1LjYtNjUuMWMtNC43LTQuNy00LjctMTIuMyAwLTE3bDM5LjYtMzkuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsNjUgNjUuNyA2NS4xLTY1LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDM5LjYgMzkuNmM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzEyIDI1Nmw2NS42IDY1LjF6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvY2hlY2suc3ZnICovXG4udG9hc3Qtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2V4Y2xhbWF0aW9uLXRyaWFuZ2xlLnN2ZyAqL1xuLnRvYXN0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyB3aWR0aD0nNTc2JyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU1LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTEgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6TTI4OCAzNTRjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHonLyUzRSUzQy9zdmclM0VcIik7XG59XG4udG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1jZW50ZXIgLm5neC10b2FzdHIsXG4udG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1jZW50ZXIgLm5neC10b2FzdHIge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4udG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyLFxuLnRvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tZnVsbC13aWR0aCAubmd4LXRvYXN0ciB7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubmd4LXRvYXN0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzAzMDM7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnRvYXN0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFBMzUxO1xufVxuLnRvYXN0LWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JEMzYyRjtcbn1cbi50b2FzdC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGOTZCNDtcbn1cbi50b2FzdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTQwNjtcbn1cbi50b2FzdC1wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMC40O1xufVxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDI0MHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgIHdpZHRoOiAxMWVtO1xuICB9XG4gIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcmlnaHQ6IC0wLjJlbTtcbiAgICB0b3A6IC0wLjJlbTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjQxcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggNTBweDtcbiAgICB3aWR0aDogMThlbTtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgIHJpZ2h0OiAtMC4yZW07XG4gICAgdG9wOiAtMC4yZW07XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XG4gICAgd2lkdGg6IDI1ZW07XG4gIH1cbn1cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiA9PT09PT09PT09PSBQQUdFID09PT09PT09PT09PT09ICovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuaHRtbCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuYm9keSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBmb250OiAxNHB4IFwiTHVjaWRhIEdyYW5kZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDI4LCA0NSwgNTQpLCByZ2IoMTcsIDI3LCAzMikpIG5vLXJlcGVhdCBmaXhlZDtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTJweDtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjUpO1xufVxuXG4vKiA9PT09PT09PT09PSBOQVZCQVIgLSBSQURJQUwgTUVOVSA9PT09PT09PT09PT09PSAqL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5kaXYud3JhcF9fbmF2YmFyLWJyYW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbmRpdiNyYWRpYWwtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuZGl2LmF2YXRhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogQ2hlY2sgcG9zaXRpb24gaW5zaWRlIG5hdmJhciAqL1xuICBsZWZ0OiA0MHB4O1xuICBib3R0b206IDQwcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzQ4NjA2YjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIsIGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIsIGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAgMCA3cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIC1tb3otYm94LXNoYWRvdzogIDAgN3B4IDIwcHggIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYm94LXNoYWRvdzogIDAgN3B4IDIwcHggIHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuXG5kaXYud3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3BhY2l0eTogMTA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogIDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC1tb3otYm94LXNoYWRvdzogIDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJveC1zaGFkb3c6ICAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmaWx0ZXI6IHVybChcIiNmaWx0ZXJcIik7XG4gIC13ZWJraXQtZmlsdGVyOiB1cmwoXCIjZmlsdGVyXCIpO1xufVxuXG5kaXYud3JhcCAuYmxvYiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBBdmF0YXIgZGltZW5zaW9ucyovXG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5cbmRpdi53cmFwID4gLmJsb2I6bm90KFtmb3I9XCJjaGVja2luZ1wiXSkge1xuICAvKiBJbml0aWFsIGRpbWVudGlvbnMgb2YgZWFjaCBidXR0b25zICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogNDVweDtcbiAgYm90dG9tOiA0NXB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5kaXYud3JhcCA+IGEuYmxvYjpub3QoW2Zvcj1cImNoZWNraW5nXCJdKSB7XG4gIGNvbG9yOiAjMGUyNjJlO1xufVxuXG5kaXYud3JhcCA+IGEuYmxvYjpub3QoW2Zvcj1cImNoZWNraW5nXCJdKTpob3ZlciB7XG4gIGNvbG9yOiAjYWRjMGMzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjQ0OTU3O1xufVxuXG5pLmZhcy5uYXYtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDFlbTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cblxuXG5pLmZhcy5mYS1jYW1lcmEtcmV0cm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGNvbG9yOiByZ2JhKDE0NywgMTc1LCAxOTMsIDAuNik7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbmkuZmFzLmZhLWNhbWVyYS1yZXRybzpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTY4LCAxOTcsIDIxNSk7XG59XG5cbmxhYmVsW2Zvcj1cImF2YXRhcklucHV0XCJdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTBweDtcbiAgYm90dG9tOiAtMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDU5LCA3NSwgMC40KTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuZGl2LndyYXAgPiAjY2hlY2tpbmd+IC5ibG9iIHtcbiAgei1pbmRleDogMTA7XG59XG4vKiBmaXJzdCBjaGlsZDogaGlkZGVuIGNoZWNrYm94ICovXG5cbi8qIHNlY29uZCBjaGlsZDogc2V0dGluZ3MgYnV0dG9uICovXG5kaXYud3JhcCA+ICNjaGVja2luZyB+IC5ibG9iOm50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogNC41ZW07XG59XG4vKiBzZWNvbmQgY2hpbGQ6IHBsYW5uZXIgYnV0dG9uICovXG5kaXYud3JhcCA+ICNjaGVja2luZyB+IC5ibG9iOm50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDRlbTtcbiAgYm90dG9tOiA0ZW07XG59XG4vKiBzZWNvbmQgY2hpbGQ6IGxvZ291dCBidXR0b24gKi9cbmRpdi53cmFwID4gI2NoZWNraW5nIH4gLmJsb2I6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNC41ZW07XG4gIGJvdHRvbTogMHB4O1xufVxuXG5pLmZhcy5uYXYtYnRuLmZhLWRvb3Itb3BlbiB7XG4gIGNvbG9yOiAjNTE2Zjg2O1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuI2xvZ291dCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDNlbSAhaW1wb3J0YW50O1xuICBib3R0b206IDNlbTtcbn1cblxuI2xhYmVsX2RlbGV0ZVRvZG9zIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDI2cHg7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG5cbmkubWVudV9kZWxldGUuZmFzLmZhLXRyYXNoLWFsdCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogcmdiYSgyMDUsIDkyLCA5MiwgMC4yOSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5pLm1lbnVfZGVsZXRlLmZhcy5mYS10cmFzaC1hbHQ6aG92ZXIge1xuICBjb2xvcjogcmdiKDIwNSwgOTIsIDkyKTtcbn1cblxuI2RlbGV0ZVRvZG9zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2RlbGV0ZVRvZG9zOmNoZWNrZWQgfiBpIHtcbiAgY29sb3I6IHJnYigyMDUsIDkyLCA5Mik7XG59XG5cblxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT09PT09IENPTlRBSU5FUlMgPT09PT09PT09PT09PT0gKi9cblxuZGl2LmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG59XG5cbmRpdi53cmFwX19lcnJvcl9tc2cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuZGl2Lmp1bWJvdHJvbiB7XG4gIGhlaWdodDogMTgwcHg7XG59XG5cbmRpdi5tYWluX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIG1pbi13aWR0aDogNjQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHggMjBweCAzcHggMjBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDc1MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG5kaXYubGlzdF93cmFwIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbmRpdi5pbnB1dF93cmFwIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvdHRvbTogNXB4O1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuZGl2LndyYXAtaG9tZS1saW5rcyB7XG4gIHRvcDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbmRpdi53cmFwX2hvbWVfX2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDM4LCAxMTMsIDk2LCAwLjY5KTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi53cmFwX2hvbWVfX2ljb246aG92ZXIge1xuICBib3gtc2hhZG93OiAgMHB4IDNweCAzMHB4IDVweCByZ2JhKDgsIDExLCAxNywgMC45Mik7XG59XG5kaXYuZW50cnlfaXRlbV93cmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgMjExLCAyMjksIDAuMDMpO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoNTIsIDcyLCA5MiwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5lbnRyeV9pdGVtX3dyYXAudHJ1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDgsIDEyMywgMTQxLCAwLjAzKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LmVtcHR5X2VudHJ5X2l0ZW1fd3JhcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjgsIDU0LCA2OSwgMC44OCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbmRpdi5lbnRyeV9pdGVtX3dyYXA6aG92ZXIge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMiwgMTA4LCAxNDkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAzOCwgNDgsIDAuODgpO1xuICBib3gtc2hhZG93OiAwcHggMC41cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGJvdHRvbTogMC41cHg7XG59XG5cblxuZGl2LmVudHJ5X2l0ZW1fd3JhcC50cnVlOmhvdmVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LCAxNDcsIDE2NSwgMC4wNik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvdHRvbTogMC41cHg7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT09PT09IERSQUcgQU5JTUFUSU9OID09PT09PT09PT09PT09ICovXG5cblxuLyogQW5pbWF0ZSBpdGVtcyBhcyB0aGV5J3JlIGJlaW5nIHNvcnRlZC4gKi9cbi5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5jZGstZHJhZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cblxuaS5mYS1ncmlwLWxpbmVzLmNkay1kcmFnLWhhbmRsZSB7XG4gIGNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMjgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB6LWluZGV4OiA5OTtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4vKiBBbmltYXRlIGFuIGl0ZW0gdGhhdCBoYXMgYmVlbiBkcm9wcGVkLiAqL1xuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuXG5kaXYuZW1wdHlfZW50cnlfbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbmRpdi5lbXB0eV9lbnRyeV9sYWJlbDpob3ZlciB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiKDM1LCA4NiwgMTEwKTtcbn1cblxuLyogPT09PT09PT09PT0gVEVYVFMgPT09PT09PT09PT09PT0gKi9cblxuc3ZnLmJpZy1sb2dvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaDMudGl0bGVfaG9tZV9faWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbn1cblxuc3Bhbi5lcnJvcl9tc2cudGV4dC1jZW50ZXIgIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMzksIDQ3LCAwLjg3KTtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG59XG5cbmRpdi50b2RheV9tZXNzYWdlID4gc3Bhbi5lcnJvcl9tc2cudGV4dC1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIzcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5zcGFuLmFkZFRvZG9fcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSg3OSwgOTYsIDEwMSwgMC4zMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuc3Bhbi53cmFwX19pY29uX2luZm8tZWRpdCB7XG4gIHJpZ2h0OiA5MHB4O1xufVxuXG5zcGFuLndyYXBfX2ljb25faW5mby1tZW51IHtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbnAud2VsY29tZS10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxLjZlbTtcbn1cblxuLyogPT09PT09PT09PT0gTElOS1MgPT09PT09PT09PT09PT0gKi9cblxuYSB7XG4gIGNvbG9yOiAjMDBCN0ZGO1xufVxuYS5uYXZiYXItYnJhbmQge1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMTBweCBibGFjaztcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMwcHg7XG4gIGJvdHRvbTogLTMwcHg7XG59XG5cbnN2Zy5iaWctbG9nbyA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5wLnNpZ251cC1pbnZpdGUgPiBzcGFuID4gYSwgcC5sb2dpbi1pbnZpdGUgPiBzcGFuID4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbnAuc2lnbnVwLWludml0ZSA+IHNwYW4gPiBhOmhvdmVyLCBwLmxvZ2luLWludml0ZSA+IHNwYW4gPiBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwQjdGRjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyogPT09PT09PT09PT0gTElTVFMgPT09PT09PT09PT09PT0gKi9cbnVsLm5hdmJhci1uYXYge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxubGkubmF2LWl0ZW0ge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4vKiA9PT09PT09PT09PSBGT1JNUyA9PT09PT09PT09PT09PSAqL1xuXG4uYXBpX3Rlc3Qge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbiNjcmVhdGVfcmVhZCB7XG4gIHRvcDogN3B4O1xuICByaWdodDogMjUwcHg7XG59XG4jdXBkYXRlIHtcbiAgdG9wOiA3cHg7XG4gIHJpZ2h0OiAxNDBweDtcbn1cbiNkZWxldGUge1xuICB0b3A6IDdweDtcbiAgcmlnaHQ6IDMwcHg7XG59XG5cbmZvcm0jbG9naW5Gb3JtLCBmb3JtI3NpZ251cEZvcm0ge1xuICB3aWR0aDogNDUwcHg7XG59XG5cblxuZGl2W2NsYXNzPVwiZm9ybS1ncm91cFwiXSA+IGlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMSwgMzksIDQ3LCAwLjgpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI0MywgMjQzLCAwLjc2KTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMmE0MTRkO1xufVxuXG5kaXZbY2xhc3M9XCJmb3JtLWdyb3VwXCJdID4gaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCAzOSwgNDcsIDAuNTEpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI0MywgMjQzLCAwLjc2KTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjYjRiNGI0O1xufVxuXG5pbnB1dC5uZXdfZW50cnlfaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICByZ2IoMTYsIDIwLCAyMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IHJnYig5LCAxNSwgMTkpO1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIGNvbG9yOiByZ2IoMTg3LCAyMDIsIDIxMik7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwMHB4O1xufVxuXG5pbnB1dC5uZXdfZW50cnlfaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigzNSwgODYsIDExMCk7XG59XG5cbmlucHV0Lm5ld19lbnRyeV9pbnB1dC5lbXB0eSB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiKDExMCwgNTMsIDQxKTtcbn1cblxuaW5wdXQubmV3X2VudHJ5X2lucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDExMywxMzIsMTM1LDAuMjUpO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5pbnB1dC5lbnRyeV9sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDE4LCAyMywgMC4xKTtcbiAgY29sb3I6IHJnYigxOTMsIDIxMSwgMjE2KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB3aWR0aDogNjAlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDYwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cblxuXG5pbnB1dC5lbnRyeV9sYWJlbDpmb2N1cyB7XG4gIGJvcmRlcjpyZ2IoMTkzLCAyMTEsIDIxNik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5pbnB1dC5lbnRyeV9sYWJlbDpyZWFkLW9ubHkge1xuICBjb2xvcjogcmdiKDE5MywgMjExLCAyMTYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQuZW50cnlfbGFiZWwudHJ1ZTpyZWFkLW9ubHkge1xuICBjb2xvcjogcmdiKDczLCA4OSwgOTQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYnV0dG9uLmFsbF9idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuYnV0dG9uLm5ld19lbnRyeV9idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzJweDtcbiAgbGVmdDogMTdweDtcbn1cblxuYnV0dG9uLndyYXBfX2ljb25faW5mbywgc3Bhbi53cmFwX19pY29uX2luZm8ud3JhcF9faWNvbl9pbmZvLWVkaXQge1xuICBmb250LXNpemU6IDEuN2VtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbmJ1dHRvbiNsb2dpbiwgYnV0dG9uI3NpZ251cCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjcxNjA7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYnV0dG9uI2xvZ2luOmhvdmVyLCBidXR0b24jc2lnbnVwOmhvdmVyIHtcbiAgYm90dG9tOiAycHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5idXR0b24ud3JhcF9faWNvbl9pbmZvLXJlb3JkZXIge1xuICByaWdodDogMjBweDtcbn1cblxuYnV0dG9uLmhpZGRlbi53cmFwX19pY29uX2luZm8tLWNoZWNrIHtcbiAgbGVmdDogMTVweDtcbn1cblxuYnV0dG9uLmhpZGRlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLyogPT09PT09PT09PT0gSUNPTlMgPT09PT09PT09PT09PT0gKi9cblxuaS5ob21lX19pY29uIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuXG5pLmljb25faW5mby5mYXMuZmEtZWxsaXBzaXMtdiB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbmkuZmEtY2hlY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbmkuaWNvbl9pbmZvLmRlbGV0ZV9fdG9kbyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgY29sb3I6ICNjZDVjNWM7XG59XG5cbmkuZmEtY2hlY2s6aG92ZXIsIGkuZmEtY2hlY2sudHJ1ZSB7XG4gIGNvbG9yOiByZ2IoNjcsIDE3MCwgMTA2KTtcbn1cblxuaS5mYS1wZW5jaWwtYWx0OmhvdmVye1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG59XG5cbmkuZmEtcGx1cyB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiAjMTY2Yzk1O1xufVxuXG5pLmFkZFRvZG9fcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzE2NmM5NTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyN3B4O1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuaS5pY29uX2luZm8ge1xuICBjb2xvcjogcmdiYSgxOCwgNTMsIDYxLCAwLjQ0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuLyogPT09PT09PT09PT0gQk9PVFNUUkFQIE9WRVJSSURFID09PT09PT09PT09PT09ICovXG50ZXh0YXJlYTpmb2N1cyxcbmE6Zm9jdXMsXG5kaXY6Zm9jdXMsXG5idXR0b246Zm9jdXMsXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcbi51bmVkaXRhYmxlLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG50ZXh0YXJlYSxcbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdLFxuaW5wdXRbdHlwZT1cInRleHRcIl0sXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4udW5lZGl0YWJsZS1pbnB1dHtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qID09PT09PT09PT09IEVSUk9SIE1FU1NBR0VTID09PT09PT09PT09PT09ICovXG5wcmUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mbinina/Desktop/Programming/BackEnd/NodeJS/CSCI E31(Node.js)/assignment-6-ramarolahy/frontend/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map