webpackJsonp([1],{"5oJN":function(t,e){},"7mXE":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("mvHQ"),n=a.n(i),o=a("Zrlr"),r=a.n(o),c=a("wxAW"),l=a.n(c),u=a("2fyi"),d=a.n(u),h=a("BzvE"),m=a.n(h),v=a("/ocq"),p=a("mtWM"),f=a.n(p),_={name:"NavBar",props:["auth","authenticated"],data:function(){return{routes:G.options.routes}}},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.authenticated?a("div",[t._m(0)]):t.authenticated?t._e():a("div",[a("nav",{staticClass:"my-2 my-md-0 mr-md-3"},[a("a",{staticClass:"p-2 text-dark",attrs:{href:"/#/features"}},[t._v("Features")]),t._v(" "),a("a",{staticClass:"p-2 text-dark",attrs:{href:"#"},on:{click:function(e){t.auth.login()}}},[t._v("Log-in")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"my-2 my-md-0 mr-md-3"},[e("a",{staticClass:"p-2 text-dark",attrs:{href:"/#/add"}},[this._v("Add Stash")]),this._v(" "),e("a",{staticClass:"p-2 text-dark",attrs:{href:"/profile"}},[this._v("My Profile")]),this._v(" "),e("a",{staticClass:"p-2 text-dark",attrs:{href:"/log/team"}},[this._v("Stash History")]),this._v(" "),e("a",{staticClass:"p-2 text-dark",attrs:{href:"/setup"}},[this._v("Stash team")])])}]},g=a("VU/8")(_,j,!1,function(t){a("7mXE")},"data-v-13a250e6",null).exports,L={name:"Add",props:["auth","authenticated"],components:{NavBar:g},data:function(){return{items:[],searchResults:"",name:"",email:"",blocker:"",today:"",yesterday:"",profile:"",team:""}},mounted:function(){this.loadProfile()},methods:{loadProfile:function(){var t=localStorage.getItem("userProfile"),e=JSON.parse(t);this.profile=e,this.email=e.name,this.name=e.nickname,this.team=e["https://standupstash.com/team"]},saveStatus:function(){var t=this;f.a.post("https://api.mlab.com/api/1/databases/standup/collections/stash?apiKey="+void 0,{name:t.name,email:t.email,today:t.today,team:t.team,yesterday:t.yesterday,blocker:t.blocker,created_at:Date.now()}).then(function(e){t.entries=e.data,t.$router.push("/log")}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[t._m(0),t._v(" "),a("nav-bar",{attrs:{auth:t.auth,authenticated:t.authenticated}}),t._v(" "),t.authenticated?t.authenticated?a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.logout()}}},[t._v("Log-out")]):t._e():a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.login()}}},[t._v("Sign up")])],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{attrs:{id:"content"}},[a("h1",[t._v("What's your current status?")]),t._v(" "),t.authenticated?t.authenticated?a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 order-md-2 mb-4"},[t._m(1),t._v(" "),a("ul",{staticClass:"list-group mb-3"},[a("li",{staticClass:"list-group-item d-flex justify-content-between lh-condensed"},[a("div",[a("small",{staticClass:"text-muted"},[t._v(t._s(t.yesterday))])])]),t._v(" "),a("li",{staticClass:"list-group-item d-flex justify-content-between lh-condensed"},[a("div",[a("small",{staticClass:"text-muted"},[t._v(t._s(t.today))])])]),t._v(" "),a("li",{staticClass:"list-group-item d-flex justify-content-between lh-condensed"},[a("div",[a("small",{staticClass:"text-muted"},[t._v(t._s(t.blocker))])])])])]),t._v(" "),a("div",{staticClass:"col-md-8 order-md-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"hidden"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"hidden"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.team,expression:"team"}],attrs:{type:"hidden"},domProps:{value:t.team},on:{input:function(e){e.target.composing||(t.team=e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group"},[t._m(2),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.yesterday,expression:"yesterday"}],staticClass:"form-control",attrs:{"aria-label":"With textarea"},domProps:{value:t.yesterday},on:{input:function(e){e.target.composing||(t.yesterday=e.target.value)}}})]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"input-group"},[t._m(3),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.today,expression:"today"}],staticClass:"form-control",attrs:{"aria-label":"With textarea"},domProps:{value:t.today},on:{input:function(e){e.target.composing||(t.today=e.target.value)}}})]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"input-group"},[t._m(4),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.blocker,expression:"blocker"}],staticClass:"form-control",attrs:{"aria-label":"With textarea"},domProps:{value:t.blocker},on:{input:function(e){e.target.composing||(t.blocker=e.target.value)}}})]),t._v(" "),a("hr",{staticClass:"mb-4"}),t._v(" "),a("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"},on:{click:function(e){t.saveStatus(t.event)}}},[t._v("Add Status")])])])]):t._e():a("div",[t._v("\n                You are not logged in! Please "),a("a",{on:{click:function(e){t.auth.login()}}},[t._v("Log In")]),t._v(" to continue.\n              ")])])]),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"my-0 mr-md-auto font-weight-normal logo"},[e("a",{attrs:{href:"/"}},[this._v("Standup Stash")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[e("span",{staticClass:"text-muted"},[this._v("Preview Status")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Yesterday?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Today?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Blockers?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-muted"},[e("div",{staticClass:"container"},[e("p",[this._v("© 2018 Standup Stash! | Created by "),e("a",{attrs:{href:"http://www.onerutter.com"}},[this._v("Jake Rutter")])])])])}]},M=a("VU/8")(L,C,!1,function(t){a("kWm3")},"data-v-3bba3f20",null).exports,w=a("PJh5"),y=a.n(w),b={name:"List",props:["auth","authenticated"],components:{NavBar:g},data:function(){return{entries:[],searchResults:"",profile:"",path:"",teamActive:"",userActive:""}},filters:{capitalize:function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""},formatDate:function(t){return t?y()(t).format("MM/DD/YYYY hh:mm"):""}},mounted:function(){this.loadItems()},methods:{loadItems:function(){var t=this,e=localStorage.getItem("userProfile");this.profile=JSON.parse(e);var a=this.profile["https://standupstash.com/team"],s=void 0,i=this.$route.params.id;t.path=i,"team"===i?(s={team:a},t.teamActive=!0):"user"===i&&(s={email:this.profile.name},t.userActive=!0),f.a.get("https://api.mlab.com/api/1/databases/standup/collections/stash",{params:{apiKey:void 0,q:s}}).then(function(e){t.entries=e.data}).catch(function(t){console.log("error",t)})}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[t._m(0),t._v(" "),a("nav-bar",{attrs:{auth:t.auth,authenticated:t.authenticated}}),t._v(" "),t.authenticated?t.authenticated?a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.logout()}}},[t._v("Log-out")]):t._e():a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.login()}}},[t._v("Sign up")])],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{attrs:{id:"content"}},[a("h1",[t._v("Stash History")]),t._v(" "),t.authenticated?t.authenticated?a("div",[a("div",{staticClass:"list-filter"},[a("ul",{staticClass:"nav nav-tabs"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:t.teamActive},attrs:{href:"/log/team"}},[t._v("My Team")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:t.userActive},attrs:{href:"/log/user"}},[t._v("Personal")])])])]),t._v(" "),"team"===t.path?void 0:t._e(),t._v(" "),a("div",{staticClass:"card-deck"},t._l(t.entries,function(e){return a("div",{staticClass:"card mb-4 box-shadow"},[a("div",{staticClass:"card-header"},[a("h4",{staticClass:"my-0 font-weight-normal"},[t._v(t._s(t._f("formatDate")(e.created_at)))])]),t._v(" "),a("div",{staticClass:"card-body"},[a("ul",{staticClass:"list-unstyled mt-3 mb-4"},[a("li",[a("i",{staticClass:"fas fa-calendar-plus"}),t._v(" Today: "+t._s(t._f("capitalize")(e.today)))]),t._v(" "),a("li",[a("i",{staticClass:"fas fa-calendar-check"}),t._v(" Yesterday: "+t._s(t._f("capitalize")(e.yesterday)))]),t._v(" "),a("li",[a("i",{staticClass:"fas fa-ban"}),t._v(" Blocker: "+t._s(e.blocker))]),t._v(" "),e.team?[a("li",[a("i",{staticClass:"fas fa-users"}),t._v(" Team: "+t._s(e.team))])]:t._e(),t._v(" "),a("li",[a("i",{staticClass:"fas fa-user"}),t._v(" User: "+t._s(e.name))])],2)])])}))],2):t._e():a("div",[t._v("\n                You are not logged in! Please "),a("a",{on:{click:function(e){t.auth.login()}}},[t._v("Log In")]),t._v(" to continue.\n              ")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"my-0 mr-md-auto font-weight-normal logo"},[e("a",{attrs:{href:"/"}},[this._v("Standup Stash")])])}]},S=a("VU/8")(b,x,!1,function(t){a("5oJN")},"data-v-8f78f050",null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner"},[e("img",{attrs:{src:a("nuJt"),alt:"loading"}})])}]},I=a("VU/8")({name:"callback",props:["auth"],data:function(){return this.auth.handleAuthentication(),{}}},k,!1,function(t){a("WJ15")},null,null).exports,N={name:"Add",props:["auth","authenticated"],components:{NavBar:g},data:function(){return{items:[]}},methods:{}},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[t._m(0),t._v(" "),s("nav-bar",{attrs:{auth:t.auth,authenticated:t.authenticated}}),t._v(" "),t.authenticated?t._e():s("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.login()}}},[t._v("Sign up")]),t._v(" "),t.authenticated?s("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.logout()}}},[t._v("Log-out")]):t._e()],1),t._v(" "),s("div",{staticClass:"container"},[s("div",{attrs:{id:"content"}},[s("h1",[t._v("Welcome to Standup Stash")]),t._v(" "),t._m(1),t._v(" "),s("img",{attrs:{src:a("X7ze"),width:"960"}}),s("br"),s("br"),t._v(" "),s("a",{staticStyle:{"background-color":"black",color:"white","text-decoration":"none",padding:"4px 6px","font-family":'-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',"font-size":"12px","font-weight":"bold","line-height":"1.2",display:"inline-block","border-radius":"3px"},attrs:{href:"https://unsplash.com/@oldskool2016?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge",target:"_blank",rel:"noopener noreferrer",title:"Download free do whatever you want high-resolution photos from paul morris"}},[s("span",{staticStyle:{display:"inline-block",padding:"2px 3px"}},[s("svg",{staticStyle:{height:"12px",width:"auto",position:"relative","vertical-align":"middle",top:"-1px",fill:"white"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[s("title",[t._v("unsplash-logo")]),s("path",{attrs:{d:"M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"}})])]),s("span",{staticStyle:{display:"inline-block",padding:"2px 3px"}},[t._v("paul morris")])])])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"my-0 mr-md-auto font-weight-normal logo"},[e("a",{attrs:{href:"/"}},[this._v("Standup Stash")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A website to help you log and track your Daily Standup Meetings."),e("br"),this._v(" "),e("br"),this._v("That's it.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-muted"},[e("div",{staticClass:"container"},[e("p",[this._v("© 2018 Standup Stash! | Built by "),e("a",{attrs:{href:"http://www.onerutter.com"}},[this._v("Jake Rutter")]),this._v(" for "),e("a",{attrs:{href:"https://twitter.com/hashtag/100DaysOfCode?src=hash"}},[this._v("#100daysofcode")])])])])}]},E=a("VU/8")(N,T,!1,function(t){a("QSdO")},"data-v-56c63e19",null).exports,A={name:"Profile",props:["auth","authenticated"],components:{NavBar:g},data:function(){return{profile:""}},mounted:function(){this.loadProfile()},methods:{loadProfile:function(){var t=localStorage.getItem("userProfile");this.profile=JSON.parse(t),console.log("retrievedObject: ",this.profile)}}},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[t._m(0),t._v(" "),a("nav-bar",{attrs:{auth:t.auth,authenticated:t.authenticated}}),t._v(" "),t.authenticated?t._e():a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.login()}}},[t._v("Sign up")]),t._v(" "),t.authenticated?a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.logout()}}},[t._v("Log-out")]):t._e()],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{attrs:{id:"content"}},[a("h1",[t._v("User Profile")]),t._v(" "),t.authenticated?a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card flex-md-row mb-4 box-shadow h-md-250"},[a("div",{staticClass:"card-body d-flex flex-column align-items-start"},[a("h3",{staticClass:"mb-0"},[a("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(t.profile.nickname))])]),t._v(" "),a("div",{staticClass:"mb-1 text-muted"},[t._v(t._s(t.profile.name))]),t._v(" "),a("p",{staticClass:"card-text mb-auto"},[t._v("Team: "+t._s(t.profile["https://standupstash.com/team"]))]),t._v(" "),a("a",{attrs:{href:"#"},on:{click:function(e){t.auth.logout()}}},[t._v("Edit")]),t._v(" "),a("a",{attrs:{href:"#"},on:{click:function(e){t.auth.logout()}}},[t._v("Log out")])]),t._v(" "),a("img",{staticClass:"card-img-right flex-auto d-none d-md-block",staticStyle:{width:"200px",height:"250px"},attrs:{src:t.profile.picture,alt:"Thumbnail [200x250]","data-holder-rendered":"true"}})])]),t._v(" "),a("div",{staticClass:"col-md-6"})]):t.authenticated?t._e():a("div",[t._v("\n                You are not logged in! Please "),a("a",{on:{click:function(e){t.auth.login()}}},[t._v("Log In")]),t._v(" to continue.\n              ")])])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"my-0 mr-md-auto font-weight-normal logo"},[e("a",{attrs:{href:"/"}},[this._v("Standup Stash")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-muted"},[e("div",{staticClass:"container"},[e("p",[this._v("© 2018 Standup Stash!")])])])}]},D=a("VU/8")(A,z,!1,function(t){a("x2iy")},"data-v-430aef0e",null).exports,P={name:"Pricing",props:["auth","authenticated"],components:{NavBar:g},data:function(){return{items:[]}},methods:{}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[t._m(0),t._v(" "),a("nav-bar",{attrs:{auth:t.auth,authenticated:t.authenticated}}),t._v(" "),t.authenticated?t._e():a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.login()}}},[t._v("Sign up")]),t._v(" "),t.authenticated?a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.logout()}}},[t._v("Log-out")]):t._e()],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{attrs:{id:"content"}},[a("h1",{staticClass:"display-4"},[t._v("Pricing")]),t._v(" "),a("p",{staticClass:"lead"},[t._v("I am still building the features for billing and setting up a team to manage multiple users, dashboards, etc. ")]),t._v(" "),t.authenticated?t._e():a("div",[t._m(1)]),t._v(" "),t.authenticated?a("div"):t._e()])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"my-0 mr-md-auto font-weight-normal logo"},[e("a",{attrs:{href:"/"}},[this._v("Standup Stash")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"card-deck mb-3 text-center"},[e("div",{staticClass:"card mb-4 box-shadow"},[e("div",{staticClass:"card-header"},[e("h4",{staticClass:"my-0 font-weight-normal"},[this._v("Free")])]),this._v(" "),e("div",{staticClass:"card-body"},[e("h1",{staticClass:"card-title pricing-card-title"},[this._v("$0 "),e("small",{staticClass:"text-muted"},[this._v("/ mo")])]),this._v(" "),e("ul",{staticClass:"list-unstyled mt-3 mb-4"},[e("li",[this._v("1 user included")]),this._v(" "),e("li",[this._v("Daily Check-in's by Web App")]),this._v(" "),e("li",[this._v("Email support")])]),this._v(" "),e("button",{staticClass:"btn btn-lg btn-block btn-primary",attrs:{type:"button"}},[this._v("Coming Soon")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-muted"},[e("div",{staticClass:"container"},[e("p",[this._v("© 2018 Standup Stash!")])])])}]},F=a("VU/8")(P,W,!1,function(t){a("pkiO")},"data-v-5adacc71",null).exports,O={name:"Features",props:["auth","authenticated"],components:{NavBar:g},data:function(){return{items:[]}},methods:{}},Y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[t._m(0),t._v(" "),a("nav-bar",{attrs:{auth:t.auth,authenticated:t.authenticated}}),t._v(" "),t.authenticated?t._e():a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.login()}}},[t._v("Sign up")]),t._v(" "),t.authenticated?a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.logout()}}},[t._v("Log-out")]):t._e()],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{attrs:{id:"content"}},[a("h1",{staticClass:"display-4"},[t._v("Features")]),t._v(" "),t._m(1),t._v(" "),t.authenticated?t._e():a("div",[a("h4",[t._v("Version 1.0.0")]),t._v(" "),t._m(2),t._v(" "),a("hr"),t._v(" "),a("h4",[t._v("Next Up")]),t._v(" "),t._m(3),t._v(" "),a("hr")]),t._v(" "),t.authenticated?a("div"):t._e()])]),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"my-0 mr-md-auto font-weight-normal logo"},[e("a",{attrs:{href:"/"}},[this._v("Standup Stash")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"lead"},[this._v("I am still building the features for billing and setting up a team to manage multiple users, dashboards, etc."),e("br"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Create an account using Auth0 integration")]),this._v(" "),e("li",[this._v("Login via Google")]),this._v(" "),e("li",[this._v("Add a daily status")]),this._v(" "),e("li",[this._v("View Profile")]),this._v(" "),e("li",[this._v("View All Daily Statuses in Stash History")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Setup Teams")]),this._v(" "),e("ul",[e("li",[this._v("Create a Team / Manage Team")]),this._v(" "),e("li",[this._v("Invite Friends")]),this._v(" "),e("li",[this._v("View Status of Team")])]),this._v(" "),e("li",[this._v("Filter your Stash History based on Team or Personal")]),this._v(" "),e("li",[this._v("Signup Flow")]),this._v(" "),e("li",[this._v("Add Pagination to History")]),this._v(" "),e("li",[this._v("Change default sort on History")]),this._v(" "),e("li",[this._v("Email Notificaitons")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-muted"},[e("div",{staticClass:"container"},[e("p",[this._v("© 2018 Standup Stash!")])])])}]},Z=a("VU/8")(O,Y,!1,function(t){a("cvpl")},"data-v-1da6c6d9",null).exports,V={name:"Team",props:["auth","authenticated"],components:{NavBar:g},data:function(){return{items:[],team:""}},mounted:function(){this.getToken()},methods:{loadProfile:function(){},getToken:function(){f()({method:"post",url:"https://onerutter.auth0.com/oauth/token",headers:{"content-type":"application/json"},data:{grant_type:"client_credentials",client_id:"sZKMo3vwdiKRxiMPAi0yTt9SdFzs0soW",client_secret:"xw8S5_LUB-9bn-yU8RHQLgYs7afu2G9WxkPCfKomMYsJKmc48Ai-fklbL741ZmE7",audience:"https://onerutter.auth0.com/api/v2/"}}).then(function(t){console.log("response",t)}).catch(function(t){console.log("error",t)})},saveStatus:function(){var t=localStorage.getItem("userProfile"),e=JSON.parse(t);localStorage.getItem("id_token");new d.a.Management({domain:"onerutter.auth0.com",token:""}).getUser(e.sub,function(t,e){e?console.log("profile",e):console.log("err",t)})}}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[t._m(0),t._v(" "),a("nav-bar",{attrs:{auth:t.auth,authenticated:t.authenticated}}),t._v(" "),t.authenticated?t.authenticated?a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.logout()}}},[t._v("Log-out")]):t._e():a("a",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.auth.login()}}},[t._v("Sign up")])],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{attrs:{id:"content"}},[a("h1",[t._v("Setup your account?")]),t._v(" "),t.authenticated?t.authenticated?a("div",[a("div",{staticClass:"card",staticStyle:{margin:"20px 0"}},[a("h5",{staticClass:"card-header"},[t._v("Setup Team")]),t._v(" "),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Please pick a team name")]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.team,expression:"team"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Team Name"},domProps:{value:t.team},on:{input:function(e){e.target.composing||(t.team=e.target.value)}}})]),t._v(" "),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){t.saveStatus()}}},[t._v("Save")])])])]):t._e():a("div",[t._v("\n                You are not logged in! Please "),a("a",{on:{click:function(e){t.auth.login()}}},[t._v("Log In")]),t._v(" to continue.\n              ")])])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"my-0 mr-md-auto font-weight-normal logo"},[e("a",{attrs:{href:"/"}},[this._v("Standup Stash")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-muted"},[e("div",{staticClass:"container"},[e("p",[this._v("© 2018 Standup Stash! | Created by "),e("a",{attrs:{href:"http://www.onerutter.com"}},[this._v("Jake Rutter")])])])])}]},U=a("VU/8")(V,R,!1,function(t){a("xpXh")},"data-v-7cc02012",null).exports;s.a.use(v.a);var B={routes:[{path:"/",name:"Home",component:E,meta:"active"},{path:"/add",name:"Add Stash",component:M,meta:"active"},{path:"/setup",name:"Team",component:U,meta:"active"},{path:"/log/:id",name:"My Stash",component:S,meta:"active"},{path:"/pricing",name:"Pricing",component:F,meta:"active"},{path:"/features",name:"Features",component:Z,meta:"active"},{path:"/callback",name:"Callback",component:I,meta:"inactive"},{path:"/profile",name:"My Profile",component:D,meta:"active"},{path:"*",redirect:"/"}]},G=new v.a(B),J=new(function(){function t(){r()(this,t),this.authenticated=this.isAuthenticated(),this.authNotifier=new m.a,this.auth0=new d.a.WebAuth({domain:"onerutter.auth0.com",clientID:"0ccWtJI4unjRAEgULYPIXS-lo5twGlYh",redirectUri:void 0,audience:"https://onerutter.auth0.com/userinfo",responseType:"token id_token",scope:"openid"}),this.login=this.login.bind(this),this.setSession=this.setSession.bind(this),this.logout=this.logout.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.environment="production"}return l()(t,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var t=this;this.auth0.parseHash(function(e,a){a&&a.accessToken&&a.idToken?(t.setSession(a),t.getProfile(a),G.replace("log")):e&&(G.replace("home"),console.log(e),alert("Error: "+e.error+". Check the console for further details."))})}},{key:"setSession",value:function(t){var e=n()(1e3*t.expiresIn+(new Date).getTime());localStorage.setItem("access_token",t.accessToken),localStorage.setItem("id_token",t.idToken),localStorage.setItem("expires_at",e),this.authNotifier.emit("authChange",{authenticated:!0})}},{key:"logout",value:function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),this.userProfile=null,this.authNotifier.emit("authChange",!1),G.replace("home")}},{key:"isAuthenticated",value:function(){var t=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<t}},{key:"getProfile",value:function(t){var e=t.accessToken;e||console.log("Access token must exist to fetch profile"),this.auth0.client.userInfo(e,function(t,e){e?(localStorage.setItem("userProfile",n()(e)),console.log("profile",e)):console.log("err",t)})}}]),t}()),H=J.login,X=J.logout,Q=J.authenticated,$=J.authNotifier,q={name:"app",data:function(){var t=this;return $.on("authChange",function(e){t.authenticated=e.authenticated}),{auth:J,authenticated:Q}},methods:{login:H,logout:X}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{auth:this.auth,authenticated:this.authenticated}})],1)},staticRenderFns:[]},tt=a("VU/8")(q,K,!1,function(t){a("eisj")},"data-v-e1cffd6c",null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",router:G,template:"<App/>",components:{App:tt}})},QSdO:function(t,e){},WJ15:function(t,e){},X7ze:function(t,e,a){t.exports=a.p+"static/img/paul-morris-152258.63b3706.jpg"},cvpl:function(t,e){},eisj:function(t,e){},kWm3:function(t,e){},nuJt:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPScxMjBweCcgaGVpZ2h0PScxMjBweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtcmluZyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9Im5vbmUiIGNsYXNzPSJiayI+PC9yZWN0PjxkZWZzPjxmaWx0ZXIgaWQ9InVpbC1yaW5nLXNoYWRvdyIgeD0iLTEwMCUiIHk9Ii0xMDAlIiB3aWR0aD0iMzAwJSIgaGVpZ2h0PSIzMDAlIj48ZmVPZmZzZXQgcmVzdWx0PSJvZmZPdXQiIGluPSJTb3VyY2VHcmFwaGljIiBkeD0iMCIgZHk9IjAiPjwvZmVPZmZzZXQ+PGZlR2F1c3NpYW5CbHVyIHJlc3VsdD0iYmx1ck91dCIgaW49Im9mZk91dCIgc3RkRGV2aWF0aW9uPSIwIj48L2ZlR2F1c3NpYW5CbHVyPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImJsdXJPdXQiIG1vZGU9Im5vcm1hbCI+PC9mZUJsZW5kPjwvZmlsdGVyPjwvZGVmcz48cGF0aCBkPSJNMTAsNTBjMCwwLDAsMC41LDAuMSwxLjRjMCwwLjUsMC4xLDEsMC4yLDEuN2MwLDAuMywwLjEsMC43LDAuMSwxLjFjMC4xLDAuNCwwLjEsMC44LDAuMiwxLjJjMC4yLDAuOCwwLjMsMS44LDAuNSwyLjggYzAuMywxLDAuNiwyLjEsMC45LDMuMmMwLjMsMS4xLDAuOSwyLjMsMS40LDMuNWMwLjUsMS4yLDEuMiwyLjQsMS44LDMuN2MwLjMsMC42LDAuOCwxLjIsMS4yLDEuOWMwLjQsMC42LDAuOCwxLjMsMS4zLDEuOSBjMSwxLjIsMS45LDIuNiwzLjEsMy43YzIuMiwyLjUsNSw0LjcsNy45LDYuN2MzLDIsNi41LDMuNCwxMC4xLDQuNmMzLjYsMS4xLDcuNSwxLjUsMTEuMiwxLjZjNC0wLjEsNy43LTAuNiwxMS4zLTEuNiBjMy42LTEuMiw3LTIuNiwxMC00LjZjMy0yLDUuOC00LjIsNy45LTYuN2MxLjItMS4yLDIuMS0yLjUsMy4xLTMuN2MwLjUtMC42LDAuOS0xLjMsMS4zLTEuOWMwLjQtMC42LDAuOC0xLjMsMS4yLTEuOSBjMC42LTEuMywxLjMtMi41LDEuOC0zLjdjMC41LTEuMiwxLTIuNCwxLjQtMy41YzAuMy0xLjEsMC42LTIuMiwwLjktMy4yYzAuMi0xLDAuNC0xLjksMC41LTIuOGMwLjEtMC40LDAuMS0wLjgsMC4yLTEuMiBjMC0wLjQsMC4xLTAuNywwLjEtMS4xYzAuMS0wLjcsMC4xLTEuMiwwLjItMS43QzkwLDUwLjUsOTAsNTAsOTAsNTBzMCwwLjUsMCwxLjRjMCwwLjUsMCwxLDAsMS43YzAsMC4zLDAsMC43LDAsMS4xIGMwLDAuNC0wLjEsMC44LTAuMSwxLjJjLTAuMSwwLjktMC4yLDEuOC0wLjQsMi44Yy0wLjIsMS0wLjUsMi4xLTAuNywzLjNjLTAuMywxLjItMC44LDIuNC0xLjIsMy43Yy0wLjIsMC43LTAuNSwxLjMtMC44LDEuOSBjLTAuMywwLjctMC42LDEuMy0wLjksMmMtMC4zLDAuNy0wLjcsMS4zLTEuMSwyYy0wLjQsMC43LTAuNywxLjQtMS4yLDJjLTEsMS4zLTEuOSwyLjctMy4xLDRjLTIuMiwyLjctNSw1LTguMSw3LjEgYy0wLjgsMC41LTEuNiwxLTIuNCwxLjVjLTAuOCwwLjUtMS43LDAuOS0yLjYsMS4zTDY2LDg3LjdsLTEuNCwwLjVjLTAuOSwwLjMtMS44LDAuNy0yLjgsMWMtMy44LDEuMS03LjksMS43LTExLjgsMS44TDQ3LDkwLjggYy0xLDAtMi0wLjItMy0wLjNsLTEuNS0wLjJsLTAuNy0wLjFMNDEuMSw5MGMtMS0wLjMtMS45LTAuNS0yLjktMC43Yy0wLjktMC4zLTEuOS0wLjctMi44LTFMMzQsODcuN2wtMS4zLTAuNiBjLTAuOS0wLjQtMS44LTAuOC0yLjYtMS4zYy0wLjgtMC41LTEuNi0xLTIuNC0xLjVjLTMuMS0yLjEtNS45LTQuNS04LjEtNy4xYy0xLjItMS4yLTIuMS0yLjctMy4xLTRjLTAuNS0wLjYtMC44LTEuNC0xLjItMiBjLTAuNC0wLjctMC44LTEuMy0xLjEtMmMtMC4zLTAuNy0wLjYtMS4zLTAuOS0yYy0wLjMtMC43LTAuNi0xLjMtMC44LTEuOWMtMC40LTEuMy0wLjktMi41LTEuMi0zLjdjLTAuMy0xLjItMC41LTIuMy0wLjctMy4zIGMtMC4yLTEtMC4zLTItMC40LTIuOGMtMC4xLTAuNC0wLjEtMC44LTAuMS0xLjJjMC0wLjQsMC0wLjcsMC0xLjFjMC0wLjcsMC0xLjIsMC0xLjdDMTAsNTAuNSwxMCw1MCwxMCw1MHoiIGZpbGw9IiMzMzdhYjciIGZpbHRlcj0idXJsKCN1aWwtcmluZy1zaGFkb3cpIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA1MCA1MCIgdG89IjM2MCA1MCA1MCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L3BhdGg+PC9zdmc+"},pkiO:function(t,e){},uslO:function(t,e,a){function s(t){return a(i(t))}function i(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="uslO"},x2iy:function(t,e){},xpXh:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.437fd20269b320274dd1.js.map