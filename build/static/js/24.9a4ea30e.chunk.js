(window["webpackJsonpelimpay-admin"]=window["webpackJsonpelimpay-admin"]||[]).push([[24],{162:function(e,a,t){"use strict";a.a="https://backend.elimpay.com/api/"},518:function(e,a,t){},554:function(e,a,t){"use strict";t.r(a);var l=t(18),r=t(96),o=t.n(r),m=t(0),c=t.n(m),n=t(6),s=t(162);t(518);a.default=function(){var e=Object(m.useState)({id:"",projectName:"",orgsMobileNum:"",description:"",long_des:"",image:"",image2:"",projStatus:"",createdBy:"",created_at:""}),a=Object(l.a)(e,2),t=a[0],r=a[1],i=sessionStorage.getItem("token"),d=Object(n.h)().state.projId;return Object(m.useEffect)((function(){o.a.get("".concat(s.a,"Admin/project-details-by-id?id=").concat(d),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i)}}).then((function(e){console.log(e),r({id:e.data.id,projectName:e.data.projectName,description:e.data.description,image:e.data.image,image2:e.data.image2,long_des:e.data.long_des,orgsMobileNum:e.data.orgsMobileNum,created_at:e.data.created_at,createdBy:e.data.createdBy})}))}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"container form-1"},c.a.createElement("h4",{className:" mt-5 mb-5 "},"Project Details"),c.a.createElement("form",{className:"row g-3"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("label",{for:"inputEmail4",className:"form-label"},"Project #"),c.a.createElement("input",{type:"text",readonly:!0,className:"form-control-plaintext text-muted",value:t.id})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("label",{for:"inputPassword4",className:"form-label"},"Project Name"),c.a.createElement("input",{type:"text",readonly:!0,className:"form-control-plaintext text-primary",id:"",value:t.projectName})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("label",{for:"inputEmail4",className:"form-label"},"Created By"),c.a.createElement("input",{type:"text",readonly:!0,className:"form-control-plaintext text-muted",id:"",value:t.createdBy})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("label",{for:"inputPassword4",className:"form-label"},"Created at"),c.a.createElement("input",{type:"text",readonly:!0,className:"form-control-plaintext text-muted",id:"",value:t.created_at})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("label",{for:"inputEmail4",className:"form-label"},"Status"),c.a.createElement("input",{type:"text",readonly:!0,className:"form-control-plaintext text-muted",id:"",value:t.projStatus})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("label",{for:"inputPassword4",className:"form-label"},"Organsier Mobile"),c.a.createElement("input",{type:"text",readonly:!0,className:"form-control-plaintext text-muted",id:"",value:t.orgsMobileNum?t.orgsMobileNum:"Nil"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"exampleFormControlTextarea1"},"Description"),c.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",value:t.description})),c.a.createElement("div",{className:"form-group mb-5"},c.a.createElement("label",{for:"exampleFormControlTextarea1"},"Long Description"),c.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",value:t.long_des},t.long_des)))))}}}]);
//# sourceMappingURL=24.9a4ea30e.chunk.js.map