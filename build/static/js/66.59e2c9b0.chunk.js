(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[66],{107:function(e,t,c){"use strict";var s=c(0);t.a=function(e){var t=Object(s.useRef)(e);return Object(s.useEffect)((function(){t.current=e}),[e]),t}},108:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var s=c(0),r=c(107);function a(e){var t=Object(r.a)(e);return Object(s.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},109:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var s=c(44),r=c.n(s),a=/-(.)/g;var n=c(0),j=c(45),l=c(2);const d=e=>{return e[0].toUpperCase()+(t=e,t.replace(a,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function i(e){let{displayName:t=d(e),Component:c,defaultProps:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=n.forwardRef(((t,s)=>{let{className:a,bsPrefix:n,as:d=c||"div",...i}=t;const b=Object(j.a)(n,e);return Object(l.jsx)(d,{ref:s,className:r()(a,b),...i})}));return a.defaultProps=s,a.displayName=t,a}},1091:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),a=c(146),n=c(487),j=c(128),l=c(137),d=c(117),i=c(2);const b=[{id:1,firstName:"Mark",lastName:"Otto",userName:"@mdo"},{id:2,firstName:"Jacob",lastName:"Thornton",userName:"@fat"},{id:3,firstName:"Larry",lastName:"the Bird",userName:"@twitter"}],h=()=>Object(i.jsx)(a.a,{children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Basic example"}),Object(i.jsxs)("p",{className:"sub-header",children:["Just use ",Object(i.jsx)("code",{children:"Table"})," element"]}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)(n.a,{className:"mb-0",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"Username"})]})}),Object(i.jsx)("tbody",{children:(b||[]).map(((e,t)=>Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:e.id}),Object(i.jsx)("td",{children:e.firstName}),Object(i.jsx)("td",{children:e.lastName}),Object(i.jsx)("td",{children:e.userName})]},t)))})]})})]})}),o=()=>Object(i.jsx)(a.a,{children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Inverse Table"}),Object(i.jsxs)("p",{className:"sub-header",children:["You can also invert the colors\u2014with light text on dark backgrounds\u2014by specifying ",Object(i.jsx)("code",{children:"dark"})," ","attribute"]}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)(n.a,{className:"mb-0",variant:"dark",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"Username"})]})}),Object(i.jsx)("tbody",{children:(b||[]).map(((e,t)=>Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:e.id}),Object(i.jsx)("td",{children:e.firstName}),Object(i.jsx)("td",{children:e.lastName}),Object(i.jsx)("td",{children:e.userName})]},t)))})]})})]})}),O=e=>{let{variant:t}=e;const c="light"===t?"table-light":"table-dark";return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(a.a,{children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Table head options"}),Object(i.jsxs)("p",{className:"sub-header",children:["Use one of two modifier classes to make ",Object(i.jsx)("code",{children:"<thead>"}),"s appear light or dark gray."]}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)(n.a,{className:"mb-0",children:[Object(i.jsx)("thead",{className:c,children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"Username"})]})}),Object(i.jsx)("tbody",{children:(b||[]).map(((e,t)=>Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:e.id}),Object(i.jsx)("td",{children:e.firstName}),Object(i.jsx)("td",{children:e.lastName}),Object(i.jsx)("td",{children:e.userName})]},t)))})]})})]})})})},x=()=>Object(i.jsx)(a.a,{children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Striped Rows"}),Object(i.jsxs)("p",{className:"sub-header",children:["Add ",Object(i.jsx)("code",{children:"striped"})," attribute to table"]}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)(n.a,{className:"mb-0",striped:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"Username"})]})}),Object(i.jsx)("tbody",{children:(b||[]).map(((e,t)=>Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:e.id}),Object(i.jsx)("td",{children:e.firstName}),Object(i.jsx)("td",{children:e.lastName}),Object(i.jsx)("td",{children:e.userName})]},t)))})]})})]})}),m=()=>Object(i.jsx)(a.a,{children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Bordered table"}),Object(i.jsxs)("p",{className:"sub-header",children:["Add ",Object(i.jsx)("code",{children:"bordered"})," attribute for borders on all sides of the table and cells."]}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)(n.a,{className:"mb-0",bordered:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"Username"})]})}),Object(i.jsx)("tbody",{children:(b||[]).map(((e,t)=>Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:e.id}),Object(i.jsx)("td",{children:e.firstName}),Object(i.jsx)("td",{children:e.lastName}),Object(i.jsx)("td",{children:e.userName})]},t)))})]})})]})}),u=()=>{const e=[...b,...b,...b];return Object(i.jsx)(a.a,{children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Small table"}),Object(i.jsxs)("p",{className:"sub-header",children:["Add ",Object(i.jsx)("code",{children:'size="sm"'})," attribute to make tables more compact by cutting cell padding in half"]}),Object(i.jsxs)(n.a,{className:"mb-0",size:"sm",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"Username"})]})}),Object(i.jsx)("tbody",{children:(e||[]).map(((e,t)=>Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:t+1}),Object(i.jsx)("td",{children:e.firstName}),Object(i.jsx)("td",{children:e.lastName}),Object(i.jsx)("td",{children:e.userName})]},t)))})]})]})})},f=()=>Object(i.jsx)(a.a,{children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Contextual classes"}),Object(i.jsx)("p",{className:"sub-header",children:"Use contextual classes to color table rows or individual cells."}),Object(i.jsxs)(n.a,{className:"border-primary mb-0",bordered:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"Username"})]})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{className:"table-active",children:[Object(i.jsx)("th",{scope:"row",children:"1"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"2"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"})]}),Object(i.jsxs)("tr",{className:"table-success",children:[Object(i.jsx)("th",{scope:"row",children:"3"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"4"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"})]}),Object(i.jsxs)("tr",{className:"table-info",children:[Object(i.jsx)("th",{scope:"row",children:"5"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"6"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"})]}),Object(i.jsxs)("tr",{className:"table-warning",children:[Object(i.jsx)("th",{scope:"row",children:"7"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"8"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"})]}),Object(i.jsxs)("tr",{className:"table-danger",children:[Object(i.jsx)("th",{scope:"row",children:"9"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"}),Object(i.jsx)("td",{children:"Column content"})]})]})]})]})}),N=()=>Object(i.jsx)(a.a,{children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Hoverable Rows"}),Object(i.jsxs)("p",{className:"sub-header",children:["Add ",Object(i.jsx)("code",{children:"hover"})," attribute to enable a hover state on table rows"]}),Object(i.jsxs)(n.a,{className:"mb-0",hover:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"Username"})]})}),Object(i.jsx)("tbody",{children:(b||[]).map(((e,t)=>Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:e.id}),Object(i.jsx)("td",{children:e.firstName}),Object(i.jsx)("td",{children:e.lastName}),Object(i.jsx)("td",{children:e.userName})]},t)))})]})]})}),p=()=>Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(a.a,{children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Borderless table"}),Object(i.jsxs)("p",{className:"sub-header",children:["For basic styling\u2014light padding and only horizontal dividers\u2014add the base class"," ",Object(i.jsx)("code",{children:".table"})," to any ",Object(i.jsx)("code",{children:"<table>"}),"."]}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)(n.a,{className:"mb-0",borderless:!0,children:[Object(i.jsx)("thead",{className:"table-light",children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"Username"})]})}),Object(i.jsx)("tbody",{children:(b||[]).map(((e,t)=>Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:e.id}),Object(i.jsx)("td",{children:e.firstName}),Object(i.jsx)("td",{children:e.lastName}),Object(i.jsx)("td",{children:e.userName})]},t)))})]})})]})})}),v=()=>Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(a.a,{children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Borderless Inverse table"}),Object(i.jsx)("p",{className:"sub-header",children:" Your awesome text goes here.Your awesome text goes here."}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)(n.a,{className:"mb-0",variant:"dark",borderless:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"Username"})]})}),Object(i.jsx)("tbody",{children:(b||[]).map(((e,t)=>Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:e.id}),Object(i.jsx)("td",{children:e.firstName}),Object(i.jsx)("td",{children:e.lastName}),Object(i.jsx)("td",{children:e.userName})]},t)))})]})})]})})}),g=()=>Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(a.a,{children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Contextual classes with Background color"}),Object(i.jsxs)("p",{className:"sub-header",children:["You can also invert the colors\u2014with light text on dark backgrounds\u2014with"," ",Object(i.jsx)("code",{className:"highlighter-rouge",children:".table-dark"}),"."]}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)(n.a,{className:"mb-0",variant:"dark",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"Username"})]})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"bg-primary",scope:"row",children:"1"}),Object(i.jsx)("td",{className:"bg-primary",children:"Mark"}),Object(i.jsx)("td",{className:"bg-primary",children:"Otto"}),Object(i.jsx)("td",{className:"bg-primary",children:"@mdo"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"bg-success",scope:"row",children:"2"}),Object(i.jsx)("td",{className:"bg-success",children:"Jacob"}),Object(i.jsx)("td",{className:"bg-success",children:"Thornton"}),Object(i.jsx)("td",{className:"bg-success",children:"@fat"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"bg-pink",scope:"row",children:"3"}),Object(i.jsx)("td",{className:"bg-pink",children:"Larry"}),Object(i.jsx)("td",{className:"bg-pink",children:"the Bird"}),Object(i.jsx)("td",{className:"bg-pink",children:"@twitter"})]})]})]})})]})})}),y=()=>Object(i.jsx)(a.a,{children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Captions"}),Object(i.jsxs)("p",{className:"sub-header",children:["A ",Object(i.jsx)("code",{children:"<caption>"})," functions like a heading for a table. It helps users with screen readers to find a table and understand what it\u2019s about and decide if they want to read it."]}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)(n.a,{className:"mb-0",children:[Object(i.jsx)("caption",{children:"List of users"}),Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"First"}),Object(i.jsx)("th",{children:"Last"}),Object(i.jsx)("th",{children:"Handle"})]})}),Object(i.jsx)("tbody",{children:(b||[]).map(((e,t)=>Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:e.id}),Object(i.jsx)("td",{children:e.firstName}),Object(i.jsx)("td",{children:e.lastName}),Object(i.jsx)("td",{children:e.userName})]},t)))})]})})]})}),w=()=>Object(i.jsx)(a.a,{children:Object(i.jsxs)(a.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Nesting"}),Object(i.jsxs)("p",{className:"sub-header",children:[" ","Border styles, active styles, and table variants are not inherited by nested tables."]}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)(n.a,{className:"mb-0",striped:!0,bordered:!0,size:"sm",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"#"}),Object(i.jsx)("th",{scope:"col",children:"First"}),Object(i.jsx)("th",{scope:"col",children:"Last"}),Object(i.jsx)("th",{scope:"col",children:"Handle"})]})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"1"}),Object(i.jsx)("td",{children:"Mark"}),Object(i.jsx)("td",{children:"Otto"}),Object(i.jsx)("td",{children:"@mdo"})]}),Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:4,children:Object(i.jsxs)(n.a,{className:"mb-0",size:"sm",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"Header"}),Object(i.jsx)("th",{scope:"col",children:"Header"}),Object(i.jsx)("th",{scope:"col",children:"Header"})]})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"A"}),Object(i.jsx)("td",{children:"First"}),Object(i.jsx)("td",{children:"Last"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"B"}),Object(i.jsx)("td",{children:"First"}),Object(i.jsx)("td",{children:"Last"})]})]})]})})}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"3"}),Object(i.jsx)("td",{children:"Jacob"}),Object(i.jsx)("td",{children:"Thornton"}),Object(i.jsx)("td",{children:"@fat"})]})]})]})})]})});t.default=()=>Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(d.a,{breadCrumbItems:[{label:"Tables",path:"/ui/tables/basic"},{label:"Basic Tables",path:"/ui/tables/basic",active:!0}],title:"Basic Tables"}),Object(i.jsxs)(j.a,{children:[Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(h,{})}),Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(o,{})})]}),Object(i.jsxs)(j.a,{children:[Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(O,{variant:"light"})}),Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(x,{})})]}),Object(i.jsxs)(j.a,{children:[Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(m,{})}),Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(N,{})})]}),Object(i.jsxs)(j.a,{children:[Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(u,{})}),Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(f,{})})]}),Object(i.jsxs)(j.a,{children:[Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(O,{variant:"dark"})}),Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(g,{})})]}),Object(i.jsxs)(j.a,{children:[Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(p,{})}),Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(v,{})})]}),Object(i.jsxs)(j.a,{children:[Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(y,{})}),Object(i.jsx)(l.a,{lg:6,children:Object(i.jsx)(w,{})})]})]})},110:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var s=c(0),r=c(108);function a(e,t,c,a){void 0===a&&(a=!1);var n=Object(r.a)(c);Object(s.useEffect)((function(){var c="function"===typeof e?e():e;return c.addEventListener(t,n,a),function(){return c.removeEventListener(t,n,a)}}),[e])}},111:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var s=c(0);function r(){var e=Object(s.useRef)(!0),t=Object(s.useRef)((function(){return e.current}));return Object(s.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},112:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var s=c(0);function r(e){var t=Object(s.useRef)(null);return Object(s.useEffect)((function(){t.current=e})),t.current}},113:function(e,t,c){"use strict";var s=c(0),r=(c(115),c(107),c(108));c(110),c(118);c(111),c(112);c(126),new WeakMap;var a=c(116),n=c(2);const j=["onKeyDown"];const l=s.forwardRef(((e,t)=>{let{onKeyDown:c}=e,s=function(e,t){if(null==e)return{};var c,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)c=a[s],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,j);const[l]=Object(a.b)(Object.assign({tagName:"a"},s)),d=Object(r.a)((e=>{l.onKeyDown(e),null==c||c(e)}));return((i=s.href)&&"#"!==i.trim()||s.role)&&"button"!==s.role?Object(n.jsx)("a",Object.assign({ref:t},s,{onKeyDown:c})):Object(n.jsx)("a",Object.assign({ref:t},s,l,{onKeyDown:d}));var i}));l.displayName="Anchor";t.a=l},115:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var s=c(0);function r(){return Object(s.useState)(null)}},116:function(e,t,c){"use strict";c.d(t,"b",(function(){return n}));var s=c(0),r=c(2);const a=["as","disabled"];function n(e){let{tagName:t,disabled:c,href:s,target:r,rel:a,onClick:n,tabIndex:j=0,type:l}=e;t||(t=null!=s||null!=r||null!=a?"a":"button");const d={tagName:t};if("button"===t)return[{type:l||"button",disabled:c},d];const i=e=>{(c||"a"===t&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),c?e.stopPropagation():null==n||n(e)};return[{role:"button",disabled:void 0,tabIndex:c?void 0:j,href:"a"===t&&c?void 0:s,target:"a"===t?r:void 0,"aria-disabled":c||void 0,rel:"a"===t?a:void 0,onClick:i,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),i(e))}},d]}const j=s.forwardRef(((e,t)=>{let{as:c,disabled:s}=e,j=function(e,t){if(null==e)return{};var c,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)c=a[s],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,a);const[l,{tagName:d}]=n(Object.assign({tagName:c,disabled:s},j));return Object(r.jsx)(d,Object.assign({},j,l,{ref:t}))}));j.displayName="Button",t.a=j},117:function(e,t,c){"use strict";c(0);var s=c(128),r=c(137),a=c(135),n=c(44),j=c.n(n),l=c(23),d=c(14),i=c(2);t.a=e=>{const{appSelector:t}=Object(l.b)(),{layoutType:c}=t((e=>({layoutType:e.Layout.layoutType})));return Object(i.jsx)(s.a,{children:Object(i.jsx)(r.a,{xs:12,children:Object(i.jsxs)("div",{className:j()("page-title-box",{"page-title-box-alt":c===d.a.LAYOUT_HORIZONTAL||c===d.a.LAYOUT_DETACHED}),children:[Object(i.jsx)("h4",{className:"page-title",children:e.title}),Object(i.jsx)("div",{className:"page-title-right",children:Object(i.jsxs)(a.a,{listProps:{className:"m-0"},children:[Object(i.jsx)(a.a.Item,{href:"/",children:"Minton"}),(e.breadCrumbItems||[]).map(((e,t)=>e.active?Object(i.jsx)(a.a.Item,{active:!0,children:e.label},t):Object(i.jsx)(a.a.Item,{href:e.path,children:e.label},t)))]})})]})})})}},118:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var s=c(110),r=c(0);function a(e,t,c){void 0===c&&(c=!1);var a=Object(r.useCallback)((function(){return document}),[]);return Object(s.a)(a,e,t,c)}},119:function(e,t,c){"use strict";var s=c(0),r=c(44),a=c.n(r),n=c(2);t.a=e=>s.forwardRef(((t,c)=>Object(n.jsx)("div",{...t,ref:c,className:a()(t.className,e)})))},120:function(e,t,c){"use strict";var s=c(0);const r=s.createContext(null);r.displayName="CardHeaderContext",t.a=r},126:function(e,t,c){"use strict";(function(e){var s=c(0),r="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,a="undefined"!==typeof document;t.a=a||r?s.useLayoutEffect:s.useEffect}).call(this,c(69))},128:function(e,t,c){"use strict";var s=c(44),r=c.n(s),a=c(0),n=c(45),j=c(2);const l=["xxl","xl","lg","md","sm","xs"],d=a.forwardRef(((e,t)=>{let{bsPrefix:c,className:s,as:a="div",...d}=e;const i=Object(n.a)(c,"row"),b="".concat(i,"-cols"),h=[];return l.forEach((e=>{const t=d[e];let c;delete d[e],null!=t&&"object"===typeof t?({cols:c}=t):c=t;const s="xs"!==e?"-".concat(e):"";null!=c&&h.push("".concat(b).concat(s,"-").concat(c))})),Object(j.jsx)(a,{ref:t,...d,className:r()(s,i,...h)})}));d.displayName="Row",t.a=d},135:function(e,t,c){"use strict";var s=c(44),r=c.n(s),a=c(0),n=c(45),j=c(113),l=c(2);const d=a.forwardRef(((e,t)=>{let{bsPrefix:c,active:s,children:a,className:d,as:i="li",linkAs:b=j.a,linkProps:h,href:o,title:O,target:x,...m}=e;const u=Object(n.a)(c,"breadcrumb-item");return Object(l.jsx)(i,{ref:t,...m,className:r()(u,d,{active:s}),"aria-current":s?"page":void 0,children:s?a:Object(l.jsx)(b,{...h,href:o,title:O,target:x,children:a})})}));d.displayName="BreadcrumbItem",d.defaultProps={active:!1,linkProps:{}};var i=d;const b=a.forwardRef(((e,t)=>{let{bsPrefix:c,className:s,listProps:a,children:j,label:d,as:i="nav",...b}=e;const h=Object(n.a)(c,"breadcrumb");return Object(l.jsx)(i,{"aria-label":d,className:s,ref:t,...b,children:Object(l.jsx)("ol",{...a,className:r()(h,null==a?void 0:a.className),children:j})})}));b.displayName="Breadcrumb",b.defaultProps={label:"breadcrumb",listProps:{}};t.a=Object.assign(b,{Item:i})},137:function(e,t,c){"use strict";c.d(t,"b",(function(){return d}));var s=c(44),r=c.n(s),a=c(0),n=c(45),j=c(2);const l=["xxl","xl","lg","md","sm","xs"];function d(e){let{as:t,bsPrefix:c,className:s,...a}=e;c=Object(n.a)(c,"col");const j=[],d=[];return l.forEach((e=>{const t=a[e];let s,r,n;delete a[e],"object"===typeof t&&null!=t?({span:s,offset:r,order:n}=t):s=t;const l="xs"!==e?"-".concat(e):"";s&&j.push(!0===s?"".concat(c).concat(l):"".concat(c).concat(l,"-").concat(s)),null!=n&&d.push("order".concat(l,"-").concat(n)),null!=r&&d.push("offset".concat(l,"-").concat(r))})),[{...a,className:r()(s,...j,...d)},{as:t,bsPrefix:c,spans:j}]}const i=a.forwardRef(((e,t)=>{const[{className:c,...s},{as:a="div",bsPrefix:n,spans:l}]=d(e);return Object(j.jsx)(a,{...s,ref:t,className:r()(c,!l.length&&n)})}));i.displayName="Col",t.a=i},146:function(e,t,c){"use strict";var s=c(44),r=c.n(s),a=c(0),n=c(45),j=c(109),l=c(119),d=c(2);const i=a.forwardRef(((e,t)=>{let{bsPrefix:c,className:s,variant:a,as:j="img",...l}=e;const i=Object(n.a)(c,"card-img");return Object(d.jsx)(j,{ref:t,className:r()(a?"".concat(i,"-").concat(a):i,s),...l})}));i.displayName="CardImg";var b=i,h=c(120);const o=a.forwardRef(((e,t)=>{let{bsPrefix:c,className:s,as:j="div",...l}=e;const i=Object(n.a)(c,"card-header"),b=Object(a.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return Object(d.jsx)(h.a.Provider,{value:b,children:Object(d.jsx)(j,{ref:t,...l,className:r()(s,i)})})}));o.displayName="CardHeader";var O=o;const x=Object(l.a)("h5"),m=Object(l.a)("h6"),u=Object(j.a)("card-body"),f=Object(j.a)("card-title",{Component:x}),N=Object(j.a)("card-subtitle",{Component:m}),p=Object(j.a)("card-link",{Component:"a"}),v=Object(j.a)("card-text",{Component:"p"}),g=Object(j.a)("card-footer"),y=Object(j.a)("card-img-overlay"),w=a.forwardRef(((e,t)=>{let{bsPrefix:c,className:s,bg:a,text:j,border:l,body:i,children:b,as:h="div",...o}=e;const O=Object(n.a)(c,"card");return Object(d.jsx)(h,{ref:t,...o,className:r()(s,O,a&&"bg-".concat(a),j&&"text-".concat(j),l&&"border-".concat(l)),children:i?Object(d.jsx)(u,{children:b}):b})}));w.displayName="Card",w.defaultProps={body:!1};t.a=Object.assign(w,{Img:b,Title:f,Subtitle:N,Body:u,Link:p,Text:v,Header:O,Footer:g,ImgOverlay:y})},487:function(e,t,c){"use strict";var s=c(44),r=c.n(s),a=c(0),n=c(45),j=c(2);const l=a.forwardRef(((e,t)=>{let{bsPrefix:c,className:s,striped:a,bordered:l,borderless:d,hover:i,size:b,variant:h,responsive:o,...O}=e;const x=Object(n.a)(c,"table"),m=r()(s,x,h&&"".concat(x,"-").concat(h),b&&"".concat(x,"-").concat(b),a&&"".concat(x,"-striped"),l&&"".concat(x,"-bordered"),d&&"".concat(x,"-borderless"),i&&"".concat(x,"-hover")),u=Object(j.jsx)("table",{...O,className:m,ref:t});if(o){let e="".concat(x,"-responsive");return"string"===typeof o&&(e="".concat(e,"-").concat(o)),Object(j.jsx)("div",{className:e,children:u})}return u}));t.a=l}}]);
//# sourceMappingURL=66.59e2c9b0.chunk.js.map