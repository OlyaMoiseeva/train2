(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Iz1t:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/point",function(){return e("lbp1")}])},lbp1:function(t,n,e){"use strict";e.r(n);var a=e("q1tI"),r=e.n(a),l=e("VtrM"),u=e("nOHt"),i=r.a.createElement;function s(t){return i("li",null,i("span",null,t.time.departure," -"),i("span",null," ",t.time.arrival),i("span",null," ",t.time.thread.title),i("span",null," ",t.time.thread.transport_subtype.title),i("span",null," ",t.time.days))}var o=r.a.createElement;n.default=function(){var t=Object(u.useRouter)().query;var n=Object(l.a)(["rasp",t],(function(){return fetch("https://api.rasp.yandex.net/v3.0/search?from=c2&to="+t.to+"&format=json&lang=ru_RU&apikey=e98f8922-efd4-485f-a967-35e5072eccc5&transport_types=suburban").then((function(t){return t.json()}))})),e=n.data;return n.error?o("div",null,"failed to load"):e?o("div",{className:"container"},o("main",null,o("span",null,e.search.from.title," -"),o("span",null," ",e.search.to.title),o("ul",null,e.segments.map((function(t){return o(s,{time:t,key:t.thread.uid})}))))):o("div",null,"loading...")}}},[["Iz1t",0,2,1,3]]]);