(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0i7/":function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return l}));var r=e("q1tI"),i=e.n(r),o=e("nOHt"),u=e.n(o),c=i.a.createElement,a=function(n){u.a.push({pathname:"/point",query:{to:n},as:t.env.BACKEND_URL+"/point"})};function l(t){return c("div",null,c("span",{onClick:function(){return a(t.to.to)}},t.to.title))}}).call(this,e("8oxB"))},"8oxB":function(t,n){var e,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(t){e=o}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var a,l=[],s=!1,f=-1;function h(){s&&a&&(s=!1,a.length?l=a.concat(l):f=-1,l.length&&p())}function p(){if(!s){var t=c(h);s=!0;for(var n=l.length;n;){for(a=l,l=[];++f<n;)a&&a[f].run();f=-1,n=l.length}a=null,s=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(n){try{return r.call(null,t)}catch(n){return r.call(this,t)}}}(t)}}function m(t,n){this.fun=t,this.array=n}function d(){}i.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];l.push(new m(t,n)),1!==l.length||s||c(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},RNiq:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return c}));var r=e("q1tI"),i=e.n(r),o=(e("VtrM"),e("0i7/")),u=i.a.createElement;function c(){return u("div",{className:"container"},u("main",null,u("ul",null,[{to:"c41320",title:"\u041f\u0430\u0432\u043b\u043e\u0432\u0441\u043a"},{to:"c10885",title:"\u0420\u043e\u0449\u0438\u043d\u043e"},{to:"c969",title:"\u0412\u044b\u0431\u043e\u0440\u0433"}].map((function(t){return u(o.a,{to:t,key:t.to})})))))}},vlRD:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",0,2,1,3]]]);