"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[1],{9712:function(e,t,n){n(2791);var c=n(6106),r=n(914),o=n(8844),i=n(7647),a=n(3655),l=n(184);t.Z=function(e){return(0,l.jsx)(c.Z,{children:(0,l.jsx)(r.Z,{flex:3,style:{height:"70vh"},children:(0,l.jsx)(o.Z.Ribbon,{text:"By: ".concat(e.data.author.firstName," | ")+String(e.data.createdAt.split("T")[0]),children:(0,l.jsxs)(i.Z,{style:{height:"70vh"},hoverable:!0,children:[(0,l.jsx)(a.Z.Title,{style:{fontSize:"30px",textAlign:"left"},children:e.data.title}),(0,l.jsx)("hr",{}),(0,l.jsxs)(a.Z.Title,{style:{fontSize:"18px"},children:["Description: ",e.data.excerpt]}),(0,l.jsx)(a.Z.Text,{style:{fontSize:"16px"},children:e.data.text})]})})})})}},889:function(e,t,n){var c=n(9439),r=n(2791),o=n(8134),i=n(5794),a=n(3729),l=n(2827),s=n(5458),u=n(9286),d=n(7962),h=n(9529),f=n(586),p=n(1932),y=n(573),j=n(3388),x=n(1583),m=n(6859),g=n(2763),Z=n(7689),b=n(1087),v=n(184),k=f.Z.Header,w=f.Z.Content,S=f.Z.Footer,E=f.Z.Sider;t.Z=function(e){var t=(0,Z.TH)();(0,r.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?C("/"):"faculty"!==(0,g.bW)().user.role?window.location.href="/":void 0}),[g.bW]);var n=(0,r.useState)(!0),T=(0,c.Z)(n,2),A=T[0],C=(T[1],(0,Z.s0)()),P=function(){(0,g.uf)().then((function(e){if(e.redirect)return C("/?logout=true")}))},U=[{key:"2",label:(0,v.jsx)(b.rU,{to:"/faculty/profile",children:"Profile"})},{key:"1",label:(0,v.jsx)("a",{href:"#",onClick:function(){return P()},children:"Logout"})}],z=[{key:"/faculty/dashboard",icon:r.createElement(o.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/dashboard",children:"Dashboard"})},{key:"/faculty/timetable",icon:r.createElement(i.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/timetable",children:"Timetable"})},{key:"/faculty/announcement/view",icon:r.createElement(a.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/announcement/view",children:"Announcement"})},{key:"/faculty/course",icon:r.createElement(l.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/course",children:"Courses"})},{key:"/faculty/profile",icon:r.createElement(s.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/profile",children:"Profile"})},{key:"/faculty/post/new",icon:r.createElement(u.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/post/new",children:"Post"})},{key:"/faculty/message/view",icon:r.createElement(a.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/message/view",children:"Message"})},{key:"/faculty/policy/view",icon:r.createElement(a.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/policy/view",children:"Policy"})},{key:"Logout",icon:r.createElement(d.Z),label:(0,v.jsx)(b.rU,{onClick:P,children:"Logout"})}];return(0,v.jsx)(p.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,v.jsxs)(f.Z,{children:[(0,v.jsxs)(E,{breakpoint:"lg",theme:A?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,v.jsx)("div",{className:"demo-logo-vertical",children:(0,v.jsx)(y.Z,{src:"/upesfull.png"})}),(0,v.jsx)(j.Z,{theme:A?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:t.pathname,defaultOpenKeys:[],items:z})]}),(0,v.jsxs)(f.Z,{children:[(0,v.jsx)(k,{style:{padding:0},children:(0,v.jsx)(x.Z,{menu:{items:U},placement:"bottom",children:(0,v.jsx)(m.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,v.jsx)(h.Z,{})})})}),(0,v.jsx)(w,{style:{margin:"24px 16px 0"},children:(0,v.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,v.jsx)(S,{style:{textAlign:"center"},children:"Debugged By Students"})]})]})})}},243:function(e,t,n){n.d(t,{Jq:function(){return u},dq:function(){return a},fR:function(){return l},fb:function(){return i},xl:function(){return s}});var c=n(9455),r=n(2763),o=c.v_,i=function(e){return fetch("".concat(o,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},a=function(e){return fetch("".concat(o,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(o,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},s=function(e){return fetch("".concat(o,"/post/").concat(e.postId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e,t){return fetch("".concat(o,"/all?page=").concat(e,"&type=").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},1001:function(e,t,n){n.r(t);var c=n(9439),r=n(2791),o=n(183),i=n(7689),a=n(889),l=n(243),s=n(9712),u=n(184);t.default=function(){var e=(0,r.useState)([]),t=(0,c.Z)(e,2),n=t[0],d=t[1],h=(0,r.useState)(!0),f=(0,c.Z)(h,2),p=f[0],y=f[1],j=(0,i.UO)().id;return(0,r.useEffect)((function(){document.title="View Message | SoCIS",(0,l.xl)({postId:j}).then((function(e){if(e.error)return window.location.href="/faculty/post/view?error=true";d(e),y(!1)})).catch((function(e){return window.location.href="/faculty/post/view?error=true"}))}),[d]),(0,u.jsx)(a.Z,{children:p?(0,u.jsx)(o.Z,{active:!0}):(0,u.jsx)(s.Z,{data:n})})}}}]);
//# sourceMappingURL=1.a5c2572c.chunk.js.map