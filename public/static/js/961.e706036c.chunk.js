"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[961],{6122:function(e,n,t){t(2791);var a=t(6106),c=t(914),i=t(183),o=t(184);n.Z=function(e){return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(i.Z,{active:!0})},1),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(i.Z,{active:!0})},2),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(i.Z,{active:!0})},3),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(i.Z,{active:!0})},4),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(i.Z,{active:!0})},4),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(i.Z,{active:!0})},4),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(i.Z,{active:!0})},4),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(i.Z,{active:!0})},4),(0,o.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,o.jsx)(i.Z,{active:!0})},5)]})}},4264:function(e,n,t){var a=t(3655),c=(t(2791),t(184));n.Z=function(e){return(0,c.jsx)(a.Z.Title,{style:{fontSize:"24px"},children:e.title})}},7312:function(e,n,t){t(2791);var a=t(6106),c=t(914),i=t(8844),o=t(7647),s=t(462),r=t(3655),l=t(1087),d=t(2763),u=t(184);n.Z=function(e){return(0,u.jsx)(a.Z,{children:e.data.map((function(e){return(0,u.jsx)(c.Z,{xs:{span:5,offset:1},lg:{span:5,offset:1},style:{margin:"20px"},children:(0,u.jsx)(l.rU,{to:"".concat(e._id),children:(0,u.jsx)(i.Z.Ribbon,{text:"Updated: ".concat(String(e.updatedAt.split("T")[0])),children:(0,u.jsxs)(o.Z,{bordered:!0,actions:[(0,u.jsx)(l.rU,{to:"".concat(e._id),children:(0,u.jsx)(s.ZP,{children:"View"})}),(0,u.jsx)(l.rU,{style:{visibility:"management"===(0,d.bW)().user.role?"visible":"hidden"},to:"/management/policy/new?id=".concat(e._id),children:(0,u.jsx)(s.ZP,{children:"Update"})})],children:[(0,u.jsx)(r.Z.Title,{style:{fontSize:"18px"},children:e.policyName}),(0,u.jsx)(r.Z.Text,{children:e.policyDescriptiom})]})})})},e._id)}))})}},5529:function(e,n,t){var a=t(9439),c=t(2791),i=t(8134),o=t(5794),s=t(9529),r=t(2827),l=t(5458),d=t(9150),u=t(9286),m=t(3729),f=t(3451),p=t(8961),h=t(3876),g=t(7962),x=t(4006),j=t(2542),y=t(586),Z=t(3296),v=t(2145),b=t(3388),w=t(6859),E=t(1894),k=t(2763),N=t(7689),P=t(1087),C=t(184),S=y.Z.Header,U=y.Z.Content,O=y.Z.Footer,T=y.Z.Sider;n.Z=function(e){var n=(0,N.TH)();(0,c.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?B("/"):"management"!==(0,k.bW)().user.role?window.location.href="/":void 0}),[k.bW]);var t=(0,c.useState)(!0),A=(0,a.Z)(t,2),z=A[0],L=A[1],B=(0,N.s0)(),I=Z.Z.useToken().token.colorBgContainer,_=[{key:"/management/dashboard",icon:c.createElement(i.Z),label:(0,C.jsx)(P.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:c.createElement(o.Z),label:(0,C.jsx)(P.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:c.createElement(s.Z),label:(0,C.jsx)(P.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:c.createElement(r.Z),label:(0,C.jsx)(P.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:c.createElement(l.Z),label:(0,C.jsx)(P.rU,{to:"/management/profile",children:"Profile"})},{key:"announcement",icon:c.createElement(d.Z),label:"Announcements",children:[{key:"/management/announcement/new",icon:c.createElement(u.Z),label:(0,C.jsx)(P.rU,{to:"/management/announcement/new",children:"New"})},{key:"/management/announcement/view",icon:c.createElement(m.Z),label:(0,C.jsx)(P.rU,{to:"/management/announcement/view",children:"View"})}]},{key:"message",icon:c.createElement(f.Z),label:"Message",children:[{key:"/management/message/new",icon:c.createElement(u.Z),label:(0,C.jsx)(P.rU,{to:"/management/message/new",children:"New"})},{key:"/management/message/view",icon:c.createElement(m.Z),label:(0,C.jsx)(P.rU,{to:"/management/message/view",children:"View"})}]},{key:"post",icon:c.createElement(p.Z),label:"Post",children:[{key:"/management/post/new",icon:c.createElement(u.Z),label:(0,C.jsx)(P.rU,{to:"/management/post/new",children:"New"})},{key:"/management/post/view",icon:c.createElement(m.Z),label:(0,C.jsx)(P.rU,{to:"/management/post/view",children:"View"})}]},{key:"policy",icon:c.createElement(h.Z),label:"Policy",children:[{key:"/management/policy/new",icon:c.createElement(u.Z),label:(0,C.jsx)(P.rU,{to:"/management/policy/new",children:"New"})},{key:"/management/policy/view",icon:c.createElement(m.Z),label:(0,C.jsx)(P.rU,{to:"/management/policy/view",children:"View"})}]},{key:"Logout",icon:c.createElement(g.Z),label:(0,C.jsx)(P.rU,{onClick:function(){(0,k.uf)().then((function(e){if(e.redirect)return B("/?logout=true")}))},children:"Logout"})}];return(0,C.jsxs)(y.Z,{children:[(0,C.jsxs)(T,{breakpoint:"lg",theme:z?"dark":"light",collapsedWidth:"0",style:{height:"100vh"},children:[(0,C.jsx)("div",{className:"demo-logo-vertical",children:(0,C.jsx)(v.Z,{src:"/upesfull.png"})}),(0,C.jsx)(b.Z,{theme:z?"dark":"light",mode:"inline",defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:_})]}),(0,C.jsxs)(y.Z,{children:[(0,C.jsx)(S,{style:{padding:0,background:I},children:(0,C.jsx)(w.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,C.jsx)(s.Z,{})})}),(0,C.jsx)(U,{style:{margin:"24px 16px 0",background:I},children:(0,C.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,C.jsx)(O,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,C.jsx)(E.Z,{icon:z?(0,C.jsx)(x.Z,{}):(0,C.jsx)(j.Z,{}),onClick:function(){L(!z)}})]})}},7953:function(e,n,t){t.d(n,{Ko:function(){return d},S8:function(){return r},SP:function(){return l},e5:function(){return o},rm:function(){return s}});var a=t(9455),c=t(2763),i=a.l4,o=function(e){return fetch("".concat(i,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},s=function(e){return fetch("".concat(i,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},r=function(e){return fetch("".concat(i,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(i,"/policy/").concat(e.policyId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},d=function(){return fetch("".concat(i,"/all"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},4961:function(e,n,t){t.r(n);var a=t(9439),c=t(2791),i=t(5529),o=t(4264),s=t(5476),r=t(1773),l=t(7689),d=t(7953),u=t(7312),m=t(6122),f=t(184);n.default=function(){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),t=n[0],p=n[1],h=(0,c.useState)(!0),g=(0,a.Z)(h,2),x=g[0],j=g[1],y=s.Z.useNotification(),Z=(0,a.Z)(y,2),v=Z[0],b=Z[1],w=function(e){var n=e.type,t=e.message;v[n]({message:t})},E=function(){var e=(0,l.TH)().search;return c.useMemo((function(){return new URLSearchParams(e)}),[e])}();return(0,c.useEffect)((function(){document.title="Policies | SoCIS";var e=E.get("success");"new"===e?w({type:"success",message:"Added New Policy!"}):"edit"===e?w({type:"success",message:"Updated Policy!"}):"delete"===e&&w({type:"success",message:"Deleted Policy!"}),(0,d.Ko)().then((function(e){return e.error?w({type:"error",message:"Error Occured"}):0===e.length?w({type:"info",message:"No Policies Found!"}):(p(e),void j(!1))}))}),[j,p,E]),(0,f.jsxs)(i.Z,{children:[b,(0,f.jsx)(o.Z,{title:"Policies"}),(0,f.jsx)(r.Z,{}),x?(0,f.jsx)(m.Z,{}):(0,f.jsx)(u.Z,{data:t}),(0,f.jsx)("br",{})]})}},1773:function(e,n,t){t.d(n,{Z:function(){return Z}});var a=t(4942),c=t(9439),i=t(2791),o=t(1694),s=t.n(o),r=t(5501);function l(e){return["small","middle","large"].includes(e)}function d(e){return!!e&&("number"===typeof e&&!Number.isNaN(e))}var u=t(1929),m=t(11),f=i.createContext({latestIndex:0}),p=f.Provider,h=function(e){var n=e.className,t=e.index,a=e.children,c=e.split,o=e.style,s=i.useContext(f).latestIndex;return null===a||void 0===a?null:i.createElement(i.Fragment,null,i.createElement("div",{className:n,style:o},a),t<s&&c&&i.createElement("span",{className:"".concat(n,"-split")},c))},g=t(1294),x=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(t[a[c]]=e[a[c]])}return t},j=i.forwardRef((function(e,n){var t,o,m,f=i.useContext(u.E_),j=f.getPrefixCls,y=f.space,Z=f.direction,v=e.size,b=void 0===v?(null===y||void 0===y?void 0:y.size)||"small":v,w=e.align,E=e.className,k=e.rootClassName,N=e.children,P=e.direction,C=void 0===P?"horizontal":P,S=e.prefixCls,U=e.split,O=e.style,T=e.wrap,A=void 0!==T&&T,z=e.classNames,L=e.styles,B=x(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),I=Array.isArray(b)?b:[b,b],_=(0,c.Z)(I,2),D=_[0],V=_[1],W=l(V),F=l(D),G=d(V),H=d(D),J=(0,r.Z)(N,{keepEmpty:!0}),K=void 0===w&&"horizontal"===C?"center":w,M=j("space",S),R=(0,g.Z)(M),q=(0,c.Z)(R,2),Q=q[0],X=q[1],Y=s()(M,null===y||void 0===y?void 0:y.className,X,"".concat(M,"-").concat(C),(t={},(0,a.Z)(t,"".concat(M,"-rtl"),"rtl"===Z),(0,a.Z)(t,"".concat(M,"-align-").concat(K),K),(0,a.Z)(t,"".concat(M,"-gap-row-").concat(V),W),(0,a.Z)(t,"".concat(M,"-gap-col-").concat(D),F),t),E,k),$=s()("".concat(M,"-item"),null!==(o=null===z||void 0===z?void 0:z.item)&&void 0!==o?o:null===(m=null===y||void 0===y?void 0:y.classNames)||void 0===m?void 0:m.item),ee=0,ne=J.map((function(e,n){var t,a;null!==e&&void 0!==e&&(ee=n);var c=e&&e.key||"".concat($,"-").concat(n);return i.createElement(h,{className:$,key:c,index:n,split:U,style:null!==(t=null===L||void 0===L?void 0:L.item)&&void 0!==t?t:null===(a=null===y||void 0===y?void 0:y.styles)||void 0===a?void 0:a.item},e)})),te=i.useMemo((function(){return{latestIndex:ee}}),[ee]);if(0===J.length)return null;var ae={};return A&&(ae.flexWrap="wrap"),!F&&H&&(ae.columnGap=D),!W&&G&&(ae.rowGap=V),Q(i.createElement("div",Object.assign({ref:n,className:Y,style:Object.assign(Object.assign(Object.assign({},ae),null===y||void 0===y?void 0:y.style),O)},B),i.createElement(p,{value:te},ne)))}));var y=j;y.Compact=m.ZP;var Z=y}}]);
//# sourceMappingURL=961.e706036c.chunk.js.map