(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@media only screen and (max-width: 600px) {\n  body {\n    padding-top: 0px !important;\n    padding-bottom: 50px;\n    overflow-y: scroll;\n    font: 1em \"Lucida Grande\", Helvetica, Arial, sans-serif;\n    background: linear-gradient(rgb(28, 45, 54), rgb(17, 27, 32)) no-repeat fixed;\n  }\n\n  form#loginForm, form#signupForm {\n    width: 90% !important;\n  }\n\n  .svg_path {\n    font-size: .1em !important;\n  }\n\n  p.welcome-text {\n    padding-top: 0px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    font-size: 1.2em !important;\n  }\n\n  div.card.bg-transparent {\n    padding: 0px !important;\n  }\n\n\n  div.wrap__navbar-brand {\n    position: relative;\n    width: 300px;\n  }\n\n  div#radial-container {\n    position: fixed;\n    left: 0px;\n    bottom: 0px;\n    width: 250px;\n    height: 250px;\n    border-radius: 50%;\n  }\n  div.avatar {\n    position: absolute;\n    /* Check position inside navbar */\n    left: 15px !important;\n    bottom: 15px !important;\n    width: 80px !important;\n    height: 80px !important;\n    border: 3px solid #48606b;\n  }\n\n\n  div.wrap {\n    position: absolute;\n    z-index: 0;\n    left: 0;\n    bottom: 0;\n    width: 80px !important;\n    height: 80px !important;\n    border-radius: 50%;\n    opacity: 10;\n    box-shadow:  0px 0px 20px rgba(0, 0, 0, 0.5);\n    filter: url(\"#filter\");\n    -webkit-filter: url(\"#filter\");\n  }\n\n\n  i.fas.nav-btn {\n    position: absolute;\n    font-size: 1.1em !important;\n    top: 20%;\n    left: 50%;\n    background-color: transparent;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n  }\n\n\n  /* second child: settings button */\n  div.wrap > #checking ~ .blob:nth-child(2) {\n    left: 90px !important;\n    bottom: 0px;\n  }\n  /* second child: planner button */\n  div.wrap > #checking ~ .blob:nth-child(3) {\n    left: 190px !important;\n    bottom: 0px;\n  }\n  /* second child: logout button */\n  div.wrap > #checking ~ .blob:nth-child(4) {\n    left: 290px !important;\n    bottom: 0px;\n  }\n  /*  ============ TODAY ================*/\n\n  div.auth_wrap {\n      padding-top: 15% !important;\n  }\n\n  div.main_container {\n    background-color: rgba(0, 0, 0, 0.09);\n    padding: 15px 5px 120px 5px !important;\n    min-width: 100% !important;\n    width: 100% !important;\n    max-height: 100vh !important;\n    overflow-y: scroll !important;\n    position: absolute;\n  }\n\n  div.list_wrap {\n    padding-bottom: 50px;\n  }\n\n  div.input_wrap {\n    width: 100% !important;\n    height: 70px;\n    bottom: 5px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    margin-bottom: 20px;\n    position: fixed;\n  }\n\n  div.wrap-home-links {\n    bottom: 10% !important;\n    position: relative;\n    height: 300px;\n  }\n\n  div.wrap_home__icon {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-color: rgba(38, 113, 96, 0.69);\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    width: 300px;\n    padding: 50px 30px;\n    height: auto;\n    cursor: pointer;\n  }\n\n  div.wrap_home__icon:hover {\n    box-shadow:  0px 3px 30px 5px rgba(8, 11, 17, 0.92);\n  }\n  div.entry_item_wrap,  div.entry_item_wrap.true {\n    background-color: rgba(68, 211, 229, 0.03);\n    border: 0.5px solid rgba(52, 72, 92, 0.6);\n    border-radius: 5px;\n    width: 100% !important;\n    height: 60px;\n    margin-top: 10px;\n    position: relative;\n  }\n\n  div.entry_item_wrap.true {\n    background-color: rgba(48, 123, 141, 0.03);\n    border: none;\n  }\n\n  div.empty_entry_item_wrap {\n    background-color: rgba(28, 54, 69, 0.88);\n    border: none;\n    border-radius: 5px;\n    width: 600px;\n    height: 60px;\n    margin-top: 10px;\n    position: relative;\n  }\n\n\n  div.entry_item_wrap:hover {\n    border: 0.5px solid rgb(22, 108, 149);\n    background-color: rgba(13, 38, 48, 0.88);\n    box-shadow: 0px 0.5px 7px rgba(0, 0, 0, 0.26);\n    bottom: 0.5px;\n  }\n\n\n  div.empty_entry_item_wrap {\n    width: 100% !important;\n    height: 60px;\n    margin-top: 10px;\n    position: relative;\n  }\n\n  input.new_entry_input {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    display: none;\n    background-color:  rgb(16, 20, 22);\n    border-radius: 5px;\n    box-shadow: 0px 2px 15px rgb(9, 15, 19);\n    padding-left: 60px !important;\n    color: rgb(187, 202, 212);\n    font-size: 1.3em !important;\n    height: 60px !important;\n    width: 100% !important;\n  }\n\n  button.hidden.wrap__icon_info-delete {\n    right: 10px !important;\n  }\n\n  button.new_entry_btn {\n    position: absolute;\n    top: 32px;\n    left: 10px !important;\n  }\n\n  div.wrap-home-links {\n    top: 40%;\n    position: relative;\n    height: auto;\n  }\n\n  div.wrap_home__icon {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-color: rgba(38, 113, 96, 0.69);\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    width: 100px;\n    padding: 50px 30px;\n    height: auto;\n    cursor: pointer;\n  }\n\n}\n\n/* =========== PAGE ============== */\n\nhtml {\n  min-height: 100vh;\n}\n\nbody {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  overflow-y: scroll;\n  font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\n  background: linear-gradient(rgb(28, 45, 54), rgb(17, 27, 32)) no-repeat fixed;\n}\n\n*::-webkit-scrollbar {\n  display: none;\n  width: 12px;\n}\n\n*::-webkit-scrollbar-track {\n  background: transparent;\n  border-radius: 10px;\n}\n\n*::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);\n}\n\n/* =========== NAVBAR - RADIAL MENU ============== */\n\n/* ===================================== */\n\ndiv.wrap__navbar-brand {\n  position: relative;\n  width: 300px;\n}\n\ndiv#radial-container {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n}\n\ndiv.avatar {\n  position: absolute;\n  /* Check position inside navbar */\n  left: 40px;\n  bottom: 40px;\n  width: 130px;\n  height: 130px;\n  border: 3px solid #48606b;\n  border-radius: 50%;\n  z-index: 99;\n  cursor: pointer;\n  background-position: center, center; /* Center the image */\n  background-repeat: no-repeat, no-repeat; /* Do not repeat the image */\n  background-size: cover, cover; /* Resize the background image to cover the entire container */\n  box-shadow:  0 7px 20px  rgba(0, 0, 0, 0.7);\n}\n\ndiv.wrap {\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  bottom: 0;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  opacity: 10;\n  box-shadow:  0px 0px 20px rgba(0, 0, 0, 0.5);\n  filter: url(\"#filter\");\n  -webkit-filter: url(\"#filter\");\n}\n\ndiv.wrap .blob {\n  display: block;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  position: absolute;\n  /* Avatar dimensions*/\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n}\n\ndiv.wrap > .blob:not([for=\"checking\"]) {\n  /* Initial dimentions of each buttons */\n  position: absolute;\n  z-index: 0;\n  width: 50px;\n  height: 50px;\n  left: 45px;\n  bottom: 45px;\n  font-size: 30px;\n}\n\ndiv.wrap > a.blob:not([for=\"checking\"]) {\n  color: #0e262e;\n}\n\ndiv.wrap > a.blob:not([for=\"checking\"]):hover {\n  color: #adc0c3;\n  border: 1px solid #244957;\n}\n\ni.fas.nav-btn {\n  position: absolute;\n  font-size: 1em;\n  top: 20%;\n  left: 50%;\n  background-color: transparent;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\ni.fas.fa-camera-retro {\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  color: rgba(147, 175, 193, 0.6);\n  font-size: 1.5em;\n}\n\ni.fas.fa-camera-retro:hover {\n  color: rgb(168, 197, 215);\n}\n\nlabel[for=\"avatarInput\"] {\n  position: absolute;\n  left: -10px;\n  bottom: -10px;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: rgba(47, 59, 75, 0.4);\n  width: 40px;\n  height: 40px;\n}\n\ndiv.wrap > #checking~ .blob {\n  z-index: 10;\n}\n\n/* first child: hidden checkbox */\n\n/* second child: settings button */\n\ndiv.wrap > #checking ~ .blob:nth-child(2) {\n  left: 150px;\n  bottom: 0px;\n}\n\n/* second child: planner button */\n\ndiv.wrap > #checking ~ .blob:nth-child(3) {\n  left: 240px;\n  bottom: 0px;\n}\n\n/* second child: logout button */\n\ndiv.wrap > #checking ~ .blob:nth-child(4) {\n  left: 330px;\n  bottom: 0px;\n}\n\n/* ===================================== */\n\n/* ===================================== */\n\n/* =========== CONTAINERS ============== */\n\ndiv.container {\n  position: relative;\n  top: 0px;\n}\n\ndiv.wrap__error_msg {\n  position: relative;\n}\n\ndiv.jumbotron {\n  height: 180px;\n}\n\ndiv.main_container {\n  background-color: rgba(0, 0, 0, 0.09);\n  min-width: 640px;\n  border-radius: 10px;\n  padding: 5px 20px 3px 20px;\n  width: auto;\n  min-height: 750px;\n  overflow-y: scroll;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\ndiv.list_wrap {\n  padding-bottom: 50px;\n}\n\ndiv.input_wrap {\n  width: 600px;\n  height: 70px;\n  bottom: 5px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  margin-bottom: 20px;\n  position: fixed;\n}\n\ndiv.wrap-home-links {\n  top: 50%;\n  position: relative;\n  height: 300px;\n}\n\ndiv.wrap_home__icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: rgba(38, 113, 96, 0.69);\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  width: 300px;\n  padding: 50px 30px;\n  height: auto;\n  cursor: pointer;\n}\n\ndiv.wrap_home__icon:hover {\n  box-shadow:  0px 3px 30px 5px rgba(8, 11, 17, 0.92);\n}\n\ndiv.entry_item_wrap {\n  background-color: rgba(68, 211, 229, 0.03);\n  border: 0.5px solid rgba(52, 72, 92, 0.6);\n  border-radius: 5px;\n  width: 600px;\n  height: 60px;\n  margin-top: 10px;\n  position: relative;\n  cursor: pointer;\n}\n\ndiv.entry_item_wrap.true {\n  background-color: rgba(48, 123, 141, 0.03);\n  border: none;\n  border-radius: 5px;\n  width: 600px;\n  height: 60px;\n  margin-top: 10px;\n  position: relative;\n  cursor: pointer;\n}\n\ndiv.empty_entry_item_wrap {\n  background-color: rgba(28, 54, 69, 0.88);\n  border: none;\n  border-radius: 5px;\n  width: 600px;\n  height: 60px;\n  margin-top: 10px;\n  position: relative;\n}\n\ndiv.entry_item_wrap:hover {\n  border: 0.5px solid rgb(22, 108, 149);\n  background-color: rgba(13, 38, 48, 0.88);\n  box-shadow: 0px 0.5px 7px rgba(0, 0, 0, 0.26);\n  bottom: 0.5px;\n}\n\ndiv.entry_item_wrap.true:hover {\n  border: none;\n  background-color: rgba(55, 147, 165, 0.06);\n  box-shadow: none;\n  bottom: 0.5px;\n}\n\n/* ===================================== */\n\n/* ===================================== */\n\n/* =========== DRAG ANIMATION ============== */\n\n/* Animate items as they're being sorted. */\n\n.cdk-drop-list-dragging .cdk-drag {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  cursor: move;\n}\n\n/* Animate an item that has been dropped. */\n\n.cdk-drag-animating {\n  transition: -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 300ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\ndiv.empty_entry_label {\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n  padding-left: 60px;\n  cursor: pointer;\n  width: 600px;\n  height: 60px;\n  font-size: 1.2em;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\ndiv.empty_entry_label:hover {\n  border: 0.5px solid rgb(35, 86, 110);\n}\n\n/* =========== TEXTS ============== */\n\nsvg.big-logo {\n  cursor: pointer;\n}\n\nh3.title_home__icon {\n  color: white;\n  font-family: 'Lato', sans-serif;\n}\n\nspan.error_msg.text-center  {\n  background-color: rgba(21, 39, 47, 0.87);\n  padding: 5px 20px;\n  font-size: 1.2em;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n\n}\n\ndiv.today_message > span.error_msg.text-center {\n  position: absolute;\n  top: -23px;\n  width: auto;\n}\n\nspan.addTodo_placeholder {\n  color: rgba(79, 96, 101, 0.31);\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\nspan.wrap__icon_info-edit {\n  right: 90px;\n}\n\nspan.wrap__icon_info-menu {\n  right: 10px;\n}\n\np.welcome-text {\n  padding-top: 0px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 300;\n  font-size: 1.6em;\n}\n\n/* =========== LINKS ============== */\n\na {\n  color: #00B7FF;\n}\n\na.navbar-brand {\n  text-shadow: 0 1px 10px black;\n  font-size: 3em;\n  font-family: 'Pacifico', cursive;\n  position: absolute;\n  left: 30px;\n  bottom: -30px;\n}\n\nsvg.big-logo > a {\n  text-decoration: none;\n}\n\np.signup-invite > span > a, p.login-invite > span > a {\n  text-decoration: none;\n}\n\np.signup-invite > span > a:hover, p.login-invite > span > a:hover {\n  text-decoration: none;\n  color: #00B7FF;\n  font-weight: bolder;\n}\n\n/* =========== LISTS ============== */\n\nul.navbar-nav {\n  padding-bottom: 10px;\n}\n\nli.nav-item {\n  font-size: 1.2em;\n  font-family: 'Lato', sans-serif;\n}\n\n/* =========== FORMS ============== */\n\n.api_test {\n  border: 0.5px solid rgba(255, 255, 255, 0.21);\n  background-color: transparent;\n  border-radius: 7px;\n  padding: 5px 15px;\n  color: white;\n  position: fixed;\n}\n\n#create_read {\n  top: 7px;\n  right: 250px;\n}\n\n#update {\n  top: 7px;\n  right: 140px;\n}\n\n#delete {\n  top: 7px;\n  right: 30px;\n}\n\nform#loginForm, form#signupForm {\n  width: 450px;\n}\n\ndiv[class=\"form-group\"] > input {\n  background: rgba(21, 39, 47, 0.8);\n  color: rgba(255, 243, 243, 0.76);\n  border: 0.5px solid #2a414d;\n}\n\ndiv[class=\"form-group\"] > input:focus {\n  background: rgba(21, 39, 47, 0.51);\n  color: rgba(255, 243, 243, 0.76);\n  border: 0.5px solid #b4b4b4;\n}\n\ninput.new_entry_input {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: none;\n  background-color:  rgb(16, 20, 22);\n  border-radius: 5px;\n  box-shadow: 0px 2px 15px rgb(9, 15, 19);\n  padding-left: 60px;\n  color: rgb(187, 202, 212);\n  font-size: 1.5em;\n  height: 60px;\n  width: 600px;\n}\n\ninput.new_entry_input:focus {\n  border: 0.5px solid rgb(35, 86, 110);\n}\n\ninput.new_entry_input.empty {\n  border: 0.5px solid rgb(110, 53, 41);\n}\n\ninput.new_entry_input::-webkit-input-placeholder {\n  color: rgba(113,132,135,0.25);\n  font-weight: 300;\n}\n\ninput.new_entry_input::-moz-placeholder {\n  color: rgba(113,132,135,0.25);\n  font-weight: 300;\n}\n\ninput.new_entry_input::-ms-input-placeholder {\n  color: rgba(113,132,135,0.25);\n  font-weight: 300;\n}\n\ninput.new_entry_input::placeholder {\n  color: rgba(113,132,135,0.25);\n  font-weight: 300;\n}\n\ninput.entry_label {\n  background-color: rgba(10, 18, 23, 0.1);\n  color: rgb(193, 211, 216);\n  border: none;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  width: 60%;\n  font-size: 1.2em;\n  position: absolute;\n  left: 60px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\ninput.entry_label:focus {\n  border:rgb(193, 211, 216);\n  box-shadow: none;\n}\n\ninput.entry_label:-moz-read-only {\n  color: rgb(193, 211, 216);\n  background-color: transparent;\n}\n\ninput.entry_label:read-only {\n  color: rgb(193, 211, 216);\n  background-color: transparent;\n}\n\ninput.entry_label.true:-moz-read-only {\n  color: rgb(73, 89, 94);\n  background-color: transparent;\n}\n\ninput.entry_label.true:read-only {\n  color: rgb(73, 89, 94);\n  background-color: transparent;\n}\n\nbutton.all_btn {\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  cursor: pointer;\n  font-size: 1.3em;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\nbutton.new_entry_btn {\n  position: absolute;\n  display: none;\n  top: 32px;\n  left: 17px;\n}\n\nbutton.wrap__icon_info, span.wrap__icon_info.wrap__icon_info-edit {\n  font-size: 1.7em;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\nbutton#login, button#signup {\n  margin-top: 10px;\n  background-color: #267160;\n  border: none;\n  width: 100%;\n  position: relative;\n}\n\nbutton#login:hover, button#signup:hover {\n  bottom: 2px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n\nbutton.hidden.wrap__icon_info-delete {\n  right: 20px;\n}\n\nbutton.hidden.wrap__icon_info--check {\n  left: 15px;\n}\n\nbutton.hidden {\n  position: absolute;\n  background-color: transparent;\n  border: none;\n}\n\n/* =========== ICONS ============== */\n\ni.home__icon {\n  color: rgba(255, 255, 255, 0.5);\n}\n\ni.icon_info.fas.fa-ellipsis-v {\n  color: rgba(255, 255, 255, 0.5);\n}\n\ni.fa-check {\n  position: relative;\n  left: 15px;\n  top: 15px;\n  font-size: 2em;\n}\n\ni.fa-check:hover, i.fa-check.true {\n  color: rgb(67, 170, 106);\n}\n\ni.fa-pencil-alt:hover{\n  color: cornflowerblue;\n}\n\ni.fa-trash-alt:hover {\n  color: orangered;\n}\n\ni.fa-plus {\n  font-size: 1.3em;\n  color: #166c95;\n}\n\ni.addTodo_placeholder {\n  font-size: 1.3em;\n  color: #166c95;\n  position: absolute;\n  left: 27px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\ni.icon_info {\n  color: rgba(18, 53, 61, 0.44);\n  cursor: pointer;\n}\n\n/* =========== BOOTSTRAP OVERRIDE ============== */\n\ntextarea:focus,\nbutton[type=\"submit\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"email\"]:focus,\n.uneditable-input:focus {\n  border: none;\n  box-shadow: none;\n  outline: 0 none;\n}\n\ntextarea,\nbutton[type=\"submit\"],\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\n.uneditable-input{\n  border: none;\n  cursor: pointer;\n}\n\n/* =========== ERROR MESSAGES ============== */\n\npre, h1, h2, h3, h4, h5, h6 {\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixtQ0FBbUM7RUFJbkMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBSUEsa0RBQWtEOztBQUNsRDs7Ozs7O0VBTUUsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBOzs7Ozs7RUFNRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSw4Q0FBOEM7O0FBQzlDO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGZvbnQ6IDFlbSBcIkx1Y2lkYSBHcmFuZGVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDI4LCA0NSwgNTQpLCByZ2IoMTcsIDI3LCAzMikpIG5vLXJlcGVhdCBmaXhlZDtcbiAgfVxuXG4gIGZvcm0jbG9naW5Gb3JtLCBmb3JtI3NpZ251cEZvcm0ge1xuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zdmdfcGF0aCB7XG4gICAgZm9udC1zaXplOiAuMWVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICBwLndlbGNvbWUtdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgZGl2LmNhcmQuYmctdHJhbnNwYXJlbnQge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cblxuICBkaXYud3JhcF9fbmF2YmFyLWJyYW5kIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgZGl2I3JhZGlhbC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIGRpdi5hdmF0YXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiBDaGVjayBwb3NpdGlvbiBpbnNpZGUgbmF2YmFyICovXG4gICAgbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzQ4NjA2YjtcbiAgfVxuXG5cbiAgZGl2LndyYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9wYWNpdHk6IDEwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogIDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAgMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAgMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBmaWx0ZXI6IHVybChcIiNmaWx0ZXJcIik7XG4gICAgLXdlYmtpdC1maWx0ZXI6IHVybChcIiNmaWx0ZXJcIik7XG4gIH1cblxuXG4gIGkuZmFzLm5hdi1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDEuMWVtICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAyMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuXG5cbiAgLyogc2Vjb25kIGNoaWxkOiBzZXR0aW5ncyBidXR0b24gKi9cbiAgZGl2LndyYXAgPiAjY2hlY2tpbmcgfiAuYmxvYjpudGgtY2hpbGQoMikge1xuICAgIGxlZnQ6IDkwcHggIWltcG9ydGFudDtcbiAgICBib3R0b206IDBweDtcbiAgfVxuICAvKiBzZWNvbmQgY2hpbGQ6IHBsYW5uZXIgYnV0dG9uICovXG4gIGRpdi53cmFwID4gI2NoZWNraW5nIH4gLmJsb2I6bnRoLWNoaWxkKDMpIHtcbiAgICBsZWZ0OiAxOTBweCAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogMHB4O1xuICB9XG4gIC8qIHNlY29uZCBjaGlsZDogbG9nb3V0IGJ1dHRvbiAqL1xuICBkaXYud3JhcCA+ICNjaGVja2luZyB+IC5ibG9iOm50aC1jaGlsZCg0KSB7XG4gICAgbGVmdDogMjkwcHggIWltcG9ydGFudDtcbiAgICBib3R0b206IDBweDtcbiAgfVxuICAvKiAgPT09PT09PT09PT09IFRPREFZID09PT09PT09PT09PT09PT0qL1xuXG4gIGRpdi5hdXRoX3dyYXAge1xuICAgICAgcGFkZGluZy10b3A6IDE1JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgZGl2Lm1haW5fY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICAgIHBhZGRpbmc6IDE1cHggNXB4IDEyMHB4IDVweCAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICBkaXYubGlzdF93cmFwIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIGRpdi5pbnB1dF93cmFwIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG5cbiAgZGl2LndyYXAtaG9tZS1saW5rcyB7XG4gICAgYm90dG9tOiAxMCUgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuXG4gIGRpdi53cmFwX2hvbWVfX2ljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOCwgMTEzLCA5NiwgMC42OSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGRpdi53cmFwX2hvbWVfX2ljb246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6ICAwcHggM3B4IDMwcHggNXB4IHJnYmEoOCwgMTEsIDE3LCAwLjkyKTtcbiAgfVxuICBkaXYuZW50cnlfaXRlbV93cmFwLCAgZGl2LmVudHJ5X2l0ZW1fd3JhcC50cnVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCAyMTEsIDIyOSwgMC4wMyk7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDUyLCA3MiwgOTIsIDAuNik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgZGl2LmVudHJ5X2l0ZW1fd3JhcC50cnVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ4LCAxMjMsIDE0MSwgMC4wMyk7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgZGl2LmVtcHR5X2VudHJ5X2l0ZW1fd3JhcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwgNTQsIDY5LCAwLjg4KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuXG4gIGRpdi5lbnRyeV9pdGVtX3dyYXA6aG92ZXIge1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyLCAxMDgsIDE0OSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMzgsIDQ4LCAwLjg4KTtcbiAgICBib3gtc2hhZG93OiAwcHggMC41cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gICAgYm90dG9tOiAwLjVweDtcbiAgfVxuXG5cbiAgZGl2LmVtcHR5X2VudHJ5X2l0ZW1fd3JhcCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICBpbnB1dC5uZXdfZW50cnlfaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDE2LCAyMCwgMjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggcmdiKDksIDE1LCAxOSk7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYigxODcsIDIwMiwgMjEyKTtcbiAgICBmb250LXNpemU6IDEuM2VtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIGJ1dHRvbi5oaWRkZW4ud3JhcF9faWNvbl9pbmZvLWRlbGV0ZSB7XG4gICAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGJ1dHRvbi5uZXdfZW50cnlfYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMnB4O1xuICAgIGxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGRpdi53cmFwLWhvbWUtbGlua3Mge1xuICAgIHRvcDogNDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBkaXYud3JhcF9ob21lX19pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDExMywgOTYsIDAuNjkpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgcGFkZGluZzogNTBweCAzMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxufVxuXG4vKiA9PT09PT09PT09PSBQQUdFID09PT09PT09PT09PT09ICovXG5odG1sIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGZvbnQ6IDE0cHggXCJMdWNpZGEgR3JhbmRlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjgsIDQ1LCA1NCksIHJnYigxNywgMjcsIDMyKSkgbm8tcmVwZWF0IGZpeGVkO1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMnB4O1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuNSk7XG59XG5cbi8qID09PT09PT09PT09IE5BVkJBUiAtIFJBRElBTCBNRU5VID09PT09PT09PT09PT09ICovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbmRpdi53cmFwX19uYXZiYXItYnJhbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuZGl2I3JhZGlhbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuZGl2LmF2YXRhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogQ2hlY2sgcG9zaXRpb24gaW5zaWRlIG5hdmJhciAqL1xuICBsZWZ0OiA0MHB4O1xuICBib3R0b206IDQwcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzQ4NjA2YjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIsIGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIsIGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAgMCA3cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIC1tb3otYm94LXNoYWRvdzogIDAgN3B4IDIwcHggIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYm94LXNoYWRvdzogIDAgN3B4IDIwcHggIHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuXG5kaXYud3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3BhY2l0eTogMTA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogIDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC1tb3otYm94LXNoYWRvdzogIDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJveC1zaGFkb3c6ICAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmaWx0ZXI6IHVybChcIiNmaWx0ZXJcIik7XG4gIC13ZWJraXQtZmlsdGVyOiB1cmwoXCIjZmlsdGVyXCIpO1xufVxuXG5kaXYud3JhcCAuYmxvYiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBBdmF0YXIgZGltZW5zaW9ucyovXG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5cbmRpdi53cmFwID4gLmJsb2I6bm90KFtmb3I9XCJjaGVja2luZ1wiXSkge1xuICAvKiBJbml0aWFsIGRpbWVudGlvbnMgb2YgZWFjaCBidXR0b25zICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogNDVweDtcbiAgYm90dG9tOiA0NXB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5kaXYud3JhcCA+IGEuYmxvYjpub3QoW2Zvcj1cImNoZWNraW5nXCJdKSB7XG4gIGNvbG9yOiAjMGUyNjJlO1xufVxuXG5kaXYud3JhcCA+IGEuYmxvYjpub3QoW2Zvcj1cImNoZWNraW5nXCJdKTpob3ZlciB7XG4gIGNvbG9yOiAjYWRjMGMzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjQ0OTU3O1xufVxuXG5pLmZhcy5uYXYtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDFlbTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cblxuXG5pLmZhcy5mYS1jYW1lcmEtcmV0cm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGNvbG9yOiByZ2JhKDE0NywgMTc1LCAxOTMsIDAuNik7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbmkuZmFzLmZhLWNhbWVyYS1yZXRybzpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTY4LCAxOTcsIDIxNSk7XG59XG5cbmxhYmVsW2Zvcj1cImF2YXRhcklucHV0XCJdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTBweDtcbiAgYm90dG9tOiAtMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDU5LCA3NSwgMC40KTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuZGl2LndyYXAgPiAjY2hlY2tpbmd+IC5ibG9iIHtcbiAgei1pbmRleDogMTA7XG59XG4vKiBmaXJzdCBjaGlsZDogaGlkZGVuIGNoZWNrYm94ICovXG5cbi8qIHNlY29uZCBjaGlsZDogc2V0dGluZ3MgYnV0dG9uICovXG5kaXYud3JhcCA+ICNjaGVja2luZyB+IC5ibG9iOm50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDE1MHB4O1xuICBib3R0b206IDBweDtcbn1cbi8qIHNlY29uZCBjaGlsZDogcGxhbm5lciBidXR0b24gKi9cbmRpdi53cmFwID4gI2NoZWNraW5nIH4gLmJsb2I6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogMjQwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuLyogc2Vjb25kIGNoaWxkOiBsb2dvdXQgYnV0dG9uICovXG5kaXYud3JhcCA+ICNjaGVja2luZyB+IC5ibG9iOm50aC1jaGlsZCg0KSB7XG4gIGxlZnQ6IDMzMHB4O1xuICBib3R0b206IDBweDtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiA9PT09PT09PT09PSBDT05UQUlORVJTID09PT09PT09PT09PT09ICovXG5cbmRpdi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xufVxuXG5kaXYud3JhcF9fZXJyb3JfbXNnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbmRpdi5qdW1ib3Ryb24ge1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuXG5kaXYubWFpbl9jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICBtaW4td2lkdGg6IDY0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMjBweCAzcHggMjBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDc1MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG5kaXYubGlzdF93cmFwIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbmRpdi5pbnB1dF93cmFwIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvdHRvbTogNXB4O1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuZGl2LndyYXAtaG9tZS1saW5rcyB7XG4gIHRvcDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbmRpdi53cmFwX2hvbWVfX2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDExMywgOTYsIDAuNjkpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi53cmFwX2hvbWVfX2ljb246aG92ZXIge1xuICBib3gtc2hhZG93OiAgMHB4IDNweCAzMHB4IDVweCByZ2JhKDgsIDExLCAxNywgMC45Mik7XG59XG5kaXYuZW50cnlfaXRlbV93cmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgMjExLCAyMjksIDAuMDMpO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoNTIsIDcyLCA5MiwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5lbnRyeV9pdGVtX3dyYXAudHJ1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDgsIDEyMywgMTQxLCAwLjAzKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LmVtcHR5X2VudHJ5X2l0ZW1fd3JhcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjgsIDU0LCA2OSwgMC44OCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbmRpdi5lbnRyeV9pdGVtX3dyYXA6aG92ZXIge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMiwgMTA4LCAxNDkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAzOCwgNDgsIDAuODgpO1xuICBib3gtc2hhZG93OiAwcHggMC41cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGJvdHRvbTogMC41cHg7XG59XG5cblxuZGl2LmVudHJ5X2l0ZW1fd3JhcC50cnVlOmhvdmVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LCAxNDcsIDE2NSwgMC4wNik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvdHRvbTogMC41cHg7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT09PT09IERSQUcgQU5JTUFUSU9OID09PT09PT09PT09PT09ICovXG5cblxuLyogQW5pbWF0ZSBpdGVtcyBhcyB0aGV5J3JlIGJlaW5nIHNvcnRlZC4gKi9cbi5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5jZGstZHJhZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4vKiBBbmltYXRlIGFuIGl0ZW0gdGhhdCBoYXMgYmVlbiBkcm9wcGVkLiAqL1xuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuXG5kaXYuZW1wdHlfZW50cnlfbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbmRpdi5lbXB0eV9lbnRyeV9sYWJlbDpob3ZlciB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiKDM1LCA4NiwgMTEwKTtcbn1cblxuLyogPT09PT09PT09PT0gVEVYVFMgPT09PT09PT09PT09PT0gKi9cblxuc3ZnLmJpZy1sb2dvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaDMudGl0bGVfaG9tZV9faWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbn1cblxuc3Bhbi5lcnJvcl9tc2cudGV4dC1jZW50ZXIgIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMzksIDQ3LCAwLjg3KTtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG59XG5cbmRpdi50b2RheV9tZXNzYWdlID4gc3Bhbi5lcnJvcl9tc2cudGV4dC1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIzcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5zcGFuLmFkZFRvZG9fcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSg3OSwgOTYsIDEwMSwgMC4zMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuc3Bhbi53cmFwX19pY29uX2luZm8tZWRpdCB7XG4gIHJpZ2h0OiA5MHB4O1xufVxuXG5zcGFuLndyYXBfX2ljb25faW5mby1tZW51IHtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbnAud2VsY29tZS10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxLjZlbTtcbn1cblxuLyogPT09PT09PT09PT0gTElOS1MgPT09PT09PT09PT09PT0gKi9cblxuYSB7XG4gIGNvbG9yOiAjMDBCN0ZGO1xufVxuYS5uYXZiYXItYnJhbmQge1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMTBweCBibGFjaztcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMwcHg7XG4gIGJvdHRvbTogLTMwcHg7XG59XG5cbnN2Zy5iaWctbG9nbyA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5wLnNpZ251cC1pbnZpdGUgPiBzcGFuID4gYSwgcC5sb2dpbi1pbnZpdGUgPiBzcGFuID4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbnAuc2lnbnVwLWludml0ZSA+IHNwYW4gPiBhOmhvdmVyLCBwLmxvZ2luLWludml0ZSA+IHNwYW4gPiBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwQjdGRjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyogPT09PT09PT09PT0gTElTVFMgPT09PT09PT09PT09PT0gKi9cbnVsLm5hdmJhci1uYXYge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxubGkubmF2LWl0ZW0ge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4vKiA9PT09PT09PT09PSBGT1JNUyA9PT09PT09PT09PT09PSAqL1xuXG4uYXBpX3Rlc3Qge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbiNjcmVhdGVfcmVhZCB7XG4gIHRvcDogN3B4O1xuICByaWdodDogMjUwcHg7XG59XG4jdXBkYXRlIHtcbiAgdG9wOiA3cHg7XG4gIHJpZ2h0OiAxNDBweDtcbn1cbiNkZWxldGUge1xuICB0b3A6IDdweDtcbiAgcmlnaHQ6IDMwcHg7XG59XG5cbmZvcm0jbG9naW5Gb3JtLCBmb3JtI3NpZ251cEZvcm0ge1xuICB3aWR0aDogNDUwcHg7XG59XG5cblxuZGl2W2NsYXNzPVwiZm9ybS1ncm91cFwiXSA+IGlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMSwgMzksIDQ3LCAwLjgpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI0MywgMjQzLCAwLjc2KTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMmE0MTRkO1xufVxuXG5kaXZbY2xhc3M9XCJmb3JtLWdyb3VwXCJdID4gaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCAzOSwgNDcsIDAuNTEpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI0MywgMjQzLCAwLjc2KTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjYjRiNGI0O1xufVxuXG5pbnB1dC5uZXdfZW50cnlfaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICByZ2IoMTYsIDIwLCAyMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IHJnYig5LCAxNSwgMTkpO1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIGNvbG9yOiByZ2IoMTg3LCAyMDIsIDIxMik7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwMHB4O1xufVxuXG5pbnB1dC5uZXdfZW50cnlfaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigzNSwgODYsIDExMCk7XG59XG5cbmlucHV0Lm5ld19lbnRyeV9pbnB1dC5lbXB0eSB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiKDExMCwgNTMsIDQxKTtcbn1cblxuaW5wdXQubmV3X2VudHJ5X2lucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDExMywxMzIsMTM1LDAuMjUpO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5pbnB1dC5lbnRyeV9sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDE4LCAyMywgMC4xKTtcbiAgY29sb3I6IHJnYigxOTMsIDIxMSwgMjE2KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB3aWR0aDogNjAlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDYwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cblxuXG5pbnB1dC5lbnRyeV9sYWJlbDpmb2N1cyB7XG4gIGJvcmRlcjpyZ2IoMTkzLCAyMTEsIDIxNik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5pbnB1dC5lbnRyeV9sYWJlbDpyZWFkLW9ubHkge1xuICBjb2xvcjogcmdiKDE5MywgMjExLCAyMTYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQuZW50cnlfbGFiZWwudHJ1ZTpyZWFkLW9ubHkge1xuICBjb2xvcjogcmdiKDczLCA4OSwgOTQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYnV0dG9uLmFsbF9idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuYnV0dG9uLm5ld19lbnRyeV9idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRvcDogMzJweDtcbiAgbGVmdDogMTdweDtcbn1cblxuYnV0dG9uLndyYXBfX2ljb25faW5mbywgc3Bhbi53cmFwX19pY29uX2luZm8ud3JhcF9faWNvbl9pbmZvLWVkaXQge1xuICBmb250LXNpemU6IDEuN2VtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbmJ1dHRvbiNsb2dpbiwgYnV0dG9uI3NpZ251cCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjcxNjA7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYnV0dG9uI2xvZ2luOmhvdmVyLCBidXR0b24jc2lnbnVwOmhvdmVyIHtcbiAgYm90dG9tOiAycHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5idXR0b24uaGlkZGVuLndyYXBfX2ljb25faW5mby1kZWxldGUge1xuICByaWdodDogMjBweDtcbn1cblxuYnV0dG9uLmhpZGRlbi53cmFwX19pY29uX2luZm8tLWNoZWNrIHtcbiAgbGVmdDogMTVweDtcbn1cblxuYnV0dG9uLmhpZGRlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLyogPT09PT09PT09PT0gSUNPTlMgPT09PT09PT09PT09PT0gKi9cblxuaS5ob21lX19pY29uIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuXG5pLmljb25faW5mby5mYXMuZmEtZWxsaXBzaXMtdiB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbmkuZmEtY2hlY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbmkuZmEtY2hlY2s6aG92ZXIsIGkuZmEtY2hlY2sudHJ1ZSB7XG4gIGNvbG9yOiByZ2IoNjcsIDE3MCwgMTA2KTtcbn1cblxuaS5mYS1wZW5jaWwtYWx0OmhvdmVye1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG59XG5cblxuaS5mYS10cmFzaC1hbHQ6aG92ZXIge1xuICBjb2xvcjogb3JhbmdlcmVkO1xufVxuXG5pLmZhLXBsdXMge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzE2NmM5NTtcbn1cblxuaS5hZGRUb2RvX3BsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICMxNjZjOTU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjdweDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbmkuaWNvbl9pbmZvIHtcbiAgY29sb3I6IHJnYmEoMTgsIDUzLCA2MSwgMC40NCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5cbi8qID09PT09PT09PT09IEJPT1RTVFJBUCBPVkVSUklERSA9PT09PT09PT09PT09PSAqL1xudGV4dGFyZWE6Zm9jdXMsXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxuLnVuZWRpdGFibGUtaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IDAgbm9uZTtcbn1cblxudGV4dGFyZWEsXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLnVuZWRpdGFibGUtaW5wdXR7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiA9PT09PT09PT09PSBFUlJPUiBNRVNTQUdFUyA9PT09PT09PT09PT09PSAqL1xucHJlLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */", '', '']]

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