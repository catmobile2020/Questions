(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{495:function(t,e,r){"use strict";r(9),r(13),r(18),r(19);var n=r(2),c=(r(5),r(39),r(14),r(25),r(57),r(447),r(50),r(448),r(449),r(450),r(451),r(452),r(453),r(454),r(455),r(456),r(457),r(458),r(459),r(460),r(51),r(61),r(8),r(79),r(445),r(0)),o=r(106),l=r(1);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O=["sm","md","lg","xl"],v=O.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=O.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),j=O.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(v),offset:Object.keys(y),order:Object.keys(j)};function w(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var S=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=S.get(l);if(!d){var O,v;for(v in d=[],m)m[v].forEach((function(t){var e=r[t],n=w(v,t,e);n&&d.push(n)}));var y=d.some((function(t){return t.startsWith("col-")}));d.push((O={col:!y||!r.cols},Object(n.a)(O,"col-".concat(r.cols),r.cols),Object(n.a)(O,"offset-".concat(r.offset),r.offset),Object(n.a)(O,"order-".concat(r.order),r.order),Object(n.a)(O,"align-self-".concat(r.alignSelf),r.alignSelf),O)),S.set(l,d)}return t(r.tag,Object(o.a)(data,{class:d}),c)}})},505:function(t,e,r){"use strict";r.r(e);var n=r(506),c=r(495),o=r(560),l=r(69),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"landingPage"},[e("div",{staticClass:"btn-container"},[e(o.a,[e(c.a,{attrs:{cols:"12",md:"12"}},[e("nuxt-link",{staticClass:"link",attrs:{to:"/login"}},[e(n.a,{staticClass:"start-btn primary",attrs:{"x-large":""}},[t._v(" Login ")])],1),t._v(" "),e("nuxt-link",{staticClass:"link",attrs:{to:"/register"}},[e(n.a,{staticClass:"start-btn primary",attrs:{"x-large":""}},[t._v(" Register ")])],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);