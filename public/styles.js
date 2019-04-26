(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@media only screen and (max-width: 900px) {\n  div.wrap__navbar-brand {\n    position: relative;\n    width: 300px;\n  }\n\n  div#radial-container {\n    position: fixed;\n    left: 0px;\n    width: 1em !important;\n    height: 1em !important;\n    bottom: 0px;\n    border-radius: 50%;\n  }\n  div.avatar {\n    position: absolute;\n    /* Check position inside navbar */\n    left: 15px !important;\n    bottom: 15px !important;\n    width: 80px !important;\n    height: 80px !important;\n    border: 3px solid #48606b;\n  }\n\n  div.wrap {\n    position: absolute;\n    z-index: 0;\n    left: 0;\n    bottom: 0;\n    width: 80px !important;\n    height: 80px !important;\n    border-radius: 50%;\n    opacity: 10;\n    box-shadow:  0px 0px 20px rgba(0, 0, 0, 0.5);\n    filter: url(\"#filter\");\n    -webkit-filter: url(\"#filter\");\n  }\n\n\n  i.fas.nav-btn {\n    position: absolute;\n    font-size: 1.1em !important;\n    color: rgba(81, 111, 134, 0.8) !important;\n    top: 20%;\n    left: 50%;\n    background-color: transparent;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n  }\n\n  i.fa-check.false:hover {\n    color: rgba(18, 53, 61, 0.44);\n  }\n\n}\n\n@media only screen and (max-width: 600px) {\n  body {\n    padding-top: 0px !important;\n    padding-bottom: 50px;\n    overflow-y: scroll;\n    font: 1em \"Lucida Grande\", Helvetica, Arial, sans-serif;\n    background: linear-gradient(rgb(28, 45, 54), rgb(17, 27, 32)) no-repeat fixed;\n  }\n\n  form#loginForm, form#signupForm {\n    width: 90% !important;\n  }\n\n  .svg_path {\n    font-size: .1em !important;\n  }\n\n  p.welcome-text {\n    padding-top: 0px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    font-size: 1.2em !important;\n  }\n\n  div.card.bg-transparent {\n    padding: 0px !important;\n  }\n\n\n  /* second child: settings button */\n  div.wrap > #checking ~ .blob:nth-child(2) {\n    left: 3em !important;\n    bottom: 0px;\n  }\n  /* second child: planner button */\n  div.wrap > #checking ~ .blob:nth-child(3) {\n    left: 6em !important;\n    bottom: 0px;\n  }\n  /* second child: logout button */\n  div.wrap > #checking ~ .blob:nth-child(4) {\n    left: 9em !important;\n    bottom: 0px;\n  }\n  /*  ============ TODAY ================*/\n\n  div.auth_wrap {\n      padding-top: 15% !important;\n  }\n\n  div.main_container {\n    background-color: rgba(0, 0, 0, 0.09);\n    padding: 15px 5px 120px 5px !important;\n    min-width: 100% !important;\n    width: 100% !important;\n    max-height: 100vh !important;\n    overflow-y: scroll !important;\n    position: absolute;\n  }\n\n  div.list_wrap {\n    padding-bottom: 50px;\n  }\n\n  div.input_wrap {\n    width: 100% !important;\n    height: 70px;\n    bottom: 5px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    margin-bottom: 20px;\n    position: fixed;\n  }\n\n  div.wrap-home-links {\n    bottom: 10% !important;\n    position: relative;\n    height: 300px;\n  }\n\n  div.wrap_home__icon {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-color: rgba(38, 113, 96, 0.69);\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    width: 300px;\n    padding: 50px 30px;\n    height: auto;\n    cursor: pointer;\n  }\n\n  div.wrap_home__icon:hover {\n    box-shadow:  0px 3px 30px 5px rgba(8, 11, 17, 0.92);\n  }\n  div.entry_item_wrap,  div.entry_item_wrap.true {\n    background-color: rgba(68, 211, 229, 0.03);\n    border: 0.5px solid rgba(52, 72, 92, 0.6);\n    border-radius: 5px;\n    width: 100% !important;\n    height: 60px;\n    margin-top: 10px;\n    position: relative;\n  }\n\n  div.entry_item_wrap.true {\n    background-color: rgba(48, 123, 141, 0.03);\n    border: none;\n  }\n\n  div.empty_entry_item_wrap {\n    background-color: rgba(28, 54, 69, 0.88);\n    border: none;\n    border-radius: 5px;\n    width: 600px;\n    height: 60px;\n    margin-top: 10px;\n    position: relative;\n  }\n\n\n  div.entry_item_wrap:hover {\n    border: 0.5px solid rgb(22, 108, 149);\n    background-color: rgba(13, 38, 48, 0.88);\n    box-shadow: 0px 0.5px 7px rgba(0, 0, 0, 0.26);\n    bottom: 0.5px;\n  }\n\n\n  div.empty_entry_item_wrap {\n    width: 100% !important;\n    height: 60px;\n    margin-top: 10px;\n    position: relative;\n  }\n\n  input.new_entry_input {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    display: none;\n    background-color:  rgb(16, 20, 22);\n    border-radius: 5px;\n    box-shadow: 0px 2px 15px rgb(9, 15, 19);\n    padding-left: 60px !important;\n    color: rgb(187, 202, 212);\n    font-size: 1.3em !important;\n    height: 60px !important;\n    width: 100% !important;\n  }\n\n  button.hidden.wrap__icon_info-delete {\n    right: 50px !important;\n  }\n\n  button.new_entry_btn {\n    top: 32px;\n    left: 10px !important;\n  }\n\n  div.wrap-home-links {\n    top: 40%;\n    position: relative;\n    height: auto;\n  }\n\n  div.wrap_home__icon {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-color: rgba(38, 113, 96, 0.69);\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    width: 100px;\n    padding: 50px 30px;\n    height: auto;\n    cursor: pointer;\n  }\n\n}\n\n/* =========== TOASTER ==============*/\n\n/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles : HIDDEN*/\n\n.toast-title {\n  display: none;\n  font-weight: bold;\n}\n\n.toast-message {\n  font-size: 1em;\n  word-wrap: break-word;\n}\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n\n.toast-container * {\n  box-sizing: border-box;\n}\n\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: auto;\n  border-radius: 5px;\n  opacity: 0.7%;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px rgba(13, 38, 48, 0.81);\n  color: #FFFFFF;\n}\n\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n.toast-success {\n  background-color: #51A351;\n}\n\n.toast-error {\n  background-color: #BD362F;\n}\n\n.toast-info {\n  background-color: #2F96B4;\n}\n\n.toast-warning {\n  background-color: #F89406;\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n\n/* ================================ */\n\n/* =========== PAGE ============== */\n\n/* ================================ */\n\nhtml {\n  min-height: 100vh;\n}\n\nbody {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  overflow-y: scroll;\n  font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\n  background: linear-gradient(rgb(28, 45, 54), rgb(17, 27, 32)) no-repeat fixed;\n}\n\n*::-webkit-scrollbar {\n  display: none;\n  width: 12px;\n}\n\n*::-webkit-scrollbar-track {\n  background: transparent;\n  border-radius: 10px;\n}\n\n*::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);\n}\n\n/* =========== NAVBAR - RADIAL MENU ============== */\n\n/* ===================================== */\n\ndiv.wrap__navbar-brand {\n  position: relative;\n  width: 300px;\n}\n\ndiv#radial-container {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n}\n\ndiv.avatar {\n  position: absolute;\n  /* Check position inside navbar */\n  left: 40px;\n  bottom: 40px;\n  width: 130px;\n  height: 130px;\n  border: 3px solid #48606b;\n  border-radius: 50%;\n  z-index: 99;\n  cursor: pointer;\n  background-position: center, center; /* Center the image */\n  background-repeat: no-repeat, no-repeat; /* Do not repeat the image */\n  background-size: cover, cover; /* Resize the background image to cover the entire container */\n  box-shadow:  0 7px 20px  rgba(0, 0, 0, 0.7);\n}\n\ndiv.wrap {\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  bottom: 0;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  opacity: 10;\n  box-shadow:  0px 0px 20px rgba(0, 0, 0, 0.5);\n  filter: url(\"#filter\");\n  -webkit-filter: url(\"#filter\");\n}\n\ndiv.wrap .blob {\n  display: block;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  position: absolute;\n  /* Avatar dimensions*/\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n}\n\ndiv.wrap > .blob:not([for=\"checking\"]) {\n  /* Initial dimentions of each buttons */\n  position: absolute;\n  z-index: 0;\n  width: 50px;\n  height: 50px;\n  left: 45px;\n  bottom: 45px;\n  font-size: 30px;\n}\n\ndiv.wrap > a.blob:not([for=\"checking\"]) {\n  color: #0e262e;\n}\n\ndiv.wrap > a.blob:not([for=\"checking\"]):hover {\n  color: #adc0c3;\n  border: 1px solid #244957;\n}\n\ni.fas.nav-btn {\n  position: absolute;\n  font-size: 1em;\n  top: 20%;\n  left: 50%;\n  background-color: transparent;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\ni.fas.fa-camera-retro {\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  color: rgba(147, 175, 193, 0.6);\n  font-size: 1.5em;\n}\n\ni.fas.fa-camera-retro:hover {\n  color: rgb(168, 197, 215);\n}\n\nlabel[for=\"avatarInput\"] {\n  position: absolute;\n  left: -10px;\n  bottom: -10px;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: rgba(47, 59, 75, 0.4);\n  width: 40px;\n  height: 40px;\n}\n\ndiv.wrap > #checking~ .blob {\n  z-index: 10;\n}\n\n/* first child: hidden checkbox */\n\n/* second child: settings button */\n\ndiv.wrap > #checking ~ .blob:nth-child(2) {\n  left: 150px;\n  bottom: 0px;\n}\n\n/* second child: planner button */\n\ndiv.wrap > #checking ~ .blob:nth-child(3) {\n  left: 240px;\n  bottom: 0px;\n}\n\n/* second child: logout button */\n\ndiv.wrap > #checking ~ .blob:nth-child(4) {\n  left: 330px;\n  bottom: 0px;\n}\n\n/* ===================================== */\n\n/* ===================================== */\n\n/* =========== CONTAINERS ============== */\n\ndiv.container {\n  position: relative;\n  top: 0px;\n}\n\ndiv.wrap__error_msg {\n  position: relative;\n}\n\ndiv.jumbotron {\n  height: 180px;\n}\n\ndiv.main_container {\n  background-color: rgba(0, 0, 0, 0.09);\n  min-width: 640px;\n  border-radius: 10px;\n  padding: 5px 20px 3px 20px;\n  width: auto;\n  min-height: 750px;\n  overflow-y: scroll;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\ndiv.list_wrap {\n  padding-bottom: 50px;\n}\n\ndiv.input_wrap {\n  width: 600px;\n  height: 70px;\n  bottom: 5px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  margin-bottom: 20px;\n  position: fixed;\n}\n\ndiv.wrap-home-links {\n  top: 50%;\n  position: relative;\n  height: 300px;\n}\n\ndiv.wrap_home__icon {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  background-color: transparent;\n  border: 2px solid rgba(38, 113, 96, 0.69);\n  border-radius: 7px;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  width: 300px;\n  padding: 50px 30px;\n  height: auto;\n  cursor: pointer;\n}\n\ndiv.wrap_home__icon:hover {\n  box-shadow:  0px 3px 30px 5px rgba(8, 11, 17, 0.92);\n}\n\ndiv.entry_item_wrap {\n  background-color: rgba(68, 211, 229, 0.03);\n  border: 0.5px solid rgba(52, 72, 92, 0.6);\n  border-radius: 5px;\n  width: 600px;\n  height: 60px;\n  margin-top: 10px;\n  position: relative;\n  cursor: pointer;\n}\n\ndiv.entry_item_wrap.true {\n  background-color: rgba(48, 123, 141, 0.03);\n  border: none;\n  border-radius: 5px;\n  width: 600px;\n  height: 60px;\n  margin-top: 10px;\n  position: relative;\n  cursor: pointer;\n}\n\ndiv.empty_entry_item_wrap {\n  background-color: rgba(28, 54, 69, 0.88);\n  border: none;\n  border-radius: 5px;\n  width: 600px;\n  height: 60px;\n  margin-top: 10px;\n  position: relative;\n}\n\ndiv.entry_item_wrap:hover {\n  border: 0.5px solid rgb(22, 108, 149);\n  background-color: rgba(13, 38, 48, 0.88);\n  box-shadow: 0px 0.5px 7px rgba(0, 0, 0, 0.26);\n  bottom: 0.5px;\n}\n\ndiv.entry_item_wrap.true:hover {\n  border: none;\n  background-color: rgba(55, 147, 165, 0.06);\n  box-shadow: none;\n  bottom: 0.5px;\n}\n\n/* ===================================== */\n\n/* ===================================== */\n\n/* =========== DRAG ANIMATION ============== */\n\n/* Animate items as they're being sorted. */\n\n.cdk-drop-list-dragging .cdk-drag {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\ni.fa-grip-lines.cdk-drag-handle {\n  color: rgba(245, 245, 245, 0.28);\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  font-size: 2em;\n  z-index: 99;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n/* Animate an item that has been dropped. */\n\n.cdk-drag-animating {\n  transition: -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\ndiv.empty_entry_label {\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n  padding-left: 60px;\n  cursor: pointer;\n  width: 600px;\n  height: 60px;\n  font-size: 1.2em;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\ndiv.empty_entry_label:hover {\n  border: 0.5px solid rgb(35, 86, 110);\n}\n\n/* =========== TEXTS ============== */\n\nsvg.big-logo {\n  cursor: pointer;\n}\n\nh3.title_home__icon {\n  color: white;\n  font-family: 'Lato', sans-serif;\n}\n\nspan.error_msg.text-center  {\n  background-color: rgba(21, 39, 47, 0.87);\n  padding: 5px 20px;\n  font-size: 1.2em;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n\n}\n\ndiv.today_message > span.error_msg.text-center {\n  position: absolute;\n  top: -23px;\n  width: auto;\n}\n\nspan.addTodo_placeholder {\n  color: rgba(79, 96, 101, 0.31);\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\nspan.wrap__icon_info-edit {\n  right: 90px;\n}\n\nspan.wrap__icon_info-menu {\n  right: 10px;\n}\n\np.welcome-text {\n  padding-top: 0px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 300;\n  font-size: 1.6em;\n}\n\n/* =========== LINKS ============== */\n\na {\n  color: #00B7FF;\n}\n\na.navbar-brand {\n  text-shadow: 0 1px 10px black;\n  font-size: 3em;\n  font-family: 'Pacifico', cursive;\n  position: absolute;\n  left: 30px;\n  bottom: -30px;\n}\n\nsvg.big-logo > a {\n  text-decoration: none;\n}\n\np.signup-invite > span > a, p.login-invite > span > a {\n  text-decoration: none;\n}\n\np.signup-invite > span > a:hover, p.login-invite > span > a:hover {\n  text-decoration: none;\n  color: #00B7FF;\n  font-weight: bolder;\n}\n\n/* =========== LISTS ============== */\n\nul.navbar-nav {\n  padding-bottom: 10px;\n}\n\nli.nav-item {\n  font-size: 1.2em;\n  font-family: 'Lato', sans-serif;\n}\n\n/* =========== FORMS ============== */\n\n.api_test {\n  border: 0.5px solid rgba(255, 255, 255, 0.21);\n  background-color: transparent;\n  border-radius: 7px;\n  padding: 5px 15px;\n  color: white;\n  position: fixed;\n}\n\n#create_read {\n  top: 7px;\n  right: 250px;\n}\n\n#update {\n  top: 7px;\n  right: 140px;\n}\n\n#delete {\n  top: 7px;\n  right: 30px;\n}\n\nform#loginForm, form#signupForm {\n  width: 450px;\n}\n\ndiv[class=\"form-group\"] > input {\n  background: rgba(21, 39, 47, 0.8);\n  color: rgba(255, 243, 243, 0.76);\n  border: 0.5px solid #2a414d;\n}\n\ndiv[class=\"form-group\"] > input:focus {\n  background: rgba(21, 39, 47, 0.51);\n  color: rgba(255, 243, 243, 0.76);\n  border: 0.5px solid #b4b4b4;\n}\n\ninput.new_entry_input {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: none;\n  background-color:  rgb(16, 20, 22);\n  border-radius: 5px;\n  box-shadow: 0px 2px 15px rgb(9, 15, 19);\n  padding-left: 60px;\n  color: rgb(187, 202, 212);\n  font-size: 1.5em;\n  height: 60px;\n  width: 600px;\n}\n\ninput.new_entry_input:focus {\n  border: 0.5px solid rgb(35, 86, 110);\n}\n\ninput.new_entry_input.empty {\n  border: 0.5px solid rgb(110, 53, 41);\n}\n\ninput.new_entry_input::-webkit-input-placeholder {\n  color: rgba(113,132,135,0.25);\n  font-weight: 300;\n}\n\ninput.new_entry_input::-moz-placeholder {\n  color: rgba(113,132,135,0.25);\n  font-weight: 300;\n}\n\ninput.new_entry_input::-ms-input-placeholder {\n  color: rgba(113,132,135,0.25);\n  font-weight: 300;\n}\n\ninput.new_entry_input::placeholder {\n  color: rgba(113,132,135,0.25);\n  font-weight: 300;\n}\n\ninput.entry_label {\n  background-color: rgba(10, 18, 23, 0.1);\n  color: rgb(193, 211, 216);\n  border: none;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  width: 60%;\n  font-size: 1.2em;\n  position: absolute;\n  left: 60px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\ninput.entry_label:focus {\n  border:rgb(193, 211, 216);\n  box-shadow: none;\n}\n\ninput.entry_label:-moz-read-only {\n  color: rgb(193, 211, 216);\n  background-color: transparent;\n}\n\ninput.entry_label:read-only {\n  color: rgb(193, 211, 216);\n  background-color: transparent;\n}\n\ninput.entry_label.true:-moz-read-only {\n  color: rgb(73, 89, 94);\n  background-color: transparent;\n}\n\ninput.entry_label.true:read-only {\n  color: rgb(73, 89, 94);\n  background-color: transparent;\n}\n\nbutton.all_btn {\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  cursor: pointer;\n  font-size: 1.3em;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\nbutton.new_entry_btn {\n  position: absolute;\n  top: 32px;\n  left: 17px;\n}\n\nbutton.wrap__icon_info, span.wrap__icon_info.wrap__icon_info-edit {\n  font-size: 1.7em;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\nbutton#login, button#signup {\n  margin-top: 10px;\n  background-color: #267160;\n  border: none;\n  width: 100%;\n  position: relative;\n}\n\nbutton#login:hover, button#signup:hover {\n  bottom: 2px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n\nbutton.hidden.wrap__icon_info-delete {\n  right: 80px;\n}\n\nbutton.wrap__icon_info-reorder {\n  right: 20px;\n}\n\nbutton.hidden.wrap__icon_info--check {\n  left: 15px;\n}\n\nbutton.hidden {\n  position: absolute;\n  background-color: transparent;\n  border: none;\n}\n\n/* =========== ICONS ============== */\n\ni.home__icon {\n  color: rgba(255, 255, 255, 0.5);\n}\n\ni.icon_info.fas.fa-ellipsis-v {\n  color: rgba(255, 255, 255, 0.5);\n}\n\ni.fa-check {\n  position: relative;\n  left: 15px;\n  top: 15px;\n  font-size: 2em;\n}\n\ni.fa-check:hover, i.fa-check.true {\n  color: rgb(67, 170, 106);\n}\n\ni.fa-pencil-alt:hover{\n  color: cornflowerblue;\n}\n\ni.fa-trash-alt:hover {\n  color: orangered;\n}\n\ni.fa-plus {\n  font-size: 1.3em;\n  color: #166c95;\n}\n\ni.addTodo_placeholder {\n  font-size: 1.3em;\n  color: #166c95;\n  position: absolute;\n  left: 27px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\ni.icon_info {\n  color: rgba(18, 53, 61, 0.44);\n  cursor: pointer;\n}\n\n/* =========== BOOTSTRAP OVERRIDE ============== */\n\ntextarea:focus,\na:focus,\ndiv:focus,\nbutton:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"email\"]:focus,\n.uneditable-input:focus {\n  border: none;\n  box-shadow: none;\n  outline: none;\n}\n\ntextarea,\nbutton[type=\"submit\"],\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\n.uneditable-input{\n  border: none;\n  cursor: pointer;\n}\n\n/* =========== ERROR MESSAGES ============== */\n\npre, h1, h2, h3, h4, h5, h6 {\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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QUNFLCtCQUErQjtBQUNqQzs7QUFHQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBR0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsbUNBQW1DO0VBSW5DLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUlBLGtEQUFrRDs7QUFDbEQ7Ozs7Ozs7O0VBUUUsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7Ozs7OztFQU1FLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBLDhDQUE4Qzs7QUFDOUM7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIGRpdi53cmFwX19uYXZiYXItYnJhbmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cblxuICBkaXYjcmFkaWFsLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMWVtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxZW0gIWltcG9ydGFudDtcbiAgICBib3R0b206IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgZGl2LmF2YXRhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIENoZWNrIHBvc2l0aW9uIGluc2lkZSBuYXZiYXIgKi9cbiAgICBsZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNDg2MDZiO1xuICB9XG5cbiAgZGl2LndyYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9wYWNpdHk6IDEwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogIDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAgMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAgMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBmaWx0ZXI6IHVybChcIiNmaWx0ZXJcIik7XG4gICAgLXdlYmtpdC1maWx0ZXI6IHVybChcIiNmaWx0ZXJcIik7XG4gIH1cblxuXG4gIGkuZmFzLm5hdi1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDEuMWVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYmEoODEsIDExMSwgMTM0LCAwLjgpICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAyMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuXG4gIGkuZmEtY2hlY2suZmFsc2U6aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDE4LCA1MywgNjEsIDAuNDQpO1xuICB9XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGZvbnQ6IDFlbSBcIkx1Y2lkYSBHcmFuZGVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDI4LCA0NSwgNTQpLCByZ2IoMTcsIDI3LCAzMikpIG5vLXJlcGVhdCBmaXhlZDtcbiAgfVxuXG4gIGZvcm0jbG9naW5Gb3JtLCBmb3JtI3NpZ251cEZvcm0ge1xuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zdmdfcGF0aCB7XG4gICAgZm9udC1zaXplOiAuMWVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICBwLndlbGNvbWUtdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgZGl2LmNhcmQuYmctdHJhbnNwYXJlbnQge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cblxuICAvKiBzZWNvbmQgY2hpbGQ6IHNldHRpbmdzIGJ1dHRvbiAqL1xuICBkaXYud3JhcCA+ICNjaGVja2luZyB+IC5ibG9iOm50aC1jaGlsZCgyKSB7XG4gICAgbGVmdDogM2VtICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAwcHg7XG4gIH1cbiAgLyogc2Vjb25kIGNoaWxkOiBwbGFubmVyIGJ1dHRvbiAqL1xuICBkaXYud3JhcCA+ICNjaGVja2luZyB+IC5ibG9iOm50aC1jaGlsZCgzKSB7XG4gICAgbGVmdDogNmVtICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAwcHg7XG4gIH1cbiAgLyogc2Vjb25kIGNoaWxkOiBsb2dvdXQgYnV0dG9uICovXG4gIGRpdi53cmFwID4gI2NoZWNraW5nIH4gLmJsb2I6bnRoLWNoaWxkKDQpIHtcbiAgICBsZWZ0OiA5ZW0gIWltcG9ydGFudDtcbiAgICBib3R0b206IDBweDtcbiAgfVxuICAvKiAgPT09PT09PT09PT09IFRPREFZID09PT09PT09PT09PT09PT0qL1xuXG4gIGRpdi5hdXRoX3dyYXAge1xuICAgICAgcGFkZGluZy10b3A6IDE1JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgZGl2Lm1haW5fY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICAgIHBhZGRpbmc6IDE1cHggNXB4IDEyMHB4IDVweCAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICBkaXYubGlzdF93cmFwIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIGRpdi5pbnB1dF93cmFwIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG5cbiAgZGl2LndyYXAtaG9tZS1saW5rcyB7XG4gICAgYm90dG9tOiAxMCUgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuXG4gIGRpdi53cmFwX2hvbWVfX2ljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOCwgMTEzLCA5NiwgMC42OSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGRpdi53cmFwX2hvbWVfX2ljb246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6ICAwcHggM3B4IDMwcHggNXB4IHJnYmEoOCwgMTEsIDE3LCAwLjkyKTtcbiAgfVxuICBkaXYuZW50cnlfaXRlbV93cmFwLCAgZGl2LmVudHJ5X2l0ZW1fd3JhcC50cnVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCAyMTEsIDIyOSwgMC4wMyk7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDUyLCA3MiwgOTIsIDAuNik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgZGl2LmVudHJ5X2l0ZW1fd3JhcC50cnVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ4LCAxMjMsIDE0MSwgMC4wMyk7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgZGl2LmVtcHR5X2VudHJ5X2l0ZW1fd3JhcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwgNTQsIDY5LCAwLjg4KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuXG4gIGRpdi5lbnRyeV9pdGVtX3dyYXA6aG92ZXIge1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyLCAxMDgsIDE0OSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMzgsIDQ4LCAwLjg4KTtcbiAgICBib3gtc2hhZG93OiAwcHggMC41cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gICAgYm90dG9tOiAwLjVweDtcbiAgfVxuXG5cbiAgZGl2LmVtcHR5X2VudHJ5X2l0ZW1fd3JhcCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICBpbnB1dC5uZXdfZW50cnlfaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDE2LCAyMCwgMjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggcmdiKDksIDE1LCAxOSk7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYigxODcsIDIwMiwgMjEyKTtcbiAgICBmb250LXNpemU6IDEuM2VtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIGJ1dHRvbi5oaWRkZW4ud3JhcF9faWNvbl9pbmZvLWRlbGV0ZSB7XG4gICAgcmlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGJ1dHRvbi5uZXdfZW50cnlfYnRuIHtcbiAgICB0b3A6IDMycHg7XG4gICAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgZGl2LndyYXAtaG9tZS1saW5rcyB7XG4gICAgdG9wOiA0MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIGRpdi53cmFwX2hvbWVfX2ljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOCwgMTEzLCA5NiwgMC42OSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG59XG5cbi8qID09PT09PT09PT09IFRPQVNURVIgPT09PT09PT09PT09PT0qL1xuLyogYmFzZWQgb24gYW5ndWxhci10b2FzdHIgY3NzIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3hhbmR4c3MvYW5ndWxhci10b2FzdHIvYmxvYi9jYjUwOGZlNjgwMWQ2YjI4OGQzYWZjNTI1YmI0MGZlZTFiMTAxNjUwL2Rpc3QvYW5ndWxhci10b2FzdHIuY3NzICovXG5cbi8qIHBvc2l0aW9uICovXG4udG9hc3QtY2VudGVyLWNlbnRlciB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnRvYXN0LXRvcC1jZW50ZXIge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2FzdC1ib3R0b20tY2VudGVyIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG9hc3QtdG9wLWZ1bGwtd2lkdGgge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvYXN0LXRvcC1sZWZ0IHtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuLnRvYXN0LXRvcC1yaWdodCB7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG59XG4udG9hc3QtYm90dG9tLXJpZ2h0IHtcbiAgcmlnaHQ6IDEycHg7XG4gIGJvdHRvbTogMTJweDtcbn1cbi50b2FzdC1ib3R0b20tbGVmdCB7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogMTJweDtcbn1cblxuLyogdG9hc3Qgc3R5bGVzIDogSElEREVOKi9cbi50b2FzdC10aXRsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRvYXN0LW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDFlbTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLnRvYXN0LW1lc3NhZ2UgYSxcbi50b2FzdC1tZXNzYWdlIGxhYmVsIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4udG9hc3QtbWVzc2FnZSBhOmhvdmVyIHtcbiAgY29sb3I6ICNDQ0NDQ0M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAtMC4zZW07XG4gIHRvcDogLTAuM2VtO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xuICAvKiBvcGFjaXR5OiAwLjg7ICovXG59XG4udG9hc3QtY2xvc2UtYnV0dG9uOmhvdmVyLFxuLnRvYXN0LWNsb3NlLWJ1dHRvbjpmb2N1cyB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC40O1xufVxuLypBZGRpdGlvbmFsIHByb3BlcnRpZXMgZm9yIGJ1dHRvbiB2ZXJzaW9uXG4gaU9TIHJlcXVpcmVzIHRoZSBidXR0b24gZWxlbWVudCBpbnN0ZWFkIG9mIGFuIGFuY2hvciB0YWcuXG4gSWYgeW91IHdhbnQgdGhlIGFuY2hvciB2ZXJzaW9uLCBpdCByZXF1aXJlcyBgaHJlZj1cIiNcImAuKi9cbmJ1dHRvbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG4udG9hc3QtY29udGFpbmVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTk5O1xufVxuLnRvYXN0LWNvbnRhaW5lciAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAwIDZweDtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMC43JTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjRweDtcbiAgYm94LXNoYWRvdzogMCAwIDEycHggcmdiYSgxMywgMzgsIDQ4LCAwLjgxKTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4udG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDEycHggIzAwMDAwMDtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvaW5mby1jaXJjbGUuc3ZnICovXG4udG9hc3QtaW5mbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvdGltZXMtY2lyY2xlLnN2ZyAqL1xuLnRvYXN0LWVycm9yIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMTIxLjYgMzEzLjFjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDMzOCAzNzcuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDI1NiAzMTJsLTY1LjEgNjUuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDEzNC40IDMzOGMtNC43LTQuNy00LjctMTIuMyAwLTE3bDY1LjYtNjUtNjUuNi02NS4xYy00LjctNC43LTQuNy0xMi4zIDAtMTdsMzkuNi0zOS42YzQuNy00LjcgMTIuMy00LjcgMTcgMGw2NSA2NS43IDY1LjEtNjUuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsMzkuNiAzOS42YzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMTIgMjU2bDY1LjYgNjUuMXonLyUzRSUzQy9zdmclM0VcIik7XG59XG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9jaGVjay5zdmcgKi9cbi50b2FzdC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvZXhjbGFtYXRpb24tdHJpYW5nbGUuc3ZnICovXG4udG9hc3Qtd2FybmluZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInIHdpZHRoPSc1NzYnIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi50b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWNlbnRlciAubmd4LXRvYXN0cixcbi50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWNlbnRlciAubmd4LXRvYXN0ciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi50b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWZ1bGwtd2lkdGggLm5neC10b2FzdHIsXG4udG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyIHtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5uZ3gtdG9hc3RyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMDMwMztcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4udG9hc3Qtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MUEzNTE7XG59XG4udG9hc3QtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkQzNjJGO1xufVxuLnRvYXN0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkY5NkI0O1xufVxuLnRvYXN0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5NDA2O1xufVxuLnRvYXN0LXByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMjQwcHgpIHtcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDUwcHg7XG4gICAgd2lkdGg6IDExZW07XG4gIH1cbiAgLnRvYXN0LWNvbnRhaW5lciAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICByaWdodDogLTAuMmVtO1xuICAgIHRvcDogLTAuMmVtO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAyNDFweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgIHdpZHRoOiAxOGVtO1xuICB9XG4gIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcmlnaHQ6IC0wLjJlbTtcbiAgICB0b3A6IC0wLjJlbTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgICB3aWR0aDogMjVlbTtcbiAgfVxufVxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT09PT09IFBBR0UgPT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5odG1sIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGZvbnQ6IDE0cHggXCJMdWNpZGEgR3JhbmRlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjgsIDQ1LCA1NCksIHJnYigxNywgMjcsIDMyKSkgbm8tcmVwZWF0IGZpeGVkO1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMnB4O1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuNSk7XG59XG5cbi8qID09PT09PT09PT09IE5BVkJBUiAtIFJBRElBTCBNRU5VID09PT09PT09PT09PT09ICovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbmRpdi53cmFwX19uYXZiYXItYnJhbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuZGl2I3JhZGlhbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5kaXYuYXZhdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBDaGVjayBwb3NpdGlvbiBpbnNpZGUgbmF2YmFyICovXG4gIGxlZnQ6IDQwcHg7XG4gIGJvdHRvbTogNDBweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjNDg2MDZiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciwgY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciwgY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICAwIDdweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgLW1vei1ib3gtc2hhZG93OiAgMCA3cHggMjBweCAgcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBib3gtc2hhZG93OiAgMCA3cHggMjBweCAgcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG5cbmRpdi53cmFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvcGFjaXR5OiAxMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAgMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLW1vei1ib3gtc2hhZG93OiAgMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm94LXNoYWRvdzogIDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGZpbHRlcjogdXJsKFwiI2ZpbHRlclwiKTtcbiAgLXdlYmtpdC1maWx0ZXI6IHVybChcIiNmaWx0ZXJcIik7XG59XG5cbmRpdi53cmFwIC5ibG9iIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIEF2YXRhciBkaW1lbnNpb25zKi9cbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cblxuZGl2LndyYXAgPiAuYmxvYjpub3QoW2Zvcj1cImNoZWNraW5nXCJdKSB7XG4gIC8qIEluaXRpYWwgZGltZW50aW9ucyBvZiBlYWNoIGJ1dHRvbnMgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZWZ0OiA0NXB4O1xuICBib3R0b206IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbmRpdi53cmFwID4gYS5ibG9iOm5vdChbZm9yPVwiY2hlY2tpbmdcIl0pIHtcbiAgY29sb3I6ICMwZTI2MmU7XG59XG5cbmRpdi53cmFwID4gYS5ibG9iOm5vdChbZm9yPVwiY2hlY2tpbmdcIl0pOmhvdmVyIHtcbiAgY29sb3I6ICNhZGMwYzM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNDQ5NTc7XG59XG5cbmkuZmFzLm5hdi1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuXG5cbmkuZmFzLmZhLWNhbWVyYS1yZXRybyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgY29sb3I6IHJnYmEoMTQ3LCAxNzUsIDE5MywgMC42KTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuaS5mYXMuZmEtY2FtZXJhLXJldHJvOmhvdmVyIHtcbiAgY29sb3I6IHJnYigxNjgsIDE5NywgMjE1KTtcbn1cblxubGFiZWxbZm9yPVwiYXZhdGFySW5wdXRcIl0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICBib3R0b206IC0xMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNTksIDc1LCAwLjQpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5kaXYud3JhcCA+ICNjaGVja2luZ34gLmJsb2Ige1xuICB6LWluZGV4OiAxMDtcbn1cbi8qIGZpcnN0IGNoaWxkOiBoaWRkZW4gY2hlY2tib3ggKi9cblxuLyogc2Vjb25kIGNoaWxkOiBzZXR0aW5ncyBidXR0b24gKi9cbmRpdi53cmFwID4gI2NoZWNraW5nIH4gLmJsb2I6bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogMTUwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuLyogc2Vjb25kIGNoaWxkOiBwbGFubmVyIGJ1dHRvbiAqL1xuZGl2LndyYXAgPiAjY2hlY2tpbmcgfiAuYmxvYjpudGgtY2hpbGQoMykge1xuICBsZWZ0OiAyNDBweDtcbiAgYm90dG9tOiAwcHg7XG59XG4vKiBzZWNvbmQgY2hpbGQ6IGxvZ291dCBidXR0b24gKi9cbmRpdi53cmFwID4gI2NoZWNraW5nIH4gLmJsb2I6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogMzMwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT09PT09IENPTlRBSU5FUlMgPT09PT09PT09PT09PT0gKi9cblxuZGl2LmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG59XG5cbmRpdi53cmFwX19lcnJvcl9tc2cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuZGl2Lmp1bWJvdHJvbiB7XG4gIGhlaWdodDogMTgwcHg7XG59XG5cbmRpdi5tYWluX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIG1pbi13aWR0aDogNjQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4IDNweCAyMHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWluLWhlaWdodDogNzUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbmRpdi5saXN0X3dyYXAge1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuZGl2LmlucHV0X3dyYXAge1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm90dG9tOiA1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG5kaXYud3JhcC1ob21lLWxpbmtzIHtcbiAgdG9wOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuZGl2LndyYXBfaG9tZV9faWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMzgsIDExMywgOTYsIDAuNjkpO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogNTBweCAzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LndyYXBfaG9tZV9faWNvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6ICAwcHggM3B4IDMwcHggNXB4IHJnYmEoOCwgMTEsIDE3LCAwLjkyKTtcbn1cbmRpdi5lbnRyeV9pdGVtX3dyYXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCAyMTEsIDIyOSwgMC4wMyk7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSg1MiwgNzIsIDkyLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LmVudHJ5X2l0ZW1fd3JhcC50cnVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgMTIzLCAxNDEsIDAuMDMpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYuZW1wdHlfZW50cnlfaXRlbV93cmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwgNTQsIDY5LCAwLjg4KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuZGl2LmVudHJ5X2l0ZW1fd3JhcDpob3ZlciB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyLCAxMDgsIDE0OSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDM4LCA0OCwgMC44OCk7XG4gIGJveC1zaGFkb3c6IDBweCAwLjVweCA3cHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgYm90dG9tOiAwLjVweDtcbn1cblxuXG5kaXYuZW50cnlfaXRlbV93cmFwLnRydWU6aG92ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTUsIDE0NywgMTY1LCAwLjA2KTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm90dG9tOiAwLjVweDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogPT09PT09PT09PT0gRFJBRyBBTklNQVRJT04gPT09PT09PT09PT09PT0gKi9cblxuXG4vKiBBbmltYXRlIGl0ZW1zIGFzIHRoZXkncmUgYmVpbmcgc29ydGVkLiAqL1xuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmNkay1kcmFnIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG5pLmZhLWdyaXAtbGluZXMuY2RrLWRyYWctaGFuZGxlIHtcbiAgY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC4yOCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbiAgZm9udC1zaXplOiAyZW07XG4gIHotaW5kZXg6IDk5O1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi8qIEFuaW1hdGUgYW4gaXRlbSB0aGF0IGhhcyBiZWVuIGRyb3BwZWQuICovXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG5cbmRpdi5lbXB0eV9lbnRyeV9sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuZGl2LmVtcHR5X2VudHJ5X2xhYmVsOmhvdmVyIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMzUsIDg2LCAxMTApO1xufVxuXG4vKiA9PT09PT09PT09PSBURVhUUyA9PT09PT09PT09PT09PSAqL1xuXG5zdmcuYmlnLWxvZ28ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oMy50aXRsZV9ob21lX19pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5zcGFuLmVycm9yX21zZy50ZXh0LWNlbnRlciAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCAzOSwgNDcsIDAuODcpO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cbn1cblxuZGl2LnRvZGF5X21lc3NhZ2UgPiBzcGFuLmVycm9yX21zZy50ZXh0LWNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjNweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbnNwYW4uYWRkVG9kb19wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDc5LCA5NiwgMTAxLCAwLjMxKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5zcGFuLndyYXBfX2ljb25faW5mby1lZGl0IHtcbiAgcmlnaHQ6IDkwcHg7XG59XG5cbnNwYW4ud3JhcF9faWNvbl9pbmZvLW1lbnUge1xuICByaWdodDogMTBweDtcbn1cblxucC53ZWxjb21lLXRleHQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuXG4vKiA9PT09PT09PT09PSBMSU5LUyA9PT09PT09PT09PT09PSAqL1xuXG5hIHtcbiAgY29sb3I6ICMwMEI3RkY7XG59XG5hLm5hdmJhci1icmFuZCB7XG4gIHRleHQtc2hhZG93OiAwIDFweCAxMHB4IGJsYWNrO1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzBweDtcbiAgYm90dG9tOiAtMzBweDtcbn1cblxuc3ZnLmJpZy1sb2dvID4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbnAuc2lnbnVwLWludml0ZSA+IHNwYW4gPiBhLCBwLmxvZ2luLWludml0ZSA+IHNwYW4gPiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxucC5zaWdudXAtaW52aXRlID4gc3BhbiA+IGE6aG92ZXIsIHAubG9naW4taW52aXRlID4gc3BhbiA+IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDBCN0ZGO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKiA9PT09PT09PT09PSBMSVNUUyA9PT09PT09PT09PT09PSAqL1xudWwubmF2YmFyLW5hdiB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5saS5uYXYtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG5cbi8qID09PT09PT09PT09IEZPUk1TID09PT09PT09PT09PT09ICovXG5cbi5hcGlfdGVzdCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuI2NyZWF0ZV9yZWFkIHtcbiAgdG9wOiA3cHg7XG4gIHJpZ2h0OiAyNTBweDtcbn1cbiN1cGRhdGUge1xuICB0b3A6IDdweDtcbiAgcmlnaHQ6IDE0MHB4O1xufVxuI2RlbGV0ZSB7XG4gIHRvcDogN3B4O1xuICByaWdodDogMzBweDtcbn1cblxuZm9ybSNsb2dpbkZvcm0sIGZvcm0jc2lnbnVwRm9ybSB7XG4gIHdpZHRoOiA0NTBweDtcbn1cblxuXG5kaXZbY2xhc3M9XCJmb3JtLWdyb3VwXCJdID4gaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCAzOSwgNDcsIDAuOCk7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjQzLCAyNDMsIDAuNzYpO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICMyYTQxNGQ7XG59XG5cbmRpdltjbGFzcz1cImZvcm0tZ3JvdXBcIl0gPiBpbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEsIDM5LCA0NywgMC41MSk7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjQzLCAyNDMsIDAuNzYpO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNiNGI0YjQ7XG59XG5cbmlucHV0Lm5ld19lbnRyeV9pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigxNiwgMjAsIDIyKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggcmdiKDksIDE1LCAxOSk7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbiAgY29sb3I6IHJnYigxODcsIDIwMiwgMjEyKTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjAwcHg7XG59XG5cbmlucHV0Lm5ld19lbnRyeV9pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiKDM1LCA4NiwgMTEwKTtcbn1cblxuaW5wdXQubmV3X2VudHJ5X2lucHV0LmVtcHR5IHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMTEwLCA1MywgNDEpO1xufVxuXG5pbnB1dC5uZXdfZW50cnlfaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMTEzLDEzMiwxMzUsMC4yNSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmlucHV0LmVudHJ5X2xhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTgsIDIzLCAwLjEpO1xuICBjb2xvcjogcmdiKDE5MywgMjExLCAyMTYpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHdpZHRoOiA2MCU7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuXG5cbmlucHV0LmVudHJ5X2xhYmVsOmZvY3VzIHtcbiAgYm9yZGVyOnJnYigxOTMsIDIxMSwgMjE2KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmlucHV0LmVudHJ5X2xhYmVsOnJlYWQtb25seSB7XG4gIGNvbG9yOiByZ2IoMTkzLCAyMTEsIDIxNik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dC5lbnRyeV9sYWJlbC50cnVlOnJlYWQtb25seSB7XG4gIGNvbG9yOiByZ2IoNzMsIDg5LCA5NCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5idXR0b24uYWxsX2J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5idXR0b24ubmV3X2VudHJ5X2J0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMnB4O1xuICBsZWZ0OiAxN3B4O1xufVxuXG5idXR0b24ud3JhcF9faWNvbl9pbmZvLCBzcGFuLndyYXBfX2ljb25faW5mby53cmFwX19pY29uX2luZm8tZWRpdCB7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuYnV0dG9uI2xvZ2luLCBidXR0b24jc2lnbnVwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NzE2MDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5idXR0b24jbG9naW46aG92ZXIsIGJ1dHRvbiNzaWdudXA6aG92ZXIge1xuICBib3R0b206IDJweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmJ1dHRvbi5oaWRkZW4ud3JhcF9faWNvbl9pbmZvLWRlbGV0ZSB7XG4gIHJpZ2h0OiA4MHB4O1xufVxuYnV0dG9uLndyYXBfX2ljb25faW5mby1yZW9yZGVyIHtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbmJ1dHRvbi5oaWRkZW4ud3JhcF9faWNvbl9pbmZvLS1jaGVjayB7XG4gIGxlZnQ6IDE1cHg7XG59XG5cbmJ1dHRvbi5oaWRkZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi8qID09PT09PT09PT09IElDT05TID09PT09PT09PT09PT09ICovXG5cbmkuaG9tZV9faWNvbiB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cblxuaS5pY29uX2luZm8uZmFzLmZhLWVsbGlwc2lzLXYge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG5pLmZhLWNoZWNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5cbmkuZmEtY2hlY2s6aG92ZXIsIGkuZmEtY2hlY2sudHJ1ZSB7XG4gIGNvbG9yOiByZ2IoNjcsIDE3MCwgMTA2KTtcbn1cblxuaS5mYS1wZW5jaWwtYWx0OmhvdmVye1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG59XG5cblxuaS5mYS10cmFzaC1hbHQ6aG92ZXIge1xuICBjb2xvcjogb3JhbmdlcmVkO1xufVxuXG5pLmZhLXBsdXMge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzE2NmM5NTtcbn1cblxuaS5hZGRUb2RvX3BsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICMxNjZjOTU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjdweDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbmkuaWNvbl9pbmZvIHtcbiAgY29sb3I6IHJnYmEoMTgsIDUzLCA2MSwgMC40NCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5cbi8qID09PT09PT09PT09IEJPT1RTVFJBUCBPVkVSUklERSA9PT09PT09PT09PT09PSAqL1xudGV4dGFyZWE6Zm9jdXMsXG5hOmZvY3VzLFxuZGl2OmZvY3VzLFxuYnV0dG9uOmZvY3VzLFxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXG4udW5lZGl0YWJsZS1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxudGV4dGFyZWEsXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLnVuZWRpdGFibGUtaW5wdXR7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiA9PT09PT09PT09PSBFUlJPUiBNRVNTQUdFUyA9PT09PT09PT09PT09PSAqL1xucHJlLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */", '', '']]

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