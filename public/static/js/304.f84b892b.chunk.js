"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[304],{6122:function(e,n,t){t(2791);var a=t(6106),r=t(914),c=t(183),o=t(184);n.Z=function(e){return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(r.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(c.Z,{active:!0})},1),(0,o.jsx)(r.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(c.Z,{active:!0})},2),(0,o.jsx)(r.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(c.Z,{active:!0})},3),(0,o.jsx)(r.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(c.Z,{active:!0})},4),(0,o.jsx)(r.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(c.Z,{active:!0})},4),(0,o.jsx)(r.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(c.Z,{active:!0})},4),(0,o.jsx)(r.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(c.Z,{active:!0})},4),(0,o.jsx)(r.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(c.Z,{active:!0})},4),(0,o.jsx)(r.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(c.Z,{active:!0})},5)]})}},4264:function(e,n,t){var a=t(3655),r=(t(2791),t(184));n.Z=function(e){return(0,r.jsx)(a.Z.Title,{style:{fontSize:"24px"},children:e.title})}},5529:function(e,n,t){var a=t(9439),r=t(2791),c=t(8134),o=t(5794),s=t(9529),i=t(2827),l=t(5458),u=t(3729),d=t(3451),f=t(9286),h=t(7962),m=t(586),p=t(1932),g=t(573),x=t(3388),j=t(1583),Z=t(6859),y=t(2763),b=t(7689),v=t(1087),k=t(184),E=m.Z.Header,P=m.Z.Content,S=m.Z.Footer,w=m.Z.Sider;n.Z=function(e){var n=(0,b.TH)();(0,r.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?U("/"):"management"!==(0,y.bW)().user.role?window.location.href="/":void 0}),[y.bW]);var t=(0,r.useState)(!0),C=(0,a.Z)(t,2),A=C[0],U=(C[1],(0,b.s0)()),z=function(){(0,y.uf)().then((function(e){if(e.redirect)return U("/?logout=true")}))},T=[{key:"/management/dashboard",icon:r.createElement(c.Z),label:(0,k.jsx)(v.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:r.createElement(o.Z),label:(0,k.jsx)(v.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:r.createElement(s.Z),label:(0,k.jsx)(v.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:r.createElement(i.Z),label:(0,k.jsx)(v.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:r.createElement(l.Z),label:(0,k.jsx)(v.rU,{to:"/management/profile",children:"Profile"})},{key:"/management/announcement/view",icon:r.createElement(u.Z),label:(0,k.jsx)(v.rU,{to:"/management/announcement/view",children:"Announcements"})},{key:"message",icon:r.createElement(d.Z),label:(0,k.jsx)(v.rU,{to:"/management/message/view",children:"Messages"})},{key:"/management/post/new",icon:r.createElement(f.Z),label:(0,k.jsx)(v.rU,{to:"/management/post/new",children:"Post"})},{key:"/management/policy/view",icon:r.createElement(u.Z),label:(0,k.jsx)(v.rU,{to:"/management/policy/view",children:"Policy"})},{key:"Logout",icon:r.createElement(h.Z),label:(0,k.jsx)(v.rU,{onClick:z,children:"Logout"})}],L=[{key:"2",label:(0,k.jsx)(v.rU,{to:"/management/profile",children:"Profile"})},{key:"1",label:(0,k.jsx)("a",{href:"#",onClick:function(){return z()},children:"Logout"})}];return(0,k.jsx)(p.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,k.jsxs)(m.Z,{children:[(0,k.jsxs)(w,{breakpoint:"lg",theme:A?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,k.jsx)("div",{className:"demo-logo-vertical",children:(0,k.jsx)(g.Z,{src:"/upesfull.png"})}),(0,k.jsx)(x.Z,{theme:A?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:T})]}),(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(E,{style:{padding:0},children:(0,k.jsx)(j.Z,{menu:{items:L},placement:"bottom",children:(0,k.jsx)(Z.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,k.jsx)(s.Z,{})})})}),(0,k.jsx)(P,{style:{margin:"24px 16px 0"},children:(0,k.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,k.jsx)(S,{style:{textAlign:"center"},children:"Debugged By Students"})]})]})})}},243:function(e,n,t){t.d(n,{Jq:function(){return u},dq:function(){return s},fR:function(){return i},fb:function(){return o},xl:function(){return l}});var a=t(9455),r=t(2763),c=a.v_,o=function(e){return fetch("".concat(c,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},s=function(e){return fetch("".concat(c,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},i=function(e){return fetch("".concat(c,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(c,"/post/").concat(e.postId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e,n){return fetch("".concat(c,"/all?page=").concat(e,"&type=").concat(n),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},1304:function(e,n,t){t.r(n);var a=t(9439),r=t(2791),c=t(4264),o=t(4556),s=t(8715),i=t(8844),l=t(4099),u=t(7689),d=t(1087),f=t(6122),h=t(243),m=t(2763),p=t(5529),g=t(184);n.default=function(){var e=(0,r.useState)([]),n=(0,a.Z)(e,2),t=n[0],x=n[1],j=(0,r.useState)(!0),Z=(0,a.Z)(j,2),y=Z[0],b=Z[1],v=(0,r.useState)({}),k=(0,a.Z)(v,2),E=k[0],P=k[1],S=o.Z.useNotification(),w=(0,a.Z)(S,2),C=w[0],A=w[1],U=function(e){var n=e.type,t=e.message;C[n]({message:t})},z=function(){var e=(0,u.TH)().search;return r.useMemo((function(){return new URLSearchParams(e)}),[e])}();(0,r.useEffect)((function(){document.title="Post | SoCIS";var e=z.get("success");"new"===e?U({type:"success",message:"Added New Post!"}):"edit"===e?U({type:"success",message:"Updated Post!"}):"delete"===e&&U({type:"success",message:"Deleted Post!"}),(0,h.Jq)(1).then((function(e){return e.error?U({type:"error",message:"Error Occurred!"}):0===e.docs.length?U({type:"info",message:"No Posts Found!"}):(P(e),x(e.docs),void b(!1))})).catch((function(e){return U({type:"error",message:"Error Occurred!"})}))}),[x,P,z]);return(0,g.jsxs)(p.Z,{children:[A,(0,g.jsx)(c.Z,{title:"Posts"}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),y?(0,g.jsx)(f.Z,{}):(0,g.jsx)(s.Z,{itemLayout:"vertical",size:"large",dataSource:t,renderItem:function(e,n){return(0,g.jsx)(i.Z.Ribbon,{text:"Published By ".concat(e.author.firstName," On ").concat(e.createdAt.split("T")[0]),children:(0,g.jsx)(s.Z.Item,{style:{boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)"},actions:[(0,g.jsx)(d.rU,{style:{visibility:e.author.sapId===(0,m.bW)().user.sapId?"visible":"hidden"},to:"/management/post/new?id=".concat(e._id),children:"Edit"})],children:(0,g.jsx)(s.Z.Item.Meta,{title:(0,g.jsx)(d.rU,{to:"".concat(e._id),children:e.title}),description:e.excerpt})})},n)}}),(0,g.jsx)("br",{}),(0,g.jsx)(l.Z,{current:E.page,pageSize:1,onChange:function(e){return function(e){b(!0),(0,h.Jq)(e).then((function(e){console.log(e),P(e),x(e.docs),b(!1)})).catch((function(e){return U({type:"error",message:"Error Occurred!"})}))}(e)},total:E.totalPages,style:{alignSelf:"center"}})]})}},3451:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7462),r=t(2791),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"},o=t(4291),s=function(e,n){return r.createElement(o.Z,(0,a.Z)({},e,{ref:n,icon:c}))};var i=r.forwardRef(s)}}]);
//# sourceMappingURL=304.f84b892b.chunk.js.map