"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[304],{6122:function(e,n,t){t(2791);var a=t(6106),c=t(914),o=t(183),s=t(184);n.Z=function(e){return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},1),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},2),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},3),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},4),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},4),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},4),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},4),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},4),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},5)]})}},4264:function(e,n,t){var a=t(3655),c=(t(2791),t(184));n.Z=function(e){return(0,c.jsx)(a.Z.Title,{style:{fontSize:"24px"},children:e.title})}},5529:function(e,n,t){var a=t(9439),c=t(2791),o=t(8134),s=t(7944),r=t(9529),i=t(9150),l=t(3451),u=t(3876),d=t(7962),m=t(4006),f=t(2542),h=t(586),p=t(3296),g=t(2145),j=t(3388),x=t(6859),Z=t(1894),y=t(2763),b=t(7689),v=t(1087),w=t(184),k=h.Z.Header,E=h.Z.Content,S=h.Z.Footer,P=h.Z.Sider;n.Z=function(e){var n=(0,b.TH)();(0,c.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?A("/"):"management"!==(0,y.bW)().user.role?window.location.href="/":void 0}),[y.bW]);var t=(0,c.useState)(!0),U=(0,a.Z)(t,2),T=U[0],C=U[1],A=(0,b.s0)(),N=p.Z.useToken().token.colorBgContainer,L=[{key:"/management/dashboard",icon:c.createElement(o.Z),label:(0,w.jsx)(v.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:c.createElement(s.Z),label:(0,w.jsx)(v.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:c.createElement(r.Z),label:(0,w.jsx)(v.rU,{to:"/management/faculty",children:"Faculty"})},{key:"announcement",icon:c.createElement(i.Z),label:"Announcements",children:[{key:"/management/announcement/new",icon:c.createElement(s.Z),label:(0,w.jsx)(v.rU,{to:"/management/announcement/new",children:"New"})},{key:"/management/announcement/view",icon:c.createElement(s.Z),label:(0,w.jsx)(v.rU,{to:"/management/announcement/view",children:"View"})}]},{key:"/management/course",icon:c.createElement(r.Z),label:(0,w.jsx)(v.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:c.createElement(r.Z),label:(0,w.jsx)(v.rU,{to:"/management/profile",children:"Profile"})},{key:"message",icon:c.createElement(l.Z),label:"Message",children:[{key:"/management/message/new",icon:c.createElement(s.Z),label:(0,w.jsx)(v.rU,{to:"/management/message/new",children:"New"})},{key:"/management/message/view",icon:c.createElement(s.Z),label:(0,w.jsx)(v.rU,{to:"/management/message/view",children:"View"})}]},{key:"post",icon:c.createElement(l.Z),label:"Post",children:[{key:"/management/post/new",icon:c.createElement(s.Z),label:(0,w.jsx)(v.rU,{to:"/management/post/new",children:"New"})},{key:"/management/post/view",icon:c.createElement(s.Z),label:(0,w.jsx)(v.rU,{to:"/management/post/view",children:"View"})}]},{key:"policy",icon:c.createElement(u.Z),label:"Policy",children:[{key:"/management/policy/new",icon:c.createElement(s.Z),label:(0,w.jsx)(v.rU,{to:"/management/policy/new",children:"New"})},{key:"/management/policy/view",icon:c.createElement(s.Z),label:(0,w.jsx)(v.rU,{to:"/management/policy/view",children:"View"})}]},{key:"Logout",icon:c.createElement(d.Z),label:(0,w.jsx)(v.rU,{onClick:function(){(0,y.uf)().then((function(e){if(e.redirect)return A("/?logout=true")}))},children:"Logout"})}];return(0,w.jsxs)(h.Z,{children:[(0,w.jsxs)(P,{breakpoint:"lg",theme:T?"dark":"light",collapsedWidth:"0",style:{height:"100vh"},children:[(0,w.jsx)("div",{className:"demo-logo-vertical",children:(0,w.jsx)(g.Z,{src:"/upesfull.png"})}),(0,w.jsx)(j.Z,{theme:T?"dark":"light",mode:"inline",defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:L})]}),(0,w.jsxs)(h.Z,{children:[(0,w.jsx)(k,{style:{padding:0,background:N},children:(0,w.jsx)(x.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,w.jsx)(r.Z,{})})}),(0,w.jsx)(E,{style:{margin:"24px 16px 0",background:N},children:(0,w.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,w.jsx)(S,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,w.jsx)(Z.Z,{icon:T?(0,w.jsx)(m.Z,{}):(0,w.jsx)(f.Z,{}),onClick:function(){C(!T)}})]})}},243:function(e,n,t){t.d(n,{Jq:function(){return u},dq:function(){return r},fR:function(){return i},fb:function(){return s},xl:function(){return l}});var a=t(9455),c=t(2763),o=a.v_,s=function(e){return fetch("".concat(o,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},r=function(e){return fetch("".concat(o,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},i=function(e){return fetch("".concat(o,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(o,"/post/").concat(e.postId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e){return fetch("".concat(o,"/all?page=").concat(e),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},1304:function(e,n,t){t.r(n);var a=t(9439),c=t(2791),o=t(4264),s=t(5476),r=t(8715),i=t(8844),l=t(4099),u=t(7689),d=t(1087),m=t(6122),f=t(243),h=t(2763),p=t(5529),g=t(184);n.default=function(){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),t=n[0],j=n[1],x=(0,c.useState)(!0),Z=(0,a.Z)(x,2),y=Z[0],b=Z[1],v=(0,c.useState)({}),w=(0,a.Z)(v,2),k=w[0],E=w[1],S=s.Z.useNotification(),P=(0,a.Z)(S,2),U=P[0],T=P[1],C=function(e){var n=e.type,t=e.message;U[n]({message:t})},A=function(){var e=(0,u.TH)().search;return c.useMemo((function(){return new URLSearchParams(e)}),[e])}();(0,c.useEffect)((function(){document.title="Post | SoCIS";var e=A.get("success");"new"===e?C({type:"success",message:"Added New Post!"}):"edit"===e?C({type:"success",message:"Updated Post!"}):"delete"===e&&C({type:"success",message:"Deleted Post!"}),(0,f.Jq)(1).then((function(e){return e.error?C({type:"error",message:"Error Occurred!"}):0===e.docs.length?C({type:"info",message:"No Posts Found!"}):(E(e),j(e.docs),void b(!1))})).catch((function(e){return C({type:"error",message:"Error Occurred!"})}))}),[j,E,A]);return(0,g.jsxs)(p.Z,{children:[T,(0,g.jsx)(o.Z,{title:"Posts"}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),y?(0,g.jsx)(m.Z,{}):(0,g.jsx)(r.Z,{itemLayout:"vertical",size:"large",dataSource:t,renderItem:function(e,n){return(0,g.jsx)(i.Z.Ribbon,{text:"Published By ".concat(e.author.firstName," On ").concat(e.createdAt.split("T")[0]),children:(0,g.jsx)(r.Z.Item,{style:{boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)"},actions:[(0,g.jsx)(d.rU,{style:{visibility:e.author.sapId===(0,h.bW)().user.sapId?"visible":"hidden"},to:"/management/post/new?id=".concat(e._id),children:"Edit"})],children:(0,g.jsx)(r.Z.Item.Meta,{title:(0,g.jsx)(d.rU,{to:"".concat(e._id),children:e.title}),description:e.excerpt})})},n)}}),(0,g.jsx)("br",{}),(0,g.jsx)(l.Z,{current:k.page,pageSize:1,onChange:function(e){return function(e){b(!0),(0,f.Jq)(e).then((function(e){console.log(e),E(e),j(e.docs),b(!1)})).catch((function(e){return C({type:"error",message:"Error Occurred!"})}))}(e)},total:k.totalPages,style:{alignSelf:"center"}})]})}}}]);
//# sourceMappingURL=304.a6635404.chunk.js.map