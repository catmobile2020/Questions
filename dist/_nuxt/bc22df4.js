<<<<<<<< HEAD:dist/_nuxt/51a37c9.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{441:function(t,e,r){var content=r(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("2f6b6adb",content,!0,{sourceMap:!1})},442:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:16px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),n.locals={},t.exports=n},466:function(t,e,r){"use strict";var n=r(2),o=(r(39),r(61),r(63),r(441),r(159)),l=r(37),c=r(34),d=r(88),v=r(195),h=r(15),m=r(1),_=r(11);e.a=Object(h.a)(o.a,l.a,d.a,Object(v.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:c.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,r=t.bottom,footer=t.footer,n=t.insetFooter,o=t.left,l=t.right,c=t.top;return{paddingBottom:Object(m.h)(r+footer+n),paddingLeft:Object(m.h)(o),paddingRight:Object(m.h)(l),paddingTop:Object(m.h)(e+c)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(_.e)("auto-height",this),0==this.timeout&&Object(_.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(m.s)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(n.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(m.s)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:o.a.options.computed.classes.call(this),style:o.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},468:function(t,e,r){"use strict";r(443);var n=r(1);e.a=Object(n.j)("spacer","div","v-spacer")},528:function(t,e,r){"use strict";r.r(e);var n=r(471),o=r(531),l=r(438),c=r(494),d=r(547),v=r(617),h=r(185),m=r(493),_=r(466),f=r(468),k=r(545),x=(r(13),r(35),r(32)),D=(r(106),r(5),r(8),r(87),{data:function(){return{errorSnackbar:!1,timeout:3e3,errorMessage:"",validRule:[function(t){return!!t||"Filed is Required"}],showDialog:!1,pressureScale:null,bloodSugarLevel:null,userData:{},formData:{uuid:this.$route.query.uuid,systolic_blood_pressure:"",diastolic_blood_pressure:"",weight:"",height:"",blood_sugar:"",pulse:""}}},computed:{isFormValid:function(){return this.formData.systolic_blood_pressure&&this.formData.diastolic_blood_pressure&&this.formData.weight&&this.formData.height&&this.formData.blood_sugar&&this.formData.pulse}},methods:{submit:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/step-three/update",t.formData);case 3:e.sent,t.showDialog=!0,e.next=10;break;case 7:if(e.prev=7,e.t0=e.catch(0),e.t0&&e.t0.data)if(r=e.t0.data.error,n=e.t0.data.message,console.log("errorMessageData",n),n)t.errorMessage=n,console.log("errorMessage",t.errorMessage),t.errorSnackbar=!0;else{for(l in o=[],r)Array.isArray(r[l])&&r[l].forEach((function(t){o.push(t)}));t.errorSnackbar=!0,t.errorMessage=o.join("\n")}else t.errorMessage="Something went wrong.";case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getData:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/step-three/show/".concat(t.formData.uuid));case 3:data=e.sent,t.userData=data.data,console.error("userData:",t.userData),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("API Error:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},created:function(){this.getData()}}),y=r(69),component=Object(y.a)(D,(function(){var t=this,e=t._self._c;return t.userData&&Object.keys(t.userData).length>0?e("div",{staticClass:"conOfForm logIn"},[e(d.a,{staticClass:"loginForm"},[e("div",{staticClass:"userDetails"},[e(m.a,[3==t.userData.step||4==t.userData.step?e(c.a,{staticClass:"d-flex justify-center"},[e("div",{staticClass:"step"},[t._v("\n            Step\n            "),e("span",{staticClass:"stepNum"},[t._v(" 3 ")]),t._v(" "),e("span",{staticClass:"completed"},[t._v("Completed")])])]):e(c.a,{staticClass:"d-flex justify-center"},[e("div",{staticClass:"step"},[t._v("\n            Step\n            "),e("span",{staticClass:"stepNum"},[t._v(" 3 ")])])]),t._v(" "),e(c.a,{attrs:{cols:"12",md:"12"}},[e("div",{staticClass:"text-field-style"},[e("h3",[t._v("Personal Information")]),t._v(" "),e("div",{staticClass:"d-flex"},[e("p",{staticClass:"text-field-style"},[t._v("Name : "+t._s(t.userData.name))]),t._v(" "),e("p",{staticClass:"text-field-style"},[t._v("age : "+t._s(t.userData.age))]),t._v(" "),e("p",{staticClass:"text-field-style"},[t._v("gender : "+t._s(t.userData.gender))]),t._v(" "),e("p",{staticClass:"text-field-style"},[t._v("\n                national id : "+t._s(t.userData.national_id)+"\n              ")])])]),t._v(" "),e(m.a,{staticClass:"d-flex"},[e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Family history of premature CAD :\n                "+t._s(t.userData.family_history_of_premature_CAD)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Diabetic :\n                "+t._s(t.userData.diabetic)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Hypertensive :\n                "+t._s(t.userData.hypertensive)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Dyslipidemia :\n                "+t._s(t.userData.dyslipidemia)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Smoker :\n                "+t._s(t.userData.smoker)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Lipid Test :\n                "+t._s(t.userData.lipid_test)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                hpa1c :\n                "+t._s(t.userData.hpa1c)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Triglycerides :\n                "+t._s(t.userData.triglycerides)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                HDL :\n                "+t._s(t.userData.HDL)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                LDL :\n                "+t._s(t.userData.LDL)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Total Cholesterol :\n                "+t._s(t.userData.total_cholesterol)+"\n              ")])])],1)],1),t._v(" "),e(c.a,{staticClass:"d-flex"},[e(m.a,[e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("Systolic Blood Pressure")]),t._v(" "),e(k.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.systolic_blood_pressure,callback:function(e){t.$set(t.formData,"systolic_blood_pressure",e)},expression:"formData.systolic_blood_pressure"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("Diastolic Blood Pressure")]),t._v(" "),e(k.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.diastolic_blood_pressure,callback:function(e){t.$set(t.formData,"diastolic_blood_pressure",e)},expression:"formData.diastolic_blood_pressure"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("weight")]),t._v(" "),e(k.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.weight,callback:function(e){t.$set(t.formData,"weight",e)},expression:"formData.weight"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("height")]),t._v(" "),e(k.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.height,callback:function(e){t.$set(t.formData,"height",e)},expression:"formData.height"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("Blood Sugar")]),t._v(" "),e(k.a,{staticClass:"formInput",attrs:{outlined:"",placeholder:"Number",required:"","hide-details":"auto",type:"number",solo:"",rules:t.validRule},model:{value:t.formData.blood_sugar,callback:function(e){t.$set(t.formData,"blood_sugar",e)},expression:"formData.blood_sugar"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("pulse")]),t._v(" "),e(k.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.pulse,callback:function(e){t.$set(t.formData,"pulse",e)},expression:"formData.pulse"}})],1)],1)],1)],1)],1),t._v(" "),e(c.a,{staticClass:"d-flex justify-center",attrs:{md:"12"}},[e(n.a,{staticClass:"primary SubmitBtn",attrs:{disabled:!t.isFormValid},on:{click:function(e){return t.submit()}}},[t._v("\n        Submit\n      ")])],1),t._v(" "),e(v.a,{attrs:{"max-width":"500"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[e(o.a,[e(l.c,{staticClass:"d-flex justify-center"},[e("h3",[t._v(t._s(t.formData.name))]),t._v(" "),e(h.a,{staticClass:"mark"},[t._v(" mdi-checkbox-marked-circle ")])],1),t._v(" "),e(l.b,[e("span",{staticClass:"thankYou"},[t._v("Thank You For Your Registration")])]),t._v(" "),e(l.a,{staticClass:"pb-10"},[e(f.a),t._v(" "),e("nuxt-link",{attrs:{to:"userID"}},[e(n.a,{attrs:{color:"primary"},on:{click:function(e){t.showDialog=!1}}},[t._v("Close")])],1)],1)],1)],1)],1),t._v(" "),e(_.a,{attrs:{color:"red",shaped:"",top:"",right:"",timeout:t.timeout},model:{value:t.errorSnackbar,callback:function(e){t.errorSnackbar=e},expression:"errorSnackbar"}},[t._v("\n    "+t._s(t.errorMessage)+"\n  ")])],1):e("div",{staticClass:"errMessage"},[t._v("Patient not found!")])}),[],!1,null,null,null);e.default=component.exports}}]);
========
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{441:function(t,e,r){var content=r(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("2f6b6adb",content,!0,{sourceMap:!1})},442:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:16px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),n.locals={},t.exports=n},466:function(t,e,r){"use strict";var n=r(2),o=(r(39),r(61),r(63),r(441),r(159)),l=r(37),c=r(34),d=r(88),v=r(195),h=r(15),m=r(1),_=r(11);e.a=Object(h.a)(o.a,l.a,d.a,Object(v.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:c.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,r=t.bottom,footer=t.footer,n=t.insetFooter,o=t.left,l=t.right,c=t.top;return{paddingBottom:Object(m.h)(r+footer+n),paddingLeft:Object(m.h)(o),paddingRight:Object(m.h)(l),paddingTop:Object(m.h)(e+c)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(_.e)("auto-height",this),0==this.timeout&&Object(_.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(m.s)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(n.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(m.s)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:o.a.options.computed.classes.call(this),style:o.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},468:function(t,e,r){"use strict";r(443);var n=r(1);e.a=Object(n.j)("spacer","div","v-spacer")},528:function(t,e,r){"use strict";r.r(e);var n=r(471),o=r(531),l=r(438),c=r(494),d=r(544),v=r(601),h=r(185),m=r(493),_=r(466),f=r(468),k=r(542),x=(r(13),r(35),r(32)),D=(r(106),r(5),r(8),r(87),{data:function(){return{errorSnackbar:!1,timeout:3e3,errorMessage:"",validRule:[function(t){return!!t||"Filed is Required"}],showDialog:!1,pressureScale:null,bloodSugarLevel:null,userData:{},formData:{uuid:this.$route.query.uuid,systolic_blood_pressure:"",diastolic_blood_pressure:"",weight:"",height:"",blood_sugar:"",pulse:""}}},computed:{isFormValid:function(){return this.formData.systolic_blood_pressure&&this.formData.diastolic_blood_pressure&&this.formData.weight&&this.formData.height&&this.formData.blood_sugar&&this.formData.pulse}},methods:{submit:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/step-three/update",t.formData);case 3:e.sent,t.showDialog=!0,e.next=10;break;case 7:if(e.prev=7,e.t0=e.catch(0),e.t0&&e.t0.data)if(r=e.t0.data.error,n=e.t0.data.message,console.log("errorMessageData",n),n)t.errorMessage=n,console.log("errorMessage",t.errorMessage),t.errorSnackbar=!0;else{for(l in o=[],r)Array.isArray(r[l])&&r[l].forEach((function(t){o.push(t)}));t.errorSnackbar=!0,t.errorMessage=o.join("\n")}else t.errorMessage="Something went wrong.";case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getData:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/step-three/show/".concat(t.formData.uuid));case 3:data=e.sent,t.userData=data.data,console.error("userData:",t.userData),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("API Error:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},created:function(){this.getData()}}),y=r(69),component=Object(y.a)(D,(function(){var t=this,e=t._self._c;return t.userData&&Object.keys(t.userData).length>0?e("div",{staticClass:"conOfForm logIn"},[e(d.a,{staticClass:"loginForm"},[e("div",{staticClass:"userDetails"},[e(m.a,[3==t.userData.step||4==t.userData.step?e(c.a,{staticClass:"d-flex justify-center"},[e("div",{staticClass:"step"},[t._v("\n            Step\n            "),e("span",{staticClass:"stepNum"},[t._v(" 3 ")]),t._v(" "),e("span",{staticClass:"completed"},[t._v("Completed")])])]):e(c.a,{staticClass:"d-flex justify-center"},[e("div",{staticClass:"step"},[t._v("\n            Step\n            "),e("span",{staticClass:"stepNum"},[t._v(" 3 ")])])]),t._v(" "),e(c.a,{attrs:{cols:"12",md:"12"}},[e("div",{staticClass:"text-field-style"},[e("h3",[t._v("Personal Information")]),t._v(" "),e("div",{staticClass:"d-flex"},[e("p",{staticClass:"text-field-style"},[t._v("Name : "+t._s(t.userData.name))]),t._v(" "),e("p",{staticClass:"text-field-style"},[t._v("age : "+t._s(t.userData.age))]),t._v(" "),e("p",{staticClass:"text-field-style"},[t._v("gender : "+t._s(t.userData.gender))]),t._v(" "),e("p",{staticClass:"text-field-style"},[t._v("\n                national id : "+t._s(t.userData.national_id)+"\n              ")])])]),t._v(" "),e(m.a,{staticClass:"d-flex"},[e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Family history of premature CAD :\n                "+t._s(t.userData.family_history_of_premature_CAD)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Diabetic :\n                "+t._s(t.userData.diabetic)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Hypertensive :\n                "+t._s(t.userData.hypertensive)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Dyslipidemia :\n                "+t._s(t.userData.dyslipidemia)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Smoker :\n                "+t._s(t.userData.smoker)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Lipid Test :\n                "+t._s(t.userData.lipid_test)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                hpa1c :\n                "+t._s(t.userData.hpa1c)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Triglycerides :\n                "+t._s(t.userData.triglycerides)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                HDL :\n                "+t._s(t.userData.HDL)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                LDL :\n                "+t._s(t.userData.LDL)+"\n              ")])]),t._v(" "),e(c.a,{attrs:{md:"3",cols:"4"}},[e("p",{staticClass:"text-field-style"},[t._v("\n                Total Cholesterol :\n                "+t._s(t.userData.total_cholesterol)+"\n              ")])])],1)],1),t._v(" "),e(c.a,{staticClass:"d-flex"},[e(m.a,[e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("Systolic Blood Pressure")]),t._v(" "),e(k.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.systolic_blood_pressure,callback:function(e){t.$set(t.formData,"systolic_blood_pressure",e)},expression:"formData.systolic_blood_pressure"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("Diastolic Blood Pressure")]),t._v(" "),e(k.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.diastolic_blood_pressure,callback:function(e){t.$set(t.formData,"diastolic_blood_pressure",e)},expression:"formData.diastolic_blood_pressure"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("weight")]),t._v(" "),e(k.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.weight,callback:function(e){t.$set(t.formData,"weight",e)},expression:"formData.weight"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("height")]),t._v(" "),e(k.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.height,callback:function(e){t.$set(t.formData,"height",e)},expression:"formData.height"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("Blood Sugar")]),t._v(" "),e(k.a,{staticClass:"formInput",attrs:{outlined:"",placeholder:"Number",required:"","hide-details":"auto",type:"number",solo:"",rules:t.validRule},model:{value:t.formData.blood_sugar,callback:function(e){t.$set(t.formData,"blood_sugar",e)},expression:"formData.blood_sugar"}})],1),t._v(" "),e(c.a,{attrs:{md:"6",cols:"6"}},[e("label",[t._v("pulse")]),t._v(" "),e(k.a,{staticClass:"formInput",attrs:{type:"number",outlined:"",placeholder:"Number",required:"","hide-details":"auto",solo:"",rules:t.validRule},model:{value:t.formData.pulse,callback:function(e){t.$set(t.formData,"pulse",e)},expression:"formData.pulse"}})],1)],1)],1)],1)],1),t._v(" "),e(c.a,{staticClass:"d-flex justify-center",attrs:{md:"12"}},[e(n.a,{staticClass:"primary SubmitBtn",attrs:{disabled:!t.isFormValid},on:{click:function(e){return t.submit()}}},[t._v("\n        Submit\n      ")])],1),t._v(" "),e(v.a,{attrs:{"max-width":"500"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[e(o.a,[e(l.c,{staticClass:"d-flex justify-center"},[e("h3",[t._v(t._s(t.formData.name))]),t._v(" "),e(h.a,{staticClass:"mark"},[t._v(" mdi-checkbox-marked-circle ")])],1),t._v(" "),e(l.b,[e("span",{staticClass:"thankYou"},[t._v("Thank You For Your Registration")])]),t._v(" "),e(l.a,{staticClass:"pb-10"},[e(f.a),t._v(" "),e("nuxt-link",{attrs:{to:"userID"}},[e(n.a,{attrs:{color:"primary"},on:{click:function(e){t.showDialog=!1}}},[t._v("Close")])],1)],1)],1)],1)],1),t._v(" "),e(_.a,{attrs:{color:"red",shaped:"",top:"",right:"",timeout:t.timeout},model:{value:t.errorSnackbar,callback:function(e){t.errorSnackbar=e},expression:"errorSnackbar"}},[t._v("\n    "+t._s(t.errorMessage)+"\n  ")])],1):e("div",{staticClass:"errMessage"},[t._v("Patient not found!")])}),[],!1,null,null,null);e.default=component.exports}}]);
>>>>>>>> 314399d61863e8b5972e6647600996186c6be4f1:dist/_nuxt/bc22df4.js
