"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[197],{2002:function(e,n,t){t(2791);var a=t(6106),c=t(914),o=t(8844),r=t(7647),s=t(2641),i=t(3655),l=t(1087),u=t(2763),d=t(184);n.Z=function(e){return(0,d.jsx)(a.Z,{children:e.data.map((function(e){return(0,d.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},style:{margin:"20px"},children:(0,d.jsx)(l.rU,{to:"".concat(e._id),children:(0,d.jsx)(o.Z.Ribbon,{text:String(e.createdAt.split("T")[0]),children:(0,d.jsxs)(r.Z,{bordered:!0,actions:[(0,d.jsx)(l.rU,{style:{visibility:"management"===(0,u.bW)().user.role?"visible":"hidden"},to:"/management/post/new?id=".concat(e._id),children:(0,d.jsx)(s.ZP,{children:"Update"})})],children:[(0,d.jsx)(i.Z.Title,{style:{fontSize:"18px"},children:e.title}),(0,d.jsx)(i.Z.Text,{children:e.description}),(0,d.jsxs)(i.Z.Title,{style:{fontSize:"12px",textAlign:"right"},children:[e.author.firstName," ",(0,d.jsx)("br",{}),"(",e.author.designations,")"]})]})})})},e._id)}))})}},6122:function(e,n,t){t(2791);var a=t(6106),c=t(914),o=t(183),r=t(184);n.Z=function(e){return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},1),(0,r.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},2),(0,r.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},3),(0,r.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},4),(0,r.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},4),(0,r.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},4),(0,r.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},4),(0,r.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},4),(0,r.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},5)]})}},4264:function(e,n,t){var a=t(3655),c=(t(2791),t(184));n.Z=function(e){return(0,c.jsx)(a.Z.Title,{style:{fontSize:"24px"},children:e.title})}},5529:function(e,n,t){var a=t(9439),c=t(2791),o=t(8134),r=t(5794),s=t(9529),i=t(2827),l=t(5458),u=t(3729),d=t(3451),f=t(9286),h=t(7962),m=t(586),p=t(1932),x=t(573),g=t(3388),j=t(1583),Z=t(6859),y=t(2763),b=t(7689),v=t(1087),k=t(184),S=m.Z.Header,A=m.Z.Content,E=m.Z.Footer,C=m.Z.Sider;n.Z=function(e){var n=(0,b.TH)();(0,c.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?P("/"):"management"!==(0,y.bW)().user.role?window.location.href="/":void 0}),[y.bW]);var t=(0,c.useState)(!0),T=(0,a.Z)(t,2),w=T[0],P=(T[1],(0,b.s0)()),z=function(){(0,y.uf)().then((function(e){if(e.redirect)return P("/?logout=true")}))},U=[{key:"/management/dashboard",icon:c.createElement(o.Z),label:(0,k.jsx)(v.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:c.createElement(r.Z),label:(0,k.jsx)(v.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:c.createElement(s.Z),label:(0,k.jsx)(v.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:c.createElement(i.Z),label:(0,k.jsx)(v.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:c.createElement(l.Z),label:(0,k.jsx)(v.rU,{to:"/management/profile",children:"Profile"})},{key:"/management/announcement/view",icon:c.createElement(u.Z),label:(0,k.jsx)(v.rU,{to:"/management/announcement/view",children:"Announcements"})},{key:"message",icon:c.createElement(d.Z),label:(0,k.jsx)(v.rU,{to:"/management/message/view",children:"Messages"})},{key:"/management/post/new",icon:c.createElement(f.Z),label:(0,k.jsx)(v.rU,{to:"/management/post/new",children:"Post"})},{key:"/management/policy/view",icon:c.createElement(u.Z),label:(0,k.jsx)(v.rU,{to:"/management/policy/view",children:"Policy"})},{key:"Logout",icon:c.createElement(h.Z),label:(0,k.jsx)(v.rU,{onClick:z,children:"Logout"})}],L=[{key:"2",label:(0,k.jsx)(v.rU,{to:"/management/profile",children:"Profile"})},{key:"1",label:(0,k.jsx)("a",{href:"#",onClick:function(){return z()},children:"Logout"})}];return(0,k.jsx)(p.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,k.jsxs)(m.Z,{children:[(0,k.jsxs)(C,{breakpoint:"lg",theme:w?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,k.jsx)("div",{className:"demo-logo-vertical",children:(0,k.jsx)(x.Z,{src:"/upesfull.png"})}),(0,k.jsx)(g.Z,{theme:w?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:U})]}),(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(S,{style:{padding:0},children:(0,k.jsx)(j.Z,{menu:{items:L},placement:"bottom",children:(0,k.jsx)(Z.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,k.jsx)(s.Z,{})})})}),(0,k.jsx)(A,{style:{margin:"24px 16px 0"},children:(0,k.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,k.jsx)(E,{style:{textAlign:"center"},children:"Debugged By Students"})]})]})})}},243:function(e,n,t){t.d(n,{Jq:function(){return u},dq:function(){return s},fR:function(){return i},fb:function(){return r},xl:function(){return l}});var a=t(9455),c=t(2763),o=a.v_,r=function(e){return fetch("".concat(o,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},s=function(e){return fetch("".concat(o,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},i=function(e){return fetch("".concat(o,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(o,"/post/").concat(e.postId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e,n){return fetch("".concat(o,"/all?page=").concat(e,"&type=").concat(n),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},9197:function(e,n,t){t.r(n);var a=t(9439),c=t(2791),o=t(5529),r=t(4264),s=t(4556),i=t(1773),l=t(4099),u=t(2002),d=t(7689),f=t(6122),h=t(243),m=t(184);n.default=function(){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),t=n[0],p=n[1],x=(0,c.useState)(!0),g=(0,a.Z)(x,2),j=g[0],Z=g[1],y=(0,c.useState)({}),b=(0,a.Z)(y,2),v=b[0],k=b[1],S=s.Z.useNotification(),A=(0,a.Z)(S,2),E=A[0],C=A[1],T=function(e){var n=e.type,t=e.message;E[n]({message:t})},w=function(){var e=(0,d.TH)().search;return c.useMemo((function(){return new URLSearchParams(e)}),[e])}();(0,c.useEffect)((function(){document.title="Announcements | SoCIS";w.get("success");(0,h.Jq)(1,"Announcement").then((function(e){return e.error?T({type:"error",message:"Error Occurred!"}):0===e.docs.length?T({type:"info",message:"No Announcements Found!"}):(console.log(e),k(e),p(e.docs),void Z(!1))})).catch((function(e){console.log(e)}))}),[p,k,w]);return(0,m.jsxs)(o.Z,{children:[C,(0,m.jsx)(r.Z,{title:"Announcements"}),(0,m.jsx)(i.Z,{}),j?(0,m.jsx)(f.Z,{}):(0,m.jsx)(u.Z,{data:t}),(0,m.jsx)("br",{}),(0,m.jsx)(l.Z,{current:v.page,pageSize:1,onChange:function(e){return function(e){Z(!0),(0,h.Jq)(e,"Announcement").then((function(e){k(e),p(e.docs),Z(!1)})).catch((function(e){console.log(e)}))}(e)},total:v.totalPages,style:{alignSelf:"center"}})]})}},3451:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7462),c=t(2791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"},r=t(4291),s=function(e,n){return c.createElement(r.Z,(0,a.Z)({},e,{ref:n,icon:o}))};var i=c.forwardRef(s)}}]);
//# sourceMappingURL=197.60bca7f2.chunk.js.map