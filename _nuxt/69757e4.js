(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{352:function(t,e,r){"use strict";r.r(e);var o=r(3),n=(r(32),{name:"HelloNuxtAppLogin",data:function(){return{email:"",password:""}},mounted:function(){},methods:{onSubmit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),o={email:e.email,password:e.password},r.prev=2,r.next=5,e.$auth.loginWith("local",{data:o});case 5:e.$router.push("/"),e.$store.commit("setLoggedIn",!0),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),e.$router.push("/login");case 12:case"end":return r.stop()}}),r,null,[[2,9]])})))()}}}),l=r(34),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"loginComponent"}},[e("form",{on:{submit:t.onSubmit}},[e("label",{attrs:{for:"email"}},[t._v("Email :")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),e("label",{attrs:{for:"password"}},[t._v("Password :")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),e("button",{staticClass:"button-3",attrs:{type:"submit"}},[t._v("Submit")])])])}),[],!1,null,"e6828928",null);e.default=component.exports}}]);