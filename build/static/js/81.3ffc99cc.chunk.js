(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[81],{107:function(e,t,a){"use strict";var n=a(0);t.a=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),c=a(107);function r(e){var t=Object(c.a)(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},109:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(44),c=a.n(n),r=/-(.)/g;var s=a(0),o=a(45),i=a(2);const u=e=>{return e[0].toUpperCase()+(t=e,t.replace(r,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function l(e){let{displayName:t=u(e),Component:a,defaultProps:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=s.forwardRef(((t,n)=>{let{className:r,bsPrefix:s,as:u=a||"div",...l}=t;const f=Object(o.a)(s,e);return Object(i.jsx)(u,{ref:n,className:c()(r,f),...l})}));return r.defaultProps=n,r.displayName=t,r}},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),c=a(108);function r(e,t,a,r){void 0===r&&(r=!1);var s=Object(c.a)(a);Object(n.useEffect)((function(){var a="function"===typeof e?e():e;return a.addEventListener(t,s,r),function(){return a.removeEventListener(t,s,r)}}),[e])}},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0);function c(){var e=Object(n.useRef)(!0),t=Object(n.useRef)((function(){return e.current}));return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0);function c(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}},113:function(e,t,a){"use strict";var n=a(0),c=(a(115),a(107),a(108));a(110),a(118);a(111),a(112);a(126),new WeakMap;var r=a(116),s=a(2);const o=["onKeyDown"];const i=n.forwardRef(((e,t)=>{let{onKeyDown:a}=e,n=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,o);const[i]=Object(r.b)(Object.assign({tagName:"a"},n)),u=Object(c.a)((e=>{i.onKeyDown(e),null==a||a(e)}));return((l=n.href)&&"#"!==l.trim()||n.role)&&"button"!==n.role?Object(s.jsx)("a",Object.assign({ref:t},n,{onKeyDown:a})):Object(s.jsx)("a",Object.assign({ref:t},n,i,{onKeyDown:u}));var l}));i.displayName="Anchor";t.a=i},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0);function c(){return Object(n.useState)(null)}},116:function(e,t,a){"use strict";a.d(t,"b",(function(){return s}));var n=a(0),c=a(2);const r=["as","disabled"];function s(e){let{tagName:t,disabled:a,href:n,target:c,rel:r,onClick:s,tabIndex:o=0,type:i}=e;t||(t=null!=n||null!=c||null!=r?"a":"button");const u={tagName:t};if("button"===t)return[{type:i||"button",disabled:a},u];const l=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),a?e.stopPropagation():null==s||s(e)};return[{role:"button",disabled:void 0,tabIndex:a?void 0:o,href:"a"===t&&a?void 0:n,target:"a"===t?c:void 0,"aria-disabled":a||void 0,rel:"a"===t?r:void 0,onClick:l,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),l(e))}},u]}const o=n.forwardRef(((e,t)=>{let{as:a,disabled:n}=e,o=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,r);const[i,{tagName:u}]=s(Object.assign({tagName:a,disabled:n},o));return Object(c.jsx)(u,Object.assign({},o,i,{ref:t}))}));o.displayName="Button",t.a=o},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(110),c=a(0);function r(e,t,a){void 0===a&&(a=!1);var r=Object(c.useCallback)((function(){return document}),[]);return Object(n.a)(r,e,t,a)}},119:function(e,t,a){"use strict";var n=a(0),c=a(44),r=a.n(c),s=a(2);t.a=e=>n.forwardRef(((t,a)=>Object(s.jsx)("div",{...t,ref:a,className:r()(t.className,e)})))},120:function(e,t,a){"use strict";var n=a(0);const c=n.createContext(null);c.displayName="CardHeaderContext",t.a=c},126:function(e,t,a){"use strict";(function(e){var n=a(0),c="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,r="undefined"!==typeof document;t.a=r||c?n.useLayoutEffect:n.useEffect}).call(this,a(69))},128:function(e,t,a){"use strict";var n=a(44),c=a.n(n),r=a(0),s=a(45),o=a(2);const i=["xxl","xl","lg","md","sm","xs"],u=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,as:r="div",...u}=e;const l=Object(s.a)(a,"row"),f="".concat(l,"-cols"),d=[];return i.forEach((e=>{const t=u[e];let a;delete u[e],null!=t&&"object"===typeof t?({cols:a}=t):a=t;const n="xs"!==e?"-".concat(e):"";null!=a&&d.push("".concat(f).concat(n,"-").concat(a))})),Object(o.jsx)(r,{ref:t,...u,className:c()(n,l,...d)})}));u.displayName="Row",t.a=u},135:function(e,t,a){"use strict";var n=a(44),c=a.n(n),r=a(0),s=a(45),o=a(113),i=a(2);const u=r.forwardRef(((e,t)=>{let{bsPrefix:a,active:n,children:r,className:u,as:l="li",linkAs:f=o.a,linkProps:d,href:b,title:j,target:v,...m}=e;const p=Object(s.a)(a,"breadcrumb-item");return Object(i.jsx)(l,{ref:t,...m,className:c()(p,u,{active:n}),"aria-current":n?"page":void 0,children:n?r:Object(i.jsx)(f,{...d,href:b,title:j,target:v,children:r})})}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1,linkProps:{}};var l=u;const f=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,listProps:r,children:o,label:u,as:l="nav",...f}=e;const d=Object(s.a)(a,"breadcrumb");return Object(i.jsx)(l,{"aria-label":u,className:n,ref:t,...f,children:Object(i.jsx)("ol",{...r,className:c()(d,null==r?void 0:r.className),children:o})})}));f.displayName="Breadcrumb",f.defaultProps={label:"breadcrumb",listProps:{}};t.a=Object.assign(f,{Item:l})},137:function(e,t,a){"use strict";a.d(t,"b",(function(){return u}));var n=a(44),c=a.n(n),r=a(0),s=a(45),o=a(2);const i=["xxl","xl","lg","md","sm","xs"];function u(e){let{as:t,bsPrefix:a,className:n,...r}=e;a=Object(s.a)(a,"col");const o=[],u=[];return i.forEach((e=>{const t=r[e];let n,c,s;delete r[e],"object"===typeof t&&null!=t?({span:n,offset:c,order:s}=t):n=t;const i="xs"!==e?"-".concat(e):"";n&&o.push(!0===n?"".concat(a).concat(i):"".concat(a).concat(i,"-").concat(n)),null!=s&&u.push("order".concat(i,"-").concat(s)),null!=c&&u.push("offset".concat(i,"-").concat(c))})),[{...r,className:c()(n,...o,...u)},{as:t,bsPrefix:a,spans:o}]}const l=r.forwardRef(((e,t)=>{const[{className:a,...n},{as:r="div",bsPrefix:s,spans:i}]=u(e);return Object(o.jsx)(r,{...n,ref:t,className:c()(a,!i.length&&s)})}));l.displayName="Col",t.a=l},146:function(e,t,a){"use strict";var n=a(44),c=a.n(n),r=a(0),s=a(45),o=a(109),i=a(119),u=a(2);const l=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,variant:r,as:o="img",...i}=e;const l=Object(s.a)(a,"card-img");return Object(u.jsx)(o,{ref:t,className:c()(r?"".concat(l,"-").concat(r):l,n),...i})}));l.displayName="CardImg";var f=l,d=a(120);const b=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,as:o="div",...i}=e;const l=Object(s.a)(a,"card-header"),f=Object(r.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return Object(u.jsx)(d.a.Provider,{value:f,children:Object(u.jsx)(o,{ref:t,...i,className:c()(n,l)})})}));b.displayName="CardHeader";var j=b;const v=Object(i.a)("h5"),m=Object(i.a)("h6"),p=Object(o.a)("card-body"),O=Object(o.a)("card-title",{Component:v}),x=Object(o.a)("card-subtitle",{Component:m}),N=Object(o.a)("card-link",{Component:"a"}),y=Object(o.a)("card-text",{Component:"p"}),g=Object(o.a)("card-footer"),h=Object(o.a)("card-img-overlay"),P=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,bg:r,text:o,border:i,body:l,children:f,as:d="div",...b}=e;const j=Object(s.a)(a,"card");return Object(u.jsx)(d,{ref:t,...b,className:c()(n,j,r&&"bg-".concat(r),o&&"text-".concat(o),i&&"border-".concat(i)),children:l?Object(u.jsx)(p,{children:f}):f})}));P.displayName="Card",P.defaultProps={body:!1};t.a=Object.assign(P,{Img:f,Title:O,Subtitle:x,Body:p,Link:N,Text:y,Header:j,Footer:g,ImgOverlay:h})},174:function(e,t,a){"use strict";var n=a(44),c=a.n(n),r=a(0),s=a(116),o=a(45),i=a(2);const u=r.forwardRef(((e,t)=>{let{as:a,bsPrefix:n,variant:r,size:u,active:l,className:f,...d}=e;const b=Object(o.a)(n,"btn"),[j,{tagName:v}]=Object(s.b)({tagName:a,...d}),m=v;return Object(i.jsx)(m,{...d,...j,ref:t,className:c()(f,b,l&&"active",r&&"".concat(b,"-").concat(r),u&&"".concat(b,"-").concat(u),d.href&&d.disabled&&"disabled")})}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=u},487:function(e,t,a){"use strict";var n=a(44),c=a.n(n),r=a(0),s=a(45),o=a(2);const i=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,striped:r,bordered:i,borderless:u,hover:l,size:f,variant:d,responsive:b,...j}=e;const v=Object(s.a)(a,"table"),m=c()(n,v,d&&"".concat(v,"-").concat(d),f&&"".concat(v,"-").concat(f),r&&"".concat(v,"-striped"),i&&"".concat(v,"-bordered"),u&&"".concat(v,"-borderless"),l&&"".concat(v,"-hover")),p=Object(o.jsx)("table",{...j,className:m,ref:t});if(b){let e="".concat(v,"-responsive");return"string"===typeof b&&(e="".concat(e,"-").concat(b)),Object(o.jsx)("div",{className:e,children:p})}return p}));t.a=i}}]);
//# sourceMappingURL=81.3ffc99cc.chunk.js.map