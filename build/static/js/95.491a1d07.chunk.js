(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[95],{1037:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(491),s=r(174),c=r(26),o=r(11),i=r(201),l=r(202),d=r(443),u=r(25),b=r(23),m=r(151),j=r(490),p=r(440),f=r(2);const h=()=>{const{t:e}=Object(d.a)();return Object(f.jsx)("footer",{className:"footer footer-alt",children:Object(f.jsxs)("p",{className:"text-muted",children:[e("Don't have an account?")," ",Object(f.jsx)(c.b,{to:"/auth/register2",className:"text-muted ms-1",children:Object(f.jsx)("b",{children:e("Sign Up")})})]})})};t.default=()=>{const{t:e}=Object(d.a)(),{dispatch:t,appSelector:r}=Object(b.b)(),g=Object(b.a)().get("next");Object(a.useEffect)((()=>{t(Object(u.k)())}),[t]);const{loading:x,userLoggedIn:O,user:y,error:v}=r((e=>({loading:e.Auth.loading,user:e.Auth.user,error:e.Auth.error,userLoggedIn:e.Auth.userLoggedIn}))),N=Object(l.a)(i.c().shape({email:i.e().required(e("Please enter Email")).email(e("Please enter Email")),password:i.e().required(e("Please enter Password"))}));return Object(f.jsxs)(f.Fragment,{children:[O||y?Object(f.jsx)(o.a,{to:g||"/"}):null,Object(f.jsxs)(p.a,{bottomLinks:Object(f.jsx)(h,{}),children:[Object(f.jsx)("h4",{className:"mt-0",children:e("Sign In")}),Object(f.jsx)("p",{className:"text-muted mb-4",children:e("Enter your email address and password to access  admin panel.")}),v&&Object(f.jsx)(n.a,{variant:"danger",className:"my-2",children:v}),Object(f.jsxs)(m.b,{onSubmit:e=>{t(Object(u.i)(e.email,e.password))},resolver:N,defaultValues:{email:"QSP_FYP_PROJECT@FYP.com",password:"test"},children:[Object(f.jsx)(m.a,{type:"email",name:"email",label:e("Email address"),placeholder:e("hello@coderthemes.com"),containerClass:"mb-2"}),Object(f.jsx)(m.a,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter your password"),containerClass:"mb-2",children:Object(f.jsx)(c.b,{to:"/auth/forget-password2",className:"text-muted float-end",children:Object(f.jsx)("small",{children:e("Forgot your password?")})})}),Object(f.jsx)(m.a,{label:"Remember me",type:"checkbox",name:"checkbox",containerClass:"mb-3"}),Object(f.jsx)("div",{className:"d-grid text-center",children:Object(f.jsx)(s.a,{type:"submit",disabled:x,children:e("Log In")})}),Object(f.jsxs)("div",{className:"text-center mt-4",children:[Object(f.jsx)("h5",{className:"mt-0 text-muted",children:e("Sign in with")}),Object(f.jsx)(j.a,{})]})]})]})]})}},130:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(0),n=r(149);function s(e){var t=Object(n.a)(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},149:function(e,t,r){"use strict";var a=r(0);t.a=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t}},151:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return f}));var a=r(0),n=r.n(a),s=r(148),c=r(2);var o=e=>{let{defaultValues:t,resolver:r,children:a,onSubmit:o,formClass:i}=e;const l=Object(s.d)({defaultValues:t,resolver:r}),{handleSubmit:d,register:u,control:b,formState:{errors:m}}=l;return Object(c.jsx)("form",{onSubmit:d(o),className:i,noValidate:!0,children:Array.isArray(a)?a.map((e=>e.props&&e.props.name?n.a.createElement(e.type,{...{...e.props,register:u,key:e.props.name,errors:m,control:b}}):e)):a})},i=r(1030),l=r(902),d=r(44),u=r.n(d);const b=e=>{let{name:t,placeholder:r,refCallback:n,errors:s,control:o,register:d,className:b,...m}=e;const[j,p]=Object(a.useState)(!1);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(i.a,{className:"mb-0",children:[Object(c.jsx)(l.a.Control,{type:j?"text":"password",placeholder:r,name:t,id:t,as:"input",ref:e=>{n&&n(e)},className:b,isInvalid:!(!s||!s[t]),...d?d(t):{},autoComplete:t,...m}),Object(c.jsx)("div",{className:u()("input-group-text","input-group-password",{"show-password":j}),"data-password":j?"true":"false",children:Object(c.jsx)("span",{className:"password-eye",onClick:()=>{p(!j)}})})]}),s&&s[t]?Object(c.jsx)(l.a.Control.Feedback,{type:"invalid",className:"d-block",children:s[t].message}):null]})},m=e=>{let{type:t,name:r,placeholder:a,endIcon:n,register:s,errors:o,comp:i,rows:d,className:u,refCallback:m,...j}=e;return Object(c.jsx)(c.Fragment,{children:"password"===t&&n?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(b,{name:r,placeholder:a,refCallback:m,errors:o,register:s,className:u,...j})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l.a.Control,{type:t,placeholder:a,name:r,as:i,id:r,ref:e=>{m&&m(e)},className:u,isInvalid:!(!o||!o[r]),...s?s(r):{},rows:d,...j}),o&&o[r]?Object(c.jsx)(l.a.Control.Feedback,{type:"invalid",className:"d-block",children:o[r].message}):null]})})},j=e=>{let{type:t,label:r,name:a,placeholder:n,register:s,errors:o,comp:i,rows:d,className:u,refCallback:b,...m}=e;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l.a.Check,{type:t,label:r,name:a,id:a,ref:e=>{b&&b(e)},className:u,isInvalid:!(!o||!o[a]),...s?s(a):{},...m}),o&&o[a]?Object(c.jsx)(l.a.Control.Feedback,{type:"invalid",className:"d-block",children:o[a].message}):null]})},p=e=>{let{type:t,label:r,name:a,placeholder:n,register:s,errors:o,comp:i,className:d,children:u,refCallback:b,...m}=e;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l.a.Select,{type:t,label:r,name:a,id:a,ref:e=>{b&&b(e)},children:u,className:d,isInvalid:!(!o||!o[a]),...s?s(a):{},...m}),o&&o[a]?Object(c.jsx)(l.a.Control.Feedback,{type:"invalid",children:o[a].message}):null]})};var f=e=>{let{label:t,type:r,name:a,placeholder:n,endIcon:s,register:o,errors:i,control:d,className:u,labelClassName:b,containerClass:f,refCallback:h,children:g,rows:x,...O}=e;const y="textarea"===r?"textarea":"select"===r?"select":"input",v=void 0===s||s;return Object(c.jsx)(c.Fragment,{children:"hidden"===r?Object(c.jsx)("input",{type:r,name:a,...o?o(a):{},...O}):Object(c.jsx)(c.Fragment,{children:"select"===r?Object(c.jsxs)(l.a.Group,{className:f,children:[t?Object(c.jsx)(l.a.Label,{className:b,children:t}):null,Object(c.jsx)(p,{type:r,name:a,placeholder:n,refCallback:h,errors:i,register:o,comp:y,className:u,children:g,...O})]}):Object(c.jsx)(c.Fragment,{children:"checkbox"===r||"radio"===r?Object(c.jsx)(l.a.Group,{className:f,children:Object(c.jsx)(j,{type:r,label:t,name:a,placeholder:n,refCallback:h,errors:i,register:o,comp:y,className:u,rows:x,...O})}):Object(c.jsxs)(l.a.Group,{className:f,children:[t?Object(c.jsx)(l.a.Label,{className:b,children:t}):null,Object(c.jsx)(m,{type:r,name:a,placeholder:n,endIcon:v,refCallback:h,errors:i,register:o,comp:y,className:u,rows:x,...O})]})})})})}},156:function(e,t,r){"use strict";t.a=r.p+"static/media/logo-dark.f85dba6d.png"},162:function(e,t,r){"use strict";t.a=r.p+"static/media/logo-light.3f7305d3.png"},168:function(e,t,r){"use strict";var a=r(27),n=r.n(a),s=r(0),c=r(44),o=r.n(c),i=r(2);const l={"aria-label":n.a.string,onClick:n.a.func,variant:n.a.oneOf(["white"])},d=s.forwardRef(((e,t)=>{let{className:r,variant:a,...n}=e;return Object(i.jsx)("button",{ref:t,type:"button",className:o()("btn-close",a&&"btn-close-".concat(a),r),...n})}));d.displayName="CloseButton",d.propTypes=l,d.defaultProps={"aria-label":"Close"},t.a=d},169:function(e,t,r){var a=r(170);e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},170:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a},e.exports.default=e.exports,e.exports.__esModule=!0},173:function(e,t,r){var a=r(186),n=r(187),s=r(169),c=r(188);e.exports=function(e,t){return a(e)||n(e,t)||s(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},186:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},187:function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,s=[],c=!0,o=!1;try{for(r=r.call(e);!(c=(a=r.next()).done)&&(s.push(a.value),!t||s.length!==t);c=!0);}catch(i){o=!0,n=i}finally{try{c||null==r.return||r.return()}finally{if(o)throw n}}return s}},e.exports.default=e.exports,e.exports.__esModule=!0},188:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},440:function(e,t,r){"use strict";var a=r(0),n=r(146),s=r(26),c=r(443),o=r(156),i=r(162),l=r(2);t.a=e=>{let{helpText:t,bottomLinks:r,children:d,isCombineForm:u}=e;const{t:b}=Object(c.a)();return Object(a.useEffect)((()=>(document.body&&document.body.classList.remove("authentication-bg","authentication-bg-pattern"),document.body&&document.body.classList.add("auth-fluid-pages","pb-0"),()=>{document.body&&document.body.classList.remove("auth-fluid-pages","pb-0")})),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"auth-fluid",children:[Object(l.jsx)("div",{className:"auth-fluid-right",children:Object(l.jsxs)("div",{className:"auth-user-testimonial",children:[Object(l.jsx)("h3",{className:"mb-3 text-white",children:b("Very elegant & impressive!")}),Object(l.jsxs)("p",{className:"lead fw-normal",children:[Object(l.jsx)("i",{className:"mdi mdi-format-quote-open"})," ",b("I've been using this theme for a while and I must say that whenever I am looking for a design - I refer to this theme for specifics & implementation. With wide arrays of components, designs, charts - I would highly recommend this theme for anyone using it for dashboard or project management usage..")," ",Object(l.jsx)("i",{className:"mdi mdi-format-quote-close"})]}),Object(l.jsxs)("h5",{className:"text-white",children:["- ",b("Admin User")]})]})}),Object(l.jsx)("div",{className:"auth-fluid-form-box",children:Object(l.jsx)("div",{className:"align-items-center d-flex h-100",children:Object(l.jsxs)(n.a.Body,{children:[Object(l.jsx)("div",{className:"auth-brand text-center text-lg-start",children:Object(l.jsxs)("div",{className:"auth-logo",children:[Object(l.jsx)(s.b,{to:"/",className:"logo logo-dark text-center",children:Object(l.jsx)("span",{className:"logo-lg",children:Object(l.jsx)("img",{src:o.a,alt:"",height:"22"})})}),Object(l.jsx)(s.b,{to:"/",className:"logo logo-light text-center",children:Object(l.jsx)("span",{className:"logo-lg",children:Object(l.jsx)("img",{src:i.a,alt:"",height:"22"})})})]})}),d,r]})})})]})})}},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var a=r(173),n=r.n(a),s=r(46),c=r.n(s),o=r(0),i=r(105);function l(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var d={};function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&d[t[0]]||("string"===typeof t[0]&&(d[t[0]]=new Date),l.apply(void 0,t))}function b(e,t,r){e.loadNamespaces(t,(function(){if(e.isInitialized)r();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),r()}))}}))}function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return u("i18n.languages were undefined or empty",t.languages),!0;var a=t.languages[0],n=!!t.options&&t.options.fallbackLng,s=t.languages[t.languages.length-1];if("cimode"===a.toLowerCase())return!0;var c=function(e,r){var a=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===a||2===a};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(a,e)||(!t.services.backendConnector.backend||!(!c(a,e)||n&&!c(s,e))))}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.i18n,a=Object(o.useContext)(i.a)||{},s=a.i18n,c=a.defaultNS,l=r||s||Object(i.d)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new i.b),!l){u("You will need to pass in an i18next instance by using initReactI18next");var d=function(e){return Array.isArray(e)?e[e.length-1]:e},j=[d,{},!1];return j.t=d,j.i18n={},j.ready=!1,j}l.options.react&&void 0!==l.options.react.wait&&u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=p(p(p({},Object(i.c)()),l.options.react),t),h=f.useSuspense,g=f.keyPrefix,x=e||c||l.options&&l.options.defaultNS;x="string"===typeof x?[x]:x||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(x);var O=(l.isInitialized||l.initializedStoreOnce)&&x.every((function(e){return m(e,l,f)}));function y(){return l.getFixedT(null,"fallback"===f.nsMode?x:x[0],g)}var v=Object(o.useState)(y),N=n()(v,2),w=N[0],k=N[1],C=Object(o.useRef)(!0);Object(o.useEffect)((function(){var e=f.bindI18n,t=f.bindI18nStore;function r(){C.current&&k(y)}return C.current=!0,O||h||b(l,x,(function(){C.current&&k(y)})),e&&l&&l.on(e,r),t&&l&&l.store.on(t,r),function(){C.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,r)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,r)}))}}),[l,x.join()]);var I=Object(o.useRef)(!0);Object(o.useEffect)((function(){C.current&&!I.current&&k(y),I.current=!1}),[l]);var S=[w,l,O];if(S.t=w,S.i18n=l,S.ready=O,O)return S;if(!O&&!h)return S;throw new Promise((function(e){b(l,x,(function(){e()}))}))}},490:function(e,t,r){"use strict";r(0);var a=r(26),n=r(44),s=r.n(n),c=r(2);const o=[{variant:"purple",icon:"facebook"},{variant:"danger",icon:"google"},{variant:"info",icon:"twitter"},{variant:"secondary",icon:"github"}];t.a=()=>Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{className:"social-list list-inline mt-3 mb-0",children:(o||[]).map(((e,t)=>Object(c.jsx)("li",{className:"list-inline-item",children:Object(c.jsx)(a.b,{to:"#",className:s()("social-list-item","border-"+e.variant,"text-"+e.variant),children:Object(c.jsx)("i",{className:s()("mdi","mdi-"+e.icon)})})},t)))})})},491:function(e,t,r){"use strict";var a=r(44),n=r.n(a),s=r(0),c=r(134),o=r(130),i=r(113),l=r(45),d=r(193),u=r(168),b=r(119),m=r(109),j=r(2);const p=Object(b.a)("h4");p.displayName="DivStyledAsH4";const f=Object(m.a)("alert-heading",{Component:p}),h=Object(m.a)("alert-link",{Component:i.a}),g={variant:"primary",show:!0,transition:d.a,closeLabel:"Close alert"},x=s.forwardRef(((e,t)=>{const{bsPrefix:r,show:a,closeLabel:s,closeVariant:i,className:b,children:m,variant:p,onClose:f,dismissible:h,transition:g,...x}=Object(c.a)(e,{show:"onClose"}),O=Object(l.a)(r,"alert"),y=Object(o.a)((e=>{f&&f(!1,e)})),v=!0===g?d.a:g,N=Object(j.jsxs)("div",{role:"alert",...v?void 0:x,ref:t,className:n()(b,O,p&&"".concat(O,"-").concat(p),h&&"".concat(O,"-dismissible")),children:[h&&Object(j.jsx)(u.a,{onClick:y,"aria-label":s,variant:i}),m]});return v?Object(j.jsx)(v,{unmountOnExit:!0,...x,ref:void 0,in:a,children:N}):a?N:null}));x.displayName="Alert",x.defaultProps=g,t.a=Object.assign(x,{Link:h,Heading:f})}}]);
//# sourceMappingURL=95.491a1d07.chunk.js.map