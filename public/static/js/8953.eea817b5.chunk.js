"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[8953],{9426:function(t,e,n){var a=(0,n(2791).createContext)({});e.Z=a},9752:function(t,e,n){var a=n(4942),c=n(9439),o=n(2791),r=n(1694),i=n.n(r),s=n(1929),l=n(9426),u=n(8554),d=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n};var g=["xs","sm","md","lg","xl","xxl"],f=o.forwardRef((function(t,e){var n,r=o.useContext(s.E_),f=r.getPrefixCls,p=r.direction,m=o.useContext(l.Z),v=m.gutter,b=m.wrap,h=t.prefixCls,Z=t.span,C=t.order,y=t.offset,x=t.push,j=t.pull,O=t.className,k=t.children,w=t.flex,E=t.style,N=d(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=f("col",h),M=(0,u.c)(S),R=(0,c.Z)(M,2),H=R[0],I=R[1],z={};g.forEach((function(e){var n,c={},o=t[e];"number"===typeof o?c.span=o:"object"===typeof o&&(c=o||{}),delete N[e],z=Object.assign(Object.assign({},z),(n={},(0,a.Z)(n,"".concat(S,"-").concat(e,"-").concat(c.span),void 0!==c.span),(0,a.Z)(n,"".concat(S,"-").concat(e,"-order-").concat(c.order),c.order||0===c.order),(0,a.Z)(n,"".concat(S,"-").concat(e,"-offset-").concat(c.offset),c.offset||0===c.offset),(0,a.Z)(n,"".concat(S,"-").concat(e,"-push-").concat(c.push),c.push||0===c.push),(0,a.Z)(n,"".concat(S,"-").concat(e,"-pull-").concat(c.pull),c.pull||0===c.pull),(0,a.Z)(n,"".concat(S,"-").concat(e,"-flex-").concat(c.flex),c.flex||"auto"===c.flex),(0,a.Z)(n,"".concat(S,"-rtl"),"rtl"===p),n))}));var A=i()(S,(n={},(0,a.Z)(n,"".concat(S,"-").concat(Z),void 0!==Z),(0,a.Z)(n,"".concat(S,"-order-").concat(C),C),(0,a.Z)(n,"".concat(S,"-offset-").concat(y),y),(0,a.Z)(n,"".concat(S,"-push-").concat(x),x),(0,a.Z)(n,"".concat(S,"-pull-").concat(j),j),n),O,z,I),P={};if(v&&v[0]>0){var L=v[0]/2;P.paddingLeft=L,P.paddingRight=L}return w&&(P.flex=function(t){return"number"===typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(w),!1!==b||P.minWidth||(P.minWidth=0)),H(o.createElement("div",Object.assign({},N,{style:Object.assign(Object.assign({},P),E),className:A,ref:e}),k))}));e.Z=f},7545:function(t,e,n){var a=n(4942),c=n(9439),o=n(2791),r=n(1694),i=n.n(r),s=n(635),l=n(1929),u=n(9426),d=n(8554),g=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n};function f(t,e){var n=o.useState("string"===typeof t?t:""),a=(0,c.Z)(n,2),r=a[0],i=a[1];return o.useEffect((function(){!function(){if("string"===typeof t&&i(t),"object"===typeof t)for(var n=0;n<s.c4.length;n++){var a=s.c4[n];if(e[a]){var c=t[a];if(void 0!==c)return void i(c)}}}()}),[JSON.stringify(t),e]),r}var p=o.forwardRef((function(t,e){var n,r=t.prefixCls,p=t.justify,m=t.align,v=t.className,b=t.style,h=t.children,Z=t.gutter,C=void 0===Z?0:Z,y=t.wrap,x=g(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),j=o.useContext(l.E_),O=j.getPrefixCls,k=j.direction,w=o.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),E=(0,c.Z)(w,2),N=E[0],S=E[1],M=o.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),R=(0,c.Z)(M,2),H=R[0],I=R[1],z=f(m,H),A=f(p,H),P=o.useRef(C),L=(0,s.ZP)();o.useEffect((function(){var t=L.subscribe((function(t){I(t);var e=P.current||0;(!Array.isArray(e)&&"object"===typeof e||Array.isArray(e)&&("object"===typeof e[0]||"object"===typeof e[1]))&&S(t)}));return function(){return L.unsubscribe(t)}}),[]);var B=O("row",r),F=(0,d.V)(B),q=(0,c.Z)(F,2),G=q[0],T=q[1],W=function(){var t=[void 0,void 0];return(Array.isArray(C)?C:[C,void 0]).forEach((function(e,n){if("object"===typeof e)for(var a=0;a<s.c4.length;a++){var c=s.c4[a];if(N[c]&&void 0!==e[c]){t[n]=e[c];break}}else t[n]=e})),t}(),_=i()(B,(n={},(0,a.Z)(n,"".concat(B,"-no-wrap"),!1===y),(0,a.Z)(n,"".concat(B,"-").concat(A),A),(0,a.Z)(n,"".concat(B,"-").concat(z),z),(0,a.Z)(n,"".concat(B,"-rtl"),"rtl"===k),n),v,T),X={},D=null!=W[0]&&W[0]>0?W[0]/-2:void 0;D&&(X.marginLeft=D,X.marginRight=D);var V=(0,c.Z)(W,2);X.rowGap=V[1];var J=(0,c.Z)(W,2),$=J[0],K=J[1],Q=o.useMemo((function(){return{gutter:[$,K],wrap:y}}),[$,K,y]);return G(o.createElement(u.Z.Provider,{value:Q},o.createElement("div",Object.assign({},x,{className:_,style:Object.assign(Object.assign({},X),b),ref:e}),h)))}));e.Z=p},8554:function(t,e,n){n.d(e,{V:function(){return l},c:function(){return u}});var a=n(4942),c=n(5564),o=n(9922),r=function(t){var e=t.componentCls;return(0,a.Z)({},e,{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}})},i=function(t){var e=t.componentCls;return(0,a.Z)({},e,{position:"relative",maxWidth:"100%",minHeight:1})},s=function(t,e){return function(t,e){for(var n=t.componentCls,c=t.gridColumns,o={},r=c;r>=0;r--){var i;0===r?(o["".concat(n).concat(e,"-").concat(r)]={display:"none"},o["".concat(n,"-push-").concat(r)]={insetInlineStart:"auto"},o["".concat(n,"-pull-").concat(r)]={insetInlineEnd:"auto"},o["".concat(n).concat(e,"-push-").concat(r)]={insetInlineStart:"auto"},o["".concat(n).concat(e,"-pull-").concat(r)]={insetInlineEnd:"auto"},o["".concat(n).concat(e,"-offset-").concat(r)]={marginInlineStart:0},o["".concat(n).concat(e,"-order-").concat(r)]={order:0}):(o["".concat(n).concat(e,"-").concat(r)]=[(i={},(0,a.Z)(i,"--ant-display","block"),(0,a.Z)(i,"display","block"),i),{display:"var(--ant-display)",flex:"0 0 ".concat(r/c*100,"%"),maxWidth:"".concat(r/c*100,"%")}],o["".concat(n).concat(e,"-push-").concat(r)]={insetInlineStart:"".concat(r/c*100,"%")},o["".concat(n).concat(e,"-pull-").concat(r)]={insetInlineEnd:"".concat(r/c*100,"%")},o["".concat(n).concat(e,"-offset-").concat(r)]={marginInlineStart:"".concat(r/c*100,"%")},o["".concat(n).concat(e,"-order-").concat(r)]={order:r})}return o}(t,e)},l=(0,c.Z)("Grid",(function(t){return[r(t)]})),u=(0,c.Z)("Grid",(function(t){var e=(0,o.TS)(t,{gridColumns:24}),n={"-sm":e.screenSMMin,"-md":e.screenMDMin,"-lg":e.screenLGMin,"-xl":e.screenXLMin,"-xxl":e.screenXXLMin};return[i(e),s(e,""),s(e,"-xs"),Object.keys(n).map((function(t){return function(t,e,n){return(0,a.Z)({},"@media (min-width: ".concat(e,"px)"),Object.assign({},s(t,n)))}(e,n[t],t)})).reduce((function(t,e){return Object.assign(Object.assign({},t),e)}),{})]}))},183:function(t,e,n){n.d(e,{Z:function(){return B}});var a=n(4942),c=n(9439),o=n(1694),r=n.n(o),i=n(2791),s=n(1929),l=n(1818),u=function(t){var e,n,c=t.prefixCls,o=t.className,s=t.style,l=t.size,u=t.shape,d=r()((e={},(0,a.Z)(e,"".concat(c,"-lg"),"large"===l),(0,a.Z)(e,"".concat(c,"-sm"),"small"===l),e)),g=r()((n={},(0,a.Z)(n,"".concat(c,"-circle"),"circle"===u),(0,a.Z)(n,"".concat(c,"-square"),"square"===u),(0,a.Z)(n,"".concat(c,"-round"),"round"===u),n)),f=i.useMemo((function(){return"number"===typeof l?{width:l,height:l,lineHeight:"".concat(l,"px")}:{}}),[l]);return i.createElement("span",{className:r()(c,d,g,o),style:Object.assign(Object.assign({},f),s)})},d=n(2666),g=n(5564),f=n(9922),p=new d.E4("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),m=function(t){return{height:t,lineHeight:"".concat(t,"px")}},v=function(t){return Object.assign({width:t},m(t))},b=function(t){return Object.assign({width:5*t,minWidth:5*t},m(t))},h=function(t){return Object.assign({width:t},m(t))},Z=function(t,e,n){var c,o=t.skeletonButtonCls;return c={},(0,a.Z)(c,"".concat(n).concat(o,"-circle"),{width:e,minWidth:e,borderRadius:"50%"}),(0,a.Z)(c,"".concat(n).concat(o,"-round"),{borderRadius:e}),c},C=function(t){return Object.assign({width:2*t,minWidth:2*t},m(t))},y=function(t){var e,n,c,o,r,i=t.componentCls,s=t.skeletonAvatarCls,l=t.skeletonTitleCls,u=t.skeletonParagraphCls,d=t.skeletonButtonCls,g=t.skeletonInputCls,f=t.skeletonImageCls,m=t.controlHeight,y=t.controlHeightLG,x=t.controlHeightSM,j=t.gradientFromColor,O=t.padding,k=t.marginSM,w=t.borderRadius,E=t.titleHeight,N=t.blockRadius,S=t.paragraphLiHeight,M=t.controlHeightXS,R=t.paragraphMarginTop;return r={},(0,a.Z)(r,"".concat(i),(c={display:"table",width:"100%"},(0,a.Z)(c,"".concat(i,"-header"),(e={display:"table-cell",paddingInlineEnd:O,verticalAlign:"top"},(0,a.Z)(e,"".concat(s),Object.assign({display:"inline-block",verticalAlign:"top",background:j},v(m))),(0,a.Z)(e,"".concat(s,"-circle"),{borderRadius:"50%"}),(0,a.Z)(e,"".concat(s,"-lg"),Object.assign({},v(y))),(0,a.Z)(e,"".concat(s,"-sm"),Object.assign({},v(x))),e)),(0,a.Z)(c,"".concat(i,"-content"),(n={display:"table-cell",width:"100%",verticalAlign:"top"},(0,a.Z)(n,"".concat(l),(0,a.Z)({width:"100%",height:E,background:j,borderRadius:N},"+ ".concat(u),{marginBlockStart:x})),(0,a.Z)(n,"".concat(u),{padding:0,"> li":{width:"100%",height:S,listStyle:"none",background:j,borderRadius:N,"+ li":{marginBlockStart:M}}}),(0,a.Z)(n,"".concat(u,"> li:last-child:not(:first-child):not(:nth-child(2))"),{width:"61%"}),n)),(0,a.Z)(c,"&-round ".concat(i,"-content"),(0,a.Z)({},"".concat(l,", ").concat(u," > li"),{borderRadius:w})),c)),(0,a.Z)(r,"".concat(i,"-with-avatar ").concat(i,"-content"),(0,a.Z)({},"".concat(l),(0,a.Z)({marginBlockStart:k},"+ ".concat(u),{marginBlockStart:R}))),(0,a.Z)(r,"".concat(i).concat(i,"-element"),Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},function(t){var e=t.borderRadiusSM,n=t.skeletonButtonCls,c=t.controlHeight,o=t.controlHeightLG,r=t.controlHeightSM,i=t.gradientFromColor;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign((0,a.Z)({},"".concat(n),Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:e,width:2*c,minWidth:2*c},C(c))),Z(t,c,n)),(0,a.Z)({},"".concat(n,"-lg"),Object.assign({},C(o)))),Z(t,o,"".concat(n,"-lg"))),(0,a.Z)({},"".concat(n,"-sm"),Object.assign({},C(r)))),Z(t,r,"".concat(n,"-sm")))}(t)),function(t){var e,n=t.skeletonAvatarCls,c=t.gradientFromColor,o=t.controlHeight,r=t.controlHeightLG,i=t.controlHeightSM;return e={},(0,a.Z)(e,"".concat(n),Object.assign({display:"inline-block",verticalAlign:"top",background:c},v(o))),(0,a.Z)(e,"".concat(n).concat(n,"-circle"),{borderRadius:"50%"}),(0,a.Z)(e,"".concat(n).concat(n,"-lg"),Object.assign({},v(r))),(0,a.Z)(e,"".concat(n).concat(n,"-sm"),Object.assign({},v(i))),e}(t)),function(t){var e,n=t.controlHeight,c=t.borderRadiusSM,o=t.skeletonInputCls,r=t.controlHeightLG,i=t.controlHeightSM,s=t.gradientFromColor;return e={},(0,a.Z)(e,"".concat(o),Object.assign({display:"inline-block",verticalAlign:"top",background:s,borderRadius:c},b(n))),(0,a.Z)(e,"".concat(o,"-lg"),Object.assign({},b(r))),(0,a.Z)(e,"".concat(o,"-sm"),Object.assign({},b(i))),e}(t)),function(t){var e,n,c=t.skeletonImageCls,o=t.imageSizeBase,r=t.gradientFromColor,i=t.borderRadiusSM;return n={},(0,a.Z)(n,"".concat(c),Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:r,borderRadius:i},h(2*o)),(e={},(0,a.Z)(e,"".concat(c,"-path"),{fill:"#bfbfbf"}),(0,a.Z)(e,"".concat(c,"-svg"),Object.assign(Object.assign({},h(o)),{maxWidth:4*o,maxHeight:4*o})),(0,a.Z)(e,"".concat(c,"-svg").concat(c,"-svg-circle"),{borderRadius:"50%"}),e))),(0,a.Z)(n,"".concat(c).concat(c,"-circle"),{borderRadius:"50%"}),n}(t))),(0,a.Z)(r,"".concat(i).concat(i,"-block"),(o={width:"100%"},(0,a.Z)(o,"".concat(d),{width:"100%"}),(0,a.Z)(o,"".concat(g),{width:"100%"}),o)),(0,a.Z)(r,"".concat(i).concat(i,"-active"),(0,a.Z)({},"\n        ".concat(l,",\n        ").concat(u," > li,\n        ").concat(s,",\n        ").concat(d,",\n        ").concat(g,",\n        ").concat(f,"\n      "),Object.assign({},function(t){return{background:t.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:p,animationDuration:t.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}}(t)))),r},x=(0,g.Z)("Skeleton",(function(t){var e=t.componentCls,n=(0,f.TS)(t,{skeletonAvatarCls:"".concat(e,"-avatar"),skeletonTitleCls:"".concat(e,"-title"),skeletonParagraphCls:"".concat(e,"-paragraph"),skeletonButtonCls:"".concat(e,"-button"),skeletonInputCls:"".concat(e,"-input"),skeletonImageCls:"".concat(e,"-image"),imageSizeBase:1.5*t.controlHeight,borderRadius:100,skeletonLoadingBackground:"linear-gradient(90deg, ".concat(t.gradientFromColor," 25%, ").concat(t.gradientToColor," 37%, ").concat(t.gradientFromColor," 63%)"),skeletonLoadingMotionDuration:"1.4s"});return[y(n)]}),(function(t){var e=t.colorFillContent,n=t.colorFill;return{color:e,colorGradientEnd:n,gradientFromColor:e,gradientToColor:n,titleHeight:t.controlHeight/2,blockRadius:t.borderRadiusSM,paragraphMarginTop:t.marginLG+t.marginXXS,paragraphLiHeight:t.controlHeight/2}}),{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),j=function(t){var e=t.prefixCls,n=t.className,o=t.rootClassName,d=t.active,g=t.shape,f=void 0===g?"circle":g,p=t.size,m=void 0===p?"default":p,v=(0,i.useContext(s.E_).getPrefixCls)("skeleton",e),b=x(v),h=(0,c.Z)(b,2),Z=h[0],C=h[1],y=(0,l.Z)(t,["prefixCls","className"]),j=r()(v,"".concat(v,"-element"),(0,a.Z)({},"".concat(v,"-active"),d),n,o,C);return Z(i.createElement("div",{className:j},i.createElement(u,Object.assign({prefixCls:"".concat(v,"-avatar"),shape:f,size:m},y))))},O=function(t){var e,n=t.prefixCls,o=t.className,d=t.rootClassName,g=t.active,f=t.block,p=void 0!==f&&f,m=t.size,v=void 0===m?"default":m,b=(0,i.useContext(s.E_).getPrefixCls)("skeleton",n),h=x(b),Z=(0,c.Z)(h,2),C=Z[0],y=Z[1],j=(0,l.Z)(t,["prefixCls"]),O=r()(b,"".concat(b,"-element"),(e={},(0,a.Z)(e,"".concat(b,"-active"),g),(0,a.Z)(e,"".concat(b,"-block"),p),e),o,d,y);return C(i.createElement("div",{className:O},i.createElement(u,Object.assign({prefixCls:"".concat(b,"-button"),size:v},j))))},k=function(t){var e=t.prefixCls,n=t.className,o=t.rootClassName,l=t.style,u=t.active,d=(0,i.useContext(s.E_).getPrefixCls)("skeleton",e),g=x(d),f=(0,c.Z)(g,2),p=f[0],m=f[1],v=r()(d,"".concat(d,"-element"),(0,a.Z)({},"".concat(d,"-active"),u),n,o,m);return p(i.createElement("div",{className:v},i.createElement("div",{className:r()("".concat(d,"-image"),n),style:l},i.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(d,"-image-svg")},i.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(d,"-image-path")})))))},w=function(t){var e,n=t.prefixCls,o=t.className,d=t.rootClassName,g=t.active,f=t.block,p=t.size,m=void 0===p?"default":p,v=(0,i.useContext(s.E_).getPrefixCls)("skeleton",n),b=x(v),h=(0,c.Z)(b,2),Z=h[0],C=h[1],y=(0,l.Z)(t,["prefixCls"]),j=r()(v,"".concat(v,"-element"),(e={},(0,a.Z)(e,"".concat(v,"-active"),g),(0,a.Z)(e,"".concat(v,"-block"),f),e),o,d,C);return Z(i.createElement("div",{className:j},i.createElement(u,Object.assign({prefixCls:"".concat(v,"-input"),size:m},y))))},E=n(7462),N={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},S=n(4291),M=function(t,e){return i.createElement(S.Z,(0,E.Z)({},t,{ref:e,icon:N}))};var R=i.forwardRef(M),H=function(t){var e=t.prefixCls,n=t.className,o=t.rootClassName,l=t.style,u=t.active,d=t.children,g=(0,i.useContext(s.E_).getPrefixCls)("skeleton",e),f=x(g),p=(0,c.Z)(f,2),m=p[0],v=p[1],b=r()(g,"".concat(g,"-element"),(0,a.Z)({},"".concat(g,"-active"),u),v,n,o),h=null!==d&&void 0!==d?d:i.createElement(R,null);return m(i.createElement("div",{className:b},i.createElement("div",{className:r()("".concat(g,"-image"),n),style:l},h)))},I=n(3433),z=function(t){var e=function(e){var n=t.width,a=t.rows,c=void 0===a?2:a;return Array.isArray(n)?n[e]:c-1===e?n:void 0},n=t.prefixCls,a=t.className,c=t.style,o=t.rows,s=(0,I.Z)(Array(o)).map((function(t,n){return i.createElement("li",{key:n,style:{width:e(n)}})}));return i.createElement("ul",{className:r()(n,a),style:c},s)},A=function(t){var e=t.prefixCls,n=t.className,a=t.width,c=t.style;return i.createElement("h3",{className:r()(e,n),style:Object.assign({width:a},c)})};function P(t){return t&&"object"===typeof t?t:{}}var L=function(t){var e=t.prefixCls,n=t.loading,o=t.className,l=t.rootClassName,d=t.style,g=t.children,f=t.avatar,p=void 0!==f&&f,m=t.title,v=void 0===m||m,b=t.paragraph,h=void 0===b||b,Z=t.active,C=t.round,y=i.useContext(s.E_),j=y.getPrefixCls,O=y.direction,k=y.skeleton,w=j("skeleton",e),E=x(w),N=(0,c.Z)(E,2),S=N[0],M=N[1];if(n||!("loading"in t)){var R,H,I,L=!!p,B=!!v,F=!!h;if(L){var q=Object.assign(Object.assign({prefixCls:"".concat(w,"-avatar")},function(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(B,F)),P(p));H=i.createElement("div",{className:"".concat(w,"-header")},i.createElement(u,Object.assign({},q)))}if(B||F){var G,T;if(B){var W=Object.assign(Object.assign({prefixCls:"".concat(w,"-title")},function(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}(L,F)),P(v));G=i.createElement(A,Object.assign({},W))}if(F){var _=Object.assign(Object.assign({prefixCls:"".concat(w,"-paragraph")},function(t,e){var n={};return t&&e||(n.width="61%"),n.rows=!t&&e?3:2,n}(L,B)),P(h));T=i.createElement(z,Object.assign({},_))}I=i.createElement("div",{className:"".concat(w,"-content")},G,T)}var X=r()(w,(R={},(0,a.Z)(R,"".concat(w,"-with-avatar"),L),(0,a.Z)(R,"".concat(w,"-active"),Z),(0,a.Z)(R,"".concat(w,"-rtl"),"rtl"===O),(0,a.Z)(R,"".concat(w,"-round"),C),R),null===k||void 0===k?void 0:k.className,o,l,M);return S(i.createElement("div",{className:X,style:Object.assign(Object.assign({},null===k||void 0===k?void 0:k.style),d)},H,I))}return"undefined"!==typeof g?g:null};L.Button=O,L.Avatar=j,L.Input=w,L.Image=k,L.Node=H;var B=L}}]);
//# sourceMappingURL=8953.eea817b5.chunk.js.map