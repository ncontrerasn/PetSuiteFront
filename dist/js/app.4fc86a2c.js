(function(t){function e(e){for(var r,o,c=e[0],i=e[1],l=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3d9b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Carousel")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"navbar"},[n("header",{staticClass:"navbar navbar-expand-lg navbar-light"},[t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"}),n("router-link",{attrs:{to:{name:"login"}}},[n("button",{staticClass:"btn btn-sign-up my-2 my-sm-0"},[t._v("Sign In")])]),n("button",{staticClass:"btn btn-sign-up my-2 my-sm-0"},[t._v("Sign Up")])],1)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[n("img",{staticClass:"d-inline-block align-top",attrs:{src:"",width:"30",height:"30",alt:""}}),t._v(" PetSuite ")])}],i=(n("a9e3"),{name:"Navbar",components:{},props:{transparent:Boolean,colorOnScroll:Number},data:function(){return{}},computed:{},mounted:function(){},methods:{}}),l=i,u=(n("9dcc"),n("2877")),p=Object(u["a"])(l,o,c,!1,null,"56dc8776",null),d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"carousel"},[n("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[n("div",{staticClass:"carousel-inner"},[n("div",{staticClass:"carousel-item active"},[n("img",{attrs:{src:t.pictures[0],height:"500",width:"1500"}})]),n("div",{staticClass:"carousel-item"},[n("img",{attrs:{src:t.pictures[1],height:"500",width:"1500"}})]),n("div",{staticClass:"carousel-item"},[n("img",{attrs:{src:t.pictures[2],height:"500",width:"1500"}})])]),t._m(0),t._m(1)])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[n("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[n("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"sr-only"},[t._v("Next")])])}],m={name:"Carousel",components:{},props:[],data:function(){return{pictures:["https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg","https://images.pexels.com/photos/1485637/pexels-photo-1485637.jpeg","https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg"]}},computed:{},mounted:function(){},methods:{}},h=m,b=(n("bc35"),Object(u["a"])(h,f,v,!1,null,"4136cac5",null)),g=b.exports,C={name:"App",components:{Navbar:d,Carousel:g},data:function(){return{}}},_=C,x=Object(u["a"])(_,a,s,!1,null,null,null),y=x.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},"9dcc":function(t,e,n){"use strict";var r=n("3d9b"),a=n.n(r);a.a},ac46:function(t,e,n){},bc35:function(t,e,n){"use strict";var r=n("ac46"),a=n.n(r);a.a}});
//# sourceMappingURL=app.4fc86a2c.js.map