(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[65],{107:function(e,t,a){"use strict";var l=a(0);t.a=function(e){var t=Object(l.useRef)(e);return Object(l.useEffect)((function(){t.current=e}),[e]),t}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var l=a(0),c=a(107);function n(e){var t=Object(c.a)(e);return Object(l.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},109:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var l=a(44),c=a.n(l),n=/-(.)/g;var r=a(0),s=a(45),i=a(2);const o=e=>{return e[0].toUpperCase()+(t=e,t.replace(n,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function b(e){let{displayName:t=o(e),Component:a,defaultProps:l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=r.forwardRef(((t,l)=>{let{className:n,bsPrefix:r,as:o=a||"div",...b}=t;const u=Object(s.a)(r,e);return Object(i.jsx)(o,{ref:l,className:c()(n,u),...b})}));return n.defaultProps=l,n.displayName=t,n}},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var l=a(0),c=a(108);function n(e,t,a,n){void 0===n&&(n=!1);var r=Object(c.a)(a);Object(l.useEffect)((function(){var a="function"===typeof e?e():e;return a.addEventListener(t,r,n),function(){return a.removeEventListener(t,r,n)}}),[e])}},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a(0);function c(){var e=Object(l.useRef)(!0),t=Object(l.useRef)((function(){return e.current}));return Object(l.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a(0);function c(e){var t=Object(l.useRef)(null);return Object(l.useEffect)((function(){t.current=e})),t.current}},113:function(e,t,a){"use strict";var l=a(0),c=(a(115),a(107),a(108));a(110),a(118);a(111),a(112);a(126),new WeakMap;var n=a(116),r=a(2);const s=["onKeyDown"];const i=l.forwardRef(((e,t)=>{let{onKeyDown:a}=e,l=function(e,t){if(null==e)return{};var a,l,c={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,s);const[i]=Object(n.b)(Object.assign({tagName:"a"},l)),o=Object(c.a)((e=>{i.onKeyDown(e),null==a||a(e)}));return((b=l.href)&&"#"!==b.trim()||l.role)&&"button"!==l.role?Object(r.jsx)("a",Object.assign({ref:t},l,{onKeyDown:a})):Object(r.jsx)("a",Object.assign({ref:t},l,i,{onKeyDown:o}));var b}));i.displayName="Anchor";t.a=i},1130:function(e,t,a){"use strict";a.r(t);a(0);var l=a(26),c=a(128),n=a(137),r=a(146),s=a(44),i=a.n(s),o=a(117);const b={label:"Minton Pages",icon:"ri-dashboard-line",isTitle:!0,children:[{label:"Dashboards",icon:"ri-dashboard-line",children:[{label:"Sales"},{label:"CRM"},{label:"Analytics"}]},{label:"Layouts",icon:"ri-layout-line"},{label:"Applications",icon:"fe-grid ",children:[{label:"Chat"},{label:"eCommerce",children:[{label:"Products List"},{label:"Products Grid"},{label:"Product Detail"},{label:"Create Product"},{label:"Orders"},{label:"Sellers"}]},{label:"Email",children:[{label:"Inbox"},{label:"Email Read"},{label:"Compose"}]},{label:"More Apps"}]},{label:"Sitemap",icon:"ri-pages-line"}]},u={label:"Minton",icon:"mdi mdi-adjust",isTitle:!0,level:0,children:[{label:"About",level:1,children:[{level:2,label:"Business"},{label:"Philosophy"},{label:"Staff"}]},{label:"Works",level:1,children:[{label:"2015",children:[{label:"Company"},{label:"Service"},{label:"Contest"}]},{label:"2014",children:[{label:"Company"},{label:"Service"},{label:"Contest"}]},{label:"2013",children:[{label:"Company"},{label:"Service"},{label:"Contest"}]}]},{label:"Contact",level:1},{label:"Sitemap",level:1},{label:"Recruit",level:1,children:[{label:"Web Director"},{label:"Web Designer"},{label:"Web Engineer"}]}]},d={label:"Minton",icon:"mdi mdi-adjust",isTitle:!0,children:[{label:"About",className:"text-primary text-uppercase",level:1,children:[{label:"Business",className:"text-primary"},{label:"Philosophy",className:"text-primary"},{label:"Staff",className:"text-primary"}]},{label:"Works",className:"text-success text-uppercase",level:1,children:[{label:"2015",className:"text-success",children:[{label:"Company"},{label:"Service"},{label:"Contest"}]},{label:"2014",className:"text-success",children:[{label:"Company"},{label:"Service"},{label:"Contest"}]},{label:"2013",className:"text-success",children:[{label:"Company"},{label:"Service"},{label:"Contest"}]}]},{label:"Contact",className:"text-danger text-uppercase",level:1},{label:"Sitemap",className:"text-info text-uppercase",level:1},{label:"Recruit",className:"text-warning text-uppercase",level:1,children:[{label:"Web Director",className:"text-warning"},{label:"Web Designer",className:"text-warning"},{label:"Web Engineer",className:"text-warning"}]}]};var j=a(637),f=a(2);const m=e=>{let{label:t}=e;return Object(f.jsxs)(l.b,{to:"#",className:"text-uppercase fw-bold",children:[Object(f.jsx)("img",{src:j.a,alt:"",height:"12",className:"me-1"})," ",t]})},p=e=>{let{item:t}=e;return Object(f.jsx)("ul",{children:(t.children||[]).map(((e,t)=>Object(f.jsx)(x,{item:e},t)))})},x=e=>{let{item:t}=e;const{children:a,level:c}=t,n=t&&a&&a.length;return Object(f.jsxs)("li",{children:[Object(f.jsxs)(l.b,{to:"#",className:i()(t.className),children:[t.icon&&Object(f.jsx)("i",{className:i()(t.icon,"me-1")}),1===c?Object(f.jsx)("b",{children:t.label}):t.label]}),n&&Object(f.jsx)(p,{item:t})]})};t.default=()=>Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.a,{breadCrumbItems:[{label:"Extra Pages",path:"/pages/sitemap"},{label:"Sitemap",path:"/pages/sitemap",active:!0}],title:"Sitemap"}),Object(f.jsx)(c.a,{children:Object(f.jsx)(n.a,{children:Object(f.jsx)(r.a,{children:Object(f.jsx)(r.a.Body,{children:Object(f.jsxs)(c.a,{children:[Object(f.jsx)(n.a,{lg:4,children:Object(f.jsx)("ul",{className:"sitemap",children:Object(f.jsxs)("li",{children:[Object(f.jsx)(m,{label:b.label}),Object(f.jsx)(p,{item:b})]})})}),Object(f.jsx)(n.a,{lg:4,children:Object(f.jsx)("ul",{className:"sitemap",children:Object(f.jsxs)("li",{children:[Object(f.jsx)(m,{label:u.label}),Object(f.jsx)(p,{item:u})]})})}),Object(f.jsx)(n.a,{lg:4,children:Object(f.jsx)("ul",{className:"sitemap",children:Object(f.jsxs)("li",{children:[Object(f.jsx)(m,{label:d.label}),Object(f.jsx)(p,{item:d})]})})})]})})})})})]})},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a(0);function c(){return Object(l.useState)(null)}},116:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var l=a(0),c=a(2);const n=["as","disabled"];function r(e){let{tagName:t,disabled:a,href:l,target:c,rel:n,onClick:r,tabIndex:s=0,type:i}=e;t||(t=null!=l||null!=c||null!=n?"a":"button");const o={tagName:t};if("button"===t)return[{type:i||"button",disabled:a},o];const b=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(l))&&e.preventDefault(),a?e.stopPropagation():null==r||r(e)};return[{role:"button",disabled:void 0,tabIndex:a?void 0:s,href:"a"===t&&a?void 0:l,target:"a"===t?c:void 0,"aria-disabled":a||void 0,rel:"a"===t?n:void 0,onClick:b,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),b(e))}},o]}const s=l.forwardRef(((e,t)=>{let{as:a,disabled:l}=e,s=function(e,t){if(null==e)return{};var a,l,c={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,n);const[i,{tagName:o}]=r(Object.assign({tagName:a,disabled:l},s));return Object(c.jsx)(o,Object.assign({},s,i,{ref:t}))}));s.displayName="Button",t.a=s},117:function(e,t,a){"use strict";a(0);var l=a(128),c=a(137),n=a(135),r=a(44),s=a.n(r),i=a(23),o=a(14),b=a(2);t.a=e=>{const{appSelector:t}=Object(i.b)(),{layoutType:a}=t((e=>({layoutType:e.Layout.layoutType})));return Object(b.jsx)(l.a,{children:Object(b.jsx)(c.a,{xs:12,children:Object(b.jsxs)("div",{className:s()("page-title-box",{"page-title-box-alt":a===o.a.LAYOUT_HORIZONTAL||a===o.a.LAYOUT_DETACHED}),children:[Object(b.jsx)("h4",{className:"page-title",children:e.title}),Object(b.jsx)("div",{className:"page-title-right",children:Object(b.jsxs)(n.a,{listProps:{className:"m-0"},children:[Object(b.jsx)(n.a.Item,{href:"/",children:"Minton"}),(e.breadCrumbItems||[]).map(((e,t)=>e.active?Object(b.jsx)(n.a.Item,{active:!0,children:e.label},t):Object(b.jsx)(n.a.Item,{href:e.path,children:e.label},t)))]})})]})})})}},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var l=a(110),c=a(0);function n(e,t,a){void 0===a&&(a=!1);var n=Object(c.useCallback)((function(){return document}),[]);return Object(l.a)(n,e,t,a)}},119:function(e,t,a){"use strict";var l=a(0),c=a(44),n=a.n(c),r=a(2);t.a=e=>l.forwardRef(((t,a)=>Object(r.jsx)("div",{...t,ref:a,className:n()(t.className,e)})))},120:function(e,t,a){"use strict";var l=a(0);const c=l.createContext(null);c.displayName="CardHeaderContext",t.a=c},126:function(e,t,a){"use strict";(function(e){var l=a(0),c="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,n="undefined"!==typeof document;t.a=n||c?l.useLayoutEffect:l.useEffect}).call(this,a(69))},128:function(e,t,a){"use strict";var l=a(44),c=a.n(l),n=a(0),r=a(45),s=a(2);const i=["xxl","xl","lg","md","sm","xs"],o=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:l,as:n="div",...o}=e;const b=Object(r.a)(a,"row"),u="".concat(b,"-cols"),d=[];return i.forEach((e=>{const t=o[e];let a;delete o[e],null!=t&&"object"===typeof t?({cols:a}=t):a=t;const l="xs"!==e?"-".concat(e):"";null!=a&&d.push("".concat(u).concat(l,"-").concat(a))})),Object(s.jsx)(n,{ref:t,...o,className:c()(l,b,...d)})}));o.displayName="Row",t.a=o},135:function(e,t,a){"use strict";var l=a(44),c=a.n(l),n=a(0),r=a(45),s=a(113),i=a(2);const o=n.forwardRef(((e,t)=>{let{bsPrefix:a,active:l,children:n,className:o,as:b="li",linkAs:u=s.a,linkProps:d,href:j,title:f,target:m,...p}=e;const x=Object(r.a)(a,"breadcrumb-item");return Object(i.jsx)(b,{ref:t,...p,className:c()(x,o,{active:l}),"aria-current":l?"page":void 0,children:l?n:Object(i.jsx)(u,{...d,href:j,title:f,target:m,children:n})})}));o.displayName="BreadcrumbItem",o.defaultProps={active:!1,linkProps:{}};var b=o;const u=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:l,listProps:n,children:s,label:o,as:b="nav",...u}=e;const d=Object(r.a)(a,"breadcrumb");return Object(i.jsx)(b,{"aria-label":o,className:l,ref:t,...u,children:Object(i.jsx)("ol",{...n,className:c()(d,null==n?void 0:n.className),children:s})})}));u.displayName="Breadcrumb",u.defaultProps={label:"breadcrumb",listProps:{}};t.a=Object.assign(u,{Item:b})},137:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var l=a(44),c=a.n(l),n=a(0),r=a(45),s=a(2);const i=["xxl","xl","lg","md","sm","xs"];function o(e){let{as:t,bsPrefix:a,className:l,...n}=e;a=Object(r.a)(a,"col");const s=[],o=[];return i.forEach((e=>{const t=n[e];let l,c,r;delete n[e],"object"===typeof t&&null!=t?({span:l,offset:c,order:r}=t):l=t;const i="xs"!==e?"-".concat(e):"";l&&s.push(!0===l?"".concat(a).concat(i):"".concat(a).concat(i,"-").concat(l)),null!=r&&o.push("order".concat(i,"-").concat(r)),null!=c&&o.push("offset".concat(i,"-").concat(c))})),[{...n,className:c()(l,...s,...o)},{as:t,bsPrefix:a,spans:s}]}const b=n.forwardRef(((e,t)=>{const[{className:a,...l},{as:n="div",bsPrefix:r,spans:i}]=o(e);return Object(s.jsx)(n,{...l,ref:t,className:c()(a,!i.length&&r)})}));b.displayName="Col",t.a=b},146:function(e,t,a){"use strict";var l=a(44),c=a.n(l),n=a(0),r=a(45),s=a(109),i=a(119),o=a(2);const b=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:l,variant:n,as:s="img",...i}=e;const b=Object(r.a)(a,"card-img");return Object(o.jsx)(s,{ref:t,className:c()(n?"".concat(b,"-").concat(n):b,l),...i})}));b.displayName="CardImg";var u=b,d=a(120);const j=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:l,as:s="div",...i}=e;const b=Object(r.a)(a,"card-header"),u=Object(n.useMemo)((()=>({cardHeaderBsPrefix:b})),[b]);return Object(o.jsx)(d.a.Provider,{value:u,children:Object(o.jsx)(s,{ref:t,...i,className:c()(l,b)})})}));j.displayName="CardHeader";var f=j;const m=Object(i.a)("h5"),p=Object(i.a)("h6"),x=Object(s.a)("card-body"),O=Object(s.a)("card-title",{Component:m}),h=Object(s.a)("card-subtitle",{Component:p}),v=Object(s.a)("card-link",{Component:"a"}),N=Object(s.a)("card-text",{Component:"p"}),g=Object(s.a)("card-footer"),y=Object(s.a)("card-img-overlay"),C=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:l,bg:n,text:s,border:i,body:b,children:u,as:d="div",...j}=e;const f=Object(r.a)(a,"card");return Object(o.jsx)(d,{ref:t,...j,className:c()(l,f,n&&"bg-".concat(n),s&&"text-".concat(s),i&&"border-".concat(i)),children:b?Object(o.jsx)(x,{children:u}):u})}));C.displayName="Card",C.defaultProps={body:!1};t.a=Object.assign(C,{Img:u,Title:O,Subtitle:h,Body:x,Link:v,Text:N,Header:f,Footer:g,ImgOverlay:y})},637:function(e,t,a){"use strict";t.a=a.p+"static/media/logo-sm-dark.3acb5468.png"}}]);
//# sourceMappingURL=65.252d2b1a.chunk.js.map