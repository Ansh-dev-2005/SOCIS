"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[286],{6122:function(e,t,n){n(2791);var s=n(6106),c=n(914),a=n(183),i=n(184);t.Z=function(e){return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(a.Z,{active:!0})},1),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(a.Z,{active:!0})},2),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(a.Z,{active:!0})},3),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(a.Z,{active:!0})},4),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(a.Z,{active:!0})},4),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(a.Z,{active:!0})},4),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(a.Z,{active:!0})},4),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(a.Z,{active:!0})},4),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(a.Z,{active:!0})},5)]})}},6384:function(e,t,n){n(2791);var s=n(6106),c=n(914),a=n(8844),i=n(7647),o=n(462),r=n(3655),l=n(1087),u=n(2763),d=n(184);t.Z=function(e){return(0,d.jsx)(s.Z,{children:e.data.map((function(e){return(0,d.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},style:{margin:"20px"},children:(0,d.jsx)(l.rU,{to:"".concat(e._id),children:(0,d.jsx)(a.Z.Ribbon,{text:String(e.createdAt.split("T")[0]),children:(0,d.jsxs)(i.Z,{bordered:!0,actions:[(0,d.jsx)(l.rU,{style:{visibility:(0,u.bW)().user.sapId===e.from.sapId?"visible":"hidden"},to:"".concat("management"===(0,u.bW)().user.role?"/management":"/faculty","/message/new?id=").concat(e._id),children:(0,d.jsx)(o.ZP,{children:"Update"})})],children:[(0,d.jsx)(r.Z.Title,{style:{fontSize:"18px"},children:e.title}),(0,d.jsx)(r.Z.Text,{children:e.description}),(0,d.jsxs)(r.Z.Title,{style:{fontSize:"12px",textAlign:"right"},children:[e.from.firstName," ",(0,d.jsx)("br",{}),"(",e.from.designations,")"]})]})})})},e._id)}))})}},4264:function(e,t,n){var s=n(3655),c=(n(2791),n(184));t.Z=function(e){return(0,c.jsx)(s.Z.Title,{style:{fontSize:"24px"},children:e.title})}},889:function(e,t,n){var s=n(9439),c=n(2791),a=n(8134),i=n(5794),o=n(9150),r=n(3729),l=n(2827),u=n(5458),d=n(8961),f=n(9286),p=n(3451),h=n(3876),m=n(7962),x=n(9529),y=n(4006),g=n(2542),j=n(586),Z=n(3296),v=n(2145),b=n(3388),w=n(6859),E=n(1894),k=n(2763),N=n(7689),C=n(1087),S=n(184),O=j.Z.Header,P=j.Z.Content,T=j.Z.Footer,U=j.Z.Sider;t.Z=function(e){var t=(0,N.TH)();(0,c.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?I("/"):"faculty"!==(0,k.bW)().user.role?window.location.href="/":void 0}),[k.bW]);var n=(0,c.useState)(!0),A=(0,s.Z)(n,2),z=A[0],M=A[1],I=(0,N.s0)(),L=Z.Z.useToken().token.colorBgContainer,_=[{key:"/faculty/dashboard",icon:c.createElement(a.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/dashboard",children:"Dashboard"})},{key:"/faculty/timetable",icon:c.createElement(i.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/timetable",children:"Timetable"})},{key:"announcement",icon:c.createElement(o.Z),label:"Announcements",children:[{key:"/faculty/announcement/view",icon:c.createElement(r.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/announcement/view",children:"View"})}]},{key:"/faculty/course",icon:c.createElement(l.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/course",children:"Courses"})},{key:"/faculty/profile",icon:c.createElement(u.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/profile",children:"Profile"})},{key:"post",icon:c.createElement(d.Z),label:"Post",children:[{key:"/faculty/post/new",icon:c.createElement(f.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/post/new",children:"New"})},{key:"/faculty/post/view",icon:c.createElement(r.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/post/view",children:"View"})}]},{key:"message",icon:c.createElement(p.Z),label:"Message",children:[{key:"/faculty/message/new",icon:c.createElement(f.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/message/new",children:"New"})},{key:"/faculty/message/view",icon:c.createElement(r.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/message/view",children:"View"})}]},{key:"policy",icon:c.createElement(h.Z),label:"Policy",children:[{key:"/faculty/policy/view",icon:c.createElement(r.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/policy/view",children:"View"})}]},{key:"Logout",icon:c.createElement(m.Z),label:(0,S.jsx)(C.rU,{onClick:function(){(0,k.uf)().then((function(e){if(e.redirect)return I("/?logout=true")}))},children:"Logout"})}];return(0,S.jsxs)(j.Z,{children:[(0,S.jsxs)(U,{breakpoint:"lg",theme:z?"dark":"light",collapsedWidth:"0",style:{height:"100vh"},children:[(0,S.jsx)("div",{className:"demo-logo-vertical",children:(0,S.jsx)(v.Z,{src:"/upesfull.png"})}),(0,S.jsx)(b.Z,{theme:z?"dark":"light",mode:"inline",defaultSelectedKeys:t.pathname,defaultOpenKeys:[],items:_})]}),(0,S.jsxs)(j.Z,{children:[(0,S.jsx)(O,{style:{padding:0,background:L},children:(0,S.jsx)(w.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,S.jsx)(x.Z,{})})}),(0,S.jsx)(P,{style:{margin:"24px 16px 0",background:L},children:(0,S.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,S.jsx)(T,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,S.jsx)(E.Z,{icon:z?(0,S.jsx)(y.Z,{}):(0,S.jsx)(g.Z,{}),onClick:function(){M(!z)}})]})}},9522:function(e,t,n){n.d(t,{$Z:function(){return r},FC:function(){return l},Hd:function(){return o},Tx:function(){return i},_U:function(){return u}});var s=n(9455),c=n(2763),a=s.yw,i=function(e){return fetch("".concat(a,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},o=function(e){return fetch("".concat(a,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},r=function(e){return fetch("".concat(a,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(a,"/message/").concat(e.messageId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e){return fetch("".concat(a,"/all?page=").concat(e),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},3286:function(e,t,n){n.r(t);var s=n(9439),c=n(2791),a=n(4264),i=n(889),o=n(5476),r=n(1773),l=n(4099),u=n(9522),d=n(6384),f=n(7689),p=n(6122),h=n(184);t.default=function(){var e=(0,c.useState)([]),t=(0,s.Z)(e,2),n=t[0],m=t[1],x=(0,c.useState)(!0),y=(0,s.Z)(x,2),g=y[0],j=y[1],Z=(0,c.useState)({}),v=(0,s.Z)(Z,2),b=v[0],w=v[1],E=o.Z.useNotification(),k=(0,s.Z)(E,2),N=k[0],C=k[1],S=function(e){var t=e.type,n=e.message;N[t]({message:n})},O=function(){var e=(0,f.TH)().search;return c.useMemo((function(){return new URLSearchParams(e)}),[e])}();(0,c.useEffect)((function(){document.title="Messages | SoCIS";var e=O.get("success");"new"===e?S({type:"success",message:"Added New Message!"}):"edit"===e?S({type:"success",message:"Updated Message!"}):"delete"===e&&S({type:"success",message:"Deleted Message!"}),(0,u._U)(1).then((function(e){return e.error?S({type:"error",message:"Error Occurred!"}):0===e.docs.length?S({type:"info",message:"No Messages Found!"}):(w(e),m(e.docs),void j(!1))})).catch((function(e){console.log(e)}))}),[m,w,O]);return(0,h.jsxs)(i.Z,{children:[C,(0,h.jsx)(a.Z,{title:"Messages"}),(0,h.jsx)(r.Z,{}),g?(0,h.jsx)(p.Z,{}):(0,h.jsx)(d.Z,{data:n}),(0,h.jsx)("br",{}),(0,h.jsx)(l.Z,{current:b.page,pageSize:1,onChange:function(e){return function(e){j(!0),(0,u._U)(e).then((function(e){w(e),m(e.docs),j(!1)})).catch((function(e){console.log(e)}))}(e)},total:b.totalPages,style:{alignSelf:"center"}})]})}},1773:function(e,t,n){n.d(t,{Z:function(){return Z}});var s=n(4942),c=n(9439),a=n(2791),i=n(1694),o=n.n(i),r=n(5501);function l(e){return["small","middle","large"].includes(e)}function u(e){return!!e&&("number"===typeof e&&!Number.isNaN(e))}var d=n(1929),f=n(11),p=a.createContext({latestIndex:0}),h=p.Provider,m=function(e){var t=e.className,n=e.index,s=e.children,c=e.split,i=e.style,o=a.useContext(p).latestIndex;return null===s||void 0===s?null:a.createElement(a.Fragment,null,a.createElement("div",{className:t,style:i},s),n<o&&c&&a.createElement("span",{className:"".concat(t,"-split")},c))},x=n(1294),y=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(s=Object.getOwnPropertySymbols(e);c<s.length;c++)t.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(e,s[c])&&(n[s[c]]=e[s[c]])}return n},g=a.forwardRef((function(e,t){var n,i,f,p=a.useContext(d.E_),g=p.getPrefixCls,j=p.space,Z=p.direction,v=e.size,b=void 0===v?(null===j||void 0===j?void 0:j.size)||"small":v,w=e.align,E=e.className,k=e.rootClassName,N=e.children,C=e.direction,S=void 0===C?"horizontal":C,O=e.prefixCls,P=e.split,T=e.style,U=e.wrap,A=void 0!==U&&U,z=e.classNames,M=e.styles,I=y(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),L=Array.isArray(b)?b:[b,b],_=(0,c.Z)(L,2),B=_[0],W=_[1],H=l(W),D=l(B),F=u(W),G=u(B),J=(0,r.Z)(N,{keepEmpty:!0}),V=void 0===w&&"horizontal"===S?"center":w,R=g("space",O),K=(0,x.Z)(R),$=(0,c.Z)(K,2),q=$[0],Q=$[1],X=o()(R,null===j||void 0===j?void 0:j.className,Q,"".concat(R,"-").concat(S),(n={},(0,s.Z)(n,"".concat(R,"-rtl"),"rtl"===Z),(0,s.Z)(n,"".concat(R,"-align-").concat(V),V),(0,s.Z)(n,"".concat(R,"-gap-row-").concat(W),H),(0,s.Z)(n,"".concat(R,"-gap-col-").concat(B),D),n),E,k),Y=o()("".concat(R,"-item"),null!==(i=null===z||void 0===z?void 0:z.item)&&void 0!==i?i:null===(f=null===j||void 0===j?void 0:j.classNames)||void 0===f?void 0:f.item),ee=0,te=J.map((function(e,t){var n,s;null!==e&&void 0!==e&&(ee=t);var c=e&&e.key||"".concat(Y,"-").concat(t);return a.createElement(m,{className:Y,key:c,index:t,split:P,style:null!==(n=null===M||void 0===M?void 0:M.item)&&void 0!==n?n:null===(s=null===j||void 0===j?void 0:j.styles)||void 0===s?void 0:s.item},e)})),ne=a.useMemo((function(){return{latestIndex:ee}}),[ee]);if(0===J.length)return null;var se={};return A&&(se.flexWrap="wrap"),!D&&G&&(se.columnGap=B),!H&&F&&(se.rowGap=W),q(a.createElement("div",Object.assign({ref:t,className:X,style:Object.assign(Object.assign(Object.assign({},se),null===j||void 0===j?void 0:j.style),T)},I),a.createElement(h,{value:ne},te)))}));var j=g;j.Compact=f.ZP;var Z=j}}]);
//# sourceMappingURL=286.081e922b.chunk.js.map