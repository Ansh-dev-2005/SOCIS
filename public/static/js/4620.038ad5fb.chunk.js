"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[4620],{4264:function(e,n,t){var r=t(3655),o=(t(2791),t(184));n.Z=function(e){return(0,o.jsx)(r.Z.Title,{style:{fontSize:"24px"},children:e.title})}},5529:function(e,n,t){var r=t(9439),o=t(2791),i=t(8134),a=t(5794),c=t(9529),s=t(2827),l=t(5458),u=t(9150),d=t(9286),m=t(3729),g=t(3451),h=t(8961),p=t(3876),f=t(7962),j=t(4006),y=t(2542),x=t(586),Z=t(3296),b=t(2145),v=t(3388),k=t(6859),w=t(1894),E=t(2763),S=t(7689),O=t(1087),T=t(184),C=x.Z.Header,A=x.Z.Content,P=x.Z.Footer,z=x.Z.Sider;n.Z=function(e){var n=(0,S.TH)();(0,o.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?L("/"):"management"!==(0,E.bW)().user.role?window.location.href="/":void 0}),[E.bW]);var t=(0,o.useState)(!0),U=(0,r.Z)(t,2),M=U[0],B=U[1],L=(0,S.s0)(),N=Z.Z.useToken().token.colorBgContainer,I=[{key:"/management/dashboard",icon:o.createElement(i.Z),label:(0,T.jsx)(O.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:o.createElement(a.Z),label:(0,T.jsx)(O.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:o.createElement(c.Z),label:(0,T.jsx)(O.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:o.createElement(s.Z),label:(0,T.jsx)(O.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:o.createElement(l.Z),label:(0,T.jsx)(O.rU,{to:"/management/profile",children:"Profile"})},{key:"announcement",icon:o.createElement(u.Z),label:"Announcements",children:[{key:"/management/announcement/new",icon:o.createElement(d.Z),label:(0,T.jsx)(O.rU,{to:"/management/announcement/new",children:"New"})},{key:"/management/announcement/view",icon:o.createElement(m.Z),label:(0,T.jsx)(O.rU,{to:"/management/announcement/view",children:"View"})}]},{key:"message",icon:o.createElement(g.Z),label:"Message",children:[{key:"/management/message/new",icon:o.createElement(d.Z),label:(0,T.jsx)(O.rU,{to:"/management/message/new",children:"New"})},{key:"/management/message/view",icon:o.createElement(m.Z),label:(0,T.jsx)(O.rU,{to:"/management/message/view",children:"View"})}]},{key:"post",icon:o.createElement(h.Z),label:"Post",children:[{key:"/management/post/new",icon:o.createElement(d.Z),label:(0,T.jsx)(O.rU,{to:"/management/post/new",children:"New"})},{key:"/management/post/view",icon:o.createElement(m.Z),label:(0,T.jsx)(O.rU,{to:"/management/post/view",children:"View"})}]},{key:"policy",icon:o.createElement(p.Z),label:"Policy",children:[{key:"/management/policy/new",icon:o.createElement(d.Z),label:(0,T.jsx)(O.rU,{to:"/management/policy/new",children:"New"})},{key:"/management/policy/view",icon:o.createElement(m.Z),label:(0,T.jsx)(O.rU,{to:"/management/policy/view",children:"View"})}]},{key:"Logout",icon:o.createElement(f.Z),label:(0,T.jsx)(O.rU,{onClick:function(){(0,E.uf)().then((function(e){if(e.redirect)return L("/?logout=true")}))},children:"Logout"})}];return(0,T.jsxs)(x.Z,{children:[(0,T.jsxs)(z,{breakpoint:"lg",theme:M?"dark":"light",collapsedWidth:"0",style:{height:"100vh"},children:[(0,T.jsx)("div",{className:"demo-logo-vertical",children:(0,T.jsx)(b.Z,{src:"/upesfull.png"})}),(0,T.jsx)(v.Z,{theme:M?"dark":"light",mode:"inline",defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:I})]}),(0,T.jsxs)(x.Z,{children:[(0,T.jsx)(C,{style:{padding:0,background:N},children:(0,T.jsx)(k.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,T.jsx)(c.Z,{})})}),(0,T.jsx)(A,{style:{margin:"24px 16px 0",background:N},children:(0,T.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,T.jsx)(P,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,T.jsx)(w.Z,{icon:M?(0,T.jsx)(j.Z,{}):(0,T.jsx)(y.Z,{}),onClick:function(){B(!M)}})]})}},243:function(e,n,t){t.d(n,{Jq:function(){return u},dq:function(){return c},fR:function(){return s},fb:function(){return a},xl:function(){return l}});var r=t(9455),o=t(2763),i=r.v_,a=function(e){return fetch("".concat(i,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,o.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},c=function(e){return fetch("".concat(i,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,o.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},s=function(e){return fetch("".concat(i,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,o.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(i,"/post/").concat(e.postId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,o.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e){return fetch("".concat(i,"/all?page=").concat(e),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,o.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},4620:function(e,n,t){t.r(n);var r=t(9439),o=t(2791),i=t(5476),a=t(183),c=t(5140),s=t(9389),l=t(462),u=t(4264),d=t(7689),m=t(243),g=t(5529),h=t(184);n.default=function(){var e=(0,o.useState)(!1),n=(0,r.Z)(e,2),t=n[0],p=n[1],f=(0,o.useState)(null),j=(0,r.Z)(f,2),y=j[0],x=j[1],Z=(0,d.s0)(),b=function(){var e=(0,d.TH)().search;return o.useMemo((function(){return new URLSearchParams(e)}),[e])}().get("id"),v=i.Z.useNotification(),k=(0,r.Z)(v,2),w=k[0],E=k[1],S=function(e){var n=e.type,t=e.message,r=e.description;w[n]({message:t,description:r})};(0,o.useEffect)((function(){document.title="Add/Edit Post | SoCIS",b&&(p(!0),(0,m.xl)({postId:b}).then((function(e){x(e),p(!1)})).catch((function(e){return S({type:"error",message:"Error Occured!",description:""})})))}),[x,b]);return(0,h.jsxs)(g.Z,{children:[E,(0,h.jsx)(u.Z,{title:b?"Update Post":"New Post"}),t?(0,h.jsx)(a.Z,{active:!0}):(0,h.jsxs)(c.Z,{name:"new-post",labelCol:{span:2},wrapperCol:{span:16},onFinish:function(e){p(!0),b?(0,m.dq)(e).then((function(e){return e.error?(p(!1),S({type:"error",message:"Error Occured",description:e.errorMessage?e.errorMessage:""})):Z("/management/post/view?success=edit")})).catch((function(e){return p(!1),S({type:"error",message:"Error Occured!",description:""})})):(delete e._id,(0,m.fb)(e).then((function(e){return e.error?(p(!1),S({type:"error",message:"Error Occured",description:e.errorMessage?e.errorMessage:""})):Z("/management/post/view?success=new")})).catch((function(e){return p(!1),S({type:"error",message:"Error Occured!",description:""})})))},autoComplete:"off",children:[(0,h.jsx)(c.Z.Item,{label:"Post ID",name:"_id",initialValue:y?y._id:"",rules:[{required:!1,message:"Field is required!"}],children:(0,h.jsx)(s.Z,{type:"text",disabled:!0})}),(0,h.jsx)(c.Z.Item,{label:"Title",name:"title",initialValue:y?y.title:"",rules:[{required:!0,message:"Field is required!"}],children:(0,h.jsx)(s.Z,{type:"text",placeholder:"Title"})}),(0,h.jsx)(c.Z.Item,{label:"Description",name:"excerpt",initialValue:y?y.excerpt:"",rules:[{required:!0,message:"Field is required!"}],children:(0,h.jsx)(s.Z,{type:"text",placeholder:"Excerpt"})}),(0,h.jsx)(c.Z.Item,{label:"Content",name:"content",initialValue:y?y.content:"",rules:[{required:!0,message:"Field is required!"}],children:(0,h.jsx)(s.Z.TextArea,{type:"text",placeholder:"Content"})}),(0,h.jsx)(c.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,h.jsx)(l.ZP,{type:"primary",htmlType:"submit",children:b?"Update Message":"Add Message"})}),(0,h.jsx)(l.ZP,{onClick:function(){p(!0),(0,m.fR)({postId:y._id}).then((function(e){return e.error?(p(!1),S({type:"error",message:"Error Occured",description:e.errorMessage?e.errorMessage:""})):Z("/management/message/view?success=delete")})).catch((function(e){return p(!1),S({type:"error",message:"Error Occured",description:y.errorMessage?y.errorMessage:""})}))},type:"primary",style:{background:"red",textAlign:"center",alignSelf:"center",visibility:b?"visible":"hidden"},children:"Delete"})]})]})}},3296:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(9439),o=t(2666),i=t(2732),a=t(7219),c=t(7198),s=function(e){var n=(null===e||void 0===e?void 0:e.algorithm)?(0,o.jG)(e.algorithm):(0,o.jG)(i.Z),t=Object.assign(Object.assign({},a.Z),null===e||void 0===e?void 0:e.token);return(0,o.t2)(t,{override:null===e||void 0===e?void 0:e.token},n,c.Z)},l=t(3918),u=t(9831),d=t(8931);var m=t(962),g=function(e,n){var t=null!==n&&void 0!==n?n:(0,i.Z)(e),r=t.fontSizeSM,o=t.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},t),function(e){var n=e.sizeUnit,t=e.sizeStep-2;return{sizeXXL:n*(t+10),sizeXL:n*(t+6),sizeLG:n*(t+2),sizeMD:n*(t+2),sizeMS:n*(t+1),size:n*t,sizeSM:n*t,sizeXS:n*(t-1),sizeXXS:n*(t-1)}}(null!==n&&void 0!==n?n:e)),(0,m.Z)(r)),{controlHeight:o}),(0,d.Z)(Object.assign(Object.assign({},t),{controlHeight:o})))},h=t(3742),p=t(4306),f=t(9391),j=function(e,n){return new f.C(e).setAlpha(n).toRgbString()},y=function(e,n){return new f.C(e).lighten(n).toHexString()},x=function(e){var n=(0,h.R_)(e,{theme:"dark"});return{1:n[0],2:n[1],3:n[2],4:n[3],5:n[6],6:n[5],7:n[4],8:n[6],9:n[5],10:n[4]}},Z=function(e,n){var t=e||"#000",r=n||"#fff";return{colorBgBase:t,colorTextBase:r,colorText:j(r,.85),colorTextSecondary:j(r,.65),colorTextTertiary:j(r,.45),colorTextQuaternary:j(r,.25),colorFill:j(r,.18),colorFillSecondary:j(r,.12),colorFillTertiary:j(r,.08),colorFillQuaternary:j(r,.04),colorBgElevated:y(t,12),colorBgContainer:y(t,8),colorBgLayout:y(t,0),colorBgSpotlight:y(t,26),colorBorder:y(t,26),colorBorderSecondary:y(t,19)}},b=function(e,n){var t=Object.keys(a.M).map((function(n){var t=(0,h.R_)(e[n],{theme:"dark"});return new Array(10).fill(1).reduce((function(e,r,o){return e["".concat(n,"-").concat(o+1)]=t[o],e["".concat(n).concat(o+1)]=t[o],e}),{})})).reduce((function(e,n){return e=Object.assign(Object.assign({},e),n)}),{}),r=null!==n&&void 0!==n?n:(0,i.Z)(e);return Object.assign(Object.assign(Object.assign({},r),t),(0,p.Z)(e,{generateColorPalettes:x,generateNeutralColorPalettes:Z}))};var v={defaultConfig:u.u_,defaultSeed:u.u_.token,useToken:function(){var e=(0,l.Z)(),n=(0,r.Z)(e,3);return{theme:n[0],token:n[1],hashId:n[2]}},defaultAlgorithm:i.Z,darkAlgorithm:b,compactAlgorithm:g,getDesignToken:s}}}]);
//# sourceMappingURL=4620.038ad5fb.chunk.js.map