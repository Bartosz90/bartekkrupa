(window["webpackJsonpportfolio-react"]=window["webpackJsonpportfolio-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.ef831687.png"},20:function(e,t,a){e.exports=a(36)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=(a(25),a(5)),i=a(10),s=a(6),u=(a(26),a(9));a(27);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=function(){var e=Object(n.useContext)(y),t=Object(l.a)(e,2),a=t[0],c=t[1],o=function(){c((function(e){return p({},e,{menuActive:!e.menuActive})}))},s=function(){c((function(e){return p({},e,{menuActive:!1,loading:!0})})),setTimeout((function(){c((function(e){return p({},e,{loading:!1})})),console.log("DONE")}),1e3)},u=[{id:1,name:"home",path:"/"},{id:2,name:"about",path:"/about"},{id:3,name:"projects",path:"/projects"},{id:4,name:"contact",path:"/contact"}].map((function(e){return r.a.createElement(i.b,{key:e.id,exact:!0,to:e.path,className:"navBtn",activeClassName:"selected",onClick:window.location.pathname!==e.path?s:o},e.name)}));return r.a.createElement("nav",{className:a.menuActive?"nav active":"nav"},r.a.createElement("button",{onClick:o,className:"hamburger"},r.a.createElement("span",{className:"bar bar1"}),r.a.createElement("span",{className:"bar bar2"}),r.a.createElement("span",{className:"bar bar3"})),r.a.createElement("div",{className:"menuBackground"}),r.a.createElement("h3",{className:"menuHeader"},"menu"),r.a.createElement("div",{className:"linkContainer"},u))},d=(a(33),function(){var e=Object(n.useState)({firstDiv:0,secondDiv:-1e3,thirdDiv:-2e3}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=a.firstDiv,i=a.secondDiv,s=a.thirdDiv,u=function(e){c("up"===e?{firstDiv:o+1e3,secondDiv:i+1e3,thirdDiv:s+1e3}:{firstDiv:o-1e3,secondDiv:i-1e3,thirdDiv:s-1e3})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"deep deep3",style:{transform:"translate(-50%,-50%) translateZ(".concat(s,"px)")}},r.a.createElement("h1",null,"Check out the menu above!")),r.a.createElement("div",{className:"deep deep2",style:{transform:"translate(-50%,-50%) translateZ(".concat(i.toString(),"px)")}},r.a.createElement("h1",null,"I design and code websites")),r.a.createElement("div",{className:"deep deep1",style:{transform:"translate(-50%,-50%) translateZ(".concat(o.toString(),"px)")}},r.a.createElement("h1",null,"hello, I'm Bartek")),r.a.createElement("button",{className:"arrow arrowUp",onClick:function(){return u("up")}},r.a.createElement("i",{class:"fas fa-angle-double-up"})),r.a.createElement("button",{className:"arrow arrowDown",onClick:function(){return u("down")}},r.a.createElement("i",{class:"fas fa-angle-double-down"}))))});a(34);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var v=function(){for(var e=Object(n.useContext)(y),t=Object(l.a)(e,1)[0],a=Object(n.useState)({moveParticles:!1,colorParticles:!1}),c=Object(l.a)(a,2),o=c[0],i=c[1],s=(o.moveParticles,o.colorParticles),m=[],p=0;p<100;p++)m.push(p);function f(e,t){return Math.random()*(t-e)+e}function d(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var v=["linear","ease","ease-in-out","ease-in","ease-out"],h=m.map((function(e){var t=d(2,6),a=d(2,98),n=d(2,98),c=d(1,4),o=f(0,8),l=d(0,1),i=f(5,8),u=d(0,4),m=d(1,255),p=d(1,255),b=d(1,255);return r.a.createElement("div",{className:"particle",key:e,style:{width:"".concat(t,"px"),height:"".concat(t,"px"),top:"".concat(a,"vh"),left:"".concat(n,"vw"),animation:"particle".concat(c," infinite"),animationTimingFunction:"".concat(v[u]),animationDelay:"".concat(o,"s"),animationDirection:"".concat(l?"normal":"reverse"),animationDuration:"".concat(i,"s"),backgroundColor:"".concat(s?"rgb(".concat(m,", ").concat(p,", ").concat(b,")"):"white")}})}));return r.a.createElement(r.a.Fragment,null,!t.loading&&r.a.createElement("div",{className:"particlesDiv"},h),r.a.createElement("button",{className:s?"colorChanger white":"colorChanger color",onClick:function(){i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{colorParticles:!s}))}},r.a.createElement("i",{className:"fas fa-paint-brush"})))},h=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"projects"))},E=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"contact"))},O=a(19),g=a.n(O),j=(a(35),function(){return r.a.createElement("div",{className:"loadingScreen",style:{backgroundImage:"url(".concat(g.a,")")}})}),y=Object(n.createContext)();var w=function(){var e=Object(n.useState)({menuActive:!1,loading:!1}),t=Object(l.a)(e,2),a=t[0],c=t[1];return a.menuActive?document.body.style.overflow="hidden":document.body.style.overflow="",r.a.createElement(i.a,null,r.a.createElement(y.Provider,{value:[a,c]},r.a.createElement(f,null),a.loading&&r.a.createElement(j,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:d}),r.a.createElement(s.a,{exact:!0,path:"/about",component:v}),r.a.createElement(s.a,{exact:!0,path:"/projects",component:h}),r.a.createElement(s.a,{exact:!0,path:"/contact",component:E}))))};o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a689e5ba.chunk.js.map