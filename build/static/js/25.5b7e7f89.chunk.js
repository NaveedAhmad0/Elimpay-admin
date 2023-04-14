(window["webpackJsonpelimpay-admin"]=window["webpackJsonpelimpay-admin"]||[]).push([[25],{178:function(e,a,t){e.exports=t.p+"static/media/face8.16958c47.jpg"},189:function(e,a,t){"use strict";var l=t(1),r=t(3),s=t(4),i=t.n(s),o=t(0),c=t.n(o),n=(t(97),t(2)),m=t.n(n),d=["as","className","type","tooltip"],u={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},b=c.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,o=e.className,n=e.type,m=void 0===n?"valid":n,u=e.tooltip,b=void 0!==u&&u,f=Object(r.a)(e,d);return c.a.createElement(s,Object(l.a)({},f,{ref:a,className:i()(o,m+"-"+(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=u;var f=b,p=c.a.createContext({controlId:void 0}),v=t(5),x=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],N=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,n=e.bsCustomPrefix,m=e.className,d=e.type,u=void 0===d?"checkbox":d,b=e.isValid,f=void 0!==b&&b,N=e.isInvalid,E=void 0!==N&&N,y=e.isStatic,O=e.as,j=void 0===O?"input":O,h=Object(r.a)(e,x),P=Object(o.useContext)(p),I=P.controlId,w=P.custom?[n,"custom-control-input"]:[s,"form-check-input"],F=w[0],C=w[1];return s=Object(v.a)(F,C),c.a.createElement(j,Object(l.a)({},h,{ref:a,type:u,id:t||I,className:i()(m,s,f&&"is-valid",E&&"is-invalid",y&&"position-static")}))}));N.displayName="FormCheckInput";var E=N,y=["bsPrefix","bsCustomPrefix","className","htmlFor"],O=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,n=e.className,m=e.htmlFor,d=Object(r.a)(e,y),u=Object(o.useContext)(p),b=u.controlId,f=u.custom?[s,"custom-control-label"]:[t,"form-check-label"],x=f[0],N=f[1];return t=Object(v.a)(x,N),c.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||b,className:i()(n,t)}))}));O.displayName="FormCheckLabel";var j=O,h=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],P=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,n=e.bsCustomPrefix,m=e.inline,d=void 0!==m&&m,u=e.disabled,b=void 0!==u&&u,x=e.isValid,N=void 0!==x&&x,y=e.isInvalid,O=void 0!==y&&y,P=e.feedbackTooltip,I=void 0!==P&&P,w=e.feedback,F=e.className,C=e.style,g=e.title,k=void 0===g?"":g,R=e.type,T=void 0===R?"checkbox":R,V=e.label,L=e.children,S=e.custom,z=e.as,G=void 0===z?"input":z,M=Object(r.a)(e,h),A="switch"===T||S,J=A?[n,"custom-control"]:[s,"form-check"],B=J[0],q=J[1];s=Object(v.a)(B,q);var D=Object(o.useContext)(p).controlId,H=Object(o.useMemo)((function(){return{controlId:t||D,custom:A}}),[D,A,t]),K=A||null!=V&&!1!==V&&!L,Q=c.a.createElement(E,Object(l.a)({},M,{type:"switch"===T?"checkbox":T,ref:a,isValid:N,isInvalid:O,isStatic:!K,disabled:b,as:G}));return c.a.createElement(p.Provider,{value:H},c.a.createElement("div",{style:C,className:i()(F,s,A&&"custom-"+T,d&&s+"-inline")},L||c.a.createElement(c.a.Fragment,null,Q,K&&c.a.createElement(j,{title:k},V),(N||O)&&c.a.createElement(f,{type:N?"valid":"invalid",tooltip:I},w))))}));P.displayName="FormCheck",P.Input=E,P.Label=j;var I=P,w=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],F=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,n=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,b=e.lang,f=e.as,x=void 0===f?"input":f,N=Object(r.a)(e,w),E=Object(o.useContext)(p),y=E.controlId,O=E.custom?[n,"custom-file-input"]:[s,"form-control-file"],j=O[0],h=O[1];return s=Object(v.a)(j,h),c.a.createElement(x,Object(l.a)({},N,{ref:a,id:t||y,type:"file",lang:b,className:i()(m,s,d&&"is-valid",u&&"is-invalid")}))}));F.displayName="FormFileInput";var C=F,g=["bsPrefix","bsCustomPrefix","className","htmlFor"],k=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,n=e.className,m=e.htmlFor,d=Object(r.a)(e,g),u=Object(o.useContext)(p),b=u.controlId,f=u.custom?[s,"custom-file-label"]:[t,"form-file-label"],x=f[0],N=f[1];return t=Object(v.a)(x,N),c.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||b,className:i()(n,t),"data-browse":d["data-browse"]}))}));k.displayName="FormFileLabel";var R=k,T=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],V=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,n=e.bsCustomPrefix,m=e.disabled,d=void 0!==m&&m,u=e.isValid,b=void 0!==u&&u,x=e.isInvalid,N=void 0!==x&&x,E=e.feedbackTooltip,y=void 0!==E&&E,O=e.feedback,j=e.className,h=e.style,P=e.label,I=e.children,w=e.custom,F=e.lang,g=e["data-browse"],k=e.as,V=void 0===k?"div":k,L=e.inputAs,S=void 0===L?"input":L,z=Object(r.a)(e,T),G=w?[n,"custom"]:[s,"form-file"],M=G[0],A=G[1];s=Object(v.a)(M,A);var J=Object(o.useContext)(p).controlId,B=Object(o.useMemo)((function(){return{controlId:t||J,custom:w}}),[J,w,t]),q=null!=P&&!1!==P&&!I,D=c.a.createElement(C,Object(l.a)({},z,{ref:a,isValid:b,isInvalid:N,disabled:d,as:S,lang:F}));return c.a.createElement(p.Provider,{value:B},c.a.createElement(V,{style:h,className:i()(j,s,w&&"custom-file")},I||c.a.createElement(c.a.Fragment,null,w?c.a.createElement(c.a.Fragment,null,D,q&&c.a.createElement(R,{"data-browse":g},P)):c.a.createElement(c.a.Fragment,null,q&&c.a.createElement(R,null,P),D),(b||N)&&c.a.createElement(f,{type:b?"valid":"invalid",tooltip:y},O))))}));V.displayName="FormFile",V.Input=C,V.Label=R;var L=V,S=(t(45),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),z=c.a.forwardRef((function(e,a){var t,s,n=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,u=e.size,b=e.htmlSize,f=e.id,x=e.className,N=e.isValid,E=void 0!==N&&N,y=e.isInvalid,O=void 0!==y&&y,j=e.plaintext,h=e.readOnly,P=e.custom,I=e.as,w=void 0===I?"input":I,F=Object(r.a)(e,S),C=Object(o.useContext)(p).controlId,g=P?[m,"custom"]:[n,"form-control"],k=g[0],R=g[1];if(n=Object(v.a)(k,R),j)(s={})[n+"-plaintext"]=!0,t=s;else if("file"===d){var T;(T={})[n+"-file"]=!0,t=T}else if("range"===d){var V;(V={})[n+"-range"]=!0,t=V}else if("select"===w&&P){var L;(L={})[n+"-select"]=!0,L[n+"-select-"+u]=u,t=L}else{var z;(z={})[n]=!0,z[n+"-"+u]=u,t=z}return c.a.createElement(w,Object(l.a)({},F,{type:d,size:b,ref:a,readOnly:h,id:f||C,className:i()(x,t,E&&"is-valid",O&&"is-invalid")}))}));z.displayName="FormControl";var G=Object.assign(z,{Feedback:f}),M=["bsPrefix","className","children","controlId","as"],A=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,b=Object(r.a)(e,M);t=Object(v.a)(t,"form-group");var f=Object(o.useMemo)((function(){return{controlId:m}}),[m]);return c.a.createElement(p.Provider,{value:f},c.a.createElement(u,Object(l.a)({},b,{ref:a,className:i()(s,t)}),n))}));A.displayName="FormGroup";var J=A,B=["bsPrefix","className","as"],q=["xl","lg","md","sm","xs"],D=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.as,n=void 0===o?"div":o,m=Object(r.a)(e,B),d=Object(v.a)(t,"col"),u=[],b=[];return q.forEach((function(e){var a,t,l,r=m[e];if(delete m[e],"object"===typeof r&&null!=r){var s=r.span;a=void 0===s||s,t=r.offset,l=r.order}else a=r;var i="xs"!==e?"-"+e:"";a&&u.push(!0===a?""+d+i:""+d+i+"-"+a),null!=l&&b.push("order"+i+"-"+l),null!=t&&b.push("offset"+i+"-"+t)})),u.length||u.push(d),c.a.createElement(n,Object(l.a)({},m,{ref:a,className:i.a.apply(void 0,[s].concat(u,b))}))}));D.displayName="Col";var H=D,K=["as","bsPrefix","column","srOnly","className","htmlFor"],Q=c.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,n=e.bsPrefix,m=e.column,d=e.srOnly,u=e.className,b=e.htmlFor,f=Object(r.a)(e,K),x=Object(o.useContext)(p).controlId;n=Object(v.a)(n,"form-label");var N="col-form-label";"string"===typeof m&&(N=N+" "+N+"-"+m);var E=i()(u,n,d&&"sr-only",m&&N);return b=b||x,m?c.a.createElement(H,Object(l.a)({ref:a,as:"label",className:E,htmlFor:b},f)):c.a.createElement(s,Object(l.a)({ref:a,className:E,htmlFor:b},f))}));Q.displayName="FormLabel",Q.defaultProps={column:!1,srOnly:!1};var U=Q,W=["bsPrefix","className","as","muted"],X=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.as,n=void 0===o?"small":o,m=e.muted,d=Object(r.a)(e,W);return t=Object(v.a)(t,"form-text"),c.a.createElement(n,Object(l.a)({},d,{ref:a,className:i()(s,t,m&&"text-muted")}))}));X.displayName="FormText";var Y=X,Z=c.a.forwardRef((function(e,a){return c.a.createElement(I,Object(l.a)({},e,{ref:a,type:"switch"}))}));Z.displayName="Switch",Z.Input=I.Input,Z.Label=I.Label;var $=Z,_=t(46),ee=["bsPrefix","inline","className","validated","as"],ae=Object(_.a)("form-row"),te=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,o=e.className,n=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(r.a)(e,ee);return t=Object(v.a)(t,"form"),c.a.createElement(d,Object(l.a)({},u,{ref:a,className:i()(o,n&&"was-validated",s&&t+"-inline")}))}));te.displayName="Form",te.defaultProps={inline:!1},te.Row=ae,te.Group=J,te.Control=G,te.Check=I,te.File=L,te.Switch=$,te.Label=U,te.Text=Y;a.a=te},547:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),s=t(189);a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-primary bw-bold"},"Merchant Profile"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body px-5"},r.a.createElement("div",{className:"row my-5"},r.a.createElement("div",{className:"mx-auto col-2"},r.a.createElement("p",null,"Shop Type:")),r.a.createElement("div",{className:"col-10"},r.a.createElement("div",{class:"btn-group btn-group-md",role:"group","aria-label":"Basic example"},r.a.createElement("button",{type:"button",class:"btn "},"Legal Entity"),r.a.createElement("button",{type:"button",class:"btn btn-primary"},"Natural Person")))),r.a.createElement("form",{className:"forms-sample"},r.a.createElement(s.a.Group,null,r.a.createElement("label",{htmlFor:"exampleInputName1"},"Nameregisteredaccordingtothecertificate:"),r.a.createElement(s.a.Control,{type:"text",className:"form-control rounded\t",id:"exampleInputName1",placeholder:"info@gmilail.com"})),r.a.createElement(s.a.Group,null,r.a.createElement("label",{htmlFor:"exampleInputEmail3"},"Tradename:"),r.a.createElement(s.a.Control,{type:"email",className:"form-control rounded\t",id:"exampleInputEmail3",placeholder:"Name"})),r.a.createElement(s.a.Group,null,r.a.createElement("label",{htmlFor:"exampleInputPassword4"},"TaxIdentificationNumber:"),r.a.createElement(s.a.Control,{type:"text",className:"form-control rounded\t",id:"exampleInputPassword4",placeholder:"TaxIdentificationNumber "})),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"mx-auto col-md-3"},r.a.createElement("p",null,"TaxIdentificationNumber")),r.a.createElement("div",{className:"mx-auto col-md-9"},r.a.createElement("img",{className:"img-lg mb-5 me-auto rounded-circle",src:t(178),alt:"Profile"}))),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"mx-auto col-md-12"},r.a.createElement("button",{className:"btn btn-success btn-lg btn-block rounded-pill"},"Leangene")))))))}}}]);
//# sourceMappingURL=25.5b7e7f89.chunk.js.map