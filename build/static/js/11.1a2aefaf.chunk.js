(window["webpackJsonpelimpay-admin"]=window["webpackJsonpelimpay-admin"]||[]).push([[11],{162:function(e,t,a){"use strict";t.a="https://backend.elimpay.com/api/"},164:function(e,t,a){"use strict";function r(e,t,a,r,n,o,i){try{var l=e[o](i),c=l.value}catch(s){return void a(s)}l.done?t(c):Promise.resolve(c).then(r,n)}function n(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var i=e.apply(t,a);function l(e){r(i,n,o,l,c,"next",e)}function c(e){r(i,n,o,l,c,"throw",e)}l(void 0)}))}}a.d(t,"a",(function(){return n}))},166:function(e,t,a){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return o(t,e),t},l=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};Object.defineProperty(t,"__esModule",{value:!0});var c=i(a(0)),s=a(167),u=(0,a(168).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,a=void 0===t||t,n=e.color,o=void 0===n?"#000000":n,i=e.speedMultiplier,d=void 0===i?1:i,m=e.cssOverride,f=void 0===m?{}:m,p=e.size,h=void 0===p?35:p,v=l(e,["loading","color","speedMultiplier","cssOverride","size"]),y=r({background:"transparent !important",width:(0,s.cssValue)(h),height:(0,s.cssValue)(h),borderRadius:"100%",border:"2px solid",borderTopColor:o,borderBottomColor:"transparent",borderLeftColor:o,borderRightColor:o,display:"inline-block",animation:"".concat(u," ").concat(.75/d,"s 0s infinite linear"),animationFillMode:"both"},f);return a?c.createElement("span",r({style:y},v)):null}},167:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"===typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var n=(e.match(/[^0-9]*$/)||"").toString();return r[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=n,t.cssValue=function(e){var t=n(e);return"".concat(t.value).concat(t.unit)}},168:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,a){var r="react-spinners-".concat(e,"-").concat(a);if("undefined"==typeof window||!window.document)return r;var n=document.createElement("style");document.head.appendChild(n);var o=n.sheet,i="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(i,0),r}},509:function(e,t,a){},555:function(e,t,a){"use strict";a.r(t);var r=a(18),n=(a(48),a(96)),o=a.n(n),i=a(0),l=a.n(i),c=a(6),s=a(166),u=a.n(s),d=a(162),m=(a(169),a(171)),f=a.n(m),p=a(172),h=a.n(p),v=a(173),y=a.n(v),b=a(164);function g(){g=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof d?t:d,o=Object.create(n.prototype),i=new O(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return _()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var l=w(i,a);if(l){if(l===u)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=s(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(e,a,i),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=c;var u={};function d(){}function m(){}function f(){}var p={};l(p,n,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(j([])));v&&v!==t&&a.call(v,n)&&(p=v);var y=f.prototype=d.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;this._invoke=function(n,o){function i(){return new t((function(r,i){!function r(n,o,i,l){var c=s(e[n],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return m.prototype=f,l(y,"constructor",f),l(f,"constructor",m),m.displayName=l(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new E(c(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),l(y,i,"Generator"),l(y,n,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var E={paginationSize:4,pageStartIndex:1,alwaysShowAllBtns:!0,withFirstAndLast:!1,hideSizePerPage:!0,hidePageListOnlyOnePage:!0,showTotal:!1,disablePageTitle:!0},w=function(e){var t=e.mobileNum,a=Object(c.g)(),n=Object(i.useState)([]),s=Object(r.a)(n,2),m=s[0],p=s[1],w=Object(i.useState)(!0),N=Object(r.a)(w,2),x=N[0],O=N[1];console.log("items is",m);var j=sessionStorage.getItem("token");Object(i.useEffect)((function(){var e=function(){var e=Object(b.a)(g().mark((function e(){return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("".concat(d.a,"transaction/transaction-of-user/authenticate_for_admin/").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j)}}).then((function(e){console.log("RES",e);for(var t=[],a=0;a<e.data.length;a+=1)t.push({id:e.data[a].id,senderNum:e.data[a].senderNum,recieverNum:e.data[a].recieverNum,amount:e.data[a].amount,tsxSuccessful:!0===e.data[a].tsxSuccessful?"Success":"Failed",redemptiondate:e.data[a].recieverNum});p(t),O(!1),setTimeout((function(){O(!1)}),3e3)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();Object(b.a)(g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}),[]);var _=v.Search.SearchBar,S=[{dataField:"id",text:"Id",sort:!0,classes:"deal-row",headerClasses:"deal-header"},{dataField:"senderNum",text:"Sender Number",classes:"deal-row-2",headerClasses:"deal-header"},{dataField:"recieverNum",text:"Reciever Number",classes:"deal-row",headerClasses:"deal-header"},{dataField:"amount",text:"Amount",classes:"deal-row",headerClasses:"deal-header"},{dataField:"tsxSuccessful",text:"Txn Status",headerClasses:"deal-header"},{dataField:"branchredeem",isDummyField:!0,text:"View Profile",headerClasses:"deal-header",formatter:function(e,t){return L(e,t)}}],L=function(e,t){return l.a.createElement("h5",null,l.a.createElement("button",{alt:"issueimageload",className:"btn btn-success",onClick:function(){a.push({pathname:"/admin/TxnDetails",state:{txnid:t.id}})}},"view"))};return console.log("list of item",m),l.a.createElement("div",null,l.a.createElement("h2",{className:"text-primary bw-bold"},"Transactions of the User"),x?l.a.createElement("div",{className:"row",style:{height:"500px"}},l.a.createElement("div",{className:"col-12 text-center my-auto"},l.a.createElement(u.a,{color:"#136be0",size:100,speedMultiplier:1}))):l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 grid-margin"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement(y.a,{keyField:"id",data:m,columns:S,search:!0},(function(e){return l.a.createElement("div",null,l.a.createElement("h3",null,"Search:"),l.a.createElement(_,Object.assign({},e.searchProps,{className:"custome-search-field",style:{color:"white"},delay:500,placeholder:"Search ..."})),l.a.createElement("hr",null),m.length>0?l.a.createElement(f.a,Object.assign({},e.baseProps,{headerClasses:{backgroundColor:"red"},pagination:h()(E)})):l.a.createElement("div",{className:"text-center text-danger"},l.a.createElement("h4",null,"No Entries Found !")))})))))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"row"}))))},N=a(509),x=a.n(N);t.default=function(){var e=Object(c.h)(),t=Object(i.useState)({id:0,email:"",name:"",pin:null,countryCode:null,gender:null,occupation:null,address:null,otp:null,nearby_area:null,mobileNum:"",publicKey:"",balance:0,tsxs:[],passportImg:null,idCard:null,profileImg:null,kycStatus:"",role:""}),a=Object(r.a)(t,2),n=a[0],s=a[1],m=n.id,f=(n.email,n.name),p=n.pin,h=(n.countryCode,n.gender,n.occupation,n.address),v=(n.otp,n.nearby_area,n.mobileNum),y=(n.publicKey,n.balance,n.tsxs,n.passportImg,n.idCard,n.profileImg,n.kycStatus),b=n.role,g=Object(i.useState)(!0),E=Object(r.a)(g,2),N=E[0],O=E[1],j=sessionStorage.getItem("token");return Object(i.useEffect)((function(){var t=e.state.dataEmail;o.a.get("".concat(d.a,"Admin/fetch-user-profile?email=").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j)}}).then((function(e){console.log(e),s({id:e.data.data.id,email:e.data.data.email,name:e.data.data.name,pin:e.data.data.pin,countryCode:e.data.data.countryCode,gender:e.data.data.gender,occupation:e.data.data.occupation,address:e.data.data.address,otp:e.data.data.otp,nearby_area:e.data.data.nearby_area,mobileNum:e.data.data.mobileNum,publicKey:e.data.data.publicKey,balance:e.data.data.balance,tsxs:null!==e.data.data.tsxs?e.data.data.tsxs:[],passportImg:e.data.data.passportImg,idCard:e.data.data.idCard,profileImg:e.data.data.profileImg,kycStatus:e.data.data.kycStatus,role:e.data.data.role}),O(!1),setTimeout((function(){O(!1)}),3e3)}))}),[]),l.a.createElement("div",{className:"col-12 grid-margin userProfileMain"},l.a.createElement("h4",{className:"card-title fs-3"},"User Personal Information"),N?l.a.createElement("div",{className:"row",style:{height:"500px"}},l.a.createElement("div",{className:"col-12 text-center my-auto"},l.a.createElement(u.a,{color:"#136be0",size:100,speedMultiplier:1}))):l.a.createElement("div",{className:"card userProfileCard-2 "},l.a.createElement("div",{className:"col-12 grid-margin"},l.a.createElement("div",{className:"card userCard p-lg-2"},l.a.createElement("div",{className:"card-body ".concat(x.a.usercardbody)},l.a.createElement("form",{className:"row g-3 form-sample"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"User ID :"),l.a.createElement("input",{className:"form-control",id:"inputEmail4",value:m})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("label",{htmlFor:"exampleInputUsername1",className:" form-label"},"User Name :"),l.a.createElement("input",{className:"form-control",id:"inputPassword4",value:f}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{className:"row g-3 form-sample"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"First Name:"),l.a.createElement("input",{className:"form-control",id:"inputEmail4",value:f})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Contact Number :"),l.a.createElement("input",{className:"form-control",id:"inputEmail4",value:v})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Address :"),l.a.createElement("input",{className:"form-control",id:"inputEmail4",value:h}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{className:"row g-3 form-sample"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Kyc Status :"),l.a.createElement("input",{className:"form-control",id:"inputEmail4",value:y})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Pin :"),l.a.createElement("input",{className:"form-control",id:"inputEmail4",value:p})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Role :"),l.a.createElement("input",{className:"form-control",id:"inputEmail4",value:b})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Mobile no :"),l.a.createElement("input",{className:"form-control",id:"inputEmail4",value:v}))),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",{className:"row g-3 form-sample"},l.a.createElement("div",{className:"col-12"},l.a.createElement(w,{mobileNum:v})))),l.a.createElement("br",null))))}}}]);
//# sourceMappingURL=11.1a2aefaf.chunk.js.map