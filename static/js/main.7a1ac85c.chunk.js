(this.webpackJsonptobedeleted=this.webpackJsonptobedeleted||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(8),r=n.n(i),o=(n(16),{trending:"https://api.themoviedb.org/3/trending/all/day?api_key=b11aebb33a188d2fd49946a2464d5cb4",popular:"https://api.themoviedb.org/3/movie/popular?api_key=b11aebb33a188d2fd49946a2464d5cb4&language=en-US&page=1",topRated:"https://api.themoviedb.org/3/movie/top_rated?api_key=b11aebb33a188d2fd49946a2464d5cb4&language=en-US&page=1",upcoming:"https://api.themoviedb.org/3/movie/upcoming?api_key=b11aebb33a188d2fd49946a2464d5cb4&language=en-US&page=1"}),s=(n(17),n(3)),d=n.n(s),l=n(5),u=n(4),b=(n(19),n(0));var p=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.trending);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.results[Math.floor(Math.random()*n.results.length-1)]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original/").concat(null===n||void 0===n?void 0:n.backdrop_path,")"),backgroundPosition:"center center"},children:[Object(b.jsxs)("div",{className:"banner__contents",children:[Object(b.jsx)("h1",{className:"banner__title",children:(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name)}),Object(b.jsxs)("div",{className:"banner__buttons",children:[Object(b.jsx)("button",{className:"banner__button",children:"Play"}),Object(b.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(b.jsx)("h1",{className:"banner__description",children:null===n||void 0===n?void 0:n.overview})]}),Object(b.jsx)("div",{className:"fading__area"})]})},j=(n(21),n(9)),h=n(36);var g=function(e){var t=e.title,n=e.link,c=e.isLargeRow,i=Object(a.useState)([]),r=Object(u.a)(i,2),o=r[0],s=r[1],p=Object(a.useState)(""),g=Object(u.a)(p,2),v=g[0],f=g[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(b.jsxs)("div",{className:"row__container",children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("div",{className:"row__cards",children:o.map((function(e){return Object(b.jsx)("img",{onClick:function(){return function(e){v?f(""):h((null===e||void 0===e?void 0:e.original_title)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);f(t.get("v"))}))}(e)},className:"row__card ".concat(c&&"row__cardLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(c?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),v&&Object(b.jsx)(j.a,{videoId:v,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})};var v=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(p,{}),Object(b.jsx)(g,{link:o.trending,title:"Trending",isLargeRow:!0}),Object(b.jsx)(g,{link:o.popular,title:"Popular"}),Object(b.jsx)(g,{link:o.topRated,title:"Top Rated"}),Object(b.jsx)(g,{link:o.upcoming,title:"Upcoming"})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.7a1ac85c.chunk.js.map