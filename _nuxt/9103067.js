(window.webpackJsonp=window.webpackJsonp||[]).push([[18,4,5],{350:function(t,e,n){"use strict";n.r(e);n(27),n(35);var r=n(3),o=(n(32),{name:"HelloContent",data:function(){return{helloInside:{},helloOutside:{}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("posts/hello").fetch();case 2:return n=e.sent,t.helloInside=n,e.next=6,t.$content("hello").fetch();case 6:r=e.sent,t.helloOutside=r;case 8:case"end":return e.stop()}}),e)})))()}}),l=n(34),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"helloContent"}},[e("h1",[t._v("posts/hello.md")]),t._v(" "),e("h2",[t._v(t._s(t.helloInside.title)+" - "+t._s(t.helloInside.description))]),t._v(" "),e("nuxt-content",{attrs:{document:t.helloInside}}),t._v(" "),e("hr"),t._v(" "),e("nuxt-content",{attrs:{document:t.helloOutside}})],1)}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(32),{name:"SiteContent",data:function(){return{data:{}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("data").fetch();case 2:data=e.sent,t.data=data;case 4:case"end":return e.stop()}}),e)})))()}}),l=n(34),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"dataContent"}},[e("h1",[t._v("Data Content")]),t._v(" "),e("pre",[t._v("data : "+t._s(t.data))])])}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,n){"use strict";n.r(e);var r={name:"HelloNuxtAppHelloContent",data:function(){return{}},mounted:function(){},methods:{}},o=n(34),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"helloContent"}},[e("HelloContent"),t._v(" "),e("hr"),t._v(" "),e("DataContent"),t._v(" "),e("hr")],1)}),[],!1,null,"7b02e1b1",null);e.default=component.exports;installComponents(component,{HelloContent:n(350).default,DataContent:n(351).default})}}]);