(window["webpackJsonpportfolio-react"]=window["webpackJsonpportfolio-react"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,,,function(e,t,n){e.exports=n.p+"static/media/logo5.70920a4d.png"},function(e,t,n){e.exports=n(38)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),o=n.n(c),i=(n(26),n(2)),l=n(10),u=n(7),s=(n(27),n(4));n(28);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var f=function(){var e=Object(r.useContext)(F),t=Object(i.a)(e,2),n=t[0],c=t[1],o=function(){c((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{menuActive:!e.menuActive})}))},u=[{id:1,name:"home",namePl:"g\u0142\xf3wna",path:"/"},{id:2,name:"about",namePl:"o mnie",path:"/about"},{id:3,name:"projects",namePl:"projekty",path:"/projects"},{id:4,name:"contact",namePl:"kontakt",path:"/contact"}].map((function(e){return a.a.createElement(l.b,{key:e.id,exact:!0,to:e.path,className:"navBtn",activeClassName:"selected",onClick:o},n.polishVersion?e.namePl:e.name)}));return a.a.createElement("nav",{className:n.menuActive?"nav active":"nav"},a.a.createElement("button",{onClick:o,className:"hamburger"},a.a.createElement("span",{className:"bar bar1"}),a.a.createElement("span",{className:"bar bar2"}),a.a.createElement("span",{className:"bar bar3"})),a.a.createElement("div",{className:"menuBackground"}),a.a.createElement("h3",{className:"menuHeader"},"menu"),a.a.createElement("div",{className:"linkContainer"},u))};n(34);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(){var e=Object(r.useContext)(F),t=Object(i.a)(e,2),n=t[0],c=t[1];return a.a.createElement("button",{className:"languageBtn",onClick:function(){c((function(e){return b({},e,{polishVersion:!e.polishVersion,changingLanguage:!0})})),setTimeout((function(){c((function(e){return b({},e,{changingLanguage:!1})}))}),1e3)}},n.polishVersion?"ENG":"PL")},g=(n(16),function(){function e(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var t=["a","b","c","d","e","f","g","h","o","j","k","l","m","n","o","o","r","s","t","u","v","w","x","y","z"],n=t.map((function(n,r){return a.a.createElement("span",{className:"letter",key:r,style:{top:"".concat(e(2,92),"vh"),left:"".concat(e(2,92),"vw"),animation:"letterMove".concat(e(1,4)," 1s forwards"),animationDelay:"".concat((c=.3,o=1.3,(Math.random()*(o-c)+c).toFixed(1)),"s")}},t[e(0,t.length-1)]);var c,o}));return a.a.createElement(a.a.Fragment,null,n)});function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(){var e=Object(r.useContext)(F),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!1),l=Object(i.a)(o,2),u=l[0],s=l[1],m=Object(r.useState)(0),f=Object(i.a)(m,2);f[0],f[1];Object(r.useEffect)((function(){c((function(e){return v({},e,{loadingScreen:!0})})),setTimeout((function(){c((function(e){return v({},e,{loadingScreen:!1,firstVisit:!1})}))}),1200),setTimeout((function(){s(!0)}),4500)}),[c]);function p(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var b=["","-"],O=function(e){return e.map((function(e,t){return a.a.createElement("span",{key:t,style:{animation:"".concat(u?"none":"letterAppear 1s forwards"),transform:"".concat(u?"none":"translate(".concat(p(10,75),"vw, ").concat(b[p(0,1)]).concat(p(5,35),"vh)")),animationDelay:"".concat((n=1,r=2,(Math.random()*(r-n)+n).toFixed(1)),"s"),visibility:"".concat("-"===e?"hidden":"")}},e);var n,r}))},j=["I code web apps.","I design websites.","I'm front-end dev."],h=["Tworz\u0119 aplikacje webowe.","Projektuj\u0119 strony","Jestem front-end devem."];return a.a.createElement(a.a.Fragment,null,!n.loadingScreen&&a.a.createElement("header",{className:"header"},!u&&a.a.createElement(g,null),a.a.createElement("h1",{style:{animation:"".concat(n.changingLanguage?"changingLanguage 1s":"")}},n.polishVersion?O(["C","z","e","\u015b","\u0107,"]):O(["H","e","l","l","o,"])),a.a.createElement("h1",{style:{animation:"".concat(n.changingLanguage?"changingLanguage 1s":"")}},n.polishVersion?O(["j","e","s","t","e","m","-","B","a","r","t","e","k."]):O(["I","'","m","-","B","a","r","t","e","k."])),a.a.createElement("h1",{className:"skill skill1"},n.polishVersion?h[0]:j[0]),a.a.createElement("h1",{className:"skill skill2"},n.polishVersion?h[1]:j[1]),a.a.createElement("h1",{className:"skill skill3"},n.polishVersion?h[2]:j[2]),a.a.createElement("div",{className:"whiteBackground"})))};n(35);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(){var e=Object(r.useContext)(F),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){c((function(e){return y({},e,{loadingScreen:!0})})),setTimeout((function(){c((function(e){return y({},e,{loadingScreen:!1})}))}),1200)}),[c]);for(var o=Object(r.useState)(!1),l=Object(i.a)(o,2),u=l[0],s=l[1],m=[],f=0;f<60;f++)m.push(f);function p(e,t){return Math.random()*(t-e)+e}function b(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var O=["linear","ease","ease-in-out","ease-in","ease-out"],g=m.map((function(e){var t=b(2,6),n=b(2,98),r=b(2,98),c=b(1,4),o=p(0,8),i=b(0,1),l=p(5,8),s=b(0,4),m=b(1,255),f=b(1,255),g=b(1,255);return a.a.createElement("div",{className:"particle",key:e,style:{width:"".concat(t,"px"),height:"".concat(t,"px"),top:"".concat(n,"vh"),left:"".concat(r,"vw"),animation:"particle".concat(c," infinite"),animationTimingFunction:"".concat(O[s]),animationDelay:"".concat(o,"s"),animationDirection:"".concat(i?"normal":"reverse"),animationDuration:"".concat(l,"s"),backgroundColor:"".concat(u?"rgb(".concat(m,", ").concat(f,", ").concat(g,")"):"white")}})}));return a.a.createElement(a.a.Fragment,null,!n.loadingScreen&&a.a.createElement("div",{className:"particlesDiv"},g),a.a.createElement("button",{className:u?"colorChanger white":"colorChanger color",onClick:function(){s(!u)}},a.a.createElement("i",{className:"fas fa-paint-brush"})))};n(36);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(){var e=Object(r.useContext)(F),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){c((function(e){return P({},e,{loadingScreen:!0})})),setTimeout((function(){c((function(e){return P({},e,{loadingScreen:!1})}))}),1200)}),[c]);var o=Object(r.useState)([{id:1,name:"project1",active:!1},{id:2,name:"project2",active:!1}]),l=Object(i.a)(o,2),u=l[0],s=l[1],m=u.map((function(e){return a.a.createElement("div",{className:e.active?"floatingDiv floatingDiv".concat(e.id," active"):"floatingDiv floatingDiv".concat(e.id),key:e.id},a.a.createElement("section",{className:e.active?"project project".concat(e.id," active"):"project project".concat(e.id),onClick:function(){return function(e){var t=u.map((function(t){return e===t.id&&(t.active=!t.active),t}));s(t)}(e.id)}},a.a.createElement("div",{className:"projectFace projectFaceFront"},a.a.createElement("h1",null,e.name)),a.a.createElement("div",{className:"projectFace projectFaceBack"},a.a.createElement("h1",null,"project description"))))}));return a.a.createElement(a.a.Fragment,null,!n.loadingScreen&&a.a.createElement("section",{className:"projects"},m))};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(){var e=Object(r.useContext)(F),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){c((function(e){return S({},e,{loadingScreen:!0})})),setTimeout((function(){c((function(e){return S({},e,{loadingScreen:!1})}))}),1200)}),[c]),a.a.createElement(a.a.Fragment,null,!n.loadingScreen&&a.a.createElement("div",null,a.a.createElement("h1",null,"contact")))},x=n(20),C=n.n(x),M=(n(37),function(){return a.a.createElement("div",{className:"loadingScreen",style:{backgroundImage:"url(".concat(C.a,")")}})}),F=Object(r.createContext)();var V=function(){var e=Object(r.useState)({menuActive:!1,loadingScreen:!1,polishVersion:!1,changingLanguage:!1,firstVisit:!0}),t=Object(i.a)(e,2),n=t[0],c=t[1];return n.menuActive?document.body.style.overflow="hidden":document.body.style.overflow="",a.a.createElement(l.a,null,a.a.createElement(F.Provider,{value:[n,c]},a.a.createElement(f,null),a.a.createElement(O,null),n.loadingScreen&&!n.firstVisit&&a.a.createElement(M,null),a.a.createElement(u.d,null,a.a.createElement(u.a,{exact:!0,from:"/bartekkrupa",to:"/"}),a.a.createElement(u.b,{exact:!0,path:"/",component:h}),a.a.createElement(u.b,{exact:!0,path:"/about",component:E}),a.a.createElement(u.b,{exact:!0,path:"/projects",component:k}),a.a.createElement(u.b,{exact:!0,path:"/contact",component:N}))))};o.a.render(a.a.createElement(V,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.cb3fcb79.chunk.js.map