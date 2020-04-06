(this["webpackJsonpapp-dashboard"]=this["webpackJsonpapp-dashboard"]||[]).push([[0],{101:function(e,a,t){e.exports={LayoutPage:"classes_LayoutPage__IADik",LayoutContainer:"classes_LayoutContainer__2YoBG"}},103:function(e,a,t){e.exports={AddForm:"classes_AddForm__2LsXt",ButtonSubmit:"classes_ButtonSubmit__2S2Kx"}},132:function(e,a,t){e.exports=t(143)},137:function(e,a,t){},143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),l=t.n(o),c=(t(137),t(51)),s=t(47),i=t(179),u=t(41),m=t(176),d=t(169),p=t(172),b=t(173),_=t(97),E=t.n(_),f=function(){return r.a.createElement(d.a,{className:E.a.LayoutHeader},r.a.createElement(p.a,null,r.a.createElement(c.b,{to:"/",className:E.a.Link},r.a.createElement(b.a,{classes:{root:E.a.TypographyHeader}},"Header"))))},h=t(48),g=t.n(h),y=function(){return r.a.createElement("div",{className:g.a.LayoutFooter},r.a.createElement(c.b,{to:"/about",className:g.a.Link},r.a.createElement(b.a,{classes:{root:g.a.TypographyFooter}},"about")),r.a.createElement(c.b,{to:"/todo",className:g.a.Link},r.a.createElement(b.a,{classes:{root:g.a.TypographyFooter}},"todo")),r.a.createElement(b.a,{classes:{root:g.a.TypographyFooter}},"something"),r.a.createElement(b.a,{classes:{root:g.a.TypographyFooter}},"copyrights"))},v=t(77),O=t(114),j=t.n(O),x=t(185),L=t(174),F=t(175),S=t(78),T=t.n(S),I=function(e){var a,t=e.type,o=e.message,l=Object(n.useState)(!1),c=Object(u.a)(l,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){i(null!=o)}),[o,i]),r.a.createElement(x.a,{open:s,message:o,action:r.a.createElement(L.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(e,a){"clickaway"!==a&&i(!1)}},r.a.createElement(F.a,{fontSize:"small"})),ContentProps:{classes:{root:j()((a={},Object(v.a)(a,T.a.info,"info"===t),Object(v.a)(a,T.a.error,"error"===t),Object(v.a)(a,T.a.success,"success"===t),Object(v.a)(a,T.a.warning,"warning"===t),a))}}})},k=t(101),C=t.n(k),w=function(e){var a=e.notif,t=e.children;return r.a.createElement("div",{className:C.a.LayoutPage},r.a.createElement(f,null),r.a.createElement(m.a,{fixed:!0,maxWidth:"lg",className:C.a.LayoutContainer},t),r.a.createElement(y,null),null!=a&&r.a.createElement(I,{type:a.type,message:a.message}))},B=function(){var e=Object(n.useState)(),a=Object(u.a)(e,2),t=a[0],o=a[1];return Object(n.useEffect)((function(){var e=10*Math.random(),a=e>5?{type:"error",message:"".concat(e)}:{type:"info",message:"".concat(e)};o(a)}),[o]),r.a.createElement(w,{notif:t},"hello")},H=t(32),N=t(182),A=t(177),M=t(104),P=t(45),W=t(180),q=t(55),z=t.n(q),V=function(e){var a=e.name,t=e.onChange,o=void 0===t?function(){}:t,l=e.onBlur,c=void 0===l?function(){}:l,s=Object(M.a)(e,["name","onChange","onBlur"]),i=Object(P.d)();if(void 0===i)return r.a.createElement(W.a,Object.assign({name:a,onBlur:c,onChange:o},s));var m=Object(n.useMemo)((function(){return void 0!==i&&void 0!==i.errors[a]}),[i,a]),d=Object(P.c)({name:a}),p=Object(u.a)(d,1)[0],b=p.onChange,_=p.onBlur,E=Object(M.a)(p,["onChange","onBlur"]),f=Object(n.useMemo)((function(){return function(e){b(e),o(e)}}),[o,b]),h=Object(n.useMemo)((function(){return function(e){_(e),c(e)}}),[c,_]);return r.a.createElement(W.a,Object.assign({variant:"outlined",classes:{root:z.a.TextField},InputProps:{notched:!1,labelWidth:0,classes:{root:z.a.Input,input:z.a.InputInput}},InputLabelProps:{shrink:!0,classes:{root:z.a.InputLabel,outlined:z.a.InputLabelOutlined}},onBlur:h,onChange:f},s,E,{helperText:m?r.a.createElement(P.a,{name:a}):null,FormHelperTextProps:{classes:{root:z.a.FormHelperText}}}))},X=function(e){var a=e.initialValue,t=e.validationSchema,n=e.onSubmit,o=e.children;return r.a.createElement(P.b,{initialValues:a,onSubmit:n,validationSchema:t,validateOnBlur:!1,validateOnChange:!1},(function(e){var a=e.handleSubmit;return r.a.createElement("form",{onSubmit:a},o)}))},J=function(){var e=Object(n.useMemo)((function(){return H.c().shape({email:H.d().email("invalid email address"),name:H.d().required("required !!!"),age:H.b().min(1,"custom mess ${min}").max(10,"custom mess ${max}")})}),[]);return r.a.createElement(w,null,r.a.createElement(b.a,{variant:"h6"},"about"),r.a.createElement(X,{initialValue:{email:"",name:"",age:""},onSubmit:function(e){console.log(e)},validationSchema:e},r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,r.a.createElement(V,{label:"email",name:"email",type:"text"}),r.a.createElement(V,{label:"name",name:"name",type:"text"}),r.a.createElement(V,{label:"age",name:"age",type:"number"})),r.a.createElement(A.a,{type:"submit",variant:"contained"},"submit"))))},K=t(118),Y=t(184),Z=t(178),$=t(103),D=t.n($),G=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],o=a[1],l=Object(n.useMemo)((function(){return H.c().shape({id:H.d(),title:H.d().required("required !!!"),done:H.a()})}),[]);return r.a.createElement(w,null,r.a.createElement(b.a,null,"Todo"),r.a.createElement(P.b,{initialValues:{id:Object(Y.a)(),title:"",done:!1},onSubmit:function(e,a){var n=a.resetForm,r={id:Object(Y.a)(),title:e.title,done:!1};o([].concat(Object(K.a)(t),[r])),n()},validationSchema:l},(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:D.a.AddForm},r.a.createElement(V,{label:"Add Task",name:"title"}),r.a.createElement(L.a,{type:"submit",size:"small",color:"primary",classes:{root:D.a.ButtonSubmit}},r.a.createElement(Z.a,null))))})),t.map((function(e){return r.a.createElement("div",{key:e.id},e.id," ",e.title)})))},Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement(c.a,{basename:"/react-app-dashboard"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(B,null)),r.a.createElement(s.a,{exact:!0,path:"/about"},r.a.createElement(J,null)),r.a.createElement(s.a,{exact:!0,path:"/todo"},r.a.createElement(G,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,a,t){e.exports={LayoutFooter:"classes_LayoutFooter__2_55F",Link:"classes_Link__1Xxpu",TypographyFooter:"classes_TypographyFooter__2rgXZ"}},55:function(e,a,t){e.exports={TextField:"classes_TextField__CZyKr",Input:"classes_Input__1AXf8",InputInput:"classes_InputInput__QeAJE",InputLabel:"classes_InputLabel__32acC",InputLabelOutlined:"classes_InputLabelOutlined__2Yoje",FormHelperText:"classes_FormHelperText__3g7ad"}},78:function(e,a,t){e.exports={error:"classes_error__1-CxA",warning:"classes_warning__2i6wy",info:"classes_info__1NpZT",success:"classes_success__Y8K-m"}},97:function(e,a,t){e.exports={LayoutHeader:"classes_LayoutHeader__2e4Ws",TypographyHeader:"classes_TypographyHeader__i2FRa",Link:"classes_Link__1WTzc"}}},[[132,1,2]]]);
//# sourceMappingURL=main.a0428809.chunk.js.map