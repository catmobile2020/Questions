(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{449:function(t,e,n){var content=n(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("6673adac",content,!0,{sourceMap:!1})},450:function(t,e,n){"use strict";n.r(e);var o=n(503),r=n(447),l=n(492),c=n(494),d=(n(14),n(8),n(13),n(5),n(18),n(9),n(19),n(119)),h=n(2),v=(n(34),n(470),n(444)),f=n(192),m=n(440),_=n(96),w=n(36),x=n(200),y=n(98),C=n(0).a.extend({name:"rippleable",directives:{ripple:y.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),O=n(33),S=(n(38),n(259)),j=n(16);function k(t){t.preventDefault()}var I=Object(j.a)(m.a,C,S.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=m.a.options.methods.genLabel.call(this);return label?(label.data.on={click:k},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:k},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}}),D=n(1),A=n(102),$=["title"];function V(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?V(Object(n),!0).forEach((function(e){Object(h.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P=Object(j.a)(_.a,w.a,C,Object(x.a)("radioGroup"),O.a).extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:{type:Boolean,default:null},id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:{type:Boolean,default:null},value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return M(M({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){if(!this.isDisabled)return I.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return m.a.options.computed.computedId.call(this)},hasLabel:m.a.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){var t;return null!==(t=this.disabled)&&void 0!==t?t:!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){var t;return null!==(t=this.readonly)&&void 0!==t?t:!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return I.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return I.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(v.a,{on:{click:k},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(D.m)(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,Object(d.a)(t,$));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(f.a,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(M({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){return t("div",{staticClass:"v-radio",class:this.classes,on:Object(A.b)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}},[this.genRadio(),this.genLabel()])}}),B=(n(37),n(460),n(462),n(150));function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){Object(h.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var G=Object(j.a)(B.a,m.a).extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return E(E({},m.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},m.a.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=m.a.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var label=m.a.options.methods.genLabel.call(this);return label?(label.data.attrs.id=this.computedId,delete label.data.attrs.for,label.tag="legend",label):null},onClick:B.a.options.methods.onClick},render:function(t){var e=m.a.options.render.call(this,t);return this._b(e.data,"div",this.attrs$),e}}),T=n(446),Q=n(32),z=(n(103),n(35),n(476),n(58),{data:function(){return{currentQuestionIndex:0,selectedAnswer:null,countdown:2400,timer:null,loading:!1,userResponses:[],questionsData:[]}},computed:{countdownTimer:function(){var t=this.countdown;if(t>=60){var e=Math.floor(t/60),n=t%60;return"".concat(e," : ").concat(n.toString().padStart(2,"0"))}return t<60&&t>=0?"00 : ".concat(t.toString().padStart(2,"0")):"00 : 00"}},created:function(){this.startTimer(),this.getQuestionsData();var t=localStorage.getItem("user_id"),e=sessionStorage.getItem("registration_completed");t&&"true"===e?window.addEventListener("beforeunload",this.handleBeforeUnload):this.$router.push("/")},beforeDestroy:function(){window.removeEventListener("beforeunload",this.handleBeforeUnload)},watch:{},methods:{handleBeforeUnload:function(){console.log("Before unload. Current sessionStorage:",sessionStorage),sessionStorage.getItem("registration_completed")&&(sessionStorage.removeItem("registration_completed"),console.log("Item 'registration_completed' removed.")),console.log("After removal. Updated sessionStorage:",sessionStorage)},startTimer:function(){var t=this;this.timer=setInterval((function(){t.countdown--,0===t.countdown&&t.submitAnswer()}),1e3)},handleAnswerChange:function(){},submitAnswer:function(){var t={question_id:this.questionsData[this.currentQuestionIndex].id,user_answer:this.selectedAnswer,time_taken:2400-this.countdown};this.userResponses.push(t),this.currentQuestionIndex++,this.selectedAnswer=null,(0===this.countdown||this.currentQuestionIndex>=this.questionsData.length)&&this.sendDataToEndpoint()},sendDataToEndpoint:function(){var t=this;return Object(Q.a)(regeneratorRuntime.mark((function e(){var n,data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("user_id"),data={user_id:n,answers:t.userResponses},e.next=5,t.$axios.$post("/upload_answers",data);case 5:e.sent,t.countdown=0,setTimeout((function(){t.$router.push("/")}),1e3),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),o=e.t0.data.error.name,t.errorSnackbar=!0,t.errorMessage=o;case 15:console.log(" data :",t.userResponses);case 16:case"end":return e.stop()}}),e,null,[[0,10]])})))()},getQuestionsData:function(){var t=this;return Object(Q.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$axios.$get("/questions");case 4:data=e.sent,t.questionsData=data.questions,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:return e.prev=10,t.loading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,8,10,13]])})))()}}}),L=(n(479),n(66)),component=Object(L.a)(z,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("div",{staticClass:"questionComponent"},[e(c.a,{staticClass:"conOfForm"},[e(l.a,[e(T.a),t._v(" "),t.currentQuestionIndex<t.questionsData.length&&t.countdown>=1&&!t.loading?e(T.a,{staticClass:"d-flex justify-center align-center flex-column"},[e(r.a,{staticClass:"d-flex"},[e(r.a,[e("p",{staticClass:"d-flex justify-center align-center"},[e("span",{staticClass:"Time"},[t._v(" Time remaining : ")]),t._v(" "),e("span",{staticClass:"counter"},[t._v(" "+t._s(t.countdownTimer))])])]),t._v(" "),e(r.a,[e("p",{staticClass:"d-flex justify-center align-center"},[e("span",{staticClass:"Time"},[t._v(" Question   ")]),t._v(" "),e("span",{staticClass:"counter"},[t._v("\n                    "+t._s(t.currentQuestionIndex+1)+" / "+t._s(t.questionsData.length))])])])],1),t._v(" "),e(r.a,{attrs:{cols:"12",md:"6"}},[e("div",[e("p",[t._v(t._s(t.questionsData[t.currentQuestionIndex].title))]),t._v(" "),e(G,{on:{change:t.handleAnswerChange},model:{value:t.selectedAnswer,callback:function(e){t.selectedAnswer=e},expression:"selectedAnswer"}},t._l(t.questionsData[t.currentQuestionIndex].answers,(function(t,n){return e(P,{key:n,attrs:{label:t,value:n}})})),1)],1),t._v(" "),e("div",{staticClass:"d-flex justify-end"},[e(o.a,{staticClass:"submitBtn orange-btn-color",on:{click:t.submitAnswer}},[t._v("Next\n                ")])],1)])],1):t.countdown>=1&&t.loading?e(T.a,{staticClass:"d-flex justify-center"},[e("div",{staticClass:"Message"},[e("p",{staticClass:"success-message"},[t._v("Please wait!")])])]):e(T.a,{staticClass:"d-flex justify-center"},[e("div",{staticClass:"Message"},[e("p",{staticClass:"success-message"},[t._v("Quiz Completed!")])])])],1)],1)],1)])])}),[],!1,null,null,null);e.default=component.exports},460:function(t,e,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("ae7a972c",content,!0,{sourceMap:!1})},461:function(t,e,n){var o=n(23)((function(i){return i[1]}));o.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-bottom:0;margin-top:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{cursor:pointer;height:100%;opacity:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;left:-12px;margin:7px;position:absolute;top:calc(50% - 24px);transition:inherit;width:34px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0;transform:scale(.2);transform-origin:center center;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{height:28px;left:-9px;width:28px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),o.locals={},t.exports=o},462:function(t,e,n){var content=n(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("e09e1dc8",content,!0,{sourceMap:!1})},463:function(t,e,n){var o=n(23)((function(i){return i[1]}));o.push([t.i,".v-input--radio-group legend.v-label{cursor:text;font-size:14px;height:auto}.v-input--radio-group__input{border:none;cursor:default;display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row legend{align-self:center;display:inline-block}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column legend{padding-bottom:8px}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),o.locals={},t.exports=o},470:function(t,e,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("78a1b980",content,!0,{sourceMap:!1})},471:function(t,e,n){var o=n(23)((function(i){return i[1]}));o.push([t.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{cursor:default;pointer-events:none}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}",""]),o.locals={},t.exports=o},476:function(t,e,n){"use strict";var o=n(3),r=n(477).start;o({target:"String",proto:!0,forced:n(478)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},477:function(t,e,n){"use strict";var o=n(7),r=n(84),l=n(26),c=n(198),d=n(43),h=o(c),v=o("".slice),f=Math.ceil,m=function(t){return function(e,n,o){var c,m,_=l(d(e)),w=r(n),x=_.length,y=void 0===o?" ":l(o);return w<=x||""===y?_:((m=h(y,f((c=w-x)/y.length))).length>c&&(m=v(m,0,c)),t?_+m:m+_)}};t.exports={start:m(!1),end:m(!0)}},478:function(t,e,n){"use strict";var o=n(68);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)},479:function(t,e,n){"use strict";n(449)},480:function(t,e,n){var o=n(23)((function(i){return i[1]}));o.push([t.i,".loginlink{color:#bf9021!important}.Time{color:#000!important;font-size:22px;font-weight:700}.counter{color:red!important;display:inline-block;font-size:22px;font-weight:700;margin-left:8px}.Message{color:#bf9021;font-size:30px;font-weight:500}",""]),o.locals={},t.exports=o}}]);