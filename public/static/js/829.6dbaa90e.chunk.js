"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[829],{2002:function(e,n,t){t(2791);var a=t(6106),c=t(914),r=t(8844),o=t(7647),i=t(2641),l=t(3655),s=t(1087),u=t(2763),d=t(184);n.Z=function(e){return(0,d.jsx)(a.Z,{children:e.data.map((function(e){return(0,d.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},style:{margin:"20px"},children:(0,d.jsx)(s.rU,{to:"".concat(e._id),children:(0,d.jsx)(r.Z.Ribbon,{text:String(e.createdAt.split("T")[0]),children:(0,d.jsxs)(o.Z,{bordered:!0,actions:[(0,d.jsx)(s.rU,{style:{visibility:"management"===(0,u.bW)().user.role?"visible":"hidden"},to:"/management/post/new?id=".concat(e._id),children:(0,d.jsx)(i.ZP,{children:"Update"})})],children:[(0,d.jsx)(l.Z.Title,{style:{fontSize:"18px"},children:e.title}),(0,d.jsx)(l.Z.Text,{children:e.description}),(0,d.jsxs)(l.Z.Title,{style:{fontSize:"12px",textAlign:"right"},children:[e.author.firstName," ",(0,d.jsx)("br",{}),"(",e.author.designations,")"]})]})})})},e._id)}))})}},6122:function(e,n,t){t(2791);var a=t(6106),c=t(914),r=t(183),o=t(184);n.Z=function(e){return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(r.Z,{active:!0})},1),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(r.Z,{active:!0})},2),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(r.Z,{active:!0})},3),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(r.Z,{active:!0})},4),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(r.Z,{active:!0})},5),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(r.Z,{active:!0})},6),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(r.Z,{active:!0})},7),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(r.Z,{active:!0})},8),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(r.Z,{active:!0})},9)]})}},4264:function(e,n,t){var a=t(3655),c=(t(2791),t(184));n.Z=function(e){return(0,c.jsx)(a.Z.Title,{style:{fontSize:"24px"},children:e.title})}},889:function(e,n,t){var a=t(9439),c=t(2791),r=t(8134),o=t(5794),i=t(3729),l=t(2827),s=t(5458),u=t(9286),d=t(7962),f=t(9529),h=t(586),m=t(1932),x=t(573),p=t(3388),g=t(1583),j=t(6859),y=t(2763),Z=t(7689),b=t(1087),v=t(382),k=t(184),E=h.Z.Header,U=h.Z.Content,w=h.Z.Footer,S=h.Z.Sider;n.Z=function(e){var n=(0,Z.TH)();(0,c.useEffect)((function(){if("faculty"!==(0,y.bW)().user.role)return window.location.href="/"}),[y.bW]);var t=(0,c.useState)(!0),C=(0,a.Z)(t,2),A=C[0],P=(C[1],(0,Z.s0)()),T=(0,v.Fp)().instance,z=function(){(0,y.uf)().then((function(e){e.redirect&&T.logoutRedirect().then((function(e){if(e)return P("/?logout=true");alert("Error Occurred!")})).catch((function(e){alert("error occured")}))}))},L=[{key:"2",label:(0,k.jsx)(b.rU,{to:"/faculty/profile",children:"Profile"})},{key:"1",label:(0,k.jsx)("a",{href:"#",onClick:function(){return z()},children:"Logout"})}],B=[{key:"/faculty/dashboard",icon:c.createElement(r.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/dashboard",children:"Dashboard"})},{key:"/faculty/timetable",icon:c.createElement(o.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/timetable",children:"Timetable"})},{key:"/faculty/announcement/view",icon:c.createElement(i.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/announcement/view",children:"Announcement"})},{key:"/faculty/course",icon:c.createElement(l.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/course",children:"Courses"})},{key:"/faculty/profile",icon:c.createElement(s.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/profile",children:"Profile"})},{key:"/faculty/post/new",icon:c.createElement(u.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/post/new",children:"Post"})},{key:"/faculty/message/view",icon:c.createElement(i.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/message/view",children:"Message"})},{key:"/faculty/policy/view",icon:c.createElement(i.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/policy/view",children:"Policy"})},{key:"/faculty/outlook/events",icon:c.createElement(i.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/outlook/events",children:"Meetings/Events"})},{key:"/faculty/evaluate",icon:c.createElement(i.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/evaluate",children:"Evaluate"})},{key:"Logout",icon:c.createElement(d.Z),label:(0,k.jsx)(b.rU,{onClick:z,children:"Logout"})}];return(0,k.jsx)(m.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,k.jsxs)(h.Z,{children:[(0,k.jsxs)(S,{breakpoint:"lg",theme:A?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,k.jsx)("div",{className:"demo-logo-vertical",children:(0,k.jsx)(x.Z,{src:"/upesfull.png"})}),(0,k.jsx)(p.Z,{theme:A?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:B})]}),(0,k.jsxs)(h.Z,{children:[(0,k.jsx)(E,{style:{padding:0},children:(0,k.jsx)(g.Z,{menu:{items:L},placement:"bottom",children:(0,k.jsx)(j.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,k.jsx)(f.Z,{})})})}),(0,k.jsx)(U,{style:{margin:"24px 16px 0"},children:(0,k.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,k.jsx)(w,{style:{textAlign:"center"},children:"Debugged By Students"})]})]})})}},7237:function(e,n,t){t.d(n,{Z:function(){return z}});var a=t(9439),c=t(2791),r=t(8134),o=t(5794),i=t(9529),l=t(2827),s=t(5458),u=t(3729),d=t(7462),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"},h=t(4291),m=function(e,n){return c.createElement(h.Z,(0,d.Z)({},e,{ref:n,icon:f}))};var x=c.forwardRef(m),p=t(9286),g=t(7962),j=t(586),y=t(1932),Z=t(573),b=t(3388),v=t(1583),k=t(6859),E=t(2763),U=t(7689),w=t(1087),S=t(184),C=j.Z.Header,A=j.Z.Content,P=j.Z.Footer,T=j.Z.Sider,z=function(e){var n=(0,U.TH)();(0,c.useEffect)((function(){if("management"!==(0,E.bW)().user.role)return window.location.href="/"}),[E.bW]);var t=(0,c.useState)(!0),d=(0,a.Z)(t,2),f=d[0],h=(d[1],(0,U.s0)()),m=function(){(0,E.uf)().then((function(e){if(e.redirect)return h("/?logout=true")}))},z=[{key:"/management/dashboard",icon:c.createElement(r.Z),label:(0,S.jsx)(w.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:c.createElement(o.Z),label:(0,S.jsx)(w.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:c.createElement(i.Z),label:(0,S.jsx)(w.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:c.createElement(l.Z),label:(0,S.jsx)(w.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:c.createElement(s.Z),label:(0,S.jsx)(w.rU,{to:"/management/profile",children:"Profile"})},{key:"/management/announcement/view",icon:c.createElement(u.Z),label:(0,S.jsx)(w.rU,{to:"/management/announcement/view",children:"Announcements"})},{key:"message",icon:c.createElement(x),label:(0,S.jsx)(w.rU,{to:"/management/message/view",children:"Messages"})},{key:"/management/post/new",icon:c.createElement(p.Z),label:(0,S.jsx)(w.rU,{to:"/management/post/new",children:"Post"})},{key:"/management/policy/view",icon:c.createElement(u.Z),label:(0,S.jsx)(w.rU,{to:"/management/policy/view",children:"Policy"})},{key:"/management/evaluate",icon:c.createElement(u.Z),label:(0,S.jsx)(w.rU,{to:"/management/evaluate",children:"Evaluate"})},{key:"Logout",icon:c.createElement(g.Z),label:(0,S.jsx)(w.rU,{onClick:m,children:"Logout"})}],L=[{key:"2",label:(0,S.jsx)(w.rU,{to:"/management/profile",children:"Profile"})},{key:"1",label:(0,S.jsx)("a",{href:"#",onClick:function(){return m()},children:"Logout"})}];return(0,S.jsx)(y.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,S.jsxs)(j.Z,{children:[(0,S.jsxs)(T,{breakpoint:"lg",theme:f?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,S.jsx)("div",{className:"demo-logo-vertical",children:(0,S.jsx)(Z.Z,{src:"/upesfull.png"})}),(0,S.jsx)(b.Z,{theme:f?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:z})]}),(0,S.jsxs)(j.Z,{children:[(0,S.jsx)(C,{style:{padding:0},children:(0,S.jsx)(v.Z,{menu:{items:L},placement:"bottom",children:(0,S.jsx)(k.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,S.jsx)(i.Z,{})})})}),(0,S.jsx)(A,{style:{margin:"24px 16px 0"},children:(0,S.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,S.jsx)(P,{style:{textAlign:"center"},children:"Debugged By Students"})]})]})})}},243:function(e,n,t){t.d(n,{Jq:function(){return u},dq:function(){return i},fR:function(){return l},fb:function(){return o},xl:function(){return s}});var a=t(9455),c=t(2763),r=a.v_,o=function(e){return fetch("".concat(r,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},i=function(e){return fetch("".concat(r,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(r,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},s=function(e){return fetch("".concat(r,"/post/").concat(e.postId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e,n){return fetch("".concat(r,"/all?page=").concat(e,"&type=").concat(n),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},9829:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(9439),c=t(2791),r=(t(7237),t(4264)),o=t(4556),i=t(1773),l=t(4099),s=t(9455),u=(t(2763),s.p2,t(2002)),d=t(6122),f=t(889),h=t(243),m=t(184),x=function(){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),t=n[0],s=n[1],x=(0,c.useState)(!0),p=(0,a.Z)(x,2),g=p[0],j=p[1],y=(0,c.useState)({}),Z=(0,a.Z)(y,2),b=Z[0],v=Z[1],k=o.Z.useNotification(),E=(0,a.Z)(k,2),U=E[0],w=E[1],S=function(e){var n=e.type,t=e.message;U[n]({message:t})};(0,c.useEffect)((function(){document.title="Announcements | SoCIS",(0,h.Jq)(1,"Announcement").then((function(e){return e.error?S({type:"error",message:"Error Occurred!"}):0===e.docs.length?S({type:"info",message:"No Announcements Found!"}):(v(e),s(e.docs),void j(!1))})).catch((function(e){console.log(e)}))}),[s,v]);return(0,m.jsxs)(f.Z,{children:[w,(0,m.jsx)(r.Z,{title:"Announcements"}),(0,m.jsx)(i.Z,{}),g?(0,m.jsx)(d.Z,{}):(0,m.jsx)(u.Z,{data:t}),(0,m.jsx)("br",{}),(0,m.jsx)(l.Z,{current:b.page,pageSize:1,onChange:function(e){return function(e){j(!0),(0,h.Jq)(e,"Announcement").then((function(e){v(e),s(e.docs),j(!1)})).catch((function(e){console.log(e)}))}(e)},total:b.totalPages,style:{alignSelf:"center"}})]})}}}]);
//# sourceMappingURL=829.6dbaa90e.chunk.js.map