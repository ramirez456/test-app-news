(function(t){function e(e){for(var i,r,c=e[0],o=e[1],l=e[2],d=0,v=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&v.push(n[r][0]),n[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},n={app:0},a=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("85ec"),n=s.n(i);n.a},"188f":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[[s("div",{staticClass:"hidden"},[s("vs-sidebar",{attrs:{absolute:"",reduce:"",open:""},scopedSlots:t._u([{key:"logo",fn:function(){return[t._v(" News ")]},proxy:!0},{key:"footer",fn:function(){return[s("vs-row",{attrs:{justify:"space-between"}},[s("vs-button",{attrs:{icon:"",color:"dark",border:"",href:"https://github.com/DeyviDeLaCruz"}},[s("i",{staticClass:"bx bxl-github"})])],1)]},proxy:!0}]),model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},["Home"!=this.$route.name?s("div",[s("vs-sidebar-item",{attrs:{to:"/"},scopedSlots:t._u([{key:"icon",fn:function(){return[s("i",{staticClass:"bx bx-arrow-back"})]},proxy:!0}],null,!1,418363518)},[t._v(" volver ")])],1):s("div",[s("a",{staticClass:"vs-sidebar__item hasIcon",class:"general"===t.active?"active":"",on:{click:function(e){return t.getNews("general")}}},[s("div",{staticClass:"vs-sidebar__item__icon"},[s("i",{staticClass:"bx bx-home"})]),s("div",{staticClass:"vs-sidebar__item__text-tooltip"},[t._v(" Todo ")])]),s("a",{staticClass:"vs-sidebar__item hasIcon",class:"business"===t.active?"active":"",on:{click:function(e){return t.getNews("business")}}},[s("div",{staticClass:"vs-sidebar__item__icon"},[s("i",{staticClass:"bx bx-briefcase-alt"})]),s("div",{staticClass:"vs-sidebar__item__text-tooltip"},[t._v(" Negocios ")])]),s("a",{staticClass:"vs-sidebar__item hasIcon",class:"entertainment"===t.active?"active":"",on:{click:function(e){return t.getNews("entertainment")}}},[s("div",{staticClass:"vs-sidebar__item__icon"},[s("i",{staticClass:"bx bx-right-arrow"})]),s("div",{staticClass:"vs-sidebar__item__text-tooltip"},[t._v(" Entretenimiento ")])]),s("a",{staticClass:"vs-sidebar__item hasIcon",class:"health"===t.active?"active":"",on:{click:function(e){return t.getNews("health")}}},[s("div",{staticClass:"vs-sidebar__item__icon"},[s("i",{staticClass:"bx bx-band-aid"})]),s("div",{staticClass:"vs-sidebar__item__text-tooltip"},[t._v(" Salud ")])]),s("a",{staticClass:"vs-sidebar__item hasIcon",class:"science"===t.active?"active":"",on:{click:function(e){return t.getNews("science")}}},[s("div",{staticClass:"vs-sidebar__item__icon"},[s("i",{staticClass:"bx bx-bong"})]),s("div",{staticClass:"vs-sidebar__item__text-tooltip"},[t._v(" Ciencia ")])]),s("a",{staticClass:"vs-sidebar__item hasIcon",class:"sports"===t.active?"active":"",on:{click:function(e){return t.getNews("sports")}}},[s("div",{staticClass:"vs-sidebar__item__icon"},[s("i",{staticClass:"bx bx-tennis-ball"})]),s("div",{staticClass:"vs-sidebar__item__text-tooltip"},[t._v(" Deporte ")])]),s("a",{staticClass:"vs-sidebar__item hasIcon",class:"technology"===t.active?"active":"",on:{click:function(e){return t.getNews("technology")}}},[s("div",{staticClass:"vs-sidebar__item__icon"},[s("i",{staticClass:"bx bx-mouse"})]),s("div",{staticClass:"vs-sidebar__item__text-tooltip"},[t._v(" Tecnologia ")])])])])],1)],s("router-view")],2)},a=[],r={data:function(){return{active:"general"}},mounted:function(){this.getNews("general")},methods:{getNews:function(t){this.active=t;var e=this.$vs.loading();this.$store.dispatch("getNews",this.active).then((function(t){e.close()})).catch((function(t){e.close()}))}}},c=r,o=(s("034f"),s("2877")),l=Object(o["a"])(c,n,a,!1,null,null,null),u=l.exports,d=s("8c4f"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("vs-row",{staticClass:"buscador",attrs:{justify:"center"}},[s("vs-col",{attrs:{lg:"4",sm:"6",xs:"12"}},[s("vs-input",{attrs:{state:"primary",placeholder:"Buscar...",block:""},scopedSlots:t._u([{key:"icon",fn:function(){return[s("i",{staticClass:"bx bx-search"})]},proxy:!0}])})],1)],1),s("vs-row",t._l(t.news,(function(e,i){return s("vs-col",{key:i,attrs:{align:"center",lg:"3",sm:"4",xs:"12"}},[s("vs-card",{on:{click:function(e){return t.openDetail(i)}},scopedSlots:t._u([{key:"title",fn:function(){return[s("h3",[t._v(t._s(e.title))])]},proxy:!0},{key:"img",fn:function(){return[s("img",{attrs:{src:e.urlToImage}})]},proxy:!0},{key:"text",fn:function(){return[e.description?s("p",[t._v(t._s(e.description.slice(0,200)+"..."))]):s("p")]},proxy:!0},{key:"interactions",fn:function(){return[s("vs-button",{staticClass:"btn-chat",attrs:{shadow:"",primary:""}},[s("i",{staticClass:"bx bx-time",staticStyle:{"margin-right":"5px"}}),s("span",{staticClass:"span"},[t._v(" "+t._s(t._f("moment")(Date.parse(e.publishedAt),"YYYY-MM-DD h:mm:ss a"))+" ")])])]},proxy:!0}],null,!0)})],1)})),1)],1)},f=[],_=s("5530"),b=s("2f62"),p={name:"Home",methods:{openDetail:function(t){this.$router.push("/detail/"+t)}},computed:Object(_["a"])({},Object(b["b"])(["news"]))},m=p,h=(s("cccb"),Object(o["a"])(m,v,f,!1,null,null,null)),x=h.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("vs-row",{attrs:{justify:"center"}},[s("vs-col",{attrs:{lg:"6",sm:"8",xs:"12"}},[s("h1",[t._v(t._s(t.news[t.index].title))])])],1),s("vs-row",{attrs:{justify:"center"}},[s("vs-col",{attrs:{lg:"6",sm:"8",xs:"12"}},[s("img",{attrs:{src:t.news[t.index].urlToImage,width:"100%"}})])],1),s("vs-row",{attrs:{justify:"center"}},[s("vs-col",{attrs:{lg:"6",sm:"8",xs:"12"}},[t.news[t.index].description.length>t.news[t.index].content.length?s("p",[t._v(t._s(t.news[t.index].description))]):s("p",[t._v(t._s(t.news[t.index].content))])])],1),s("vs-row",[s("vs-col",{attrs:{align:"center",w:"12"}},[s("vs-button",{attrs:{to:"/"}},[s("i",{staticClass:"bx bx-arrow-back",staticStyle:{"margin-right":"5px"}}),t._v(" Regresar ")])],1)],1)],1)},w=[],y={name:"Detail",data:function(){return{index:this.$route.params.id}},computed:Object(_["a"])({},Object(b["b"])(["news"]))},C=y,k=(s("5f6c"),Object(o["a"])(C,g,w,!1,null,null,null)),j=k.exports;i["default"].use(d["a"]);var O=[{path:"/",name:"Home",component:x},{path:"/detail/:id",name:"Detail",component:j}],N=new d["a"]({mode:"history",base:"/",routes:O}),S=N,D=(s("d3b7"),s("bc3a")),I=s.n(D);i["default"].use(b["a"]);var $=new b["a"].Store({state:{news:[],article:{}},mutations:{setNews:function(t,e){t.news=e},setArticle:function(t,e){t.article=e}},actions:{getNews:function(t){var e=t.commit,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"general";return console.log("obteniendo news",s),new Promise((function(t,i){return I.a.get("https://newsapi.org/v2/top-headlines?category="+s+"&country=mx&apiKey=95906ad3440e44cdbbd4575934ca81b4").then((function(s){e("setNews",s.data.articles),t()})).catch((function(t){console.log("ocurrio un error al obtener posts",t),i()}))}))},getArticle:function(t,e){var s=t.commit,i=news[e];s("setArticle",i)}},modules:{}}),P=s("574d"),T=s.n(P);s("04f2");i["default"].use(T.a),i["default"].use(s("2ead")),i["default"].config.productionTip=!1,new i["default"]({router:S,store:$,render:function(t){return t(u)}}).$mount("#app")},"5ced":function(t,e,s){},"5f6c":function(t,e,s){"use strict";var i=s("188f"),n=s.n(i);n.a},"85ec":function(t,e,s){},cccb:function(t,e,s){"use strict";var i=s("5ced"),n=s.n(i);n.a}});
//# sourceMappingURL=app.f27bade6.js.map