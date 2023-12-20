"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[290],{4195:function(e,t,n){n(2791);var c=n(6106),i=n(914),a=n(8844),o=n(7647),r=n(3655),l=n(184);t.Z=function(e){return(0,l.jsx)(c.Z,{children:(0,l.jsx)(i.Z,{flex:3,style:{height:"70vh"},children:(0,l.jsx)(a.Z.Ribbon,{text:String(e.data.createdAt.split("T")[0]),children:(0,l.jsxs)(o.Z,{style:{height:"70vh"},hoverable:!0,children:[(0,l.jsx)(r.Z.Title,{style:{fontSize:"30px",textAlign:"center"},children:e.data.title}),(0,l.jsx)(r.Z.Text,{style:{fontSize:"16px"},children:e.data.message}),(0,l.jsxs)(r.Z.Title,{style:{fontSize:"20px",bottom:0,right:0,position:"absolute",padding:"20px"},children:[e.data.from.firstName," ",e.data.from.lastName," ",(0,l.jsx)("br",{})," (",e.data.from.designations,")"]})]})})})})}},4264:function(e,t,n){var c=n(3655),i=(n(2791),n(184));t.Z=function(e){return(0,i.jsx)(c.Z.Title,{style:{fontSize:"24px"},children:e.title})}},889:function(e,t,n){var c=n(9439),i=n(2791),a=n(8134),o=n(5794),r=n(9150),l=n(3729),s=n(2827),u=n(5458),d=n(8961),h=n(9286),f=n(3451),p=n(3876),y=n(7962),j=n(9529),m=n(4006),x=n(2542),g=n(586),Z=n(3296),b=n(2145),k=n(3388),w=n(6859),v=n(1894),E=n(2763),S=n(7689),T=n(1087),C=n(184),A=g.Z.Header,U=g.Z.Content,P=g.Z.Footer,z=g.Z.Sider;t.Z=function(e){var t=(0,S.TH)();(0,i.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?O("/"):"faculty"!==(0,E.bW)().user.role?window.location.href="/":void 0}),[E.bW]);var n=(0,i.useState)(!0),N=(0,c.Z)(n,2),L=N[0],B=N[1],O=(0,S.s0)(),V=Z.Z.useToken().token.colorBgContainer,H=[{key:"/faculty/dashboard",icon:i.createElement(a.Z),label:(0,C.jsx)(T.rU,{to:"/faculty/dashboard",children:"Dashboard"})},{key:"/faculty/timetable",icon:i.createElement(o.Z),label:(0,C.jsx)(T.rU,{to:"/faculty/timetable",children:"Timetable"})},{key:"announcement",icon:i.createElement(r.Z),label:"Announcements",children:[{key:"/faculty/announcement/view",icon:i.createElement(l.Z),label:(0,C.jsx)(T.rU,{to:"/faculty/announcement/view",children:"View"})}]},{key:"/faculty/course",icon:i.createElement(s.Z),label:(0,C.jsx)(T.rU,{to:"/faculty/course",children:"Courses"})},{key:"/faculty/profile",icon:i.createElement(u.Z),label:(0,C.jsx)(T.rU,{to:"/faculty/profile",children:"Profile"})},{key:"post",icon:i.createElement(d.Z),label:"Post",children:[{key:"/faculty/post/new",icon:i.createElement(h.Z),label:(0,C.jsx)(T.rU,{to:"/faculty/post/new",children:"New"})},{key:"/faculty/post/view",icon:i.createElement(l.Z),label:(0,C.jsx)(T.rU,{to:"/faculty/post/view",children:"View"})}]},{key:"message",icon:i.createElement(f.Z),label:"Message",children:[{key:"/faculty/message/new",icon:i.createElement(h.Z),label:(0,C.jsx)(T.rU,{to:"/faculty/message/new",children:"New"})},{key:"/faculty/message/view",icon:i.createElement(l.Z),label:(0,C.jsx)(T.rU,{to:"/faculty/message/view",children:"View"})}]},{key:"policy",icon:i.createElement(p.Z),label:"Policy",children:[{key:"/faculty/policy/view",icon:i.createElement(l.Z),label:(0,C.jsx)(T.rU,{to:"/faculty/policy/view",children:"View"})}]},{key:"Logout",icon:i.createElement(y.Z),label:(0,C.jsx)(T.rU,{onClick:function(){(0,E.uf)().then((function(e){if(e.redirect)return O("/?logout=true")}))},children:"Logout"})}];return(0,C.jsxs)(g.Z,{children:[(0,C.jsxs)(z,{breakpoint:"lg",theme:L?"dark":"light",collapsedWidth:"0",style:{height:"100vh"},children:[(0,C.jsx)("div",{className:"demo-logo-vertical",children:(0,C.jsx)(b.Z,{src:"/upesfull.png"})}),(0,C.jsx)(k.Z,{theme:L?"dark":"light",mode:"inline",defaultSelectedKeys:t.pathname,defaultOpenKeys:[],items:H})]}),(0,C.jsxs)(g.Z,{children:[(0,C.jsx)(A,{style:{padding:0,background:V},children:(0,C.jsx)(w.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,C.jsx)(j.Z,{})})}),(0,C.jsx)(U,{style:{margin:"24px 16px 0",background:V},children:(0,C.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,C.jsx)(P,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,C.jsx)(v.Z,{icon:L?(0,C.jsx)(m.Z,{}):(0,C.jsx)(x.Z,{}),onClick:function(){B(!L)}})]})}},9522:function(e,t,n){n.d(t,{$Z:function(){return l},FC:function(){return s},Hd:function(){return r},Tx:function(){return o},_U:function(){return u}});var c=n(9455),i=n(2763),a=c.yw,o=function(e){return fetch("".concat(a,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},r=function(e){return fetch("".concat(a,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(a,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},s=function(e){return fetch("".concat(a,"/message/").concat(e.messageId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e){return fetch("".concat(a,"/all?page=").concat(e),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},6290:function(e,t,n){n.r(t);var c=n(9439),i=n(2791),a=n(4264),o=n(183),r=n(9522),l=n(7689),s=n(4195),u=n(889),d=n(184);t.default=function(e){var t=(0,i.useState)([]),n=(0,c.Z)(t,2),h=n[0],f=n[1],p=(0,i.useState)(!0),y=(0,c.Z)(p,2),j=y[0],m=y[1],x=(0,l.UO)().id;return(0,i.useEffect)((function(){document.title="View Message | SoCIS",(0,r.FC)({messageId:x}).then((function(e){f(e),m(!1)})).catch((function(e){console.log(e)}))}),[f]),(0,d.jsxs)(u.Z,{children:[(0,d.jsx)(a.Z,{title:"Message"}),j?(0,d.jsx)(o.Z,{active:!0}):(0,d.jsx)(s.Z,{data:h})]})}}}]);
//# sourceMappingURL=290.71cb6f02.chunk.js.map