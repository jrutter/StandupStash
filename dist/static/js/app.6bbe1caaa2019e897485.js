webpackJsonp([1],{"/2Vr":function(t,e){},BRsw:function(t,e){},Cfs6:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("mvHQ"),n=a.n(i),o=a("Zrlr"),r=a.n(o),c=a("wxAW"),u=a.n(c),l=a("2fyi"),d=a.n(l),m=a("BzvE"),h=a.n(m),v=a("/ocq"),p=a("mtWM"),j=a.n(p),f={name:"NavBar",props:["auth","authenticated"],data:function(){return{routes:B.options.routes}}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.authenticated?a("div",[t._m(0)]):t.authenticated?t._e():a("div",[a("nav",{staticClass:"my-2 my-md-0 mr-md-3"},[a("a",{staticClass:"p-2 text-dark",attrs:{href:"/features"}},[t._v("Features")]),t._v(" "),a("a",{staticClass:"p-2 text-dark",attrs:{href:"/pricing"}},[t._v("Pricing")]),t._v(" "),a("a",{staticClass:"p-2 text-dark",attrs:{href:"#"},on:{click:function(e){t.auth.login()}}},[t._v("Log-in")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"my-2 my-md-0 mr-md-3"},[e("a",{staticClass:"p-2 text-dark",attrs:{href:"/add"}},[this._v("Add Stash")]),this._v(" "),e("a",{staticClass:"p-2 text-dark",attrs:{href:"/profile"}},[this._v("Profile")]),this._v(" "),e("a",{staticClass:"p-2 text-dark",attrs:{href:"/log"}},[this._v("My Stash")])])}]},_=a("VU/8")(f,L,!1,function(t){a("UWH/")},"data-v-524cd46e",null).exports,M={name:"Add",props:["auth","authenticated"],components:{NavBar:_},data:function(){return{items:[],searchResults:"",name:"",email:"",blocker:"",today:"",yesterday:"",profile:""}},mounted:function(){this.loadProfile()},methods:{loadProfile:function(){var t=localStorage.getItem("userProfile"),e=JSON.parse(t);this.profile=e,this.email=e.name,this.name=e.nickname},saveStatus:function(){var t=this;j.a.post("https://api.mlab.com/api/1/databases/standup/collections/stash?apiKey=lAsBHd1474tcG5UNO_KlBFCb5nUWEtt-",{name:t.name,email:t.email,today:t.today,yesterday:t.yesterday,blocker:t.blocker,created_at:Date.now()}).then(function(e){t.entries=e.data,t.$router.push("/log")}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[a("h5",{staticClass:"my-0 mr-md-auto font-weight-normal"},[t._v("Standup Stash")]),t._v(" "),a("nav-bar",{attrs:{auth:t.auth,authenticated:t.authenticated}}),t._v(" "),t.authenticated?t.authenticated?a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.logout()}}},[t._v("Log-out")]):t._e():a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.login()}}},[t._v("Sign up")])],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{attrs:{id:"content"}},[a("h1",[t._v("What's your current status?")]),t._v(" "),t.authenticated?t.authenticated?a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 order-md-2 mb-4"},[t._m(0),t._v(" "),a("ul",{staticClass:"list-group mb-3"},[a("li",{staticClass:"list-group-item d-flex justify-content-between lh-condensed"},[a("div",[a("small",{staticClass:"text-muted"},[t._v(t._s(t.yesterday))])])]),t._v(" "),a("li",{staticClass:"list-group-item d-flex justify-content-between lh-condensed"},[a("div",[a("small",{staticClass:"text-muted"},[t._v(t._s(t.today))])])]),t._v(" "),a("li",{staticClass:"list-group-item d-flex justify-content-between lh-condensed"},[a("div",[a("small",{staticClass:"text-muted"},[t._v(t._s(t.blocker))])])])])]),t._v(" "),a("div",{staticClass:"col-md-8 order-md-1"},[a("div",{staticClass:"name"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"hidden"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"email"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"hidden"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group"},[t._m(1),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.yesterday,expression:"yesterday"}],staticClass:"form-control",attrs:{"aria-label":"With textarea"},domProps:{value:t.yesterday},on:{input:function(e){e.target.composing||(t.yesterday=e.target.value)}}})]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"input-group"},[t._m(2),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.today,expression:"today"}],staticClass:"form-control",attrs:{"aria-label":"With textarea"},domProps:{value:t.today},on:{input:function(e){e.target.composing||(t.today=e.target.value)}}})]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"input-group"},[t._m(3),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.blocker,expression:"blocker"}],staticClass:"form-control",attrs:{"aria-label":"With textarea"},domProps:{value:t.blocker},on:{input:function(e){e.target.composing||(t.blocker=e.target.value)}}})]),t._v(" "),a("hr",{staticClass:"mb-4"}),t._v(" "),a("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"},on:{click:function(e){t.saveStatus(t.event)}}},[t._v("Add Status")])])])]):t._e():a("div",[t._v("\n                You are not logged in! Please "),a("a",{on:{click:function(e){t.auth.login()}}},[t._v("Log In")]),t._v(" to continue.\n              ")])])]),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[e("span",{staticClass:"text-muted"},[this._v("Preview Status")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Yesterday?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Today?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Blockers?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-muted"},[e("div",{staticClass:"container"},[e("p",[this._v("© 2018 Standup Stash!")])])])}]},g=a("VU/8")(M,C,!1,function(t){a("Cfs6")},"data-v-3893e1ad",null).exports,w=a("PJh5"),b=a.n(w),y=a("QmSG"),x=a.n(y),S={name:"List",props:["auth","authenticated"],components:{NavBar:_},data:function(){return{entries:[],searchResults:"",profile:""}},filters:{capitalize:function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""},formatDate:function(t){return t?b()(t).format("MM/DD/YYYY hh:mm"):""}},mounted:function(){this.loadItems()},methods:{loadItems:function(){var t=this,e=localStorage.getItem("userProfile");this.profile=JSON.parse(e);var a=x.a.mlabKey;console.log("labKey",a),this.items=[];this.profile.name;j.a.get("https://api.mlab.com/api/1/databases/standup/collections/stash",{params:{apiKey:a,q:{email:this.profile.name}}}).then(function(e){t.entries=e.data}).catch(function(t){})}}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[a("h5",{staticClass:"my-0 mr-md-auto font-weight-normal"},[t._v("Standup Stash")]),t._v(" "),a("nav-bar",{attrs:{auth:t.auth,authenticated:t.authenticated}}),t._v(" "),t.authenticated?t.authenticated?a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.logout()}}},[t._v("Log-out")]):t._e():a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.login()}}},[t._v("Sign up")])],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{attrs:{id:"content"}},[a("h1",[t._v("Status Log")]),t._v(" "),t.authenticated?t.authenticated?a("div",[a("div",{staticClass:"card-deck mb-3 text-center"},t._l(t.entries,function(e){return a("div",{staticClass:"card mb-4 box-shadow"},[a("div",{staticClass:"card-header"},[a("h4",{staticClass:"my-0 font-weight-normal"},[t._v(t._s(t._f("formatDate")(e.created_at)))])]),t._v(" "),a("div",{staticClass:"card-body"},[a("ul",{staticClass:"list-unstyled mt-3 mb-4"},[a("li",[a("i",{staticClass:"fas fa-calendar-plus"}),t._v(" Today: "+t._s(t._f("capitalize")(e.today)))]),t._v(" "),a("li",[a("i",{staticClass:"fas fa-calendar-check"}),t._v(" Yesterday: "+t._s(t._f("capitalize")(e.yesterday)))]),t._v(" "),a("li",[a("i",{staticClass:"fas fa-ban"}),t._v(" Blocker: "+t._s(e.blocker))])])])])}))]):t._e():a("div",[t._v("\n                You are not logged in! Please "),a("a",{on:{click:function(e){t.auth.login()}}},[t._v("Log In")]),t._v(" to continue.\n              ")])])])])},staticRenderFns:[]},k=a("VU/8")(S,I,!1,function(t){a("tojc")},"data-v-16ef358a",null).exports,N={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner"},[e("img",{attrs:{src:a("nuJt"),alt:"loading"}})])}]},E=a("VU/8")({name:"callback",props:["auth"],data:function(){return this.auth.handleAuthentication(),{}}},N,!1,function(t){a("WJ15")},null,null).exports,T={name:"Add",props:["auth","authenticated"],components:{NavBar:_},data:function(){return{items:[]}},methods:{}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[a("h5",{staticClass:"my-0 mr-md-auto font-weight-normal"},[t._v("Standup Stash")]),t._v(" "),a("nav-bar",{attrs:{auth:t.auth,authenticated:t.authenticated}}),t._v(" "),t.authenticated?t._e():a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.login()}}},[t._v("Sign up")]),t._v(" "),t.authenticated?a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.logout()}}},[t._v("Log-out")]):t._e()],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{attrs:{id:"content"}},[a("h1",[t._v("Welcome to Status Stash")]),t._v(" "),t.authenticated?a("div",[t._m(0)]):t._e(),t._v(" "),t.authenticated?t._e():a("div")])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro-grid"},[e("div",[this._v("Add your status")]),this._v(" "),e("div",[this._v("See a list of past statuses")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-muted"},[e("div",{staticClass:"container"},[e("p",[this._v("© 2018 Standup Stash!")])])])}]},z=a("VU/8")(T,A,!1,function(t){a("BRsw")},"data-v-323a84e0",null).exports,D={name:"Add",props:["auth","authenticated"],components:{NavBar:_},data:function(){return{items:[],profile:""}},mounted:function(){this.loadProfile()},methods:{loadProfile:function(){var t=localStorage.getItem("userProfile");this.profile=JSON.parse(t),console.log("retrievedObject: ",this.profile)}}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[a("h5",{staticClass:"my-0 mr-md-auto font-weight-normal"},[t._v("Standup Stash")]),t._v(" "),a("nav-bar",{attrs:{auth:t.auth,authenticated:t.authenticated}}),t._v(" "),t.authenticated?t._e():a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.login()}}},[t._v("Sign up")]),t._v(" "),t.authenticated?a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.logout()}}},[t._v("Log-out")]):t._e()],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{attrs:{id:"content"}},[a("h1",[t._v("User Profile")]),t._v(" "),t.authenticated?a("div",[a("p",[t._v("Name: "+t._s(t.profile.nickname))]),t._v(" "),a("p",[t._v("Email: "+t._s(t.profile.name))]),t._v(" "),a("p",[a("img",{attrs:{src:t.profile.picture}})]),t._v(" "),a("a",{on:{click:function(e){t.auth.logout()}}},[t._v("Log out")])]):t.authenticated?t._e():a("div",[t._v("\n                You are not logged in! Please "),a("a",{on:{click:function(e){t.auth.login()}}},[t._v("Log In")]),t._v(" to continue.\n              ")])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-muted"},[e("div",{staticClass:"container"},[e("p",[this._v("© 2018 Standup Stash!")])])])}]},W=a("VU/8")(D,P,!1,function(t){a("jIoi")},"data-v-c392d2c2",null).exports,O={name:"Pricing",props:["auth","authenticated"],components:{NavBar:_},data:function(){return{items:[]}},methods:{}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[a("h5",{staticClass:"my-0 mr-md-auto font-weight-normal"},[t._v("Standup Stash")]),t._v(" "),a("nav-bar",{attrs:{auth:t.auth,authenticated:t.authenticated}}),t._v(" "),t.authenticated?t._e():a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.login()}}},[t._v("Sign up")]),t._v(" "),t.authenticated?a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.logout()}}},[t._v("Log-out")]):t._e()],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{attrs:{id:"content"}},[a("h1",{staticClass:"display-4"},[t._v("Pricing")]),t._v(" "),a("p",{staticClass:"lead"},[t._v("I am still building the features for billing and setting up a team to manage multiple users, dashboards, etc. Stay Tuned!")]),t._v(" "),t.authenticated?t._e():a("div",[t._m(0)]),t._v(" "),t.authenticated?a("div"):t._e()])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"card-deck mb-3 text-center"},[e("div",{staticClass:"card mb-4 box-shadow"},[e("div",{staticClass:"card-header"},[e("h4",{staticClass:"my-0 font-weight-normal"},[this._v("Free")])]),this._v(" "),e("div",{staticClass:"card-body"},[e("h1",{staticClass:"card-title pricing-card-title"},[this._v("$0 "),e("small",{staticClass:"text-muted"},[this._v("/ mo")])]),this._v(" "),e("ul",{staticClass:"list-unstyled mt-3 mb-4"},[e("li",[this._v("1 user included")]),this._v(" "),e("li",[this._v("Daily Check-in's by Web App")]),this._v(" "),e("li",[this._v("Email support")])]),this._v(" "),e("button",{staticClass:"btn btn-lg btn-block btn-primary",attrs:{type:"button"}},[this._v("Coming Soon")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-muted"},[e("div",{staticClass:"container"},[e("p",[this._v("© 2018 Standup Stash!")])])])}]},F=a("VU/8")(O,V,!1,function(t){a("bDcF")},"data-v-621c1d9e",null).exports,U={name:"Features",props:["auth","authenticated"],components:{NavBar:_},data:function(){return{items:[]}},methods:{}},Y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[a("h5",{staticClass:"my-0 mr-md-auto font-weight-normal"},[t._v("Standup Stash")]),t._v(" "),a("nav-bar",{attrs:{auth:t.auth,authenticated:t.authenticated}}),t._v(" "),t.authenticated?t._e():a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.login()}}},[t._v("Sign up")]),t._v(" "),t.authenticated?a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.logout()}}},[t._v("Log-out")]):t._e()],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{attrs:{id:"content"}},[a("h1",{staticClass:"display-4"},[t._v("Features")]),t._v(" "),a("p",{staticClass:"lead"},[t._v("I am still building the features for billing and setting up a team to manage multiple users, dashboards, etc. Stay Tuned!")]),t._v(" "),t.authenticated?t._e():a("div",[t._m(0)]),t._v(" "),t.authenticated?a("div"):t._e()])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("h2",[this._v("Web App Checkin")]),this._v(" "),e("p",[this._v("Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.")]),this._v(" "),e("p",[e("a",{staticClass:"btn btn-secondary",attrs:{href:"#",role:"button"}},[this._v("View details »")])])]),this._v(" "),e("div",{staticClass:"col-lg-4"},[e("h2",[this._v("Unlimited Users")]),this._v(" "),e("p",[this._v("Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.")]),this._v(" "),e("p",[e("a",{staticClass:"btn btn-secondary",attrs:{href:"#",role:"button"}},[this._v("View details »")])])]),this._v(" "),e("div",{staticClass:"col-lg-4"},[e("h2",[this._v("Manage Teams")]),this._v(" "),e("p",[this._v("Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.")]),this._v(" "),e("p",[e("a",{staticClass:"btn btn-secondary",attrs:{href:"#",role:"button"}},[this._v("View details »")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-muted"},[e("div",{staticClass:"container"},[e("p",[this._v("© 2018 Standup Stash!")])])])}]},Z=a("VU/8")(U,Y,!1,function(t){a("/2Vr")},"data-v-3c7e3d5f",null).exports;s.a.use(v.a);var G={mode:"history",routes:[{path:"/",name:"Home",component:z,meta:"active"},{path:"/add",name:"Add Stash",component:g,meta:"active"},{path:"/log",name:"My Stash",component:k,meta:"active"},{path:"/pricing",name:"Pricing",component:F,meta:"active"},{path:"/features",name:"Features",component:Z,meta:"active"},{path:"/callback",name:"Callback",component:E,meta:"inactive"},{path:"/profile",name:"My Profile",component:W,meta:"active"},{path:"*",redirect:"/"}]},B=new v.a(G),R=new(function(){function t(){r()(this,t),this.authenticated=this.isAuthenticated(),this.authNotifier=new h.a,this.auth0=new d.a.WebAuth({domain:"onerutter.auth0.com",clientID:"0ccWtJI4unjRAEgULYPIXS-lo5twGlYh",redirectUri:x.a.auth0.redirectUri,audience:"https://onerutter.auth0.com/userinfo",responseType:"token id_token",scope:"openid profile"}),this.login=this.login.bind(this),this.setSession=this.setSession.bind(this),this.logout=this.logout.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this)}return u()(t,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var t=this;this.auth0.parseHash(function(e,a){a&&a.accessToken&&a.idToken?(t.setSession(a),t.getProfile(a),B.replace("log")):e&&(B.replace("home"),console.log(e),alert("Error: "+e.error+". Check the console for further details."))})}},{key:"setSession",value:function(t){var e=n()(1e3*t.expiresIn+(new Date).getTime());localStorage.setItem("access_token",t.accessToken),localStorage.setItem("id_token",t.idToken),localStorage.setItem("expires_at",e),this.authNotifier.emit("authChange",{authenticated:!0})}},{key:"logout",value:function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),this.userProfile=null,this.authNotifier.emit("authChange",!1),B.replace("home")}},{key:"isAuthenticated",value:function(){var t=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<t}},{key:"getProfile",value:function(t){var e=t.accessToken;e||console.log("Access token must exist to fetch profile"),this.auth0.client.userInfo(e,function(t,e){e?(localStorage.setItem("userProfile",n()(e)),console.log("profile",e)):console.log("err",t)})}}]),t}()),J=R.login,H=R.logout,Q=R.authenticated,X=R.authNotifier,q={name:"app",data:function(){var t=this;return X.on("authChange",function(e){t.authenticated=e.authenticated}),{auth:R,authenticated:Q}},methods:{login:J,logout:H}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{auth:this.auth,authenticated:this.authenticated}})],1)},staticRenderFns:[]},K=a("VU/8")(q,$,!1,function(t){a("eisj")},"data-v-e1cffd6c",null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",router:B,template:"<App/>",components:{App:K}})},QmSG:function(t,e,a){var s={},i="production";console.log("env",i),s=a("xabu"),t.exports=s},"UWH/":function(t,e){},WJ15:function(t,e){},bDcF:function(t,e){},eisj:function(t,e){},jIoi:function(t,e){},nuJt:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPScxMjBweCcgaGVpZ2h0PScxMjBweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtcmluZyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9Im5vbmUiIGNsYXNzPSJiayI+PC9yZWN0PjxkZWZzPjxmaWx0ZXIgaWQ9InVpbC1yaW5nLXNoYWRvdyIgeD0iLTEwMCUiIHk9Ii0xMDAlIiB3aWR0aD0iMzAwJSIgaGVpZ2h0PSIzMDAlIj48ZmVPZmZzZXQgcmVzdWx0PSJvZmZPdXQiIGluPSJTb3VyY2VHcmFwaGljIiBkeD0iMCIgZHk9IjAiPjwvZmVPZmZzZXQ+PGZlR2F1c3NpYW5CbHVyIHJlc3VsdD0iYmx1ck91dCIgaW49Im9mZk91dCIgc3RkRGV2aWF0aW9uPSIwIj48L2ZlR2F1c3NpYW5CbHVyPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImJsdXJPdXQiIG1vZGU9Im5vcm1hbCI+PC9mZUJsZW5kPjwvZmlsdGVyPjwvZGVmcz48cGF0aCBkPSJNMTAsNTBjMCwwLDAsMC41LDAuMSwxLjRjMCwwLjUsMC4xLDEsMC4yLDEuN2MwLDAuMywwLjEsMC43LDAuMSwxLjFjMC4xLDAuNCwwLjEsMC44LDAuMiwxLjJjMC4yLDAuOCwwLjMsMS44LDAuNSwyLjggYzAuMywxLDAuNiwyLjEsMC45LDMuMmMwLjMsMS4xLDAuOSwyLjMsMS40LDMuNWMwLjUsMS4yLDEuMiwyLjQsMS44LDMuN2MwLjMsMC42LDAuOCwxLjIsMS4yLDEuOWMwLjQsMC42LDAuOCwxLjMsMS4zLDEuOSBjMSwxLjIsMS45LDIuNiwzLjEsMy43YzIuMiwyLjUsNSw0LjcsNy45LDYuN2MzLDIsNi41LDMuNCwxMC4xLDQuNmMzLjYsMS4xLDcuNSwxLjUsMTEuMiwxLjZjNC0wLjEsNy43LTAuNiwxMS4zLTEuNiBjMy42LTEuMiw3LTIuNiwxMC00LjZjMy0yLDUuOC00LjIsNy45LTYuN2MxLjItMS4yLDIuMS0yLjUsMy4xLTMuN2MwLjUtMC42LDAuOS0xLjMsMS4zLTEuOWMwLjQtMC42LDAuOC0xLjMsMS4yLTEuOSBjMC42LTEuMywxLjMtMi41LDEuOC0zLjdjMC41LTEuMiwxLTIuNCwxLjQtMy41YzAuMy0xLjEsMC42LTIuMiwwLjktMy4yYzAuMi0xLDAuNC0xLjksMC41LTIuOGMwLjEtMC40LDAuMS0wLjgsMC4yLTEuMiBjMC0wLjQsMC4xLTAuNywwLjEtMS4xYzAuMS0wLjcsMC4xLTEuMiwwLjItMS43QzkwLDUwLjUsOTAsNTAsOTAsNTBzMCwwLjUsMCwxLjRjMCwwLjUsMCwxLDAsMS43YzAsMC4zLDAsMC43LDAsMS4xIGMwLDAuNC0wLjEsMC44LTAuMSwxLjJjLTAuMSwwLjktMC4yLDEuOC0wLjQsMi44Yy0wLjIsMS0wLjUsMi4xLTAuNywzLjNjLTAuMywxLjItMC44LDIuNC0xLjIsMy43Yy0wLjIsMC43LTAuNSwxLjMtMC44LDEuOSBjLTAuMywwLjctMC42LDEuMy0wLjksMmMtMC4zLDAuNy0wLjcsMS4zLTEuMSwyYy0wLjQsMC43LTAuNywxLjQtMS4yLDJjLTEsMS4zLTEuOSwyLjctMy4xLDRjLTIuMiwyLjctNSw1LTguMSw3LjEgYy0wLjgsMC41LTEuNiwxLTIuNCwxLjVjLTAuOCwwLjUtMS43LDAuOS0yLjYsMS4zTDY2LDg3LjdsLTEuNCwwLjVjLTAuOSwwLjMtMS44LDAuNy0yLjgsMWMtMy44LDEuMS03LjksMS43LTExLjgsMS44TDQ3LDkwLjggYy0xLDAtMi0wLjItMy0wLjNsLTEuNS0wLjJsLTAuNy0wLjFMNDEuMSw5MGMtMS0wLjMtMS45LTAuNS0yLjktMC43Yy0wLjktMC4zLTEuOS0wLjctMi44LTFMMzQsODcuN2wtMS4zLTAuNiBjLTAuOS0wLjQtMS44LTAuOC0yLjYtMS4zYy0wLjgtMC41LTEuNi0xLTIuNC0xLjVjLTMuMS0yLjEtNS45LTQuNS04LjEtNy4xYy0xLjItMS4yLTIuMS0yLjctMy4xLTRjLTAuNS0wLjYtMC44LTEuNC0xLjItMiBjLTAuNC0wLjctMC44LTEuMy0xLjEtMmMtMC4zLTAuNy0wLjYtMS4zLTAuOS0yYy0wLjMtMC43LTAuNi0xLjMtMC44LTEuOWMtMC40LTEuMy0wLjktMi41LTEuMi0zLjdjLTAuMy0xLjItMC41LTIuMy0wLjctMy4zIGMtMC4yLTEtMC4zLTItMC40LTIuOGMtMC4xLTAuNC0wLjEtMC44LTAuMS0xLjJjMC0wLjQsMC0wLjcsMC0xLjFjMC0wLjcsMC0xLjIsMC0xLjdDMTAsNTAuNSwxMCw1MCwxMCw1MHoiIGZpbGw9IiMzMzdhYjciIGZpbHRlcj0idXJsKCN1aWwtcmluZy1zaGFkb3cpIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA1MCA1MCIgdG89IjM2MCA1MCA1MCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L3BhdGg+PC9zdmc+"},tojc:function(t,e){},"u+zs":function(t,e){t.exports={mlabKey:"lAsBHd1474tcG5UNO_KlBFCb5nUWEtt-",auth0:{redirectUri:"http://localhost:8080/callback"}}},uslO:function(t,e,a){function s(t){return a(i(t))}function i(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="uslO"},xabu:function(t,e,a){t.exports={mlabKey:Object({NODE_ENV:"production"}).MLABKEY,auth0:{redirectUri:Object({NODE_ENV:"production"}).AUTH_REDIRECT}}}},["NHnr"]);
//# sourceMappingURL=app.6bbe1caaa2019e897485.js.map