"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[682],{6122:function(e,n,t){t(2791);var a=t(6106),c=t(914),o=t(183),s=t(184);n.Z=function(e){return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},1),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},2),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},3),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},4),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},4),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},4),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},4),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},4),(0,s.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,s.jsx)(o.Z,{active:!0})},5)]})}},6384:function(e,n,t){t(2791);var a=t(6106),c=t(914),o=t(8844),s=t(7647),r=t(2641),i=t(3655),l=t(1087),u=t(2763),f=t(184);n.Z=function(e){return(0,f.jsx)(a.Z,{children:e.data.map((function(e){return(0,f.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},style:{margin:"20px"},children:(0,f.jsx)(l.rU,{to:"".concat(e._id),children:(0,f.jsx)(o.Z.Ribbon,{text:String(e.createdAt.split("T")[0]),children:(0,f.jsxs)(s.Z,{bordered:!0,actions:[(0,f.jsx)(l.rU,{style:{visibility:(0,u.bW)().user.sapId===e.author.sapId?"visible":"hidden"},to:"".concat("management"===(0,u.bW)().user.role?"/management":"/faculty","/post/new?id=").concat(e._id),children:(0,f.jsx)(r.ZP,{children:"Update"})})],children:[(0,f.jsx)(i.Z.Title,{style:{fontSize:"18px"},children:e.title}),(0,f.jsx)(i.Z.Text,{children:e.excerpt}),(0,f.jsxs)(i.Z.Title,{style:{fontSize:"12px",textAlign:"right"},children:[e.author.firstName," ",(0,f.jsx)("br",{}),"(",e.author.designations,")"]})]})})})},e._id)}))})}},4264:function(e,n,t){var a=t(3655),c=(t(2791),t(184));n.Z=function(e){return(0,c.jsx)(a.Z.Title,{style:{fontSize:"24px"},children:e.title})}},5529:function(e,n,t){var a=t(9439),c=t(2791),o=t(8134),s=t(5794),r=t(9529),i=t(2827),l=t(5458),u=t(3729),f=t(3451),d=t(9286),h=t(7962),m=t(586),p=t(1932),g=t(573),x=t(3388),j=t(1583),Z=t(6859),y=t(2763),b=t(7689),v=t(1087),k=t(184),S=m.Z.Header,E=m.Z.Content,w=m.Z.Footer,C=m.Z.Sider;n.Z=function(e){var n=(0,b.TH)();(0,c.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?z("/"):"management"!==(0,y.bW)().user.role?window.location.href="/":void 0}),[y.bW]);var t=(0,c.useState)(!0),T=(0,a.Z)(t,2),P=T[0],z=(T[1],(0,b.s0)()),A=function(){(0,y.uf)().then((function(e){if(e.redirect)return z("/?logout=true")}))},U=[{key:"/management/dashboard",icon:c.createElement(o.Z),label:(0,k.jsx)(v.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:c.createElement(s.Z),label:(0,k.jsx)(v.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:c.createElement(r.Z),label:(0,k.jsx)(v.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:c.createElement(i.Z),label:(0,k.jsx)(v.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:c.createElement(l.Z),label:(0,k.jsx)(v.rU,{to:"/management/profile",children:"Profile"})},{key:"/management/announcement/view",icon:c.createElement(u.Z),label:(0,k.jsx)(v.rU,{to:"/management/announcement/view",children:"Announcements"})},{key:"message",icon:c.createElement(f.Z),label:(0,k.jsx)(v.rU,{to:"/management/message/view",children:"Messages"})},{key:"/management/post/new",icon:c.createElement(d.Z),label:(0,k.jsx)(v.rU,{to:"/management/post/new",children:"Post"})},{key:"/management/policy/view",icon:c.createElement(u.Z),label:(0,k.jsx)(v.rU,{to:"/management/policy/view",children:"Policy"})},{key:"Logout",icon:c.createElement(h.Z),label:(0,k.jsx)(v.rU,{onClick:A,children:"Logout"})}],L=[{key:"2",label:(0,k.jsx)(v.rU,{to:"/management/profile",children:"Profile"})},{key:"1",label:(0,k.jsx)("a",{href:"#",onClick:function(){return A()},children:"Logout"})}];return(0,k.jsx)(p.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,k.jsxs)(m.Z,{children:[(0,k.jsxs)(C,{breakpoint:"lg",theme:P?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,k.jsx)("div",{className:"demo-logo-vertical",children:(0,k.jsx)(g.Z,{src:"/upesfull.png"})}),(0,k.jsx)(x.Z,{theme:P?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:U})]}),(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(S,{style:{padding:0},children:(0,k.jsx)(j.Z,{menu:{items:L},placement:"bottom",children:(0,k.jsx)(Z.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,k.jsx)(r.Z,{})})})}),(0,k.jsx)(E,{style:{margin:"24px 16px 0"},children:(0,k.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,k.jsx)(w,{style:{textAlign:"center"},children:"Debugged By Students"})]})]})})}},9522:function(e,n,t){var a=t(9455);t(2763),a.yw},243:function(e,n,t){t.d(n,{Jq:function(){return u},dq:function(){return r},fR:function(){return i},fb:function(){return s},xl:function(){return l}});var a=t(9455),c=t(2763),o=a.v_,s=function(e){return fetch("".concat(o,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},r=function(e){return fetch("".concat(o,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},i=function(e){return fetch("".concat(o,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(o,"/post/").concat(e.postId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e,n){return fetch("".concat(o,"/all?page=").concat(e,"&type=").concat(n),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},6682:function(e,n,t){t.r(n);var a=t(9439),c=t(2791),o=t(5529),s=t(4264),r=t(4556),i=t(1773),l=t(4099),u=(t(9522),t(6384)),f=t(7689),d=t(6122),h=t(243),m=t(184);n.default=function(){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),t=n[0],p=n[1],g=(0,c.useState)(!0),x=(0,a.Z)(g,2),j=x[0],Z=x[1],y=(0,c.useState)({}),b=(0,a.Z)(y,2),v=b[0],k=b[1],S=r.Z.useNotification(),E=(0,a.Z)(S,2),w=E[0],C=E[1],T=function(e){var n=e.type,t=e.message;w[n]({message:t})};!function(){var e=(0,f.TH)().search;c.useMemo((function(){return new URLSearchParams(e)}),[e])}();(0,c.useEffect)((function(){document.title="Messages | SoCIS",(0,h.Jq)(1,"Message").then((function(e){return e.error?T({type:"error",message:"Error Occurred!"}):0===e.docs.length?T({type:"info",message:"No Messages Found!"}):(k(e),p(e.docs),void Z(!1))})).catch((function(e){console.log(e)}))}),[p,k]);return(0,m.jsxs)(o.Z,{children:[C,(0,m.jsx)(s.Z,{title:"Messages"}),(0,m.jsx)(i.Z,{}),j?(0,m.jsx)(d.Z,{}):(0,m.jsx)(u.Z,{data:t}),(0,m.jsx)("br",{}),(0,m.jsx)(l.Z,{current:v.page,pageSize:1,onChange:function(e){return function(e){Z(!0),(0,h.Jq)(e,"Message").then((function(e){k(e),p(e.docs),Z(!1)})).catch((function(e){console.log(e)}))}(e)},total:v.totalPages,style:{alignSelf:"center"}})]})}},3451:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7462),c=t(2791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"},s=t(4291),r=function(e,n){return c.createElement(s.Z,(0,a.Z)({},e,{ref:n,icon:o}))};var i=c.forwardRef(r)}}]);
//# sourceMappingURL=682.42cb484a.chunk.js.map