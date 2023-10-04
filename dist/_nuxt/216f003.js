(window.webpackJsonp=window.webpackJsonp||[]).push([[28,18],{440:function(t,e,r){"use strict";r.r(e);var n=r(471),o=r(494),c=r(32),l=(r(106),{data:function(){return{loggedIn:!1}},mounted:function(){},methods:{logOut:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/auth/logout");case 3:console.log("Successfully logged out"),localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("userData"),t.loggedIn=!1,t.$router.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Logout failed:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},created:function(){localStorage.getItem("token")&&(this.loggedIn=!0)}}),d=r(69),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"image"},[e(o.a,{staticClass:"logOutBtn d-flex justify-end",attrs:{cols:"2"}},[t.loggedIn?e(n.a,{staticClass:"primary text",attrs:{text:""},on:{click:function(e){return t.logOut()}}},[t._v("\n        Logout\n      ")]):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports},489:function(t,e,r){var content=r(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("337494d6",content,!0,{sourceMap:!1})},518:function(t,e,r){"use strict";r(489)},519:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,".switch-camera{bottom:25%;left:50%;position:absolute}.switch-camera i{color:#6495ed;font-size:50px}",""]),n.locals={},t.exports=n},529:function(t,e,r){"use strict";r.r(e);var n=r(471),o=r(531),c=r(438),l=r(494),d=r(544),m=r(601),f=r(482),v=r(185),h=r(493),D=r(542),C=r(32),_=(r(106),r(35),r(13),r(540)),w={components:{QrcodeStream:_.QrcodeStream,QrcodeDropZone:_.QrcodeDropZone,QrcodeCapture:_.QrcodeCapture},data:function(){return{facingMode:"environment",noRearCamera:!1,noFrontCamera:!1,dialog:!1,userID:null,formData:{uuid:""}}},methods:{onError:function(t){var e="user"===this.facingMode,r="environment"===this.facingMode,n="OverconstrainedError"===t.name;r&&n&&(this.noRearCamera=!0),e&&n&&(this.noFrontCamera=!0),console.error(t)},switchCamera:function(){switch(this.facingMode){case"environment":this.facingMode="user";break;case"user":this.facingMode="environment"}},onDetect:function(t){var e=this;return Object(C.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t;case 2:(data=r.sent).content&&(2===e.userData.type_id&&"one"===e.userData.step&&e.$router.push("/userDetails?uuid=".concat(data.content)),2===e.userData.type_id&&"two"===e.userData.step&&e.$router.push("/userDetailsTwo?uuid=".concat(data.content)),2===e.userData.type_id&&"three"===e.userData.step&&e.$router.push("/userDetailsThree?uuid=".concat(data.content)));case 4:case"end":return r.stop()}}),r)})))()},getData:function(){var t=this;return Object(C.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=localStorage.getItem("userData"))&&(t.userData=JSON.parse(r),console.log("this.userData",t.userData));case 2:case"end":return e.stop()}}),e)})))()}},created:function(){this.getData()},computed:{isFormValid:function(){return this.formData.uuid}}},y=(r(518),r(69)),component=Object(y.a)(w,(function(){var t=this,e=t._self._c;return e(f.a,{staticClass:"conOfForm"},[e("div",{staticClass:"logIn"},[e(d.a,[e("div",[e(d.a,{staticClass:"loginForm"},[e("div",{staticClass:"userID"},[e("div",{staticClass:"btn-container"},[e(h.a,[e(l.a,{attrs:{md:"6"}},[e(D.a,{staticClass:"formInput",attrs:{outlined:"",placeholder:"user id",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.uuid,callback:function(e){t.$set(t.formData,"uuid",e)},expression:"formData.uuid"}})],1),t._v(" "),e(l.a,{attrs:{md:"6"}},[e(n.a,{staticClass:"primary",attrs:{type:"button",id:"scanner-btn","data-toggle":"modal"},on:{click:function(e){t.dialog=!0,t.onDetect()}}},[t._v("\n                          Scan QR Code\n                      ")])],1),t._v(" "),t.userData&&t.userData.type_id?e(l.a,{attrs:{md:"6"}},[2===t.userData.type_id&&"one"===t.userData.step?e("nuxt-link",{staticClass:"link",attrs:{to:{name:"userDetails",query:{uuid:t.formData.uuid}}}},[e(n.a,{staticClass:"primary",attrs:{disabled:!t.isFormValid}},[t._v("\n                      Search\n                    ")])],1):2===t.userData.type_id&&"two"===t.userData.step?e("nuxt-link",{staticClass:"link",attrs:{to:{name:"userDetailsTwo",query:{uuid:t.formData.uuid}}}},[e(n.a,{staticClass:"primary",attrs:{disabled:!t.isFormValid}},[t._v("\n                      Search\n                    ")])],1):2===t.userData.type_id&&"three"===t.userData.step?e("nuxt-link",{staticClass:"link",attrs:{to:{name:"userDetailsThree",query:{uuid:t.formData.uuid}}}},[e(n.a,{staticClass:"primary",attrs:{disabled:!t.isFormValid}},[t._v("\n                      Search\n                    ")])],1):t._e()],1):t._e()],1)],1)])])],1)])],1),t._v(" "),e(m.a,{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.a,[e(c.b,[e("div",{staticClass:"modal-body"},[e("qrcode-stream",{attrs:{constraints:{facingMode:t.facingMode}},on:{detect:t.onDetect,error:t.onError}},[e(n.a,{staticClass:"switch-camera primary",attrs:{outlined:"",icon:""},on:{click:t.switchCamera}},[e(v.a,[t._v("mdi-camera-flip")])],1)],1)],1)]),t._v(" "),e(c.a,[e(n.a,{staticClass:"secondary",attrs:{type:"button"},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n      ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},610:function(t,e,r){"use strict";r.r(e);var header=r(440),n={middleware:"authenticated",components:{UserID:r(529).default,Header:header.default}},o=r(69),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"register"},[t("section",{},[t("Header")],1),this._v(" "),t("section",{staticClass:"mt-8"},[t("UserID")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(440).default,UserID:r(529).default})}}]);