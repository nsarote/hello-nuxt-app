(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3],{347:function(t,e,r){var content=r(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("adf13f4c",content,!0,{sourceMap:!1})},353:function(t,e,r){"use strict";r.r(e);r(17);var n={name:"HelloNuxtAppAuthor",props:{author:{type:Object,required:!0}}},o=r(34),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("nuxt-link",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:"/blog/author/".concat(t.author.name)}},[t.author.img?e("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:t.author.img}}):t._e(),t._v(" "),e("div",{staticClass:"flex flex-col m-4"},[e("h4",{staticClass:"font-semibold"},[t._v("Author")]),t._v(" "),e("p",[t._v(t._s(t.author.name))]),t._v(" "),e("p",[t._v(t._s(t.author.bio))])])])],1)}),[],!1,null,"4b181d93",null);e.default=component.exports},362:function(t,e,r){"use strict";r(347)},363:function(t,e,r){var n=r(43),o=r(364),c=r(365),l=n((function(i){return i[1]})),d=o(c);l.push([t.i,".nuxt-content h2[data-v-418c504e]{font-weight:700;font-size:28px}.nuxt-content h3[data-v-418c504e]{font-weight:700;font-size:22px}.nuxt-content p[data-v-418c504e]{margin-bottom:20px}.article-wrapper[data-v-418c504e]{margin:24px;padding:24px;border:1px dashed grey}.article-wrapper img[data-v-418c504e],.object-cover[data-v-418c504e]{width:300px}.icon.icon-link[data-v-418c504e]{background-image:url("+d+");display:inline-block;width:20px;height:20px;background-size:20px 20px}",""]),l.locals={},t.exports=l},364:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},365:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBjbGFzcz0iaGVyb2ljb24tdWkiIGQ9Ik0xMS4wMyA4aDMuOTRsMS4wNi00LjI0YTEgMSAwIDEgMSAxLjk0LjQ4TDE3LjAzIDhIMjBhMSAxIDAgMCAxIDAgMmgtMy40N2wtMSA0SDE4YTEgMSAwIDEgMSAwIDJoLTIuOTdsLTEuMDYgNC4yNWExIDEgMCAxIDEtMS45NC0uNDlsLjk0LTMuNzZIOS4wM2wtMS4wNiA0LjI1YTEgMSAwIDEgMS0xLjk0LS40OUw2Ljk3IDE2SDRhMSAxIDAgMCAxIDAtMmgzLjQ3bDEtNEg2YTEgMSAwIDAgMSAwLTJoMi45N2wxLjA2LTQuMjRhMSAxIDAgMSAxIDEuOTQuNDhMMTEuMDMgOHptLS41IDJsLTEgNGgzLjk0bDEtNGgtMy45NHoiLz48L3N2Zz4="},392:function(t,e,r){"use strict";r.r(e);r(27),r(35);var n=r(19),o=r(3),c=(r(32),{name:"HelloNuxtAppSlug",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,article,c,l,d,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,e.next=3,r("articles",o.slug).fetch();case 3:return article=e.sent,e.next=6,r("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(o.slug).fetch();case 6:return c=e.sent,l=Object(n.a)(c,2),d=l[0],x=l[1],e.abrupt("return",{article:article,prev:d,next:x});case 11:case"end":return e.stop()}}),e)})))()},data:function(){return{}},mounted:function(){},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),l=(r(362),r(34)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"article"}},[e("article",{staticClass:"article-wrapper"},[e("h1",[t._v(t._s(t.article.title))]),t._v(" "),e("p",[t._v(t._s(t.article.description))]),t._v(" "),e("img",{attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),e("p",[t._v("Article last updated: "+t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),e("nuxt-content",{attrs:{document:t.article}}),t._v(" "),e("author",{attrs:{author:t.article.author}})],1)])}),[],!1,null,"418c504e",null);e.default=component.exports;installComponents(component,{Author:r(353).default})}}]);